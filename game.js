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
        },
        intuitionButton: $('intuition-button'),
        debug: {
            panel: $('debug-panel'),
            hp: $('debug-hp'),
            maxHp: $('debug-max-hp'),
            xp: $('debug-xp'),
            xpToLevelUp: $('debug-xp-to-level-up'),
            intuitionCharges: $('debug-intuition-charges'),
            applyStatsBtn: $('debug-apply-stats'),
            partsContainer: $('debug-parts-container'),
            addAllPartsBtn: $('debug-add-all-parts'),
            removeAllPartsBtn: $('debug-remove-all-parts'),
            perksContainer: $('debug-perks-container'),
            closeBtn: $('debug-close-button'),
        },
        toast: $('toast-notification'),
    };

    // --- 2. 게임 데이터 (상수) ---
    const PARTS_TO_COLLECT = ['동력 코어', '항법 장치', '선체 안정기', '통신 모듈', '생명 유지 장치'];
    const INTRO_COMIC_CUTS = ['images/intro_1.png', 'images/intro_2.png', 'images/intro_3.png'];
    const TYPEWRITER_SPEED = 25; // 1초에 40글자 (1000ms / 40 = 25ms)
    
    const PERKS = [
        { id: 'fast_learner', name: '빠른 학습', type: 'stackable', baseValue: 0.3, description: '경험치 획득량이 <span class="highlight-yellow">{value}%</span> 증가합니다.' },
        { id: 'lucky', name: '구사일생', type: 'stackable', baseValue: 0.2, description: '오답 선택 시, 성공 확률이 <span class="highlight-yellow">{value}%p</span> 증가합니다.' },
        { id: 'scavenger', name: '탐색 전문가', type: 'stackable', baseValue: 0.15, description: '부품 탐색 성공 확률이 <span class="highlight-yellow">{value}%p</span> 증가합니다.' },
        { id: 'indomitable_will', name: '굳건한 의지', type: 'unique', description: '게임 오버에 달하는 피해를 입을 경우, 해당 피해를 1회 무효화하고 그만큼 체력을 회복합니다.' },
        { id: 'natural_healing', name: '자연치유', type: 'unique', description: '상황이 지날 때마다 체력을 1 회복합니다.' },
        { id: 'lucky_find', name: '행운의 발견', type: 'stackable', baseValue: 0.07, description: '특성 획득 시, 중첩 당 <span class="highlight-yellow">7%</span> 확률로 우주선 부품을 추가로 발견합니다.' },
        { id: 'instant_recovery', name: '즉시 회복', type: 'stackable', baseValue: 8, description: '즉시 체력을 <span class="highlight-yellow">{value}</span> 회복합니다. (목록에 표시되지 않음)' },
        { id: 'glass_cannon', name: '유리 대포', type: 'unique', description: '경험치 획득량이 <span class="highlight-yellow">2배</span>가 되지만, 받는 모든 피해가 <span class="highlight-yellow">1.5배</span>로 증가합니다.' },
        { id: 'intuition', name: '직감', type: 'stackable', baseValue: 3, description: '오답 선택지 1개를 제거하는 능력을 <span class="highlight-yellow">{value}회</span> 얻습니다.' },
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
            answeredSituations: [], // 정답을 맞힌 문제 ID 목록
            intuitionCharges: 0, // '직감' 특성 사용 횟수
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
        ui.situation.text.classList.remove('fade-in'); // 이전 애니메이션 클래스 제거
        ui.situation.text.innerHTML = ''; // 텍스트 초기화
        
        let availableSituations = SITUATIONS.filter(s => !player.answeredSituations.includes(s.id));

        // 모든 문제를 한 번씩 다 맞혔다면, 목록을 초기화하고 다시 시작
        if (availableSituations.length === 0 && SITUATIONS.length > 0) {
            player.answeredSituations = [];
            availableSituations = SITUATIONS;
            // 새로운 사이클이 시작됨을 알리는 토스트 메시지
            showToast("모든 상황을 해결했습니다! 새로운 사이클을 시작합니다.", 2500);
        }

        currentSituation = availableSituations[Math.floor(Math.random() * availableSituations.length)];
        const { image, title, text, choices } = currentSituation;
        
        ui.situation.image.src = image;
        ui.situation.title.textContent = title;
        ui.situation.text.innerHTML = text;
        ui.situation.text.classList.add('fade-in');

        await new Promise(resolve => setTimeout(resolve, 800)); // 페이드인 애니메이션 시간(0.8초) 동안 대기

        // 타이핑 완료 후 선택지 표시
        const { successChanceBonus } = getCalculatedPlayerStats();

        // 선택지 순서를 랜덤으로 섞습니다.
        const shuffledChoices = [...choices].sort(() => Math.random() - 0.5);

        shuffledChoices.forEach(choice => {
            const button = document.createElement('button');
            button.innerHTML = choice.text;
            // 버튼 요소에 정답 여부를 저장하여 '직감' 특성에서 활용
            button.isCorrectChoice = choice.isCorrect;
            button.onclick = () => handleChoice(choice);
            ui.choicesContainer.appendChild(button);
        });
        updateIntuitionButton();
    }

    /** 플레이어의 선택을 처리합니다. */
    async function handleChoice(choice) {
        // '굳건한 의지' 특성 발동 여부를 먼저 확인
        if (!choice.isCorrect && choice.failureDamage) {
            const { damageReduction } = getCalculatedPlayerStats();
            let damage = (choice.failureDamage ?? 5) - damageReduction;
            damage = Math.max(0, damage);

            if (player.perks['indomitable_will'] && player.hp - damage <= 0) {
                const { message } = processIndomitableWill(damage);
                // 화면을 먼저 다음 상황으로 전환합니다.
                nextSituation(); 
                // 화면 전환 후 토스트 알림을 표시합니다.
                showToast(message, 4000);
                return;
            }
        }

        infoToShow = null;
        ui.intuitionButton.classList.add('hidden'); // 결과 화면으로 넘어가면 직감 버튼 숨김
        showScreen('result');
        ui.result.image.src = currentSituation.image;
        ui.result.rollAnimation.innerHTML = '';
        ui.nextButton.classList.add('hidden');

        if (choice.isCorrect) {
            const baseXP = choice.successXp || 5;
            const actualXpGained = calculateXpGained(baseXP);
            let successMessage = choice.successText || `올바른 선택입니다! 무사히 통과했습니다.<br>✨ +{xpGained}`;
            successMessage = successMessage.replace('{xpGained}', actualXpGained);

            await displayText(ui.result.text, successMessage);
            // 정답을 맞혔으므로, 다시 나오지 않도록 목록에 추가
            if (!player.answeredSituations.includes(currentSituation.id)) {
                player.answeredSituations.push(currentSituation.id);
            }

            if (choice.info) infoToShow = choice.info;
            gainXp(baseXP);
            ui.nextButton.classList.remove('hidden');
        } else {
            if (choice.successChance !== undefined) {
                await rollDice(choice);
            } else {
                const damage = calculateDamage(choice.failureDamage);
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
            await displayText(ui.result.text, choice.successText || `잘못된 선택이었지만, 운이 좋았네요! 무사히 넘어갑니다.`);
        } else {
            const damage = calculateDamage(choice.failureDamage);
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
        player.hp -= damage;
        await displayText(ui.result.text, failureMessage);
    }

    /** '굳건한 의지' 특성을 처리하고 토스트 알림을 표시합니다. */
    function processIndomitableWill(damage) { // 이제 메시지를 반환합니다.
        const healAmount = damage;
        player.hp = Math.min(player.maxHp, player.hp + healAmount);
        delete player.perks['indomitable_will']; // 특성 1회 사용 후 제거
        
        const message = `죽음의 문턱에서 <span class="highlight-yellow">[굳건한 의지]</span>가 발동했습니다! 피해를 무효화하고 체력을 ${healAmount} 회복합니다!`;
        
        updatePerkListUI();
        updateStatsUI();
        return { message };
    }

    /** 경험치를 획득하고 레벨업을 확인합니다. */
    function gainXp(amount) {
        player.xp += calculateXpGained(amount);
        if (player.xp >= player.xpToLevelUp) {
            player.xp -= player.xpToLevelUp;
            player.xpToLevelUp = Math.floor(player.xpToLevelUp * 1.1);
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
            // 부품 탐색 로직
            showScreen('result');
            ui.result.rollAnimation.textContent = '';
            ui.result.text.textContent = '';
            ui.nextButton.classList.add('hidden');

            const { partDiscoveryChance } = getCalculatedPlayerStats();
            const finalChance = Math.min(partDiscoveryChance, 1);
            const requiredRoll = 100 - Math.round(finalChance * 100);
            const roll = Math.floor(Math.random() * 100) + 1;

            let explanation = `(필요 점수: ${requiredRoll} 초과)`;
            const baseChance = 0.1;
            const bonusChance = finalChance - baseChance;
            if (bonusChance > 0) {
                explanation += `<br><small>기본 확률 ${Math.round(baseChance * 100)}% + 특성 보너스 ${Math.round(bonusChance * 100)}%p</small>`;
            }
            ui.result.text.innerHTML = explanation;

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
            // 특성 획득 로직
            const perk = reward.value;

            if (perk.id === 'instant_recovery') {
                // '즉시 회복' 특수 처리
                const healAmount = perk.baseValue;
                player.hp = Math.min(player.maxHp, player.hp + healAmount);
                showToast(`체력을 ${healAmount} 회복했습니다!`, 2000);
            } else {
                // 일반 특성 추가
                player.perks[perk.id] = (player.perks[perk.id] || 0) + 1;
                showToast(`[${perk.name}] 특성을 획득했습니다!`, 2000);

                if (perk.id === 'intuition') {
                    player.intuitionCharges += perk.baseValue;
                    showToast(`[${perk.name}] 특성을 획득! 오답 제거 능력을 ${perk.baseValue}회 얻습니다.`, 2500);
                }
            }

            // '행운의 발견' 특성 처리
            if (player.perks['lucky_find']) {
                const stacks = player.perks['lucky_find'];
                const chance = PERKS.find(p => p.id === 'lucky_find').baseValue;
                if (Math.random() < chance * stacks) {
                    const availableParts = PARTS_TO_COLLECT.filter(part => !player.parts.includes(part));
                    if (availableParts.length > 0) {
                        const foundPart = availableParts[Math.floor(Math.random() * availableParts.length)];
                        player.parts.push(foundPart);
                        setTimeout(() => showToast(`[행운의 발견] 발동! [${foundPart}] 부품 획득!`, 2500), 1000);
                    }
                }
            }

            updatePerkListUI();
            updateStatsUI();
            setTimeout(nextSituation, 500); // 토스트 메시지를 볼 수 있도록 약간의 딜레이
        }
    }

    // --- 5. UI 업데이트 및 헬퍼 함수 ---

    /** 특성을 반영하여 최종 피해량을 계산합니다. */
    function calculateDamage(baseDamage) {
        const { damageReduction, damageMultiplier } = getCalculatedPlayerStats();
        let finalDamage = (baseDamage ?? 5) - damageReduction;
        finalDamage = finalDamage * damageMultiplier; // 유리 대포 효과 적용
        finalDamage = Math.ceil(finalDamage); // 소수점 올림 처리
        return Math.max(0, finalDamage);
    }

    /** 특성을 반영하여 최종 획득 경험치를 계산합니다. */
    function calculateXpGained(baseXp) {
        const { fastLearnerAdditiveBonus, glassCannonXpMultiplier } = getCalculatedPlayerStats();
        // '빠른 학습'의 합연산 보너스를 먼저 적용하고, 그 결과에 '유리 대포'의 배율을 적용
        const finalXp = Math.ceil(baseXp * (1 + fastLearnerAdditiveBonus) * glassCannonXpMultiplier);
        return finalXp;
    }

    /** 플레이어의 현재 스탯을 기반으로 계산된 값을 반환합니다. */
    function getCalculatedPlayerStats() {
        const perks = player.perks;
        
        // '빠른 학습'의 순수 합연산 보너스
        const fastLearnerAdditiveBonus = (perks.fast_learner || 0) * PERKS.find(p => p.id === 'fast_learner').baseValue;
        
        // '유리 대포'의 경험치 배율
        const glassCannonXpMultiplier = perks.glass_cannon ? 2 : 1;

        const stats = {
            damageReduction: 0, // 이 게임에서는 피해 감소 특성이 없음
            damageMultiplier: perks.glass_cannon ? 1.5 : 1,
            // 경험치 계산에 사용될 개별 컴포넌트
            fastLearnerAdditiveBonus: fastLearnerAdditiveBonus,
            glassCannonXpMultiplier: glassCannonXpMultiplier,
            successChanceBonus: (perks.lucky || 0) * PERKS.find(p => p.id === 'lucky').baseValue,
            partDiscoveryChance: 0.1 + ((perks.scavenger || 0) * PERKS.find(p => p.id === 'scavenger').baseValue),
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
            const perkData = PERKS.find(p => p.id === perkId); // perkData가 null일 수 있음
            if (!perkData) continue;

            const li = document.createElement('li');
            let name = `<strong>${perkData.name}</strong>` + (stack > 1 ? ` x ${stack}` : '');
            let description = perkData.description;
            let value;

            switch (perkId) {
                case 'fast_learner':
                    value = Math.round((perkData.baseValue * stack) * 100); // '빠른 학습' 자체의 증가량만 표시
                    break;
                case 'lucky':
                case 'scavenger':
                case 'lucky_find':
                case 'intuition':
                    value = Math.round((perkData.baseValue * stack) * 100);
                    break;
                case 'glass_cannon': // '유리 대포'는 설명에 {value}가 없으므로 별도 처리 불필요
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

    /** '직감' 버튼의 상태를 업데이트합니다. */
    function updateIntuitionButton() {
        const incorrectChoiceButtons = Array.from(ui.choicesContainer.children)
            .filter(button => !button.isCorrectChoice && !button.classList.contains('hidden'));

        // 사용 횟수가 있고, 제거할 오답이 2개 이상일 때만 버튼 표시
        if (player.intuitionCharges > 0 && incorrectChoiceButtons.length > 1) {
            ui.intuitionButton.classList.remove('hidden');
            ui.intuitionButton.textContent = `오답 제거 (${player.intuitionCharges}회 남음)`;
            ui.intuitionButton.disabled = false;
        } else {
            ui.intuitionButton.classList.add('hidden');
        }
    }

    /** '직감' 특성을 사용합니다. */
    function useIntuition() {
        if (player.intuitionCharges <= 0) return;

        // 현재 보이는 오답 선택지 버튼 목록을 가져옵니다.
        const incorrectChoiceButtons = Array.from(ui.choicesContainer.children)
            .filter(button => !button.isCorrectChoice && !button.classList.contains('hidden'));

        if (incorrectChoiceButtons.length > 0) {
            player.intuitionCharges--;

            // 무작위로 오답 중 하나를 골라 숨깁니다.
            const buttonToRemove = incorrectChoiceButtons[Math.floor(Math.random() * incorrectChoiceButtons.length)];
            buttonToRemove.classList.add('hidden');

            showToast('직감이 발동하여, 잘못된 선택지 하나를 제거합니다.', 2000);
        }
        updateIntuitionButton(); // 버튼 텍스트 및 상태 업데이트
    }

    /**
     * 지정된 요소에 텍스트를 페이드인 효과와 함께 표시합니다.
     * @param {HTMLElement} element - 텍스트를 표시할 요소
     * @param {string} text - 표시할 텍스트 (HTML 포함 가능)
     */
    async function displayText(element, text) {
        element.classList.remove('fade-in');
        element.innerHTML = '';
        void element.offsetWidth; // Reflow 강제
        element.innerHTML = text;
        element.classList.add('fade-in');
        await new Promise(resolve => setTimeout(resolve, 800)); // 애니메이션 시간(0.8s) 대기
    }

    /** 특정 화면을 표시합니다. */
    function showScreen(screenId) {
        for (const id in ui.screens) {
            ui.screens[id].classList.add('hidden');
        }
        ui.screens[screenId].classList.remove('hidden');
    }

    /**
     * 화면에 토스트 알림을 표시합니다.
     * @param {string} message - 표시할 메시지 (HTML 포함 가능)
     * @param {number} duration - 알림이 표시될 시간 (ms)
     */
    function showToast(message, duration = 2000) {
        ui.toast.innerHTML = message;
        ui.toast.classList.remove('hidden', 'fade-out');
        setTimeout(() => {
            ui.toast.classList.add('fade-out');
            setTimeout(() => ui.toast.classList.add('hidden'), 500); // transition 시간 후 숨김
        }, duration);
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
        // 정보 화면이 있으면 항상 먼저 표시합니다.
        if (infoToShow) {
            displayInfoScreen();
        } else {
            // 정보 화면이 없을 때만 레벨업 또는 다음 상황으로 진행합니다.
            proceedAfterInfo();
        }
    }

    /** 정보 화면을 본 후 또는 정보 화면이 없을 때 호출됩니다. */
    function proceedAfterInfo() {
        // '자연치유' 특성 처리
        if (player.perks['natural_healing'] && player.hp < player.maxHp) {
            player.hp = Math.min(player.maxHp, player.hp + 1);
            updateStatsUI();
        }

        if (isLevelUpPending) {
            isLevelUpPending = false; // 레벨업 상태를 여기서 처리
            showPerkSelection();
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
    ui.info.continueButton.addEventListener('click', proceedAfterInfo);
    ui.intuitionButton.addEventListener('click', useIntuition);
    ui.perk.toggleButton.addEventListener('click', () => ui.perk.list.classList.toggle('hidden'));
    ui.restartButtons.forEach(button => button.addEventListener('click', initGame));

    // --- 7. 개발자용 디버그 모드 (삭제 용이) ---
    function setupDebugMode() {
        if (!ui.debug.panel) return;

        // 디버그 패널 토글
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.shiftKey && e.key === 'D') {
                const isHidden = ui.debug.panel.classList.contains('hidden');
                if (isHidden) {
                    populateDebugPanel();
                }
                ui.debug.panel.classList.toggle('hidden');
            }
        });

        ui.debug.closeBtn.addEventListener('click', () => ui.debug.panel.classList.add('hidden'));

        // 스탯 적용
        ui.debug.applyStatsBtn.addEventListener('click', () => {
            player.hp = parseInt(ui.debug.hp.value, 10);
            player.maxHp = parseInt(ui.debug.maxHp.value, 10);
            player.xp = parseInt(ui.debug.xp.value, 10);
            player.xpToLevelUp = parseInt(ui.debug.xpToLevelUp.value, 10);
            player.intuitionCharges = parseInt(ui.debug.intuitionCharges.value, 10);
            updateAllUI();
            showToast('Debug: Stats Applied', 1500);
        });

        // 부품 제어
        ui.debug.addAllPartsBtn.addEventListener('click', () => {
            player.parts = [...PARTS_TO_COLLECT];
            updateAllUI();
            populateDebugPanel();
        });
        ui.debug.removeAllPartsBtn.addEventListener('click', () => {
            player.parts = [];
            updateAllUI();
            populateDebugPanel();
        });

    }

    function populateDebugPanel() {
        if (!player) return;

        // 스탯 채우기
        ui.debug.hp.value = player.hp;
        ui.debug.maxHp.value = player.maxHp;
        ui.debug.xp.value = player.xp;
        ui.debug.xpToLevelUp.value = player.xpToLevelUp;
        ui.debug.intuitionCharges.value = player.intuitionCharges;

        // 부품 채우기
        ui.debug.partsContainer.innerHTML = '';
        PARTS_TO_COLLECT.forEach(partName => {
            const partEl = document.createElement('div');
            partEl.className = 'debug-item';
            partEl.textContent = partName;
            if (player.parts.includes(partName)) {
                partEl.classList.add('owned');
            }
            partEl.addEventListener('click', () => {
                if (player.parts.includes(partName)) {
                    player.parts = player.parts.filter(p => p !== partName);
                } else {
                    player.parts.push(partName);
                }
                updateAllUI();
                populateDebugPanel();
            });
            ui.debug.partsContainer.appendChild(partEl);
        });

        // 특성 채우기
        ui.debug.perksContainer.innerHTML = '';
        PERKS.forEach(perk => {
            const perkEl = document.createElement('div');
            perkEl.className = 'debug-item';
            const currentStacks = player.perks[perk.id] || 0;
            perkEl.textContent = `${perk.name} (${currentStacks})`;
            if (currentStacks > 0) {
                perkEl.classList.add('owned');
            }

            // 좌클릭: 추가
            perkEl.addEventListener('click', () => {
                if (perk.type === 'unique' && currentStacks > 0) return;
                player.perks[perk.id] = (player.perks[perk.id] || 0) + 1;
                if (perk.id === 'intuition') player.intuitionCharges += perk.baseValue;
                updateAllUI();
                populateDebugPanel();
            });

            // 우클릭: 제거
            perkEl.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                if (currentStacks <= 0) return;
                player.perks[perk.id]--;
                if (perk.id === 'intuition') player.intuitionCharges = Math.max(0, player.intuitionCharges - perk.baseValue);
                if (player.perks[perk.id] <= 0) {
                    delete player.perks[perk.id];
                }
                updateAllUI();
                populateDebugPanel();
            });
            ui.debug.perksContainer.appendChild(perkEl);
        });
    }

    function updateAllUI() {
        updateStatsUI();
        updatePerkListUI();
        updateIntuitionButton();
    }

    // --- 7. 게임 시작 ---
    initGame();
    setupDebugMode(); // 디버그 모드 활성화
});
