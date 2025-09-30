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
        streakCounter: $('streak-counter'), // 연속 정답 카운터 UI 요소 추가
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
        parts: {
            toggleButton: $('parts-toggle-button'),
            slotsWrapper: $('parts-slots-wrapper'),
        },
        intuitionButton: $('intuition-button'),
        confidenceButton: $('confidence-button'),
        debug: {
            panel: $('debug-panel'),
            hp: $('debug-hp'),
            maxHp: $('debug-max-hp'),
            xp: $('debug-xp'),
            xpToLevelUp: $('debug-xp-to-level-up'),
            intuitionCharges: $('debug-intuition-charges'),
            confidenceCharges: $('debug-confidence-charges'),
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
    const PARTS_DATA = [
        { id: '동력 코어', name: '동력 코어', image: 'images/part_core.png' },
        { id: '항법 장치', name: '항법 장치', image: 'images/part_nav.png' },
        { id: '선체 안정기', name: '선체 안정기', image: 'images/part_stabilizer.png' },
        { id: '통신 모듈', name: '통신 모듈', image: 'images/part_comm.png' },
        { id: '생명 유지 장치', name: '생명 유지 장치', image: 'images/part_life_support.png' }
    ];
    const PARTS_TO_COLLECT = PARTS_DATA.map(p => p.id);
    const INTRO_COMIC_CUTS = ['images/intro_1.png', 'images/intro_2.png', 'images/intro_3.png', 'images/intro_4.png', 'images/intro_5.png', 'images/intro_6.png'];
    const TYPEWRITER_SPEED = 25; // 1초에 40글자 (1000ms / 40 = 25ms)
    
    const PERKS = [
        { id: 'fast_learner', name: '📖 빠른 학습', type: 'stackable', baseValue: 0.3, description: '경험치 획득량이 <span class="highlight-yellow">{value}%</span> 증가합니다.' },
        { id: 'lucky', name: '🎲 구사일생', type: 'stackable', baseValue: 0.3, description: '오답 선택 시, 성공 확률이 <span class="highlight-yellow">{value}%p</span> 증가합니다.' },
        { id: 'scavenger', name: '⚒️ 탐색 전문가', type: 'stackable', baseValue: 0.15, description: '부품 탐색 성공 확률이 <span class="highlight-yellow">{value}%p</span> 증가합니다.' },
        { id: 'indomitable_will', name: '✊ 굳건한 의지', type: 'unique', description: '게임 오버에 달하는 피해를 입을 경우, 해당 피해를 <span class="highlight-yellow">1회</span> 무효화하고 그만큼 체력을 회복합니다.' },
        { id: 'natural_healing', name: '🌿 자연치유', type: 'unique', description: '상황이 지날 때마다 체력을 <span class="highlight-yellow">1</span> 회복합니다.' },
        { id: 'lucky_find', name: '🍀 행운의 발견', type: 'stackable', baseValue: 0.07, description: '특성 획득 시, 중첩 당 <span class="highlight-yellow">7%</span> 확률로 우주선 부품을 추가로 발견합니다.' },
        { id: 'instant_recovery', name: '❤️‍🩹 즉시 회복', type: 'instant', baseValue: 8, description: '즉시 체력을 <span class="highlight-yellow">{value}</span> 회복합니다.' },
        { id: 'glass_cannon', name: '🫙 유리 대포', type: 'unique', description: '경험치 획득량이 <span class="highlight-yellow">2배</span>가 되지만, 받는 모든 피해가 <span class="highlight-yellow">1.5배</span>로 증가합니다.' },
        { id: 'intuition', name: '‼️ 직감', type: 'stackable', baseValue: 3, description: '오답 선택지 1개를 제거하는 능력을 <span class="highlight-yellow">{value}회</span> 얻습니다.' },
        { id: 'confidence', name: '💯 확신', type: 'stackable', baseValue: 3, description: '이번 문제를 맞히면 경험치를 2배로 획득하는 능력을 <span class="highlight-yellow">{value}회</span> 얻습니다.' },
        { id: 'open_mind', name: '👁️ 열린 시야', type: 'unique', description: '특성 선택지가 <span class="highlight-yellow">1개</span> 추가로 나타납니다.' },
        { id: 'forbidden_deal', name: '😈 금단의 거래', type: 'instant', description: '체력을 <span class="highlight-yellow">6</span> 소모하고, 무작위 특성을 <span class="highlight-yellow">2개</span> 획득합니다.' },
        { id: 'chain_success', name: '🔗 연쇄 성공', type: 'unique', description: '5번 연속으로 정답을 맞히면 우주선 부품 1개를 확정적으로 획득합니다. (1회 한정)' },
        { id: 'amazing_coincidence', name: '🪙 기막힌 우연', type: 'unique', description: '부품 획득에 성공할 때, <span class="highlight-yellow">50%</span> 확률로 추가로 1개 더 얻습니다.' },
        { id: 'desperate_dash', name: '🏃 목숨을 건 질주', type: 'unique', description: '모든 체력 회복이 비활성화되고, 상황마다 체력을 1 잃습니다. 레벨업 시 부품 탐색만 나타나며, 부품 획득 확률이 <span class="highlight-yellow">2배</span>로 증가합니다.' },
        { id: 'meditation', name: '🧘 명상', type: 'unique', description: '문제를 3회 연속으로 맞히면 체력을 <span class="highlight-yellow">5</span> 회복합니다.' },
        { id: 'complete_redesign', name: '🏗️ 완전 재설계', type: 'instant', description: '가지고 있는 모든 특성과 부품을 삭제하고, 레벨업 필요 경험치를 10으로 초기화합니다. 특성 1개당 15, 부품 1개당 60의 경험치를 획득합니다.' },
        { id: 'steady_learning', name: '🖊️ 꾸준한 학습', type: 'stackable', baseValue: 0.02, description: '3회 연속 정답마다 부품 탐색 성공 확률이 중첩 당 <span class="highlight-yellow">2%p</span>씩 영구적으로 증가합니다.' },
        { id: 'part_trader', name: '⚙️ 부품 거래상', type: 'unique', description: '레벨업 시, 체력 10을 소모하고 우주선 부품 1개를 확정적으로 획득하는 선택지가 나타납니다. (체력 10 초과, 남은 부품이 있을 시)' },
        { id: 'improvised_parts', name: '🔩 급조 부품', type: 'unique', description: '즉시 무작위 부품 2개를 획득합니다. 하지만, 피해를 입으면 이 특성으로 얻은 부품을 모두 잃습니다.' },
        { id: 'vitality', name: '💪 활력', type: 'stackable', baseValue: 3, description: '최대 체력이 <span class="highlight-yellow">{value}</span> 증가합니다.' },
        { id: 'dimensional_detector_a', name: '🛰️ 차원 탐지기 A', type: 'unique', description: '차원 탐지기 B와 함께 보유 시, 부품 탐색 성공 확률이 <span class="highlight-yellow">50%p</span> 증가합니다.' },
        { id: 'dimensional_detector_b', name: '🛰️ 차원 탐지기 B', type: 'unique', description: '차원 탐지기 A와 함께 보유 시, 부품 탐색 성공 확률이 <span class="highlight-yellow">50%p</span> 증가합니다.' },
        { id: 'fruit_of_patience', name: '🌱 인내의 결실', type: 'stackable', baseValue: { xpIncrease: 0.4, partChance: 0.25 }, description: '레벨업 시 요구 경험치 증가량이 중첩 당 <span class="highlight-yellow">40%p</span> 늘어나지만, 부품 탐색 성공 확률이 <span class="highlight-yellow">25%p</span> 증가합니다.' },
    ];

    // --- 3. 게임 상태 (변수) ---
    let player;
    let introCutIndex;
    let infoToShow;
    let currentSituation;
    // let isLevelUpPending = false; // 연속 레벨업 로직으로 대체
    let isConfidenceActive = false;

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
            removedPerks: {}, // 제거된 특성 추적 { perkId: true }
            answeredSituations: [], // 정답을 맞힌 문제 ID 목록
            intuitionCharges: 0, // '직감' 특성 사용 횟수
            confidenceCharges: 0, // '확신' 특성 사용 횟수
            pendingLevelUps: 0, // 연속 레벨업 처리를 위한 카운터
            correctStreak: 0, // '연쇄 성공' 특성을 위한 연속 정답 횟수
            chainSuccessUsed: false, // '연쇄 성공' 특성 사용 여부
            steadyLearningBonus: 0, // '꾸준한 학습'으로 얻은 영구 보너스
            improvisedParts: [], // '급조 부품'으로 얻은 부품 목록
        };
        introCutIndex = 0;
        infoToShow = null;
        currentSituation = null;
        // isLevelUpPending = false;
        isConfidenceActive = false;
        
        ui.perk.list.innerHTML = '';
        ui.perk.list.classList.add('hidden');
        showIntroCut();
        updatePartsUI();
        updateStatsUI();
        updateStreakUI(); // 초기화 시 연속 정답 UI도 업데이트
        showScreen('intro');
    }

    /** 다음 상황을 제시하거나 게임 종료 조건을 확인합니다. */
    async function nextSituation() {
        if (player.parts.length >= PARTS_TO_COLLECT.length) return gameWin();
        if (player.hp <= 0) return gameOver();

        isConfidenceActive = false; // 새 상황 시작 시 '확신' 상태 초기화
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
        updateConfidenceButton();
    }

    /** 복습 문제를 출제합니다. */
    function showReviewQuiz() {
        // 이미 맞힌 문제 중에서 무작위로 하나 선택
        const answeredIds = player.answeredSituations;
        if (answeredIds.length === 0) {
            // 복습할 문제가 없으면 일반 문제로 넘어감
            nextSituation();
            return;
        }
        const reviewSituationId = answeredIds[Math.floor(Math.random() * answeredIds.length)];
        const reviewQuestion = REVIEW_QUESTIONS.find(q => q.id === reviewSituationId);

        if (!reviewQuestion) {
            // 혹시 모를 오류 방지
            nextSituation();
            return;
        }

        showScreen('game');
        ui.choicesContainer.innerHTML = '';
        ui.situation.text.classList.remove('fade-in');
        ui.situation.text.innerHTML = '';

        ui.situation.image.src = `images/situation_${reviewSituationId}.png`;
        ui.situation.title.textContent = "📝 복습 문제";
        ui.situation.text.innerHTML = reviewQuestion.text;
        ui.situation.text.classList.add('fade-in');

        // 선택지 생성
        const correctAnswer = KEYWORDS[`true_${reviewSituationId}`];
        const allKeywords = Object.values(KEYWORDS);
        const wrongAnswers = [];

        // 정답과 중복되지 않는 오답 4개 추출
        while (wrongAnswers.length < 4) {
            const randomKeyword = allKeywords[Math.floor(Math.random() * allKeywords.length)];
            if (randomKeyword !== correctAnswer && !wrongAnswers.includes(randomKeyword)) {
                wrongAnswers.push(randomKeyword);
            }
        }

        const choices = [correctAnswer, ...wrongAnswers].sort(() => Math.random() - 0.5);

        choices.forEach(choiceText => {
            const button = document.createElement('button');
            button.textContent = choiceText;
            button.onclick = () => handleReviewChoice(choiceText === correctAnswer);
            ui.choicesContainer.appendChild(button);
        });

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
        ui.confidenceButton.classList.add('hidden'); // '확신' 버튼도 숨김
        showScreen('result');
        ui.result.image.src = currentSituation.image;
        ui.result.rollAnimation.innerHTML = '';
        ui.nextButton.classList.add('hidden');

        if (choice.isCorrect) {
            player.correctStreak++; // 정답 스트릭 증가
            updateStreakUI(); // 정답 시 스트릭 UI 즉시 업데이트
            const baseXP = choice.successXp || 5;
            const actualXpGained = calculateXpGained(baseXP);
            let successMessage = choice.successText || `올바른 선택입니다! 무사히 통과했습니다.<br>✨ +{xpGained}`;
            if (isConfidenceActive) {
                successMessage += `<br><span class="highlight-yellow">[확신]</span> 효과로 경험치를 2배 획득합니다!`;
            }
            successMessage = successMessage.replace('{xpGained}', actualXpGained);

            await displayText(ui.result.text, successMessage);
            // 정답을 맞혔으므로, 다시 나오지 않도록 목록에 추가
            if (!player.answeredSituations.includes(currentSituation.id)) {
                player.answeredSituations.push(currentSituation.id);
            }

            // '연쇄 성공' 특성 처리
            if (player.perks['chain_success'] && !player.chainSuccessUsed && player.correctStreak >= 5) {
                const availableParts = PARTS_TO_COLLECT.filter(part => !player.parts.includes(part));
                if (availableParts.length > 0) {
                    const foundPart = availableParts[Math.floor(Math.random() * availableParts.length)];
                    acquirePart(foundPart, true);
                    setTimeout(() => showToast(`[연쇄 성공] 발동! 5연속 정답으로 [${foundPart}] 부품을 획득합니다!`, 3500), 1000);
                }
            }

            // '명상' 특성 처리
            if (player.perks['meditation'] && player.correctStreak > 0 && player.correctStreak % 3 === 0) {
                if (!player.perks['desperate_dash']) {
                    player.hp = Math.min(player.maxHp, player.hp + 5);
                    updateStatsUI();
                    setTimeout(() => showToast(`[명상] 발동! 3연속 정답으로 체력을 5 회복합니다!`, 2500), 1000);
                } else {
                    setTimeout(() => showToast(`[명상] 효과가 발동했지만, [목숨을 건 질주]로 인해 체력이 회복되지 않습니다.`, 3000), 1000);
                }
            }

            // '꾸준한 학습' 특성 처리
            if (player.perks['steady_learning'] && player.correctStreak > 0 && player.correctStreak % 3 === 0) {
                const stacks = player.perks['steady_learning'];
                const bonusPerStack = PERKS.find(p => p.id === 'steady_learning').baseValue;
                const bonusGained = stacks * bonusPerStack;
                player.steadyLearningBonus += bonusGained;
                setTimeout(() => showToast(`[꾸준한 학습] 발동! 부품 탐색 확률이 영구적으로 ${Math.round(bonusGained * 100)}%p 증가합니다!`, 3000), 1100);
            }

            if (choice.info) infoToShow = choice.info;
            gainXp(baseXP);
            ui.nextButton.classList.remove('hidden');
        } else {
            player.correctStreak = 0; // 오답 시 스트릭 초기화
            updateStreakUI(); // 오답 시 스트릭 UI 즉시 업데이트
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

    /** 복습 문제의 선택을 처리합니다. */
    async function handleReviewChoice(isCorrect) {
        showScreen('result');
        ui.result.image.src = ui.situation.image.src; // 현재 복습 문제 이미지 사용
        ui.result.rollAnimation.innerHTML = '';
        ui.nextButton.classList.add('hidden');

        if (isCorrect) {
            player.correctStreak++; // 정답 스트릭 증가
            const xp = 5; // 복습 문제 정답 시 고정 경험치
            gainXp(xp);
            await displayText(ui.result.text, `정답입니다! 정확하게 기억하고 있군요.<br>✨ +${calculateXpGained(xp)}`);

            // '연쇄 성공' 특성 처리
            if (player.perks['chain_success'] && !player.chainSuccessUsed && player.correctStreak >= 5) {
                const availableParts = PARTS_TO_COLLECT.filter(part => !player.parts.includes(part));
                if (availableParts.length > 0) {
                    const foundPart = availableParts[Math.floor(Math.random() * availableParts.length)];
                    acquirePart(foundPart, true);
                    setTimeout(() => showToast(`[연쇄 성공] 발동! 5연속 정답으로 [${foundPart}] 부품을 획득합니다!`, 3500), 1000);
                }
            }

            // '명상' 특성 처리
            if (player.perks['meditation'] && player.correctStreak > 0 && player.correctStreak % 3 === 0) {
                if (!player.perks['desperate_dash']) {
                    player.hp = Math.min(player.maxHp, player.hp + 5);
                    setTimeout(() => showToast(`[명상] 발동! 3연속 정답으로 체력을 5 회복합니다!`, 2500), 1000);
                } else {
                    setTimeout(() => showToast(`[명상] 효과가 발동했지만, [목숨을 건 질주]로 인해 체력이 회복되지 않습니다.`, 3000), 1000);
                }
            }

            // '꾸준한 학습' 특성 처리
            if (player.perks['steady_learning'] && player.correctStreak > 0 && player.correctStreak % 3 === 0) {
                const stacks = player.perks['steady_learning'];
                const bonusPerStack = PERKS.find(p => p.id === 'steady_learning').baseValue;
                const bonusGained = stacks * bonusPerStack;
                player.steadyLearningBonus += bonusGained;
                setTimeout(() => showToast(`[꾸준한 학습] 발동! 부품 탐색 확률이 영구적으로 ${Math.round(bonusGained * 100)}%p 증가합니다!`, 3000), 1100);
            }
        } else {
            const damage = 5; // 복습 문제 오답 시 고정 피해
            await processDamage(damage, `오답입니다. 정답을 다시 확인해 보세요.<br> ❤️ -${damage}`);
            player.correctStreak = 0; // 오답 시에만 스트릭 초기화
        }
        updateStreakUI(); // 정답/오답 처리 후 스트릭 UI 즉시 업데이트
        updateStatsUI();
        ui.nextButton.classList.remove('hidden');
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
        // '급조 부품' 처리: 피해를 입기 전에 부품을 잃음
        if (damage > 0 && player.perks['improvised_parts'] && player.improvisedParts.length > 0) {
            const lostParts = [...player.improvisedParts];
            // 잃어버린 부품을 player.parts에서 제거
            player.parts = player.parts.filter(p => !lostParts.includes(p));
            player.improvisedParts = []; // 급조 부품 목록 초기화
            player.removedPerks['improvised_parts'] = true; // 제거된 특성으로 표시
            delete player.perks['improvised_parts'];

            showToast(`피해를 입어 [급조 부품] 특성을 잃고, 획득했던 부품(${lostParts.join(', ')})을 모두 잃었습니다!`, 4000);
            
            // UI 즉시 업데이트
            updatePartsUI();
            updatePerkListUI();
        }

        player.hp -= damage;
        await displayText(ui.result.text, failureMessage);
    }

    /** '굳건한 의지' 특성을 처리하고 토스트 알림을 표시합니다. */
    function processIndomitableWill(damage) { // 이제 메시지를 반환합니다.
        const healAmount = damage;
        if (!player.perks['desperate_dash']) {
            player.hp = Math.min(player.maxHp, player.hp + healAmount);
        }
        player.removedPerks['indomitable_will'] = true; // 제거된 특성으로 표시
        delete player.perks['indomitable_will'];
        
        const message = `죽음의 문턱에서 <span class="highlight-yellow">[굳건한 의지]</span>가 발동했습니다! 피해를 무효화하고 체력을 ${healAmount} 회복합니다!`;
        
        updatePerkListUI();
        updateStatsUI();
        return { message };
    }

    /** 경험치를 획득하고 레벨업을 확인합니다. */
    function gainXp(amount) {
        player.xp += calculateXpGained(amount);
        // 한 번에 여러 번 레벨업이 가능하도록 while 루프 사용
        while (player.xp >= player.xpToLevelUp) {
            const patienceStacks = player.perks['fruit_of_patience'] || 0;
            const patienceXpIncrease = patienceStacks > 0 ? PERKS.find(p => p.id === 'fruit_of_patience').baseValue.xpIncrease * patienceStacks : 0;
            const xpMultiplier = 1.1 + patienceXpIncrease; // 기본 10% + 인내의 결실 보너스

            player.xp -= player.xpToLevelUp;
            player.xpToLevelUp = Math.floor(player.xpToLevelUp * xpMultiplier);
            player.pendingLevelUps++; // 레벨업 횟수 증가
        }
        updateStatsUI();
    }

    /** 레벨업 시 보상 선택 화면을 표시합니다. */
    function showPerkSelection() {
        showScreen('perk');
        ui.perk.choicesContainer.innerHTML = '';

        // '부품 거래상' 특성 처리: 다른 선택지보다 먼저 표시
        if (player.perks['part_trader'] && player.hp > 10 && player.parts.length < PARTS_TO_COLLECT.length) {
            const tradeButton = document.createElement('button');
            tradeButton.innerHTML = `[부품 거래] 체력 10 소모, 부품 1개 확정 획득`;
            tradeButton.onclick = () => {
                player.hp -= 10;
                const availableParts = PARTS_TO_COLLECT.filter(part => !player.parts.includes(part));
                const foundPart = availableParts[Math.floor(Math.random() * availableParts.length)];
                acquirePart(foundPart);
                showToast(`[부품 거래상] 효과 발동! 체력 10을 소모하고 [${foundPart}] 부품을 획득합니다!`, 3000);
                updateStatsUI();
                // 보상 선택 후 다음 단계로 진행
                setTimeout(proceedAfterInfo, 500);
            };
            ui.perk.choicesContainer.appendChild(tradeButton);
        }

        const { partDiscoveryChance } = getCalculatedPlayerStats();
        const partButton = document.createElement('button');
        partButton.textContent = `[부품 탐색] (성공 확률: ${Math.round(Math.min(partDiscoveryChance, 1) * 100)}%)`;
        partButton.onclick = () => selectReward({ type: 'part_search' });
        ui.perk.choicesContainer.appendChild(partButton);

        // '목숨을 건 질주' 특성이 있으면 다른 특성 선택지를 표시하지 않음
        if (player.perks['desperate_dash']) {
            const p = document.createElement('p');
            p.innerHTML = '<br>[목숨을 건 질주] 효과로 부품 탐색만 가능합니다.';
            ui.perk.choicesContainer.appendChild(p);
            return;
        }
        // 'unique' 타입이면서 이미 보유한 특성만 제외하고, 'stackable'과 'instant'는 항상 포함
        const availablePerks = PERKS.filter(p => {
            if (p.type === 'unique' && player.perks[p.id]) return false;
            return true;
        });
        const shuffledPerks = availablePerks.sort(() => 0.5 - Math.random());
        const numberOfChoices = player.perks['open_mind'] ? 4 : 3;
        
        for (let i = 0; i < numberOfChoices && shuffledPerks[i]; i++) {
            const perk = shuffledPerks[i];
            const button = document.createElement('button');
            let description = perk.description;

            if (description.includes('{value}')) {
                let value;
                // 퍼센트 단위로 표시해야 하는 특성들
                if (['fast_learner', 'lucky', 'scavenger'].includes(perk.id)) {
                    value = Math.round(perk.baseValue * 100);
                } else {
                    value = perk.baseValue;
                }
                // '인내의 결실'은 {value}를 사용하지 않으므로 이 로직을 타지 않음

                description = description.replace('{value}', value);
            }
            button.innerHTML = `[특성 획득] ${perk.name}: ${description}`;
            button.onclick = () => selectReward({ type: 'perk', value: perk });
            ui.perk.choicesContainer.appendChild(button);
        }
    }

    /** '금단의 거래' 등으로 무작위 특성을 부여합니다. */
    function grantRandomPerk() {
        // 획득 가능한 특성 목록 필터링 (instant 타입 제외, 이미 보유한 unique 타입 제외)
        const availablePerks = PERKS.filter(p =>
            p.type !== 'instant' &&
            !(p.type === 'unique' && player.perks[p.id])
        );

        if (availablePerks.length === 0) {
            showToast('더 이상 획득할 수 있는 특성이 없습니다!', 2000);
            return;
        }

        const perkToGrant = availablePerks[Math.floor(Math.random() * availablePerks.length)];

        // 특성 추가 로직
        player.perks[perkToGrant.id] = (player.perks[perkToGrant.id] || 0) + 1;

        if (perkToGrant.id === 'intuition') player.intuitionCharges += perkToGrant.baseValue;
        if (perkToGrant.id === 'confidence') player.confidenceCharges += perkToGrant.baseValue;

        showToast(`[${perkToGrant.name}] 특성을 획득했습니다!`, 2000);
        // UI 업데이트
        updatePerkListUI();
        updateIntuitionButton();
        updateConfidenceButton();
    }
    /** 선택한 보상을 적용합니다. */
    function acquirePart(partId, fromChainSuccess = false) {
        player.parts.push(partId);
        if (fromChainSuccess) {
            player.chainSuccessUsed = true; // 연쇄 성공 특성 사용 처리
        }
        updatePartsUI();

        // '기막힌 우연' 특성 처리
        if (player.perks['amazing_coincidence'] && Math.random() < 0.5) {
            const availableParts = PARTS_TO_COLLECT.filter(part => !player.parts.includes(part));
            if (availableParts.length > 0) {
                const extraPart = availableParts[Math.floor(Math.random() * availableParts.length)];
                // 재귀 호출 대신 직접 처리하여 무한 루프 방지
                player.parts.push(extraPart);
                updatePartsUI();
                setTimeout(() => showToast(`[기막힌 우연] 발동! [${extraPart}] 부품을 추가로 획득합니다!`, 3500), 1500);
            }
        }
    }
    
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
                    acquirePart(foundPart);
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
            
            if (perk.type === 'instant') {
                showToast(`[${perk.name}] 효과가 즉시 발동합니다!`, 2000);
                if (perk.id === 'instant_recovery') {
                    const healAmount = perk.baseValue;
                    if (!player.perks['desperate_dash']) {
                        player.hp = Math.min(player.maxHp, player.hp + healAmount);
                        setTimeout(() => showToast(`체력을 ${healAmount} 회복했습니다!`, 2000), 500);
                    } else {
                        setTimeout(() => showToast(`[목숨을 건 질주] 효과로 체력이 회복되지 않습니다.`, 2000), 500);
                    }
                } else if (perk.id === 'forbidden_deal') {
                    player.hp -= 6;
                    setTimeout(() => showToast(`체력을 6 소모하고 특성 2개를 획득합니다.`, 2500), 500);
                    setTimeout(() => grantRandomPerk(), 1500);
                    setTimeout(() => grantRandomPerk(), 2500);
                } else if (perk.id === 'complete_redesign') {
                    const numPerks = Object.keys(player.perks).length;
                    const numParts = player.parts.length;
                    const xpFromPerks = numPerks * 15;
                    const xpFromParts = numParts * 60;
                    const totalBaseXp = xpFromPerks + xpFromParts;

                    // 플레이어 상태 초기화
                    player.perks = {};
                    player.parts = [];
                    player.intuitionCharges = 0;
                    player.confidenceCharges = 0;
                    player.chainSuccessUsed = false;
                    player.steadyLearningBonus = 0;
                    player.xpToLevelUp = 10;

                    setTimeout(() => showToast(`모든 특성(${numPerks}개)과 부품(${numParts}개)을 제거하고 경험치 ${totalBaseXp}을 얻습니다!`, 4000), 500);

                    if (totalBaseXp > 0) {
                        // 경험치 획득 함수를 호출하여 레벨업 처리
                        gainXp(totalBaseXp);
                    }
                }
            } else { // 'stackable' 또는 'unique' 타입
                // 일반 특성 추가
                player.perks[perk.id] = (player.perks[perk.id] || 0) + 1;
                showToast(`[${perk.name}] 특성을 획득했습니다!`, 2000);

                if (perk.id === 'intuition') {
                    player.intuitionCharges += perk.baseValue;
                }
                if (perk.id === 'confidence') {
                    player.confidenceCharges += perk.baseValue;
                    showToast(`[${perk.name}] 특성을 획득! 경험치 2배 능력을 ${perk.baseValue}회 얻습니다.`, 2500);
                }
                if (perk.id === 'vitality') {
                    const hpGain = perk.baseValue;
                    // 최대 체력과 현재 체력을 함께 올려줌
                    player.maxHp += hpGain;
                    player.hp += hpGain;
                    showToast(`최대 체력과 현재 체력이 ${hpGain} 증가했습니다!`, 2500);
                }
                if (perk.id === 'improvised_parts') {
                    // 즉시 부품 2개 획득 로직
                    const partsToGain = 2;
                    const availableParts = PARTS_TO_COLLECT.filter(part => !player.parts.includes(part));
                    const shuffledAvailable = availableParts.sort(() => 0.5 - Math.random());
                    
                    for (let i = 0; i < partsToGain && i < shuffledAvailable.length; i++) {
                        const foundPart = shuffledAvailable[i];
                        player.parts.push(foundPart);
                        player.improvisedParts.push(foundPart); // 급조 부품 목록에 추가
                        setTimeout(() => showToast(`[급조 부품] 효과로 [${foundPart}] 부품을 획득!`, 2500 + i * 500), 500 + i * 500);
                        updatePartsUI(); // 부품 획득 시 즉시 UI 업데이트
                    }
                    if (shuffledAvailable.length < partsToGain) {
                         setTimeout(() => showToast(`획득할 수 있는 부품이 부족하여 ${shuffledAvailable.length}개만 획득했습니다.`, 3000), 1500);
                    }
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
                        acquirePart(foundPart);
                        setTimeout(() => showToast(`[행운의 발견] 발동! [${foundPart}] 부품 획득!`, 2500), 1000);
                    }
                }
            }

            updatePerkListUI();
            updateStatsUI();
            // 보상 선택 후, 추가 레벨업이 있는지 확인하기 위해 proceedAfterInfo 호출
            // proceedAfterInfo는 남은 레벨업이 없으면 자동으로 nextSituation을 호출함
            setTimeout(proceedAfterInfo, 500);
        }
    }

    // --- 5. UI 업데이트 및 헬퍼 함수 ---

    /** 특성을 반영하여 최종 피해량을 계산합니다. */
    function calculateDamage(baseDamage) {
        const { damageReduction, damageMultiplier } = getCalculatedPlayerStats();
        let finalDamage = (baseDamage ?? 5) - damageReduction;
        finalDamage *= damageMultiplier; // 유리 대포 효과 적용
        finalDamage = Math.ceil(finalDamage); // 소수점 올림 처리
        return Math.max(0, finalDamage);
    }

    /** 특성을 반영하여 최종 획득 경험치를 계산합니다. */
    function calculateXpGained(baseXp) {
        const { fastLearnerAdditiveBonus, glassCannonXpMultiplier } = getCalculatedPlayerStats();
        // '빠른 학습'의 합연산 보너스를 먼저 적용하고, 그 결과에 '유리 대포'의 배율을 적용
        let finalXp = Math.ceil(baseXp * (1 + fastLearnerAdditiveBonus) * glassCannonXpMultiplier);
        if (isConfidenceActive) finalXp *= 2; // '확신' 효과 적용
        return finalXp;
    }

    /** 플레이어의 현재 스탯을 기반으로 계산된 값을 반환합니다. */
    function getCalculatedPlayerStats() {
        const perks = player.perks;
        
        // '빠른 학습'의 순수 합연산 보너스
        const fastLearnerAdditiveBonus = (perks.fast_learner || 0) * PERKS.find(p => p.id === 'fast_learner').baseValue;
        
        // '유리 대포'의 경험치 배율
        const glassCannonXpMultiplier = perks.glass_cannon ? 2 : 1;

        // '활력' 특성에 의한 최대 체력 증가
        const vitalityHpBonus = (perks.vitality || 0) * PERKS.find(p => p.id === 'vitality').baseValue;

        const stats = {
            damageReduction: 0, // 이 게임에서는 피해 감소 특성이 없음
            damageMultiplier: perks.glass_cannon ? 1.5 : 1,
            // 경험치 계산에 사용될 개별 컴포넌트
            fastLearnerAdditiveBonus: fastLearnerAdditiveBonus,
            glassCannonXpMultiplier: glassCannonXpMultiplier,
            successChanceBonus: (perks.lucky || 0) * PERKS.find(p => p.id === 'lucky').baseValue,
            partDiscoveryChance: 0.1 +
                                 ((perks.scavenger || 0) * PERKS.find(p => p.id === 'scavenger').baseValue) +
                                 (player.steadyLearningBonus || 0) +
                                 (perks.dimensional_detector_a && perks.dimensional_detector_b ? 0.5 : 0) + // 차원 탐지기 세트 효과
                                 ((perks.fruit_of_patience || 0) * PERKS.find(p => p.id === 'fruit_of_patience').baseValue.partChance) // 인내의 결실 효과
            // maxHpBonus: vitalityHpBonus // maxHp는 직접 player 객체에서 관리되므로 여기서는 반환하지 않음
        };

        // '목숨을 건 질주' 효과: 부품 획득 확률 2배
        if (perks.desperate_dash) {
            stats.partDiscoveryChance *= 2;
        }

        return stats;
    }

    /** 보유 특성 목록 UI를 업데이트합니다. */
    function updatePerkListUI() {
        ui.perk.list.innerHTML = '';
        const allPerkIds = new Set([...Object.keys(player.perks), ...Object.keys(player.removedPerks)]);

        if (allPerkIds.size === 0) {
            if (player.steadyLearningBonus > 0) {
                const li = document.createElement('li');
                li.innerHTML = `<strong>[꾸준한 학습 효과]</strong>: 부품 탐색 확률 +${Math.round(player.steadyLearningBonus * 100)}%p`;
                ui.perk.list.appendChild(li);
            } else {
                ui.perk.list.innerHTML = '<li>보유하거나 획득했던 특성이 없습니다.</li>';
            }
            return;
        }

        // 보유 특성 먼저 표시
        for (const perkId in player.perks) {
            const stack = player.perks[perkId];
            const perkData = PERKS.find(p => p.id === perkId); // perkData가 null일 수 있음
            if (!perkData) continue;

            const li = document.createElement('li');
            let name = `<strong>${perkData.name}</strong>` + (stack > 1 ? ` x ${stack}` : '');
            let description = perkData.description;
            let value;

            // 퍼센트 단위로 표시해야 하는 특성들
            if (['fast_learner', 'lucky', 'scavenger'].includes(perkId)) {
                value = Math.round((perkData.baseValue * stack) * 100);
            }
            // 횟수나 고정 수치로 표시해야 하는 특성들
            else if (['intuition', 'confidence'].includes(perkId)) {
                value = perkData.baseValue * stack;
            }
            // 그 외 {value}를 사용하는 특성 (현재는 없음)
            else if (perkData.id === 'vitality') {
                value = perkData.baseValue * stack;
            }
            else { // '인내의 결실'처럼 복합적인 값이나 {value}를 사용하지 않는 경우
                value = perkData.baseValue * stack;
            }

            if (value !== undefined && description.includes('{value}')) {
                description = description.replace('{value}', value);
            }
            li.innerHTML = `${name}: ${description}`;
            ui.perk.list.appendChild(li);
        }

        // 제거된 특성 표시
        for (const perkId in player.removedPerks) {
            if (player.perks[perkId]) continue; // 아직 보유 중이면 건너뛰기

            const perkData = PERKS.find(p => p.id === perkId);
            if (!perkData) continue;

            const li = document.createElement('li');
            li.classList.add('removed');
            // 제거된 특성은 효과 설명 없이 이름만 표시
            li.innerHTML = `<strong>${perkData.name}</strong>: ${perkData.description}`;
            ui.perk.list.appendChild(li);
        }

        if (player.steadyLearningBonus > 0) {
            const li = document.createElement('li');
            li.innerHTML = `<strong>[꾸준한 학습 효과]</strong>: 부품 탐색 확률 +${Math.round(player.steadyLearningBonus * 100)}%p`;
            ui.perk.list.appendChild(li);
        }
    }

    /** 플레이어 스탯 UI를 업데이트합니다. */
    function updateStatsUI() {
        ui.hpStat.textContent = `${player.hp} / ${player.maxHp}`;
        ui.xpStat.textContent = `${player.xp} / ${player.xpToLevelUp}`;
    }

    /** 연속 정답 횟수 UI를 업데이트합니다. */
    function updateStreakUI() {
        // 2회 이상 연속 정답일 때만 표시
        if (player.correctStreak > 1) {
            ui.streakCounter.innerHTML = `🔥 ${player.correctStreak}회 연속 정답!`;
            ui.streakCounter.classList.remove('hidden');
        } else {
            ui.streakCounter.classList.add('hidden');
        }
    }

    /** 부품 획득 현황 UI를 업데이트합니다. */
    function updatePartsUI() {
        ui.parts.slotsWrapper.innerHTML = '';
        ui.parts.toggleButton.textContent = `획득 부품 보기 (${player.parts.length}/${PARTS_TO_COLLECT.length})`;

        PARTS_DATA.forEach(partData => {
            const slot = document.createElement('div');
            slot.className = 'part-slot';

            if (player.parts.includes(partData.id)) {
                slot.classList.add('acquired');
                // '급조 부품'으로 얻은 부품은 다른 스타일 적용
                if (player.improvisedParts.includes(partData.id)) {
                    slot.classList.add('improvised');
                }
                const img = document.createElement('img');
                img.src = partData.image;
                img.alt = partData.name;
                img.className = 'part-image';

                const name = document.createElement('span');
                name.className = 'part-name';
                name.textContent = partData.name;

                slot.appendChild(img);
                slot.appendChild(name);
            } else {
                slot.textContent = '?';
            }
            ui.parts.slotsWrapper.appendChild(slot);
        });
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

    /** '확신' 버튼의 상태를 업데이트합니다. */
    function updateConfidenceButton() {
        if (player.confidenceCharges > 0) {
            ui.confidenceButton.classList.remove('hidden');
            ui.confidenceButton.textContent = `확신 (경험치 2배, ${player.confidenceCharges}회 남음)`;
            ui.confidenceButton.disabled = false;
        } else {
            ui.confidenceButton.classList.add('hidden');
        }
    }

    /** '확신' 특성을 사용합니다. */
    function useConfidence() {
        if (player.confidenceCharges <= 0 || isConfidenceActive) return;

        player.confidenceCharges--;
        isConfidenceActive = true;

        ui.confidenceButton.textContent = '확신 활성화됨!';
        ui.confidenceButton.disabled = true;

        showToast('이번 선택에 확신을 걸었습니다. 정답 시 경험치를 2배로 획득합니다!', 2500);
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
        if (player.perks['natural_healing'] && player.hp < player.maxHp && !player.perks['desperate_dash']) {
            player.hp = Math.min(player.maxHp, player.hp + 1);
            updateStatsUI();
        }
        // '목숨을 건 질주' 특성 처리
        if (player.perks['desperate_dash']) {
            player.hp -= 1;
            showToast('[목숨을 건 질주] 효과로 체력을 1 잃습니다.', 1500);
        }

        if (player.pendingLevelUps > 0) {
            player.pendingLevelUps--; // 처리할 레벨업 횟수 차감
            showPerkSelection();
        } else {
            // 3문제 연속 정답 시 복습 문제 출제
            if (player.correctStreak > 0 && player.correctStreak % 3 === 0) {
                showReviewQuiz();
            } else {
                nextSituation();
            }
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
    ui.parts.toggleButton.addEventListener('click', () => ui.parts.slotsWrapper.classList.toggle('hidden'));
    ui.confidenceButton.addEventListener('click', useConfidence);
    ui.perk.toggleButton.addEventListener('click', () => ui.perk.list.classList.toggle('hidden'));
    ui.restartButtons.forEach(button => button.addEventListener('click', initGame));

    // --- 7. 개발자용 디버그 모드 (삭제 용이) ---
    function setupDebugMode() {
        if (!ui.debug.panel) return;

        // 디버그 패널 토글
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.shiftKey && e.key === 'E') {
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
            player.confidenceCharges = parseInt(ui.debug.confidenceCharges.value, 10);
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
        ui.debug.confidenceCharges.value = player.confidenceCharges;

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
                if (perk.id === 'confidence') player.confidenceCharges += perk.baseValue;
                if (perk.id === 'vitality') {
                    const hpGain = perk.baseValue;
                    player.maxHp += hpGain;
                    player.hp += hpGain;
                }
                updateAllUI();
                populateDebugPanel();
            });

            // 우클릭: 제거
            perkEl.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                if (currentStacks <= 0) return;
                player.perks[perk.id]--;
                if (perk.id === 'intuition') player.intuitionCharges = Math.max(0, player.intuitionCharges - perk.baseValue);
                if (perk.id === 'confidence') player.confidenceCharges = Math.max(0, player.confidenceCharges - perk.baseValue);
                if (perk.id === 'vitality') {
                    const hpLoss = perk.baseValue;
                    player.maxHp = Math.max(1, player.maxHp - hpLoss);
                    player.hp = Math.min(player.hp, player.maxHp);
                }
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
        updatePartsUI();
        updateStreakUI();
        updatePerkListUI();
        updateIntuitionButton();
        updateConfidenceButton();
    }

    // --- 7. 게임 시작 ---
    initGame();
    setupDebugMode(); // 디버그 모드 활성화
});
