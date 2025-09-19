document.addEventListener('DOMContentLoaded', () => {
    // --- 1. UI 요소 및 헬퍼 함수 ---
    const $ = (id) => document.getElementById(id);

    const ui = {
        screens: {
            intro: $('intro-screen'),
            game: $('game-screen'),
            result: $('result-screen'),
            perk: $('perk-screen'),
            gameOver: $('game-over-screen'),
            info: $('info-screen'),
            gameWin: $('game-win-screen'),
        },
        nextButton: $('next-button'),
        restartButtons: [$('restart-button-gameover'), $('restart-button-win')],
        hpStat: $('hp-stat'),
        xpStat: $('xp-stat'),
        partsStat: $('parts-stat'),
        situation: {
            image: $('situation-image'),
            title: $('situation-title'),
            text: $('situation-text'),
        },
        choicesContainer: $('choices-container'),
        result: {
            image: $('result-image'),
            text: $('result-text'),
            rollAnimation: $('roll-animation-display'),
        },
        perk: {
            choicesContainer: $('perk-choices-container'),
            toggleButton: $('perk-toggle-button'),
            list: $('perk-list'),
        },
        intro: {
            container: $('intro-comic-container'),
            image: $('intro-comic-image'),
        },
        info: {
            image: $('info-image'),
            text: $('info-text'),
            continueButton: $('info-continue-button'),
        }
    };

    // --- 2. 게임 데이터 (상수) ---
    const PARTS_TO_COLLECT = ['동력 코어', '항법 장치', '선체 안정기', '통신 모듈', '생명 유지 장치'];
    const INTRO_COMIC_CUTS = ['images/intro_1.png', 'images/intro_2.png', 'images/intro_3.png'];
    const TYPEWRITER_SPEED = 25; // 1초에 40글자 (1000ms / 40 = 25ms)
    
    const PERKS = [
        { id: 'fast_learner', name: '빠른 학습', type: 'stackable', baseValue: 0.2, description: '경험치 획득량이 <span class="highlight-yellow">{value}%</span> 증가합니다.' },
        { id: 'lucky', name: '행운', type: 'stackable', baseValue: 0.15, description: '모든 확률 판정의 성공 확률이 <span class="highlight-yellow">{value}%</span> 증가합니다.' },
        { id: 'scavenger', name: '탐색 전문가', type: 'stackable', baseValue: 0.15, description: '부품 탐색 성공 확률이 <span class="highlight-yellow">{value}%</span> 증가합니다.' },
        { id: 'resilience', name: '회복력', type: 'stackable', baseValue: 1, description: '확률 판정 실패 시 받는 피해가 <span class="highlight-yellow">{value}</span> 감소합니다.' },
        { id: 'indomitable_will', name: '굳건한 의지', type: 'unique', description: '게임 오버에 달하는 피해를 입을 경우, 해당 피해를 1회 무효화하고 그만큼 체력을 회복합니다.' },
    ];

    // --- 3. 게임 상태 (변수) ---
    let player;
    let introCutIndex;
    let infoToShow;
    let currentSituation;
    let isLevelUpPending = false;

    // --- 4. 핵심 로직 및 게임 흐름 ---

    /** 게임을 초기 상태로 설정합니다. */
    function initGame() {
        player = {
            hp: 20,
            maxHp: 20,
            xp: 0,
            xpToLevelUp: 10,
            parts: [],
            perks: {}, // { perkId: stackCount }
        };
        introCutIndex = 0;
        infoToShow = null;
        currentSituation = null;
        isLevelUpPending = false;

        ui.perk.list.innerHTML = '';
        ui.perk.list.classList.add('hidden');
        showIntroCut();
        updateStatsUI();
        showScreen('intro');
    }

    /** 다음 상황을 제시하거나 게임 종료 조건을 확인합니다. */
    async function nextSituation() {
        if (player.parts.length >= PARTS_TO_COLLECT.length) return gameWin();
        if (player.hp <= 0) return gameOver();

        showScreen('game');
        ui.choicesContainer.innerHTML = ''; // 선택지 숨김
        
        currentSituation = SITUATIONS[Math.floor(Math.random() * SITUATIONS.length)];
        const { image, title, text, choices } = currentSituation;
        
        ui.situation.image.src = image;
        ui.situation.title.textContent = title;
        
        // 상황 텍스트에 타이핑 효과 적용
        await typewriter(ui.situation.text, text, TYPEWRITER_SPEED);

        // 타이핑 완료 후 선택지 표시
        const { successChanceBonus } = getCalculatedPlayerStats();

        // 선택지 순서를 랜덤으로 섞습니다.
        const shuffledChoices = [...choices].sort(() => Math.random() - 0.5);

        shuffledChoices.forEach(choice => {
            const button = document.createElement('button');
            button.innerHTML = choice.text;

            button.onclick = () => handleChoice(choice);
            ui.choicesContainer.appendChild(button);
        });
    }

    /** 플레이어의 선택을 처리합니다. */
    async function handleChoice(choice) {
        infoToShow = null;
        showScreen('result');
        ui.result.image.src = currentSituation.image;
        ui.result.rollAnimation.innerHTML = '';
        ui.nextButton.classList.add('hidden');

        if (choice.isCorrect) {
            const baseXP = choice.successXp || 5; // 상황에 명시된 XP 또는 기본 5 XP
            const { xpModifier } = getCalculatedPlayerStats();
            const actualXpGained = Math.ceil(baseXP * (1 + xpModifier));

            let successMessage = choice.successText || `올바른 선택입니다! 무사히 통과했습니다.<br>✨ +{xpGained}`;
            successMessage = successMessage.replace('{xpGained}', actualXpGained);

            await typewriter(ui.result.text, successMessage, TYPEWRITER_SPEED);
            if (choice.info) infoToShow = choice.info;
            gainXp(baseXP);
            ui.nextButton.classList.remove('hidden');
        } else {
            if (choice.successChance !== undefined) {
                await rollDice(choice);
            } else {
                const { damageReduction } = getCalculatedPlayerStats();
                let damage = (choice.failureDamage ?? 5) - damageReduction;
                await processDamage(damage, choice.failureText || `잘못된 선택입니다. 체력이 ${damage} 감소합니다.`);
                updateStatsUI();
                ui.nextButton.classList.remove('hidden');
            }
        }
    }

    /** 확률 판정을 처리하고 결과를 표시합니다. */
    async function rollDice(choice) {
        ui.result.text.innerHTML = '';
        ui.nextButton.classList.add('hidden');
        
        const { successChanceBonus, damageReduction } = getCalculatedPlayerStats();
        const baseSuccessChance = choice.successChance ?? 0.5;
        const totalSuccessChance = baseSuccessChance + successChanceBonus;
        const requiredRoll = 100 - Math.round(Math.min(totalSuccessChance, 1) * 100);
        const roll = Math.floor(Math.random() * 100) + 1;

        let explanation = `(필요 점수: ${requiredRoll} 초과)`;
        if (successChanceBonus > 0) {
            explanation += `<br><small>기본 확률 ${Math.round(baseSuccessChance * 100)}% + 특성 보너스 ${Math.round(successChanceBonus * 100)}%</small>`;
        }
        ui.result.text.innerHTML = explanation;

        const finalRoll = await animateRoll(ui.result.rollAnimation, 100, roll, 2000, '확률 판정: ');
        
        if (finalRoll > requiredRoll) {
            await typewriter(ui.result.text, choice.successText || `잘못된 선택이었지만, 운이 좋았네요! 무사히 넘어갑니다.`, TYPEWRITER_SPEED);
        } else {
            let damage = (choice.failureDamage ?? 5) - damageReduction;
            await processDamage(damage, choice.failureText || `선택이 좋지 않았습니다... 체력이 ${damage} 감소합니다.`);
        }
        updateStatsUI();
        ui.nextButton.classList.remove('hidden');
    }

    /**
     * 플레이어에게 피해를 적용하고 결과를 처리합니다. '굳건한 의지' 특성을 처리합니다.
     * @param {number} damage - 적용할 피해량
     * @param {string} failureMessage - 피해를 입었을 때 표시할 기본 메시지
     */
    async function processDamage(damage, failureMessage) {
        damage = Math.max(0, damage);
        // '굳건한 의지' 특성 확인
        if (player.perks['indomitable_will'] && player.hp - damage <= 0) {
            const healAmount = damage;
            player.hp = Math.min(player.maxHp, player.hp + healAmount);
            delete player.perks['indomitable_will']; // 특성 1회 사용 후 제거
            updatePerkListUI();
            await typewriter(ui.result.text, `죽음의 문턱에서 <span class="highlight-yellow">[굳건한 의지]</span>가 발동했습니다! 피해를 무효화하고 체력을 ${healAmount} 회복합니다!`, TYPEWRITER_SPEED);
        } else {
            player.hp -= damage;
            await typewriter(ui.result.text, failureMessage, TYPEWRITER_SPEED);
        }
    }

    /** 경험치를 획득하고 레벨업을 확인합니다. */
    function gainXp(amount) {
        const { xpModifier } = getCalculatedPlayerStats();
        player.xp += Math.ceil(amount * (1 + xpModifier));

        if (player.xp >= player.xpToLevelUp) {
            player.xp -= player.xpToLevelUp;
            player.xpToLevelUp = Math.floor(player.xpToLevelUp * 1.5);
            isLevelUpPending = true;
        }
        updateStatsUI();
    }

    /** 레벨업 시 보상 선택 화면을 표시합니다. */
    function showPerkSelection() {
        showScreen('perk');
        ui.perk.choicesContainer.innerHTML = '';

        const { partDiscoveryChance } = getCalculatedPlayerStats();
        const partButton = document.createElement('button');
        partButton.textContent = `[부품 탐색] (성공 확률: ${Math.round(Math.min(partDiscoveryChance, 1) * 100)}%)`;
        partButton.onclick = () => selectReward({ type: 'part_search' });
        ui.perk.choicesContainer.appendChild(partButton);

        const availablePerks = PERKS.filter(p => !(p.type === 'unique' && player.perks[p.id]));
        const shuffledPerks = availablePerks.sort(() => 0.5 - Math.random());
        
        for (let i = 0; i < 3 && shuffledPerks[i]; i++) {
            const perk = shuffledPerks[i];
            const button = document.createElement('button');
            let description = perk.description;

            if (description.includes('{value}')) {
                let value = perk.baseValue;
                if (['fast_learner', 'lucky', 'scavenger'].includes(perk.id)) {
                    value = Math.round(value * 100);
                }
                description = description.replace('{value}', value);
            }
            button.innerHTML = `[특성 획득] ${perk.name}: ${description}`;
            button.onclick = () => selectReward({ type: 'perk', value: perk });
            ui.perk.choicesContainer.appendChild(button);
        }
    }

    /** 선택한 보상을 적용합니다. */
    async function selectReward(reward) {
        if (reward.type === 'part_search') {
            showScreen('result');
            ui.result.rollAnimation.textContent = '';
            ui.result.text.textContent = '';
            ui.nextButton.classList.add('hidden');

            const { partDiscoveryChance } = getCalculatedPlayerStats();
            const requiredRoll = 100 - Math.round(Math.min(partDiscoveryChance, 1) * 100);
            const roll = Math.floor(Math.random() * 100) + 1;

            ui.result.text.textContent = `(필요 점수: ${requiredRoll} 초과)`;
            const finalRoll = await animateRoll(ui.result.rollAnimation, 100, roll, 1500, '탐색 결과: ');

            if (finalRoll > requiredRoll) {
                const availableParts = PARTS_TO_COLLECT.filter(part => !player.parts.includes(part));
                if (availableParts.length > 0) {
                    const foundPart = availableParts[Math.floor(Math.random() * availableParts.length)];
                    player.parts.push(foundPart);
                    ui.result.text.textContent = `탐색 성공! [${foundPart}] 부품을 획득했습니다!`;
                } else {
                    ui.result.text.textContent = '탐색에는 성공했지만, 더 이상 찾을 부품이 없는 것 같습니다...';
                }
            } else {
                ui.result.text.textContent = `탐색 실패... 아무것도 발견하지 못했습니다.`;
            }
            ui.nextButton.classList.remove('hidden');
        } else if (reward.type === 'perk') {
            const perk = reward.value;
            player.perks[perk.id] = (player.perks[perk.id] || 0) + 1;
            
            if (perk.id === 'toughness') {
                player.maxHp += perk.baseValue;
                player.hp += perk.baseValue;
            }
            updatePerkListUI();
            updateStatsUI();
            nextSituation();
        }
    }

    // --- 5. UI 업데이트 및 헬퍼 함수 ---

    /** 플레이어의 현재 스탯을 기반으로 계산된 값을 반환합니다. */
    function getCalculatedPlayerStats() {
        const perks = player.perks;
        const stats = {
            damageReduction: (perks.resilience || 0) * (PERKS.find(p=>p.id==='resilience').baseValue),
            xpModifier: (perks.fast_learner || 0) * (PERKS.find(p=>p.id==='fast_learner').baseValue),
            successChanceBonus: perks.lucky ? (Math.pow(1 + PERKS.find(p=>p.id==='lucky').baseValue, perks.lucky) - 1) : 0,
            partDiscoveryChance: 0.1 + (perks.scavenger ? (Math.pow(1 + PERKS.find(p=>p.id==='scavenger').baseValue, perks.scavenger) - 1) : 0),
        };
        return stats;
    }

    /** 보유 특성 목록 UI를 업데이트합니다. */
    function updatePerkListUI() {
        ui.perk.list.innerHTML = '';
        if (Object.keys(player.perks).length === 0) {
            ui.perk.list.innerHTML = '<li>보유한 특성이 없습니다.</li>';
            return;
        }

        for (const perkId in player.perks) {
            const stack = player.perks[perkId];
            const perkData = PERKS.find(p => p.id === perkId);
            if (!perkData) continue;

            const li = document.createElement('li');
            let name = `<strong>${perkData.name}</strong>` + (stack > 1 ? ` x ${stack}` : '');
            let description = perkData.description;
            let value;

            switch (perkId) {
                case 'toughness':
                case 'resilience':
                case 'indomitable_will': // 값 표시가 필요 없는 경우
                    value = perkData.baseValue * stack;
                    break;
                case 'fast_learner':
                    value = Math.round((perkData.baseValue * stack) * 100);
                    break;
                case 'lucky':
                case 'scavenger':
                    value = Math.round((Math.pow(1 + perkData.baseValue, stack) - 1) * 100);
                    break;
            }
            if (value !== undefined && description.includes('{value}')) {
                description = description.replace('{value}', value);
            }
            li.innerHTML = `${name}: ${description}`;
            ui.perk.list.appendChild(li);
        }
    }

    /** 플레이어 스탯 UI를 업데이트합니다. */
    function updateStatsUI() {
        ui.hpStat.textContent = `${player.hp} / ${player.maxHp}`;
        ui.xpStat.textContent = `${player.xp} / ${player.xpToLevelUp}`;
        ui.partsStat.textContent = player.parts.length > 0 ? player.parts.join(', ') : '없음';
    }

    /**
     * 지정된 요소에 타이핑 효과를 적용합니다.
     * @param {HTMLElement} element - 텍스트를 표시할 요소
     * @param {string} text - 표시할 텍스트 (HTML 포함 가능)
     * @param {number} speed - 글자당 타이핑 딜레이 (ms)
     */
    function typewriter(element, text, speed = 25) {
        return new Promise(resolve => {
            element.innerHTML = '';
            let i = 0;
            let animationInterval = null;
            let isSkipped = false;

            const skip = () => {
                if (isSkipped) return;
                isSkipped = true;
                clearInterval(animationInterval);
                element.innerHTML = text;
                element.removeEventListener('click', skip);
                resolve();
            };

            element.addEventListener('click', skip);

            const type = () => {
                if (isSkipped) return;

                if (i >= text.length) {
                    skip();
                    return;
                }

                const char = text.charAt(i);
                if (char === '<') {
                    const tagEndIndex = text.indexOf('>', i);
                    if (tagEndIndex !== -1) {
                        // 태그 전체를 한 번에 추가
                        element.innerHTML += text.substring(i, tagEndIndex + 1);
                        i = tagEndIndex + 1;
                    } else {
                        // 잘못된 태그는 일반 문자로 처리
                        element.innerHTML += char;
                        i++;
                    }
                } else {
                    // 일반 문자는 한 글자씩 추가
                    element.innerHTML += char;
                    i++;
                }
            };

            animationInterval = setInterval(type, speed);
        });
    }

    /** 특정 화면을 표시합니다. */
    function showScreen(screenId) {
        for (const id in ui.screens) {
            ui.screens[id].classList.add('hidden');
        }
        ui.screens[screenId].classList.remove('hidden');
    }

    /** 숫자 롤링 애니메이션을 실행합니다. */
    function animateRoll(displayElement, maxValue, finalValue, duration = 1000, prefix = '', suffix = '') {
        return new Promise(resolve => {
            const startTime = Date.now();
            const interval = setInterval(() => {
                const elapsedTime = Date.now() - startTime;
                if (elapsedTime >= duration) {
                    clearInterval(interval);
                    displayElement.textContent = prefix + finalValue + suffix;
                    resolve(finalValue);
                } else {
                    const randomValue = Math.floor(Math.random() * maxValue) + 1;
                    displayElement.textContent = prefix + randomValue + suffix;
                }
            }, 50);
        });
    }

    /** 인트로 컷을 표시하거나 게임을 시작합니다. */
    function showIntroCut() {
        if (introCutIndex < INTRO_COMIC_CUTS.length) {
            ui.intro.image.src = INTRO_COMIC_CUTS[introCutIndex];
        } else {
            startGame();
        }
    }
    function nextIntroCut() {
        introCutIndex++;
        showIntroCut();
    }
    function startGame() {
        showScreen('game');
        nextSituation();
    }
    function proceedAfterResult() {
        if (isLevelUpPending) {
            isLevelUpPending = false;
            showPerkSelection();
        } else if (infoToShow) {
            displayInfoScreen();
        } else {
            nextSituation();
        }
    }
    function displayInfoScreen() {
        ui.info.image.src = infoToShow.image;
        ui.info.text.innerHTML = infoToShow.text;
        showScreen('info');
        infoToShow = null;
    }
    function gameOver() { showScreen('gameOver'); }
    function gameWin() { showScreen('gameWin'); }

    // --- 6. 이벤트 리스너 ---
    ui.intro.container.addEventListener('click', nextIntroCut);
    ui.nextButton.addEventListener('click', proceedAfterResult);
    ui.info.continueButton.addEventListener('click', nextSituation);
    ui.perk.toggleButton.addEventListener('click', () => ui.perk.list.classList.toggle('hidden'));
    ui.restartButtons.forEach(button => button.addEventListener('click', initGame));

    // --- 7. 게임 시작 ---
    initGame();
});
