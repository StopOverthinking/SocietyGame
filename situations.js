const SITUATIONS = [
    {
        id: 1,
        title: '초원의 형제들',
        type: '주',
        image: 'images/situation_1.jpg',
        text: `당신은 몽골 부족의 지도자다. 부족은 <span class="highlight-yellow">양과 말을 기르며 살아가지만</span>, 가축이 먹을 풀이 부족해지고 있다. <span class="highlight-yellow">나무가 거의 없는</span> 이 풀밭에서 새 집을 지어야 한다. 당신의 선택은?`,
        choices: [
            { 
                text: '튼튼한 나무집', 
                image: 'images/choice_1_1.png',
                isCorrect: false,
                successChance: 0.4,
                successText: '나무집을 지었지만, 풀이 떨어져 <span class="highlight-yellow">곧 다른 곳으로 가야 했다</span>. 힘들여 지은 집은 버려져 자원을 많이 낭비했다.',
                failureText: '나무집을 지었지만, 풀이 떨어져 <span class="highlight-yellow">바로 다른 곳으로 가야 했다</span>. 집 짓는 데 시간이 너무 오래 걸려 부족이 어려움에 빠졌다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '철골 콘크리트 아파트', 
                image: 'images/choice_1_2.png',
                isCorrect: false,
                failureText: '<span class="highlight-yellow">건조한 풀밭에서 철근과 콘크리트</span>를 구하는 것은 불가능하다. 현실과 맞지 않는 계획에 부족민들이 당신을 믿지 않기 시작했다.<br> ❤️ -5',
                failureDamage: 5
            },
            { 
                text: '텐트형 집', 
                image: 'images/choice_1_3.png',
                isCorrect: true,
                successText: '쉽게 짓고 다시 거둘 수 있는 텐트형 집을 지었다. 풀이 다 떨어지자, 부족은 <span class="highlight-yellow">빠르게 다른 풀밭으로 옮겨갈 준비</span>를 마쳤다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_1.jpg',
                    text: '몽골의 전통 집 <span class="highlight-yellow">\'게르(Ger)\'</span>는 옮길 수 있는 집이다. 유목민은 풀을 찾아 계속 옮겨 다녀야 했기에, 쉽게 짓고 허물 수 있는 게르를 만들었다.'
                }
            },
        ]
    },
    {
        id: 2,
        title: '사막의 요새',
        type: '주',
        image: 'images/situation_2.jpg',
        text: `당신은 모로코 사막 마을의 건축가다. 이곳은 낮에는 <span class="highlight-yellow">아주 덥고</span> 밤에는 <span class="highlight-yellow">아주 추운</span> 날씨가 특징이다. 주변에는 <span class="highlight-yellow">나무가 거의 없고</span> 붉은 흙과 모래뿐이다. 사람들을 지켜줄 집을 만들어야 한다.`,
        choices: [
            { 
                text: '통나무 집', 
                image: 'images/choice_2_1.png',
                isCorrect: false,
                failureText: '이 지역에서 나무는 구하기 아주 힘든 재료다. <span class="highlight-yellow">모든 재료를 사 와야 해서</span> 돈이 너무 많이 들어 계획은 실패했다. <span class="highlight-yellow">주변에서 쉽게 구할 수 있는 재료</span>를 먼저 생각해야 했다.<br> ❤️ -5',
                failureDamage: 5
            },
            { 
                text: '얇은 천 텐트', 
                image: 'images/choice_2_2.png',
                isCorrect: false,
                failureText: '낮에는 버틸 만했지만, 해가 지자 얇은 천은 <span class="highlight-yellow">밤의 매서운 추위</span>를 전혀 막아주지 못했다. 사람들은 밤새 추위에 떨어야 했다. 이 지역의 <span class="highlight-yellow">낮과 밤의 큰 기온 차이</span>를 생각하지 않은 계획이었다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '창문이 작은 흙집', 
                image: 'images/choice_2_3.png',
                isCorrect: true,
                successText: '성공이다. 두꺼운 흙벽은 낮의 <span class="highlight-yellow">뜨거운 기운을 막아 집 안을 시원하게</span> 했고, 밤에는 <span class="highlight-yellow">낮 동안 저장한 열을 내보내 따뜻하게</span> 만들었다. 작은 창문이 열이 드나드는 것을 막아주었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_2.jpg',
                    text: '모로코 전통 집 <span class="highlight-yellow">\'카스바\'</span>는 사막 환경에 맞게 만들어졌다. 구하기 쉬운 흙으로 <span class="highlight-yellow">열을 잘 저장하는 두꺼운 벽</span>을 만들어 바깥의 온도 변화로부터 집 안을 지켜주며, <span class="highlight-yellow">자연스러운 냉난방 장치</span> 역할을 한다.'
                }
            }
        ]
    },
    {
        id: 3,
        title: '영혼과의 만찬',
        type: '기타',
        image: 'images/situation_3.jpg',
        text: `멕시코에서는 <span class="highlight-yellow">죽음을 삶의 또 다른 과정</span>으로 생각한다. <span class="highlight-yellow">일 년에 한 번, 세상을 떠난 영혼들이 가족을 만나러 돌아온다</span>고 믿는다. 당신은 바로 그날, 멕시코 친구 집에 찾아갔다. 가장 알맞은 행동은 무엇일까?`,
        choices: [
            { 
                text: '묵념과 애도', 
                image: 'images/choice_3_1.png',
                isCorrect: false,
                successChance: 0.4,
                successText: '친구가 설명했다. "마음은 고맙지만, 오늘은 슬퍼하는 날이 아니야. <span class="highlight-yellow">우리는 돌아가신 분을 웃으며 반기고 싶어</span>." 다행히 예의에 어긋나지는 않았다.',
                failureText: '당신이 조용히 있자 즐겁던 분위기가 차가워졌다. 친구가 말했다. "이건 <span class="highlight-yellow">슬퍼하는 날이 아니라 기뻐하는 날</span>이야. 당신의 행동은 좋은 뜻이었지만 예의에 어긋났어."<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '즐겁게 이야기하기', 
                image: 'images/choice_3_2.png',
                isCorrect: true,
                successText: '당신이 돌아가신 분과의 즐거운 기억을 이야기하자 모두 기뻐했다. "<span class="highlight-yellow">우리가 즐겁게 기억해주는 것이 영혼을 위한 최고의 선물</span>이야." 당신은 멕시코 문화를 깊이 이해했다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_3.jpg',
                    text: '멕시코의 <span class="highlight-yellow">\'죽은 자들의 날\'</span>은 축제 같은 분위기다. 죽음을 삶의 한 부분으로 보고 떠난 이와의 만남을 축하하며, 슬픔 대신 <span class="highlight-yellow">기억과 사랑으로 이어진 마음</span>을 중요하게 생각한다. 제단 \'오프렌다\'의 음식과 장식도 이런 생각에서 나온 것이다.'
                }
            },
            { 
                text: '도망가기', 
                image: 'images/choice_3_3.png',
                isCorrect: false,
                failureText: '당신이 뒷걸음질 치자 가족들의 표정이 굳어졌다. 친구가 실망하며 말했다. "영혼이 우리를 <span class="highlight-yellow">\'찾아온다\'</span>고 했잖아. <span class="highlight-yellow">사랑하는 가족을 무서운 귀신처럼 대하는 건</span> 정말 큰 실례야."<br> ❤️ -5',
                failureDamage: 5
            }
        ]
    },
    {
        id: 4,
        title: '성스러운 가르침',
        type: '의',
        image: 'images/situation_4.jpg',
        text: `당신은 <span class="highlight-yellow">여성 관광객</span>으로 튀르키예의 이슬람 사원에 갔다. 안내문에는 '<span class="highlight-yellow">신성한 장소이니 여성은 겸손하고 단정한 마음을 가지라</span>'고 적혀 있다. 입구에는 관광객에게 빌려주는 스카프가 놓여 있다. 어떻게 해야 할까?`,
        choices: [
            { 
                text: '입은 옷 그대로 들어가기', 
                image: 'images/choice_4_1.png',
                isCorrect: false,
                failureText: '사원 관리인이 당신을 막아섰다. "죄송하지만, 이곳의 규칙을 따라 주세요. <span class="highlight-yellow">이곳의 문화를 존중하지 않으면 들어올 수 없습니다</span>." 당신은 결국 사원에 들어가지 못했다.<br> ❤️ -4',
                failureDamage: 5
            },
            { 
                text: '단추를 열고 피부를 드러내기', 
                image: 'images/choice_4_2.png',
                isCorrect: false,
                failureText: '관리인이 당신을 막아세웠다. "신성한 장소에서 무슨 모습입니까? <span class="highlight-yellow">가르침에 따라 단정한 옷차림</span>을 해야 합니다." 당신은 사원에서 쫓겨났다.<br> ❤️ -6',
                failureDamage: 4
            },
            { 
                text: '스카프로 머리와 어깨를 가리기', 
                image: 'images/choice_4_3.png',
                isCorrect: true,
                successText: '올바른 선택이다. 당신이 스카프로 머리를 가리자 관리인이 미소로 반겨주었다. <span class="highlight-yellow">다른 문화의 신성한 장소를 찾아갈 때는 그들의 방식을 존중</span>하는 것이 중요함을 깨달았다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_4.jpg',
                    text: '이슬람 문화권 여성의 <span class="highlight-yellow">\'히잡(Hijab)\'</span>은 종교의 가르침에 따라 <span class="highlight-yellow">겸손하고 단정한 모습을 보여주는 믿음의 표현</span>이다. 특히 사원에 들어갈 때 히잡을 쓰는 것은 신에 대한 깊은 존경심을 보여주는 중요한 행동이다.'
                }
            }
        ]
    },
    {
        id: 5,
        title: '신 앞의 겸손함',
        type: '의',
        image: 'images/situation_5.jpg',
        text: `유대교의 중요한 가르침은 '<span class="highlight-yellow">신은 늘 우리 위에 계신다</span>'는 것이다. 신자들은 존경의 마음으로, <span class="highlight-yellow">자신의 머리 꼭대기를 신에게 직접 보이는 것</span>을 예의에 어긋난다고 생각한다. 유대교 회당 입구에 작은 모자들이 놓여 있다. 어떻게 행동해야 할까?`,
        choices: [
            { 
                text: '모자를 벗어 바구니에 넣기', 
                image: 'images/choice_5_1.png',
                isCorrect: false,
                successChance: 0.3,
                successText: '당신이 모자를 벗으려 하자 한 신도가 설명했다. "존중하려는 마음은 감사합니다. 하지만 저희는 <span class="highlight-yellow">오히려 머리를 가려서 신께 존경을 표현합니다</span>." 당신의 좋은 태도 덕분에 실수를 피했다.',
                failureText: '당신이 모자를 벗자 주변 사람들이 놀라며 수군거린다. 한 사람이 다가와 말했다. "어서 모자를 쓰세요. <span class="highlight-yellow">신 앞에서 머리를 보이는 것은 아주 예의에 어긋나는 행동입니다</span>."<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '바구니의 모자로 머리를 닦기', 
                image: 'images/choice_5_2.png',
                isCorrect: false,
                failureText: '당신이 모자로 얼굴을 닦으려 하자 옆 사람이 깜짝 놀라며 당신을 말렸다. "<span class="highlight-yellow">이건 신성한 물건입니다!</span> 걸레처럼 쓰다니, 정말 무례한 행동입니다!" 당신은 회당에서 쫓겨날 뻔했다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '모자를 써 머리를 가리기', 
                image: 'images/choice_5_3.png',
                isCorrect: true,
                successText: '정확한 판단이다. 당신이 자연스럽게 모자를 쓰자 주변 신도들이 따뜻한 미소로 반겨주었다. <span class="highlight-yellow">머리를 가리는 행동</span>으로 당신은 이들의 종교와 문화를 존중하는 마음을 보여주었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_5.jpg',
                    text: '유대인 남성이 머리에 쓰는 작은 모자 <span class="highlight-yellow">\'키파\'</span>는 <span class="highlight-yellow">항상 내 위에 신이 있다는 것을 잊지 않고, 겸손한 마음을 갖기 위한 믿음의 표현</span>이다. 신자들에게는 삶의 한 부분처럼 중요한 옷이다.'
                }
            }
        ]
    },
    {
        id: 6,
        title: '혹한의 생존법',
        type: '의',
        image: 'images/situation_6.jpg',
        text: `당신은 겨울 시베리아에 도착했다. 기온은 영하 20도 아래고, 넓은 들판을 가로지르는 <span class="highlight-yellow">칼바람</span>이 분다. 잠시만 밖에 있어도 <span class="highlight-yellow">귀와 턱, 뺨의 감각이 사라진다.</span> 머리를 지켜줄 가장 좋은 방법은 무엇일까?`,
        choices: [
            { 
                text: '머리까지 덮는 방한 비니', 
                image: 'images/choice_6_1.png',
                isCorrect: false,
                successChance: 0.3,
                successText: '머리의 따뜻함은 지킬 수 있었지만, <span class="highlight-yellow">칼바람을 그대로 맞는 귀와 뺨</span>은 막을 수 없었다. 곧 심하게 동상에 걸릴 위험을 깨달았다.',
                failureText: '두꺼운 비니도 매서운 추위 앞에서는 힘이 없었다. 차가운 바람이 모자 사이를 파고들었고, <span class="highlight-yellow">가려지지 않은 귀와 턱은 감각이 없어졌다.</span> 당신은 체온이 너무 떨어져 위험에 빠졌다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '귀와 턱을 덮는 가죽 모자', 
                image: 'images/choice_6_2.png',
                isCorrect: true,
                successText: '최고의 선택이다. 두꺼운 가죽과 털이 머리의 열을 지켜주었고, <span class="highlight-yellow">귀와 턱, 뺨까지 감싸는 덮개</span>가 칼바람으로부터 당신을 완벽하게 보호했다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_6.jpg',
                    text: '러시아 털모자 <span class="highlight-yellow">\'샤프카-우샨카\'</span>는 아주 심한 추위가 만들어낸 물건이다. \'우샨카\'는 \'귀 덮개가 달린 모자\'라는 뜻으로, <span class="highlight-yellow">시베리아 칼바람으로부터 귀, 턱, 목덜미처럼 약한 부분을 보호</span>하기 위해 만들어진 생존 도구에 가깝다.'
                }
            },
            { 
                text: '방수 챙모자', 
                image: 'images/choice_6_3.png',
                isCorrect: false,
                failureText: '치명적인 판단 착오다. 방수 기능은 눈을 막아주었지만, <span class="highlight-yellow">열을 보존하는 데는 아무런 도움이 되지 않았다.</span> 챙 사이로 들어온 냉기가 당신의 체온을 급격히 빼앗아 갔다.<br> ❤️ -6',
                failureDamage: 6
            }
        ]
    },
    {
        id: 7,
        title: '태양과 비의 땅',
        type: '의',
        image: 'images/situation_7.jpg',
        text: `당신은 베트남의 농부다. 이곳은 오전에 <span class="highlight-yellow">뜨거운 햇볕</span>이 내리쬐다가, 오후에는 갑자기 <span class="highlight-yellow">아주 많은 비</span>가 쏟아진다. 햇빛과 비에 모두 대비할 수 있는 가장 쓸모 있는 모자는 무엇일까?`,
        choices: [
            { 
                text: '가벼운 밀짚모자', 
                image: 'images/choice_7_1.png',
                isCorrect: false,
                failureText: '잘못된 판단이었다. 밀짚모자는 햇볕은 잘 막아주었지만, 갑자기 쏟아진 많은 비에 금방 망가져 버렸다. <u>비에 대한 대비</u>가 전혀 되지 않았다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '원뿔형 나뭇잎 모자', 
                image: 'images/choice_7_2.png',
                isCorrect: true,
                successText: '좋은 선택이다. 넓은 챙은 햇볕을 막아 그늘을 만들었고, 뾰족한 모양 덕분에 <span class="highlight-yellow">쏟아지는 비가 그대로 흘러내려</span> 우산 역할을 했다. 모자 하나로 두 문제를 모두 해결했다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_7.jpg',
                    text: '베트남 전통 모자 <span class="highlight-yellow">\'논라(Nón Lá)\'</span>는 덥고 비가 많이 오는 날씨에 딱 맞게 만들어진 물건이다. 구하기 쉬운 야자수 잎으로 가볍게 만들어, <span class="highlight-yellow">강한 햇빛과 갑작스러운 비를 동시에 막도록</span> 만들어졌다.'
                }
            },
            { 
                text: '방수 우비 ', 
                image: 'images/choice_7_3.png',
                isCorrect: false,
                successChance: 0.3,
                successText: '비는 피할 수 있었지만, 비가 그치고 해가 뜨자 <span class="highlight-yellow">바람이 통하지 않는 방수 우비</span> 때문에 머리에 땀이 차고 더워서 일할 수 없었다.',
                failureText: '최악의 선택이었다. 비가 오지 않는 동안, 바람이 안 통하는 방수 우비는 머리를 찜통으로 만들었다. <span class="highlight-yellow">땀과 더운 기운이 빠져나가지 못해</span> 어지러움을 느끼며 쓰러질 뻔했다.<br> ❤️ -5',
                failureDamage: 5
            }
        ]
    },
    {
        id: 8,
        title: '숲의 온기',
        type: '주',
        image: 'images/situation_8.jpg',
        text: `당신은 19세기 캐나다에 처음 정착한 사람이다. 이곳은 <span class="highlight-yellow">나무가 빽빽한 숲</span> 덕분에 나무를 구하기 쉽다. 하지만 겨울에는 영하 20도 이하로 떨어지고 <span class="highlight-yellow">몇 달 동안 많은 눈</span>이 계속 내린다. 추위와 눈의 무게를 견딜 튼튼한 집이 필요하다. 어떤 집을 지어야 할까?`,
        choices: [
            { 
                text: '직육면체 형태의 얇은 나무판자 집', 
                image: 'images/choice_8_1.png',
                isCorrect: false,
                failureText: '아주 큰 실수였다. 얇은 판자는 추위를 막지 못했고, <span class="highlight-yellow">지붕에 쌓인 눈의 무게</span>를 이기지 못한 집은 결국 무너졌다. 재료의 양뿐만 아니라 <span class="highlight-yellow">특징</span>을 생각해야 했다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '동굴을 이용', 
                image: 'images/choice_8_2.png',
                isCorrect: false,
                successChance: 0.2,
                successText: '동굴은 바람을 막아주었지만, 땅에서 올라오는 차가운 기운과 축축함, 그리고 <span class="highlight-yellow">야생 동물의 공격 위험</span> 때문에 오랫동안 머물 수는 없었다.',
                failureText: '끔찍한 선택이었다. 당신이 잠든 사이, 겨울잠을 자려던 <span class="highlight-yellow">굶주린 곰</span>이 동굴로 들어왔다. 겨우 도망쳤지만 모든 것을 잃었다.<br> ❤️ -5',
                failureDamage: 5
            },
            { 
                text: '경사진 지붕의 두꺼운 통나무 집', 
                image: 'images/choice_8_3.png',
                isCorrect: true,
                successText: '뛰어난 판단이다. 두꺼운 통나무 벽은 차가운 기운을 막아 <span class="highlight-yellow">집 안을 따뜻하게 지켜주었다</span>. 기울어진 지붕 덕분에 <span class="highlight-yellow">쌓인 눈이 저절로 흘러내려</span> 집이 무너질 걱정도 없었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_8.jpg',
                    text: '캐나다 <span class="highlight-yellow">\'통나무집(Log Cabin)\'</span>은 춥고 눈 많은 날씨와 빽빽한 숲 환경이 합쳐져 만들어졌다. 구하기 쉬운 나무를 쓰되, <span class="highlight-yellow">두꺼운 통나무 자체를 추위를 막는 재료로 사용</span>해 매서운 추위를 견딘다. 지붕을 기울어지게 만들어 <span class="highlight-yellow">많은 눈의 무게를 버티도록</span> 만들었다.'
                }
            }
        ]
    },
    {
        id: 9,
        title: '강과 함께 사는 법',
        type: '주',
        image: 'images/situation_9.jpg',
        text: `당신은 방글라데시 강가 마을 주민이다. 이 지역은 땅이 낮고 평평한 <span class="highlight-yellow">세계에서 가장 큰 삼각주</span>다. 매년 비가 많이 오는 시기에는 <span class="highlight-yellow">강물이 넘쳐</span> 마을 전체가 <span class="highlight-yellow">몇 달 동안 물에 잠긴다.</span> 홍수 속에서 가족과 재산을 지킬 집을 지어야 한다.`,
        choices: [
            { 
                text: '튼튼한 벽돌집', 
                image: 'images/choice_9_1.png',
                isCorrect: false,
                failureText: '최악의 판단이었다. 비가 많이 오자 불어난 강물은 당신의 집을 그대로 삼켜버렸다. 집이 물에 잠겨, 가족과 함께 지붕 위에서 도움을 기다려야 했다. <span class="highlight-yellow">홍수를 힘으로 이기려 한 것</span>이 실수였다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '높은 나무 기둥 위에 지은 집', 
                image: 'images/choice_9_2.png',
                isCorrect: true,
                successText: '훌륭한 선택이다. 강물이 마을을 덮쳤지만, 당신의 집은 <span class="highlight-yellow">높은 기둥 덕분에 물에 잠기지 않았다.</span> 가족들은 안전하게 비가 그치기를 기다릴 수 있었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_9.jpg',
                    text: '방글라데시에서는 되풀이되는 홍수에 맞추기 위해 여러 종류의 집을 짓는다. 땅에 높은 기둥을 세우는 <span class="highlight-yellow">\'고상 가옥\'</span>이나, 물 위에 집을 띄우는 <span class="highlight-yellow">\'수상 가옥\'</span>이 대표적인 예다.'
                }
            },
            { 
                text: '물에 뜨는 뗏목형 집', 
                image: 'images/choice_9_3.png',
                isCorrect: true,
                successText: '지혜로운 해결책이다. 강물이 불어나자, 당신의 집은 <span class="highlight-yellow">물 높이에 맞춰 저절로 떠올랐다.</span> 덕분에 가족과 재산 모두 안전했고, 배로 자유롭게 움직일 수 있었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_9.jpg',
                    text: '방글라데시에서는 되풀이되는 홍수에 맞추기 위해 여러 종류의 집을 짓는다. 땅에 높은 기둥을 세우는 <span class="highlight-yellow">\'고상 가옥\'</span>이나, 물 위에 집을 띄우는 <span class="highlight-yellow">\'수상 가옥\'</span>이 대표적인 예다.'
                }
            }
        ]
    },
   {
        id: 10,
        title: '할랄과 하람',
        type: '식',
        image: 'images/situation_10.jpg',
        text: `당신은 <span class="highlight-yellow">이슬람 국가</span>인 인도네시아를 여행 중이다. 이 종교의 규칙은 <span class="highlight-yellow">정신을 흐리게 만드는 것</span>과 돼지고기 같은 특정 동물을 <span class="highlight-yellow">금지된 음식(하람)</span>으로 정한다. 현지 친구의 저녁 식사에 초대받았다. 어떤 선물이 가장 알맞을까?`,
        choices: [
            { 
                text: '돼지고기 바베큐', 
                image: 'images/choice_10_1.png',
                isCorrect: false,
                failureText: '당신이 선물을 내밀자 집주인의 얼굴이 굳어졌다. 파티 분위기는 순식간에 얼어붙었다. 당신은 이 문화에서 <span class="highlight-yellow">가장 기분 나쁜 행동</span>을 저질렀고, 결국 쫓겨났다.<br> ❤️ -7',
                failureDamage: 7
            },
            { 
                text: '고급 샴페인(술)', 
                image: 'images/choice_10_2.png',
                isCorrect: false,
                failureText: '집주인은 곤란한 표정으로 선물을 받지 않았다. "마음은 감사합니다. 하지만 규칙상 <span class="highlight-yellow">정신을 흐리게 만드는 것도 금지</span>되어 있습니다." 당신은 주어진 설명을 꼼꼼히 읽지 않았다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '과일 디저트', 
                image: 'images/choice_10_3.png',
                isCorrect: true,
                successText: '생각이 깊은 선택이다. 당신이 가져온 과일 디저트를 보고 가족 모두가 기뻐했다. 당신은 <span class="highlight-yellow">문화를 존중하는 예의 바른 손님</span>으로 환영받았다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_10.jpg',
                    text: '이슬람의 규칙은 무슬림의 생활, 특히 음식 문화에 큰 영향을 준다. 규칙에서 허락하는 <span class="highlight-yellow">\'할랄\'</span> 음식만 먹을 수 있으며, 돼지고기나 술처럼 <span class="highlight-yellow">정신에 영향을 주는 \'하람\'</span>은 절대 먹지 않는다.'
                }
            }
        ]
    },
    {
        id: 11,
        title: '첫 번째 추수감사절',
        type: '식',
        image: 'images/situation_11.jpg',
        text: `당신은 17세기 초 북미 대륙에 새로 온 사람이다. <span class="highlight-yellow">원주민의 도움으로 첫 농사를 무사히</span> 마쳤다. 고마움을 표현하기 위해 원주민들을 저녁 식사에 초대했다. 중심 요리는 <span class="highlight-yellow">이 땅에서 많이 구할 수 있는</span> 음식이어야 한다. 소와 닭은 농사를 위해 아주 소중하다. 어떤 음식이 가장 좋을까?`,
        choices: [
            { 
                text: '소고기 스테이크', 
                image: 'images/choice_11_1.png',
                isCorrect: false,
                failureText: '앞을 내다보지 못한 판단이었다. 농사에 필요한 소는 중요한 재산이었다. <span class="highlight-yellow">소중한 가축을 잡아먹은 탓</span>에, 다음 해 농사에 아주 큰 문제가 생겼다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '옥수수 요리', 
                image: 'images/choice_11_2.png',
                isCorrect: false,
                successChance: 0.5,
                successText: '옥수수 요리는 훌륭했지만, 잔치의 중심이 될 <span class="highlight-yellow">푸짐한 고기 요리가 없어</span> 모두 아쉬워했다. 잔치는 사람들의 기대를 완전히 채워주지는 못했다.',
                failureText: '옥수수 요리만 내놓자 손님들은 크게 실망했다. 모두가 기다렸던 것은 <span class="highlight-yellow">든든한 고기 요리</span>였다. 잔치의 가장 중요한 부분을 놓쳐 분위기가 어색해졌다.<br> ❤️ -3',
                failureDamage: 3
            },
            { 
                text: '야생 날짐승 구이', 
                image: 'images/choice_11_3.png',
                isCorrect: true,
                successText: '현실적인 판단이다. 사냥팀이 이 땅의 토종새인 커다란 <span class="highlight-yellow">야생 칠면조</span>를 여러 마리 잡아왔다. 칠면조 구이는 모든 손님을 배불리 먹이기에 충분했고, 소중한 가축을 잡을 필요도 없었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_11.jpg',
                    text: '미국에서는 <span class="highlight-yellow">\'추수감사절\'</span>에 칠면조 요리를 먹는 전통이 있다. 당시 새로 온 사람들에게 칠면조는 <span class="highlight-yellow">북미 대륙에서 쉽게 구할 수 있는 풍부한 먹거리</span>였다. 살아남기 위한 현실적인 선택이 이제는 문화의 상징이 되었다.'
                }
            }
        ]
    },
    {
        id: 12,
        title: '초원의 요리사',
        type: '식',
        image: 'images/situation_12.jpg',
        text: `당신은 중앙아시아 풀밭의 튀르키예 유목민 요리사다. 부족은 <span class="highlight-yellow">끊임없이 옮겨 다니며</span>, 풀밭에서는 <span class="highlight-yellow">불을 피울 나무를 구하기 아주 어렵다.</span> 가진 양고기를 가장 빠르고 효과적으로 요리해야 한다. 어떤 방법을 고르겠는가?`,
        choices: [
            { 
                text: '덩어리째로 굽기', 
                image: 'images/choice_12_1.png',
                isCorrect: false,
                failureText: '아주 큰 실수였다. 큰 고기 덩어리를 익히는 데 필요한 <span class="highlight-yellow">땔감을 충분히 구할 수 없었고</span>, 불이 약해 고기는 제대로 익지도 않았다. 귀한 고기와 시간을 낭비하여 부족민들의 불평을 샀다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '잘게 잘라 꼬치에 꿰어 굽기', 
                image: 'images/choice_12_2.png',
                isCorrect: true,
                successText: '지혜로운 방법이다. 고기를 작게 자르니 <span class="highlight-yellow">적은 땔감으로도 금방</span> 익힐 수 있었고, 꼬치 덕분에 골고루 익힐 수 있었다. 가장 적은 재료로 모두에게 따뜻한 음식을 줄 수 있었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_12.jpg',
                    text: '튀르키예 대표 요리 <span class="highlight-yellow">\'케밥(Kebab)\'</span>은 유목민의 생활 속에서 태어났다. 땔감이 부족한 풀밭에서 고기를 빨리 익히기 위해 <span class="highlight-yellow">작게 잘라 꼬치에 꿰어 굽는 방법</span>이 생겨났다. 오늘날에는 커다란 꼬치구이 형태로 바뀌기도 한다.'
                }
            },
            { 
                text: '물과 함께 끓이기', 
                image: 'images/choice_12_3.png',
                isCorrect: false,
                failureText: '잘못된 판단이다. <span class="highlight-yellow">메마른 풀밭에서 물은 마시기에도 부족</span>했다. 요리를 위해 귀한 물을 너무 많이 낭비하여 부족 전체가 물 부족으로 고통받았다.<br> ❤️ -5',
                failureDamage: 5
            }
        ]
    },
    {
        id: 13,
        title: '신성한 생명',
        type: '식',
        image: 'images/situation_13.jpg',
        text: `당신은 <span class="highlight-yellow">힌두교를 많이 믿는 인도</span> 가정에 저녁 식사 초대를 받았다. 힌두교는 <span class="highlight-yellow">모든 생명을 소중히 여기는 '아힘사(해치지 않음)'</span> 정신을 중요하게 생각한다. 특히 암소는 <span class="highlight-yellow">신성한 동물로 여겨져 절대 먹지 않는다.</span> 함께 즐길 수 있는 음식은 무엇일까?`,
        choices: [
            { 
                text: '소고기 스테이크', 
                image: 'images/choice_13_1.png',
                isCorrect: false,
                failureText: '당신이 소고기를 꺼내자 집주인의 얼굴이 굳어졌다. "저희에게... <span class="highlight-yellow">신성한 소를 먹으라는 건가요?</span>" 당신의 선물은 끔찍한 무례함으로 여겨져 집에서 쫓겨났다.<br> ❤️ -7',
                failureDamage: 7
            },
            { 
                text: '닭고기 카레', 
                image: 'images/choice_13_2.png',
                isCorrect: false,
                successChance: 0.7,
                successText: '다행히 그 가족은 닭고기를 먹었다. 하지만 집주인이 설명해주었다. "맛있게 먹겠습니다. 하지만 <span class="highlight-yellow">아힘사 정신에 따라 고기를 안 먹는 힌두교도</span>도 많습니다."',
                failureText: '집주인은 곤란한 표정으로 말했다. "죄송하지만 저희 가족은 <span class="highlight-yellow">아힘사 가르침에 따라 어떤 고기도 먹지 않습니다.</span>" 당신의 요리에는 아무도 손대지 못했다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '채식 카레', 
                image: 'images/choice_13_3.png',
                isCorrect: true,
                successText: '완벽한 선택이었다. 집주인은 당신의 채식 카레를 보고 활짝 웃으며 고마워했다. "저희 문화를 존중해주셨군요. <span class="highlight-yellow">모든 생명을 소중히 여기는 마음</span>이 담긴 훌륭한 선물입니다."<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_13.jpg',
                    text: '인도 음식 문화의 큰 특징은 힌두교의 영향이다. 생명을 소중히 여기는 <span class="highlight-yellow">\'아힘사\'</span> 가르침에 따라 많은 힌두교 신자들이 채식을 하며, 특히 <span class="highlight-yellow">신성하게 여기는 소는 절대 먹지 않는다.</span>'
                }
            }
        ]
    },
    { // ID 14, 15 삭제됨
        id: 16, // ID 14, 15 삭제됨
        title: '미래를 위한 약속', // ID 14, 15 삭제됨
        type: '기타',
        image: 'images/situation_16.jpg', // ID 14, 15 삭제됨
        text: `당신은 덴마크에서 법을 만드는 사람이다. 새로운 이름 짓기 법을 만들어야 한다. 개인의 자유도 중요하지만, '<span class="highlight-yellow">개인의 자유가 사회의 안정이나 어린이의 행복을 해쳐서는 안 된다</span>'는 모두의 약속이 있다. 이 가치관을 법에 어떻게 담아내겠는가?`,
        choices: [
            { 
                text: '모든 이름을 허용', 
                image: 'images/choice_16_1.png',
                isCorrect: false,
                failureText: '잘못된 생각이다. 당신의 법은 <span class="highlight-yellow">개인의 자유가 어린이의 행복을 해칠 수 있다는 사회의 걱정</span>을 담아내지 못했다. "자유가 제멋대로가 되어서는 안 된다"는 비판과 함께 법은 통과되지 못했다.<br> ❤️ -5',
                failureDamage: 5
            },
            { 
                text: '정해진 이름 외엔 모두 금지', 
                image: 'images/choice_16_2.png',
                isCorrect: false,
                failureText: '지나치게 엄격한 법이다. 당신의 법은 <span class="highlight-yellow">개인의 자유를 존중해야 한다는 사회의 약속</span>을 무시했다는 비판을 받았다. "전통을 지키는 것이 개인의 권리를 막아서는 안 된다"는 반대에 부딪혔다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '정해진 이름 외에는 법원에서 심사', 
                image: 'images/choice_16_3.png',
                isCorrect: true,
                successText: '정확한 판단이다. 당신의 법은 어린이의 행복과 사회를 보호하는 틀 안에서 개인의 자유를 허락하여, <span class="highlight-yellow">덴마크 사회의 중요한 가치관</span>을 완벽하게 담아냈다. 법은 많은 지지를 받으며 통과되었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_16.jpg',
                    text: '덴마크에서는 기본적으로 <span class="highlight-yellow">정부가 허락한 이름 목록</span>에서만 이름을 짓는다. 이는 문화유산과 아이를 보호하기 위해서다. 새로운 이름은 <span class="highlight-yellow">따로 심사</span>를 거쳐 등록할 수 있으며, 이는 조상들의 것을 소중히 여기는 생각이 담겨있는 것이다.'
                }
            }
        ]
    },
    {
        id: 17,
        title: '태양을 피하는 방법',
        type: '기타',
        image: 'images/situation_17.jpg',
        text: `당신은 스페인의 농부다. 여름 오후 2시가 넘어가면 <span class="highlight-yellow">기온이 아주 높게 올라간다.</span> 뜨거운 태양 아래서 계속 일하는 것은 <span class="highlight-yellow">위험하고 일의 효율도 떨어진다</span>. 아직 끝낼 일이 많을 때, 하루 일하는 시간을 어떻게 짜는 것이 가장 지혜로울까?`,
        choices: [
            { 
                text: '물을 마시며 계속 일한다', 
                image: 'images/choice_17_1.png',
                isCorrect: false,
                failureText: '무리한 선택이었다. 끓어오르는 더위는 당신의 힘을 빠르게 빼앗았고, 결국 당신은 <span class="highlight-yellow">지쳐 쓰러져</span> 일을 끝마치지 못했다. 자연의 힘을 의지만으로 이기려 한 것은 어리석었다.<br> ❤️ -5',
                failureDamage: 5
            },
            { 
                text: '가장 더울 때 쉬고, 서늘해지면 일한다', 
                image: 'images/choice_17_2.png',
                isCorrect: true,
                successText: '가장 효율적인 판단이다. 실내에서 쉰 뒤 서늘해진 오후에 다시 일했다. <span class="highlight-yellow">다시 채워진 힘 덕분에 일의 효율은 최고로 올랐고</span>, 안전하고 빠르게 일을 끝마칠 수 있었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_17.jpg',
                    text: '스페인의 <span class="highlight-yellow">\'시에스타(Siesta)\'</span>는 한낮의 낮잠 문화다. 이는 게으름이 아니라, <span class="highlight-yellow">가장 덥고 일이 잘 안되는 시간을 피해</span> 힘을 아끼고, 서늘한 시간에 효율을 높이는 <span class="highlight-yellow">지혜로운 시간 관리 방법</span>이다.'
                }
            },
            { 
                text: '그늘에서 계속 일한다', 
                image: 'images/choice_17_3.png',
                isCorrect: false,
                successChance: 0.3,
                successText: '그늘 덕분에 최악은 피했지만, 공기 전체가 뜨거워 일의 효율은 오르지 않았고 <span class="highlight-yellow">오후 내내 힘없는 상태로 일해야 했다.</span> 평소보다 두 배의 시간을 낭비했다.',
                failureText: '그늘도 소용없었다. 땅에서 올라오는 열기와 뜨거운 공기는 당신을 지치게 만들었다. 결국 당신은 <span class="highlight-yellow">느린 속도로 일하는 시늉</span>만 냈을 뿐, 아무런 결과도 얻지 못했다.<br> ❤️ -3',
                failureDamage: 3
            }
        ]
    },
    {
        id: 18,
        title: '사막의 생존 의복',
        type: '의',
        image: 'images/situation_18.jpg',
        text: `당신은 사우디아라비아의 사막을 가로지를 상인이다. 낮에는 그늘 한 점 없는 곳에서 <span class="highlight-yellow">아주 강한 햇볕</span>이 내리쬐고, 가끔 <span class="highlight-yellow">뜨겁고 메마른 모래바람</span>이 분다. 몸을 보호하고 시원하게 지켜줄 가장 효과적인 옷차림은 무엇일까?`,
        choices: [
            { 
                text: '반소매 옷', 
                image: 'images/choice_18_1.png',
                isCorrect: false,
                failureText: '재앙 같은 선택이었다. 당신의 맨살은 <span class="highlight-yellow">강한 햇볕에 그대로 드러나 심한 화상</span>을 입었다. 마른 바람은 땀을 너무 빨리 마르게 해 몸에 물이 부족해지는 증상을 일으켰다.<br> ❤️ -7',
                failureDamage: 7
            },
            { 
                text: '온몸을 덮는 헐렁한 흰색 옷', 
                image: 'images/choice_18_2.png',
                isCorrect: true,
                successText: '지혜로운 판단이다. 흰색 긴 옷은 <span class="highlight-yellow">햇빛을 튕겨내</span> 몸이 뜨거워지는 것을 막았고, 헐렁한 품 덕분에 <span class="highlight-yellow">옷과 몸 사이로 바람이 통해</span> 시원함을 느낄 수 있었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_18.jpg',
                    text: '아랍 문화권 남성의 전통 옷 <span class="highlight-yellow">\'토브(Thobe)\'</span>는 사막 날씨에 가장 알맞은 옷이다. <span class="highlight-yellow">햇빛을 튕겨내는 밝은 색</span>과, 피부를 보호하고 바람이 통하게 하는 <span class="highlight-yellow">헐렁하고 긴 모양</span>으로 아주 심한 더위와 건조함에 맞선다.'
                }
            },
            { 
                text: '몸에 딱 붙는 검은색 옷', 
                image: 'images/choice_18_3.png',
                isCorrect: false,
                failureText: '완전히 잘못된 생각이었다. 검은 옷은 햇빛의 열을 그대로 빨아들여 몸을 오븐처럼 만들었다. 몸에 붙는 모양은 <span class="highlight-yellow">바람이 통하는 것을 막아 열을 옷 안에 가두는</span> 최악의 결과를 만들었다.<br> ❤️ -5',
                failureDamage: 5
            }
        ]
    },
    {
        id: 19,
        title: '편의의 왕국',
        type: '기타',
        image: 'images/situation_19.jpg',
        text: `당신은 일본 대도시의 사업가다. 일본은 <span class="highlight-yellow">범죄가 적어 안전하고</span>, <span class="highlight-yellow">편리함과 효율</span>을 중요하게 생각하지만, <span class="highlight-yellow">가게세와 직원 월급이 아주 비싸다.</span> 좁은 공간에서 24시간 음료를 팔고 싶다. 가장 좋은 사업 방법은 무엇일까?`,
        choices: [
            { 
                text: '직원을 2명 고용해 교대시킴', 
                image: 'images/choice_19_1.png',
                isCorrect: false,
                failureText: '사업은 한 달 만에 망할 위기에 처했다. 비싼 가게세와 직원 월급을 감당할 수 없었다. <span class="highlight-yellow">돈 문제를 해결하지 않고는</span> 24시간 사업을 계속할 수 없다는 것을 깨달았다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '돈통만 놓아둔 무인상점 설치', 
                image: 'images/choice_19_2.png',
                isCorrect: false,
                failureText: '사업으로는 실패했다. 대부분 정직하게 돈을 냈지만, 일부는 그렇지 않았다. 무엇보다 거스름돈 준비와 물건을 채우는 과정이 <span class="highlight-yellow">너무 불편하고 느렸다</span>.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '24시간 작동하는 자동판매기 설치', 
                image: 'images/choice_19_3.png',
                isCorrect: true,
                successText: '뛰어난 사업 방법이다. 자동판매기는 가장 적은 돈으로 24시간 돈을 벌어들였다. 당신은 일본의 <span class="highlight-yellow">사회와 경제 환경에 완벽하게 적응</span>하여 사업을 성공시켰다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_19.jpg',
                    text: '일본의 <span class="highlight-yellow">\'자동판매기(자판기)\'</span> 문화는 도시 환경에 가장 알맞은 사업 방식이다. <span class="highlight-yellow">비싼 직원 월급과 가게세, 낮은 범죄율, 편리함을 좋아하는 문화</span>가 합쳐져 사람 없는 자동화 가게가 발전할 최고의 조건을 만들었다.'
                }
            }
        ]
    },
    {
        id: 20,
        title: '땅을 만드는 기술',
        type: '주',
        image: 'images/situation_20.jpg',
        text: `당신은 17세기 네덜란드 지도자다. 나라 땅의 대부분이 <span class="highlight-yellow">바다보다 낮은 늪지대</span>라 살 수 없다. 가장 먼저 할 일은 물을 퍼내어 <span class="highlight-yellow">새로운 땅</span>을 만드는 것이다. 펌프를 돌릴 힘이 필요하지만, 주변에는 <span class="highlight-yellow">강하고 끊임없는 바람</span>만 분다. 어떤 힘을 이용해야 할까?`,
        choices: [
            { 
                text: '양동이로 퍼내기</u>.', 
                image: 'images/choice_20_1.png',
                isCorrect: false,
                failureText: '결과는 끔찍했다. 주민들이 밤낮없이 물을 퍼냈지만, <span class="highlight-yellow">땅속에서 스며 나오는 물의 양</span>을 따라잡을 수 없었다. 사람들은 지쳐 쓰러졌고, 늪의 물 높이는 그대로였다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '말이 끄는 힘으로 펌프 돌리기', 
                image: 'images/choice_20_2.png',
                isCorrect: false,
                successChance: 0.2,
                successText: '아주 많은 돈을 들여 말을 이용해 작은 땅 하나를 얻는 데 성공했다. 하지만 <span class="highlight-yellow">말을 키우는 데 드는 돈</span> 때문에 더 이상 땅을 넓히는 일은 불가능했다.',
                failureText: '처음에는 효과가 있는 듯 보였지만, <span class="highlight-yellow">수많은 말을 먹일 엄청난 양의 먹이</span>를 감당할 수 없었다. 결국 돈 문제로 계획은 멈췄고, 땅은 다시 물에 잠겼다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '풍차를 만들어, 바람으로 펌프 돌리기', 
                image: 'images/choice_20_3.png',
                isCorrect: true,
                successText: '새롭고 놀라운 해결책이다. 바람으로 움직이는 펌프는 밤낮으로 물을 퍼냈고, 마침내 늪은 기름진 농사짓는 땅으로 변했다. 당신은 <span class="highlight-yellow">자연의 힘을 이용해 자연의 어려움을 이겨내는</span> 위대한 일을 해냈다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_20.jpg',
                    text: '옛날 네덜란드에서는 곳곳에 <span class="highlight-yellow">\'풍차\'</span>를 세워 물을 퍼냈다. <span class="highlight-yellow">바다보다 낮은 땅</span>이라는 자연 환경을, <span class="highlight-yellow">끊임없이 부는 바람</span>이라는 또 다른 자연 환경을 이용해 이겨낸 것이다. 이 풍차는 지금 전기로 움직이는 펌프로 바뀌었지만, 일부는 여전히 남아 있다.'
                }
            }
        ]
    },
    {
        id: 21,
        title: '어둠과 추위 속에서',
        type: '주',
        image: 'images/situation_21.jpg',
        text: `당신은 옛날 핀란드에 처음 정착한 사람이다. 길고 매서운 겨울이 찾아왔다. 해가 거의 뜨지 않는 <span class="highlight-yellow">끝없는 어둠</span>과 <span class="highlight-yellow">아주 심한 추위</span>가 계속된다. 이런 환경은 마을 전체를 외롭게 만든다. <span class="highlight-yellow">몸을 따뜻하게 하고, 깨끗함을 지키며, 마을 사람들과의 관계</span>를 좋게 할 방법이 필요하다.`,
        choices: [
            { 
                text: '각자 자기 집에서 따뜻하게 지낸다', 
                image: 'images/choice_21_1.png',
                isCorrect: false,
                failureText: '최악의 결과였다. 사람들은 추위는 견뎠지만, 긴 어둠 속에서 <span class="highlight-yellow">완전히 혼자가 되어 깊은 슬픔</span>에 빠졌다. 함께하는 마음이 사라지고 마을은 생기를 잃었다.<br> ❤️ -5',
                failureDamage: 5
            },
            { 
                text: '마을 중앙에 큰 모닥불을 피운다', 
                image: 'images/choice_21_2.png',
                isCorrect: false,
                successChance: 0.2,
                successText: '며칠간은 효과가 있었다. 사람들은 함께 모여 생기를 되찾았다. 하지만 <span class="highlight-yellow">효율이 낮은 모닥불은 일주일 만에 겨울 땔감의 절반</span>을 태워버렸고, 마을은 더 큰 추위의 위험에 빠졌다.',
                failureText: '아주 큰 실수였다. 커다란 모닥불은 열기 대부분을 공기 중으로 날려 <span class="highlight-yellow">귀한 땔감만 빠르게 낭비</span>했다. 결국 땔감이 떨어져 마을 전체가 추위에 떨게 되었다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '작은 방에 달군 돌을 넣고 함께 시간을 보낸다', 
                image: 'images/choice_21_3.png',
                isCorrect: true,
                successText: '완벽한 해결책이다. 뜨거운 김이 가득한 방은 차가운 기운을 몰아냈고, 땀을 흘리며 몸을 씻을 수도 있었다. 무엇보다 이 공간은 <span class="highlight-yellow">마을 사람들이 함께 모여 이야기하는 따뜻한 장소</span>가 되었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_21.jpg',
                    text: '<span class="highlight-yellow">\'사우나(Sauna)\'</span>는 핀란드에서 시작되었다. 사우나는 단순히 씻는 곳이 아니라, 힘든 자연 환경을 이겨내기 위한 <span class="highlight-yellow">생존에 꼭 필요한 장소</span>였다. <span class="highlight-yellow">추위, 어둠, 더러움, 외로움</span>이라는 여러 문제를 한 번에 해결하는 가장 좋은 방법이었다.'
                }
            }
        ]
    },
        {
        id: 22,
        title: '산맥 속의 나라',
        type: '기타',
        image: 'images/situation_22.jpg',
        text: `당신은 스위스 연방의 지도자다. 나라는 <span class="highlight-yellow">힘센 유럽 나라들 사이에 둘러싸여</span> 있고, 나라 땅 대부분은 <span class="highlight-yellow">험한 알프스 산맥</span>이다. 목표는 전쟁에서 이기는 것이 아니라, <span class="highlight-yellow">아무도 쳐들어올 생각을 못 하게 만들어</span> 평화를 지키는 것이다. 어떤 국방 정책을 선택해야 하는가?`,
        choices: [
            { 
                text: '이웃 국가와 동맹을 맺는다', 
                image: 'images/choice_22_1.png',
                isCorrect: false,
                failureText: '아주 큰 외교 실수였다. 한 나라와 동맹을 맺자, 다른 경쟁 나라들이 스위스를 <span class="highlight-yellow">적으로 생각하기</span> 시작했다. 결국 스위스는 힘센 나라들의 싸움터가 될 위기에 처했다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '군대를 해산하고 평화를 외친다', 
                image: 'images/choice_22_2.png',
                isCorrect: false,
                successChance: 0.1,
                successText: '운 좋게 한동안 평화가 지켜졌지만, 이웃 나라에 욕심 많은 지도자가 나타나자 <span class="highlight-yellow">스위스는 아무 저항도 못 하고</span> 합쳐질 것이라는 소문이 돌기 시작했다.',
                failureText: '끔찍한 판단이었다. 이웃 나라는 스위스를 <span class="highlight-yellow">쉬운 먹잇감</span>으로 생각하고 쳐들어왔다. 막을 방법이 없던 나라는 힘없이 무너졌다. 힘없는 평화는 빈 외침일 뿐이었다.<br> ❤️ -5',
                failureDamage: 5
            },
            { 
                text: '산맥을 요새로 만들어 지킨다', 
                image: 'images/choice_22_3.png',
                isCorrect: true,
                successText: '지혜로운 전략이다. 스위스를 공격하는 비용이 얻는 것보다 훨씬 크다는 것을 깨달은 이웃 나라들은 스위스를 넘보지 않았다. 당신은 <span class="highlight-yellow">지형의 장점을 이용해</span> 평화를 얻어냈다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_22.jpg',
                    text: '스위스의 <span class="highlight-yellow">\'무장 중립\'</span> 정책은 산이 많은 지형을 이용한 것이다. 스위스는 험한 산악 지형을 이용해 나라 전체를 <span class="highlight-yellow">커다란 요새</span>로 만들었다. 덕분에 스위스는 어느 편에도 서지 않고 강한 국방력을 갖추게 되었다.'
                }
            }
        ]
    },  
    {
        id: 23,
        title: '산의 도전',
        type: '주',
        image: 'images/situation_23.jpg',
        text: `당신은 필리핀 산악지대의 '이푸가오' 부족이다. 부족은 쌀을 주식으로 먹지만, 주변에는 <span class="highlight-yellow">농사지을 평평한 땅이 전혀 없고</span> 가파른 산비탈뿐이다. 쌀농사에는 <span class="highlight-yellow">물을 가둘 평평한 땅</span>이 꼭 필요하다. 이 환경을 이겨내고 쌀을 얻을 방법은 무엇일까?`,
        choices: [
            { 
                text: '쌀을 포기하고 다른 작물을 찾는다.', 
                image: 'images/choice_23_1.png',
                isCorrect: false,
                successChance: 0.3,
                successText: '굶주림은 피했지만, 쌀을 주식으로 하는 부족의 전통과 음식 문화를 포기한 대가로 <span class="highlight-yellow">마을 안에서 정체성을 잃은 사람</span>이 되었다. 살아남기는 했지만 많은 것을 잃었다.',
                failureText: '새로운 작물을 찾아다녔지만, 지식이 부족해 결국 굶주림에 시달렸다. 당신은 <span class="highlight-yellow">조상 대대로 이어진 쌀농사 기술</span>이라는 소중한 것을 너무 쉽게 포기했다.<br> ❤️ -5',
                failureDamage: 5
            },
            { 
                text: '산비탈과 관계없이 농사 짓는다', 
                image: 'images/choice_23_2.png',
                isCorrect: false,
                failureText: '결과는 끔찍했다. 볍씨는 <span class="highlight-yellow">가파른 비탈을 따라 모두 빗물에 휩쓸려 내려갔고</span>, 땅에는 아무것도 남지 않았다. 쌀농사의 기본 원리인 \'물을 가두는 것\'의 중요성을 잊었다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '산비탈을 깎고 돌을 쌓아 평평한 지대를 만든다', 
                image: 'images/choice_23_3.png',
                isCorrect: true,
                successText: '엄청난 노력 끝에, 불가능해 보였던 산비탈은 물을 가득 담은 수천 개의 논으로 바뀌었다. 당신과 부족은 <span class="highlight-yellow">자연의 한계를 사람의 의지와 노력으로 이겨내는</span> 위대한 일을 해냈다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_23.jpg',
                    text: '필리핀의 <span class="highlight-yellow">\'계단식 논\'</span>은 평평한 땅이 부족한 산악지대에서 쌀을 키우기 위한 인간 노력의 결과물이다. 험한 산을 깎아 층을 만든 이 논은, 힘든 <span class="highlight-yellow">자연 환경을 이겨내려 했던</span> 이푸가오 부족의 지혜와 기술을 보여주는 문화유산이다.'
                }
            }
        ]
    },
    {
        id: 24,
        title: '도시의 점심시간',
        type: '기타',
        image: 'images/situation_24.jpg',
        text: `당신은 인도 뭄바이에서 사업을 구상 중이다. 뭄바이 직장인들은 <span class="highlight-yellow">집에서 만든 따뜻한 도시락</span>을 좋아하지만, 아주 심한 <span class="highlight-yellow">교통체증</span> 때문에 제시간에 가져오기 어렵다. 도시 전체의 점심을 책임질 거대한 배달 시스템을 만들어야 한다. 가장 효율적인 방법은?`,
        choices: [
            { 
                text: '오토바이를 이용해 개별 배송한다', 
                image: 'images/choice_24_1.png',
                isCorrect: false,
                failureText: '완벽한 실패였다. 오토바이도 뭄바이의 교통지옥 앞에서는 어쩔 수 없었다. 배달은 항상 늦었고 음식은 식었다. <span class="highlight-yellow">수많은 개별 주문을 처리하는 비용</span>이 버는 돈을 넘어 회사는 망했다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '대형 식당을 짓고 음식을 판다.', 
                image: 'images/choice_24_2.png',
                isCorrect: false,
                successChance: 0.2,
                successText: '일부 손님은 이용했지만, 대부분은 "아무리 맛있어도 <span class="highlight-yellow">우리 집 음식과는 다르다</span>"며 거절했다. 당신은 이들의 문화적 바람을 정확히 알아채지 못했다.',
                failureText: '사람들의 반응은 차가웠다. 그들이 원한 것은 \'집밥 스타일\'이 아니라, <span class="highlight-yellow">진짜 \'우리 집\'에서 만든 음식</span>이었다. 손님들의 가장 중요한 요구를 놓쳐 사업은 외면받았다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '열차와 수레를 이용해 한꺼번에 배송한다', 
                image: 'images/choice_24_3.png',
                isCorrect: true,
                successText: '복잡한 도로를 피한 당신의 배달 시스템은 매일 수십만 개의 도시락을 <span class="highlight-yellow">정확한 시간에, 뜨거운 상태로</span> 배달했다. 당신의 사업은 뭄바이 직장인들의 점심을 책임지는 도시의 중요한 부분이 되었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_24.jpg',
                    text: '뭄바이의 <span class="highlight-yellow">\'다바왈라\'</span>는 기술 없이 사람들의 협력만으로 움직이는 세계 최고 수준의 배달 시스템이다. <span class="highlight-yellow">아주 심한 교통체증</span>과 <span class="highlight-yellow">집밥을 원하는 문화적 요구</span>가 만나, 기차와 사람들의 연결망을 이용하는 새로운 해결책을 만들었다.'
                }
            }
        ]
    },
    {
        id: 25,
        title: '절벽 위의 마을',
        type: '주',
        image: 'images/situation_25.jpg',
        text: `당신은 그리스 산토리니섬의 건축가다. 이곳은 <span class="highlight-yellow">햇빛이 강하고</span>, 절벽 위에는 <span class="highlight-yellow">강한 바닷바람</span>이 분다. 화산섬이라 <span class="highlight-yellow">큰 나무도 거의 자라지 않는다.</span> 이 모든 조건을 생각하여 시원하고 튼튼하며, 구하기 쉬운 재료로 집을 만들어야 한다.`,
        choices: [
            { 
                text: '창문이 큰 나무 집', 
                image: 'images/choice_25_1.png',
                isCorrect: false,
                failureText: '모든 것이 문제였다. 비싼 수입 나무 때문에 건축비가 크게 올랐다. 큰 창문은 <span class="highlight-yellow">뜨거운 햇빛을 그대로 받아들여</span> 집 안을 찜통으로 만들었고, 강한 바람에 자주 부서졌다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '어두운 화산암으로 지은 집', 
                image: 'images/choice_25_2.png',
                isCorrect: false,
                successChance: 0.2,
                successText: '튼튼한 집은 지었지만, 어두운 돌벽이 <span class="highlight-yellow">낮 동안 햇빛을 전부 빨아들여</span> 집 안이 아주 뜨거워졌다. 주민들은 저녁이 되기 전까지 집에 들어갈 수 없었다.',
                failureText: '끔찍한 결과였다. 어두운 돌집은 낮 동안의 열을 품고 있어 밤에도 식지 않는 <span class="highlight-yellow">커다란 가마솥</span>이 되어버렸다. 사람이 살 수 없는 공간이 되었다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '화산암 벽을 흰색으로 칠한 집', 
                image: 'images/choice_25_3.png',
                isCorrect: true,
                successText: '완벽한 설계였다. 하얀 벽은 햇빛을 튕겨내 집 안을 시원하게 유지했고, 둥근 지붕은 <span class="highlight-yellow">바닷바람의 저항을 가장 적게 받아</span> 안정성을 높였다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_25.jpg',
                    text: '그리스 산토리니의 건물들은 지중해 자연환경에 가장 알맞게 만들어졌다. <span class="highlight-yellow">하얀색 벽</span>은 햇빛을 튕겨내 집 안 온도를 낮추고, <span class="highlight-yellow">둥근 지붕</span>은 강한 바람의 영향을 줄인다. <span class="highlight-yellow">나무가 귀한 환경</span>에서 주변의 돌과 흙을 주재료로 쓴 것은 좋은 선택이었다.'
                }
            }
        ]
    },
    {
        id: 26,
        title: '불과 얼음의 땅',
        type: '주',
        image: 'images/situation_26.jpg',
        text: `당신은 아이슬란드에 처음 정착한 바이킹 지도자다. 가장 큰 문제는 <span class="highlight-yellow">길고 매서운 겨울의 추위</span>를 이겨내는 것이다. 이 섬은 <span class="highlight-yellow">땔감으로 쓸 숲이 거의 없고</span>, 다른 곳에서 연료를 사 오는 것은 불가능하다. 하지만 땅에서는 엄청난 에너지가 끓어오른다. 섬 곳곳에서 <span class="highlight-yellow">뜨거운 김과 온천수</span>가 솟아난다. 이 자연의 힘을 이용해 계속 쓸 수 있는 난방 장치를 만들어야 한다.`,
        choices: [
            { 
                text: '땅을 파서 연료를 찾는다', 
                image: 'images/choice_26_1.png',
                isCorrect: false,
                failureText: '헛된 노력이었다. 시간을 들여 땅을 파헤쳤지만 나오는 것은 평범한 돌뿐이었다. <span class="highlight-yellow">눈앞에 끓어오르는 분명한 에너지</span>를 무시하고 확실하지 않은 가능성에 기댄 대가는 혹독했다.<br> ❤️ -5',
                failureDamage: 5
            },
            { 
                text: '나무 조각을 아껴 땔감으로 쓴다', 
                image: 'images/choice_26_2.png',
                isCorrect: false,
                successChance: 0.2,
                successText: '땔감이 떨어지기 전까지 약 한 달간은 따뜻하게 지낼 수 있었다. 하지만 <span class="highlight-yellow">매서운 겨울은 이제 막 시작</span>되었을 뿐이다. 임시방편은 더 큰 재앙을 불러올 수 있다.',
                failureText: '땔감은 한 달 만에 바닥났다. 한겨울에 난방이 끊기자 사람들은 추위와 병에 시달렸다. <span class="highlight-yellow">부족한 재료에만 기댄</span> 계획은 마을 전체를 위기에 빠뜨렸다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '땅에서 솟는 온천수와 증기를 파이프로 연결해 쓴다', 
                image: 'images/choice_26_3.png',
                isCorrect: true,
                successText: '최고의 해결책이다. 땅의 열기는 파이프를 통해 각 집으로 보내져, <span class="highlight-yellow">땔감 없이도 마을 전체를 따뜻하게</span> 만들었다. 당신은 자연의 선물을 지혜롭게 사용했다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_26.jpg',
                    text: '아이슬란드는 <span class="highlight-yellow">땅의 열에너지</span>를 이용해 힘든 자연 환경을 이겨냈다. <span class="highlight-yellow">화산 활동으로 얻는 엄청난 땅의 열</span>을 이용한 중앙난방 장치는, 숲이 거의 없는 아이슬란드 사람들이 춥고 긴 겨울을 이겨낸 가장 중요한 생존 기술이었다.'
                }
            }
        ]
    },
    {
        id: 27,
        title: '물의 골목길',
        type: '주',
        image: 'images/situation_27.jpg',
        text: `당신은 '물의 도시' 베네치아의 상인이다. 이 도시의 '길'은 <span class="highlight-yellow">거미줄처럼 얽힌 물길</span>이며, 주로 배를 타고 다닌다. 하지만 많은 물길은 폭이 <span class="highlight-yellow">좁고 구불구불하며, 물의 깊이도 얕다.</span> 이 도시 어디든 자유롭게 오갈 수 있는 배가 필요하다. 어떤 배를 선택해야 할까?`,
        choices: [
            { 
                text: '바닥이 깊은 작은 돛단배', 
                image: 'images/choice_27_1.png',
                isCorrect: false,
                failureText: '출발하자마자 문제가 생겼다. 배의 깊은 바닥이 <span class="highlight-yellow">얕은 물길 바닥에 걸려</span> 움직일 수 없게 되었다. 엎친 데 덮친 격으로 돛대는 낮은 다리에 계속 부딪혀 부러졌다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '프로펠러가 달린 작은 모터보트', 
                image: 'images/choice_27_2.png',
                isCorrect: false,
                successChance: 0.3,
                successText: '넓은 중앙 물길에서는 모터보트가 편리했지만, 좁은 물길로 들어서자 <span class="highlight-yellow">배의 폭이 너무 넓어</span> 더 이상 나아갈 수 없었다. 결국 목적지까지 걸어가야 했다.',
                failureText: '모터보트는 도시의 골칫거리가 되었다. 프로펠러는 <span class="highlight-yellow">얕은 물길 바닥의 진흙</span>에 계속 걸렸고, 배가 만드는 물결은 건물 바닥을 망가뜨렸다. 주민들의 반대에 운행을 그만둬야 했다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '평평하고 좁은 형태의, 노를 젓는 배', 
                image: 'images/choice_27_3.png',
                isCorrect: true,
                successText: '완벽한 선택이다. 평평한 바닥은 얕은 물길을 막힘없이 나아갔고, 길고 날렵한 배의 몸체는 <span class="highlight-yellow">좁은 골목 같은 물길</span>을 마음대로 지나다녔다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_27.jpg',
                    text: '베네치아의 <span class="highlight-yellow">\'곤돌라(Gondola)\'</span>는 도시의 특별한 지리 환경이 만든 발명품이다. <span class="highlight-yellow">얕은 물 깊이</span>를 위한 평평한 바닥과 <span class="highlight-yellow">좁고 구불구불한 물길</span>을 지나가기 위한 길고 날렵한 몸체는 수백 년에 걸쳐 이 도시에 가장 알맞은 형태로 발전했다.'
                }
            }
        ]
    },
    {
        id: 28,
        title: '대초원의 개척자',
        type: '주',
        image: 'images/situation_28.jpg',
        text: `당신은 19세기 미국 대평원에 처음 온 사람이다. 겨울이 오기 전에 집을 지어야 한다. 하지만 주위에는 끝없는 풀밭뿐, <span class="highlight-yellow">집 지을 나무나 돌을 전혀 찾을 수 없다.</span> 유일한 재료는 발밑의 <span class="highlight-yellow">풀뿌리가 얽힌 단단한 흙</span>뿐이다. 이 환경에서 어떻게 집을 지어야 할까?`,
        choices: [
            { 
                text: '목재를 사서 운반한다', 
                image: 'images/choice_28_1.png',
                isCorrect: false,
                failureText: '현실을 무시한 계획이었다. 나무를 옮겨오는 데 모든 돈과 시간을 써버려, 결국 <span class="highlight-yellow">겨울이 오기 전까지 집을 다 짓지 못했다.</span> 가족들은 집 없이 추위에 떨어야 했다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '동굴집을 만든다.', 
                image: 'images/choice_28_2.png',
                isCorrect: false,
                successChance: 0.4,
                successText: '최악의 추위는 피했지만, <span class="highlight-yellow">어둡고 축축한 흙 동굴</span>은 비가 올 때마다 진흙이 떨어졌고 뱀과 벌레의 위협에 시달려야 했다. 잠시 머무는 곳일 뿐, 집은 아니었다.',
                failureText: '비가 내리자 재앙이 찾아왔다. 동굴집은 <span class="highlight-yellow">힘없이 무너져 내렸고</span>, 가족은 흙더미 속에서 겨우 빠져나와야 했다. 땅을 너무 얕게 파서 튼튼하지 못했다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '풀뿌리가 엉킨 흙을 잘라내 벽돌처럼 쓴다', 
                image: 'images/choice_28_3.png',
                isCorrect: true,
                successText: '최고의 아이디어다. 두꺼운 흙벽돌은 더위와 추위를 막는 <span class="highlight-yellow">훌륭한 재료</span> 역할을 했다. 당신은 <span class="highlight-yellow">주변의 유일한 재료를 이용</span>하여 튼튼하고 아늑한 집을 만드는 데 성공했다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_28.jpg',
                    text: '미국 대평원의 <span class="highlight-yellow">\'소드 하우스(Sod House)\'</span>는 힘든 환경에 사람이 적응한 것을 보여주는 상징이다. <span class="highlight-yellow">나무와 돌이 아주 부족했던 풀밭</span>에서, 개척자들은 유일한 재료인 <span class="highlight-yellow">풀뿌리가 얽힌 흙</span>을 벽돌로 사용했다. 이 흙집은 추위와 더위를 잘 막아주고 불에도 강해, 힘든 환경 속에서 살아남게 해준 지혜의 결과물이었다.'
                }
            }
        ]
    }, // ID 29 삭제됨
    { // ID 29 삭제됨
        id: 30, // ID 29 삭제됨
        title: '왕국의 철학', // ID 29 삭제됨
        type: '기타',
        image: 'images/situation_30.jpg', // ID 29 삭제됨
        text: `당신은 히말라야 왕국 부탄의 정책을 결정하는 사람이다. 나라의 목표는 <span class="highlight-yellow">모든 생명을 아끼는 마음</span>을 실천하고, 국민이 <span class="highlight-yellow">물건에 대한 욕심에서 벗어나 마음의 평화</span>를 얻도록 돕는 것이다. 부탄의 가치관에 따라 가장 올바른 나라 발전 계획을 선택해야 한다.`,
        choices: [
            { 
                text: '최첨단 반도체 공장', 
                image: 'images/choice_30_1.png',
                isCorrect: false,
                failureText: '재앙 같은 결정이었다. 공장은 돈을 가져왔지만, 동시에 <span class="highlight-yellow">강을 더럽혀 수많은 생명을 해쳤다.</span> 국민들은 돈을 얻었지만 마음의 평화를 잃었다. 나라의 기본 가치를 짓밟았다.<br> ❤️ -7',
                failureDamage: 7
            },
            { 
                text: '산 전체를 깎은 거대한 스키 리조트', 
                image: 'images/choice_30_2.png',
                isCorrect: false,
                successChance: 0.2,
                successText: '리조트는 큰 성공을 거뒀지만, 국민들은 당신이 불교의 행복보다 돈을 탐낸다고 생각하게 되었다. 번 돈을 환경 보호에 쓰겠다고 말하며 사람들을 달랬지만, 믿지 못하는 마음은 여전히 남아 있다.',
                failureText: '리조트를 짓는 과정에서 수천 그루의 나무를 베어냈고, <span class="highlight-yellow">시끄러운 놀이 문화</span>는 마을의 평화를 깨뜨렸다. 잠깐의 이익을 위해 자연과 어울려 사는 가치를 망가뜨렸다.<br> ❤️ -5',
                failureDamage: 5
            },
            { 
                text: '자연을 훼손 않는 소규모 생태 관광', 
                image: 'images/choice_30_3.png',
                isCorrect: true,
                successText: '지혜로운 길이다. 이 계획은 부탄의 <span class="highlight-yellow">자연과 문화를 지키면서도</span>, 마을에 계속 이어지는 수입을 안겨주었다. 당신의 결정은 불교의 가르침과 완벽하게 어울렸다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_30.jpg',
                    text: '부탄에서는 불교의 가치관을 나라 정책으로 만든 <span class="highlight-yellow">\'국민총행복(GNH)\'</span>이라는 생각을 사용한다. 국민총행복은 마구잡이 개발보다 <span class="highlight-yellow">환경 보호, 문화 지키기, 모두의 행복</span>이 어울리는, 계속 이어질 수 있는 발전을 중요하게 생각한다.'
                }
            }
        ]
    },
    {
        id: 31,
        title: '계곡의 연금술',
        type: '식',
        image: 'images/situation_31.jpg',
        text: '당신은 오래전 노르웨이 산골 농부다. 힘든 날씨 탓에 <span class="highlight-yellow">먹을 것이 항상 부족해 모든 것을 아껴야 한다.</span> 주된 수입은 하얀 치즈를 파는 것이다. 치즈를 만들고 나면 영양분이 남은 <span class="highlight-yellow">뿌연 액체(유청)</span>가 많이 남는다. 이 유청으로 겨울을 날 새로운 먹을거리를 만들어야 한다.',
        choices: [
            { 
                text: '유청을 가축에게 먹여 사료로 활용', 
                image: 'images/choice_31_1.png',
                isCorrect: false,
                successChance: 0.5,
                successText: '좋은 생각이었다. 유청을 먹은 가축은 더 건강해졌다. 하지만 이것은 문제를 살짝 비껴간 해결책일 뿐, <span class="highlight-yellow">당장 겨울을 보낼 사람의 식량</span>을 만들지는 못했다.',
                failureText: '결과적으로 아무것도 얻지 못했다. 유청을 먹여도 가축이 두 배로 늘지는 않았다. 결국 <span class="highlight-yellow">소중한 영양분을 가축에게 다 줘버린 셈</span>이 되어 겨울 동안 배고픔에 시달렸다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '차가운 계곡물에 담가 음료수로 보관', 
                image: 'images/choice_31_2.png',
                isCorrect: false,
                failureText: '실수였다. 유청은 우유보다 훨씬 빨리 상해 며칠 만에 시큼하게 변했다. 당신은 <span class="highlight-yellow">오래 보관할 음식을 만들어야 하는 상황</span>에서 가장 보관 기간이 짧은 선택을 했다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '큰 솥에 넣고 끓여서 굳혀 보존함', 
                image: 'images/choice_31_3.png',
                isCorrect: true,
                successText: '위대한 발견이다. 액체 유청은 오랜 시간 졸이자 캐러멜처럼 달콤하고 열량이 높은 <span class="highlight-yellow">갈색의 단단한 덩어리</span>로 변했다. 오래 보관할 수도 있어 겨울을 나는 데 큰 힘이 되었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_31.jpg',
                    text: '노르웨이의 갈색 치즈 <span class="highlight-yellow">\'브루노스트(Brunost)\'</span>는 치즈를 만들고 남은 유청을 다시 쓴 것이다. 힘든 환경에서 <span class="highlight-yellow">버려지는 음식 재료의 영양분</span>까지 사용하려던 아끼는 마음이, 유청 속 당분을 캐러멜처럼 만드는 특별한 요리법을 만들어냈다.'
                }
            }
        ]
    },
    {
        id: 32,
        title: '붉은 땅의 사람들',
        type: '의',
        image: 'images/situation_32.jpg',
        text: `당신은 나미비아 사막 지대의 힘바족이다. 이곳은 <span class="highlight-yellow">물이 아주 귀해</span> 목욕이 어렵다. <span class="highlight-yellow">햇볕은 아주 강하고</span>, 마른 공기는 피부의 물기를 계속 빼앗아 간다. 성가신 벌레들도 많다. 이 모든 위험으로부터 피부를 보호하고 깨끗하게 지낼 가장 효과적인 방법은?`,
        choices: [
            { 
                text: '두껍고 긴 옷을 입는다', 
                image: 'images/choice_32_1.png',
                isCorrect: false,
                failureText: '잘못된 선택이었다. 긴 옷은 햇볕은 막아주었지만, <span class="highlight-yellow">찌는 듯한 더위</span>에 금방 지쳐버렸다. 옷만으로는 마른 공기와 벌레로부터 피부를 완전히 지킬 수 없었다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '물로 하루에 한 번 씻는다', 
                image: 'images/choice_32_2.png',
                isCorrect: false,
                failureText: '실수였다. 몸을 씻는 데 쓴 물은 부족 전체가 하루 동안 마실 수 있는 양이었다. <span class="highlight-yellow">가장 귀한 자원인 물을 낭비</span>하여 마을 전체를 생존의 위험에 빠뜨렸다.<br> ❤️ -7',
                failureDamage: 7
            },
            { 
                text: '주변의 흙을 갈아, 동물 기름과 섞어 몸에 바른다', 
                image: 'images/choice_32_3.png',
                isCorrect: true,
                successText: '완벽한 생존의 지혜다. 붉은 진흙은 <span class="highlight-yellow">강한 햇빛을 막는 보호막</span>이 되었고, 기름은 피부의 물기를 지켜주었으며, 특별한 향은 벌레가 다가오는 것을 막아주었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_32.jpg',
                    text: '나미비아의 힘바족은 붉은 흙과 버터기름을 섞은 <span class="highlight-yellow">\'오트지제\'</span>를 온몸에 바른다. 이는 물이 귀한 사막 환경에서 <span class="highlight-yellow">햇빛을 막고, 피부를 촉촉하게 하며, 벌레를 쫓는</span> 여러 역할을 하는 쓸모 있는 방법이며, 그들의 문화를 보여주는 상징이기도 하다.'
                }
            }
        ]
    },
    {
        id: 33,
        title: '밀림의 사냥꾼',
        type: '기타',
        image: 'images/situation_33.jpg',
        text: `당신은 말레이시아 열대우림의 사냥꾼이다. 주로 사냥하는 동물은 <span class="highlight-yellow">높은 나뭇가지 위의 원숭이나 새</span>다. 밀림은 <span class="highlight-yellow">빽빽한 나뭇잎과 덩굴</span>로 가득해 움직일 공간이 거의 없다. 사냥에 성공하려면 <span class="highlight-yellow">최대한 소리를 내지 않아야</span> 한다. 어떤 도구를 사용해야 할까?`,
        choices: [
            { 
                text: '대형 활', 
                image: 'images/choice_33_1.png',
                isCorrect: false,
                failureText: '좋은 무기지만 이곳에는 맞지 않다. 활시위를 당기려 하자, <span class="highlight-yellow">활의 양 끝이 나뭇가지와 덩굴에 걸려</span> 제대로 겨눌 수 없었다. 그 사이 사냥감은 사라졌다.<br> ❤️ -5',
                failureDamage: 5
            },
            { 
                text: '창과 도끼', 
                image: 'images/choice_33_2.png',
                isCorrect: false,
                failureText: '당신이 아무리 무기를 잘 쓰더라도, <span class="highlight-yellow">무성하게 자란 식물</span> 때문에 원활하게 사냥할 수 없었다. 사냥에 실패했다. 상처만 남았다.<br> ❤️ -3',
                failureDamage: 5
            },
            { 
                text: '대롱에 독침을 넣어, 입으로 불어 쏘는 도구', 
                image: 'images/choice_33_3.png',
                isCorrect: true,
                successText: '이 환경을 위한 완벽한 도구다. 좁은 틈으로 대롱을 겨누고, <span class="highlight-yellow">아주 작은 숨소리</span>와 함께 독침을 쏘았다. 사냥감은 눈치채지 못했고, 조용히 사냥에 성공했다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_33.jpg',
                    text: '열대우림의 <span class="highlight-yellow">\'블로우파이프(Blowpipe)\'</span>는 빽빽한 밀림 환경에 맞게 발전한 사냥 도구다. <span class="highlight-yellow">덩굴과 나뭇잎이 우거져</span> 넓은 공간이 필요한 무기를 쓰기 힘든 곳에서, 블로우파이프는 <span class="highlight-yellow">가장 적은 움직임과 소리</span>로 사냥할 수 있는 최고의 해결책이었다.'
                }
            }
        ]
    },
    {
        id: 34,
        title: '숨겨진 힘',
        type: '기타',
        image: 'images/situation_34.jpg',
        text: `당신은 18세기 브라질 농장의 노예다. 농장 주인들은 반란을 두려워하여 <span class="highlight-yellow">어떤 무술 훈련도 금지</span>하고 있다. 하지만 힘든 일을 달래기 위한 <span class="highlight-yellow">음악과 춤은 오히려 권장</span>한다. 이 억압적인 상황에서 자유를 위해 몸을 단련할 방법을 찾아야 한다.`,
        choices: [
            { 
                text: '밤에 몰래 모여 무술을 수련한다.', 
                image: 'images/choice_34_1.png',
                isCorrect: false,
                failureText: '비밀 훈련은 감독관에게 들키고 말았다. 저항을 준비했다는 이유로 당신과 동료들은 끔찍한 벌을 받았고, 감시는 더 심해졌다. <span class="highlight-yellow">정면으로 맞서는 것은 최악의 선택</span>이었다.<br> ❤️ -7',
                failureDamage: 7
            },
            { 
                text: '춤의 형태를 빌려, 음악에 맞춰 싸움 기술을 연습한다.', 
                image: 'images/choice_34_2.png',
                isCorrect: true,
                successText: '천재적인 위장이다. 당신들의 움직임은 <span class="highlight-yellow">음악과 어우러져 격렬한 춤처럼</span> 보였고, 농장 주인들은 아무것도 의심하지 않았다. 모두의 눈앞에서 자유를 위한 힘을 기를 수 있었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_34.jpg',
                    text: '브라질의 전통 무술 <span class="highlight-yellow">\'카포에라(Capoeira)\'</span>는 춤과 음악, 묘기가 합쳐진 특별한 형태다. 이는 옛날 아프리카 노예들이 <span class="highlight-yellow">농장 주인의 감시를 피해 싸움 기술을 연습</span>하기 위해 춤으로 위장했던 역사에서 시작되었다. 카포에라는 억압 속에서 피어난 저항과 자유의 정신을 보여준다.'
                }
            },
            { 
                text: '모든 훈련을 포기하고 농사일에 전념한다.', 
                image: 'images/choice_34_3.png',
                isCorrect: false,
                successChance: 0.1,
                successText: '성실함 덕분에 운 좋게 조금 더 편한 일을 맡게 되었다. 하지만 당신은 <span class="highlight-yellow">자유를 향한 마음과 스스로를 지킬 힘</span>을 모두 잃었다. 그저 따르는 법을 배웠을 뿐, 아무것도 바꾸지 못했다.',
                failureText: '모든 것을 포기했지만 농장 주인의 괴롭힘은 끝나지 않았다. 오히려 당신을 쉽게 보고 일은 더 힘들어졌다. <span class="highlight-yellow">스스로를 지킬 힘이 없는 사람에게 자유는 주어지지 않는다</span>는 것을 너무 늦게 깨달았다.<br> ❤️ -5',
                failureDamage: 5
            }
        ]
    },
    {
        id: 35,
        title: '강의 어부',
        type: '식',
        image: 'images/situation_35.jpg',
        text: `당신은 중국 남부의 어부다. 이 강은 <span class="highlight-yellow">물이 깊고 흙탕물이라</span> 사람 눈으로는 물고기 위치를 알기 어렵다. 어느 날, 강가의 새들이 <span class="highlight-yellow">놀라운 솜씨로 물속에 뛰어들어 정확히 물고기를 낚아채는 모습</span>을 보게 된다. 새로운 고기잡이 방법을 생각해내야 한다.`,
        choices: [
            { 
                text: '거대한 그물로 바닥까지 훑어 물고기를 잡는다.', 
                image: 'images/choice_35_1.png',
                isCorrect: false,
                successChance: 0.2,
                successText: '엄청난 노력 끝에 운 좋게 몇 마리의 물고기를 잡았다. 하지만 이 커다란 그물을 만들고 끌기 위해 <span class="highlight-yellow">마을 사람 전체가 며칠을 매달려야 했다.</span> 결코 효율적인 방법이 아니었다.',
                failureText: '완전히 실패했다. 강이 너무 넓고 깊어 그물이 계속 바닥의 바위나 나무에 걸려 찢어졌다. <span class="highlight-yellow">귀한 그물만 잃고 물고기는 한 마리도 잡지 못했다.</span><br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '강물에 독을 풀어, 기절해 떠오르는 물고기를 건져낸다.', 
                image: 'images/choice_35_2.png',
                isCorrect: false,
                failureText: '가장 끔찍한 결과를 낳았다. 강물에 퍼진 독은 물고기뿐만 아니라 <span class="highlight-yellow">강의 모든 생명체를 파괴</span>했고, 독에 오염된 물고기는 팔 수도 없었다. 잠깐의 욕심 때문에 강 전체를 망쳤다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '물고기 잡는 새를 길들여, 물고기를 잡도록 훈련시킨다.', 
                image: 'images/choice_35_3.png',
                isCorrect: true,
                successText: '획기적인 생각이다. 훈련된 새들은 눈이 닿지 않는 <span class="highlight-yellow">물속 깊은 곳까지 헤엄쳐</span> 정확하게 물고기를 사냥해왔다. 당신은 사람과 동물의 협동을 통해 자연의 한계를 이겨냈다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_35.jpg',
                    text: '이 놀라운 고기잡이 방법은 <span class="highlight-yellow">\'가마우지\'</span>를 이용한 전통 낚시다. 시야 확보가 어려운 강에서, 사람은 <span class="highlight-yellow">가마우지의 뛰어난 사냥 능력</span>을 빌리는 대신, 목에 끈을 묶어 잡은 물고기를 나눠 갖는 새로운 공생 관계를 만들었다.'
                }
            }
        ]
    },
    {
        id: 36,
        title: '건조한 땅',
        type: '주',
        image: 'images/situation_36.jpg',
        text: `당신은 칠레 아타카마 사막의 해안 마을 주민이다. 이곳은 <span class="highlight-yellow">수십 년간 비가 오지 않은</span> 아주 건조한 곳이다. 유일한 물 공급원은 바다에서 불어오는 <span class="highlight-yellow">짙은 안개</span>뿐이다. 이 안개에서 마을의 마실 물을 얻어야 한다. 가장 효율적인 방법은?`,
        choices: [
            { 
                text: '땅을 깊게 파서 우물을 만든다.', 
                image: 'images/choice_36_1.png',
                isCorrect: false,
                failureText: '실패였다. 수십 미터를 파도 마른 흙만 나왔다. 당신은 <span class="highlight-yellow">비가 오지 않는 땅</span>이라는 중요한 정보를 무시하고 불가능한 일에 힘을 낭비했다.<br> ❤️ -5',
                failureDamage: 5
            },
            { 
                text: '불을 피워, 수분을 증발시킨 뒤 소금을 얻는다.', 
                image: 'images/choice_36_2.png',
                isCorrect: false,
                failureText: '목표와 반대되는 결과였다. 필요한 것은 <span class="highlight-yellow">마실 물</span>이지 소금이 아니었다. 당신은 땔감만 낭비하고 아무것도 얻지 못했다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '촘촘한 그물을 세워, 안개가 통과하며 물방울이 맺히도록 한다.', 
                image: 'images/choice_36_3.png',
                isCorrect: true,
                successText: '성공적인 방법이다. 안개가 그물을 지나가며 맺힌 물방울이 모여, <span class="highlight-yellow">공기 중에서 물을 얻을</span> 수 있게 되었다. 마을의 물 문제가 해결되었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_36.jpg',
                    text: '칠레 아타카마 사막의 <span class="highlight-yellow">\'안개 포획기\'</span>는 비가 오지 않는 환경에 적응한 기술입니다. <span class="highlight-yellow">바다 안개</span>에 들어있는 물기를 촘촘한 그물로 모아 마실 물과 생활에 필요한 물을 얻습니다.'
                }
            }
        ]
    },
    {
        id: 37,
        title: '강을 건너는 법',
        type: '주',
        image: 'images/situation_37.jpg',
        text: `당신은 세계에서 가장 비가 많이 오는 곳 중 하나인 인도 메갈라야에 산다. 비가 많이 오는 시기가 되면 계곡의 강은 <span class="highlight-yellow">모든 것을 휩쓸어버리는 거센 물살</span>로 변한다. 마을과 밭을 잇는 다리가 매년 부서져 길이 막히는 문제를 해결해야 한다. 강가에는 <span class="highlight-yellow">뿌리가 튼튼한 고무나무</span>가 많이 자란다. 어떤 다리를 만들어야 하는가?`,
        choices: [
            { 
                text: '고무나무를 잘라 통나무 다리를 짓는다.', 
                image: 'images/choice_37_1.png',
                isCorrect: false,
                failureText: '고무나무로 만든 다리는 잠깐은 튼튼했지만, 죽은 나무로 만든 다리는 결국 썩어서 무너져버렸다.<br> ❤️ -5',
                failureDamage: 5
            },
            { 
                text: '산을 빙 둘러간다.', 
                image: 'images/choice_37_2.png',
                isCorrect: false,
                successChance: 0.2,
                successText: '길은 사라지지 않았다. 하지만 밭까지 가는 데 반나절이 걸렸다. <span class="highlight-yellow">너무 비효율적인 길</span>이라, 사실상 농사를 짓는 것은 불가능에 가까웠다. 당신은 문제를 피했을 뿐, 해결하지는 못했다.',
                failureText: '길을 만드는 데 몇 달이 걸렸지만, 결국 아무 소용이 없었다. <span class="highlight-yellow">너무 멀고 험한 길</span>이라 아무도 이용할 수 없었다. 당신의 노력은 시간 낭비로 끝났다.<br> ❤️ -3',
                failureDamage: 3
            },
            { 
                text: '강 양쪽의 살아있는 고무나무 뿌리가 서로를 향해 자라도록 유도한다.', 
                image: 'images/choice_37_3.png',
                isCorrect: true,
                successText: '성공적이다. 살아있는 뿌리는 당신의 길잡이에 따라 자라나 강을 가로질러 서로 얽혔고, 시간이 지나자 <span class="highlight-yellow">부서지지 않는 강력한 다리</span>가 되었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_37.jpg',
                    text: '인도 메갈라야의 <span class="highlight-yellow">\'살아있는 뿌리 다리\'</span>는 세계에서 가장 비가 많이 오는 날씨에 적응한 건축물입니다. 매년 다리를 부수는 <span class="highlight-yellow">강력한 계절풍의 물살</span>을 견디기 위해, 지역 주민들은 <span class="highlight-yellow">살아있는 나무의 뿌리</span>를 엮어 다리를 만듭니다. 이 다리는 시간이 지날수록 더 강해집니다.'
                }
            }
        ]
    },
    {
        id: 39,
        title: '하늘 위의 도시',
        type: '기타',
        image: 'images/situation_39.jpg',
        text: `당신은 볼리비아 라파스의 도시 계획가다. 이 도시는 안데스 산맥의 <span class="highlight-yellow">가파른 분지 지형</span>에 만들어져, 도시 안 지역 사이의 <span class="highlight-yellow">높이 차이가 아주 심하다.</span> 좁은 도로는 항상 <span class="highlight-yellow">심한 교통체증</span>에 시달린다. 이 지형에 맞는 새롭고 효율적인 대중교통을 만들어야 한다. 어떤 방법을 선택하겠는가?`,
        choices: [
            { 
                text: '기존의 도로를 확장하고, 버스 노선을 늘린다.', 
                image: 'images/choice_39_1.png',
                isCorrect: false,
                failureText: '상황은 더욱 나빠졌다. 가파른 산비탈 때문에 도로를 넓힐 공간이 부족했고, 늘어난 버스들은 <span class="highlight-yellow">원래의 교통체증에 그대로 갇혀버렸다.</span> 당신의 계획은 현실을 생각하지 않은 헛된 생각이었다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '지하철을 건설한다.', 
                image: 'images/choice_39_2.png',
                isCorrect: false,
                successChance: 0.1,
                successText: '엄청난 돈과 시간을 들여, 겨우 한 개의 노선을 완성했다. 하지만 <span class="highlight-yellow">험한 산악 지형</span> 때문에 더 이상 노선을 늘리는 것은 불가능했다. 당신의 지하철은 도시 전체를 책임지지 못하는 반쪽짜리 성공에 그쳤다.',
                failureText: '계획은 시작부터 어려움에 부딪혔다. <span class="highlight-yellow">심한 높이 차와 불안정한 땅</span> 때문에 터널 공사 비용이 예상을 넘어섰고, 결국 계획은 중단되었다. 당신은 이 도시의 지형을 너무 쉽게 생각했다.<br> ❤️ -5',
                failureDamage: 5
            },
            { 
                text: '케이블카로 높은 곳과 낮은 곳을 잇는다.', 
                image: 'images/choice_39_3.png',
                isCorrect: true,
                successText: '케이블카는 <span class="highlight-yellow">땅 위의 교통체증과 상관없이</span> 시민들을 빠르고 조용하게 실어 날랐다. 당신은 도시 지형의 단점을 공중에서 이겨내는 새로운 길을 열었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_39.jpg',
                    text: '볼리비아 라파스의 <span class="highlight-yellow">\'미 텔레페리코\'</span>는 세계에서 가장 큰 도시 케이블카 시스템입니다. <span class="highlight-yellow">아주 심한 높이 차와 계속되는 교통체증</span>을 가진 분지 지형에서, 케이블카는 지하철이나 도로를 넓히는 것보다 훨씬 효율적이고 돈이 적게 드는 대안이었습니다.'
                }
            }
        ]
    },
    {
        id: 40,
        title: '바람을 입는 옷',
        type: '의',
        image: 'images/situation_40.jpg',
        text: `당신은 베트남의 옷 디자이너다. 이곳은 일 년 내내 <span class="highlight-yellow">덥고 습한 날씨</span>가 계속된다. 공식 행사를 위해 <span class="highlight-yellow">아름다우면서도 시원한</span> 새 옷을 디자인해야 한다. 당신의 선택은?`,
        choices: [
            { 
                text: '두꺼운 양털 옷', 
                image: 'images/choice_40_1.png',
                isCorrect: false,
                failureText: '두꺼운 양털 옷은 <span class="highlight-yellow">덥고 습한 날씨</span>에 너무 덥다. 사람들은 옷을 입자마자 땀을 흘리기 시작했다. 이 지역의 기후와는 맞지 않는 선택이었다.<br> ❤️ -5',
                failureDamage: 5
            },
            { 
                text: '소매가 매우 짧은 옷', 
                image: 'images/choice_40_2.png',
                isCorrect: false,
                failureText: '시원하기는 하지만, <span class="highlight-yellow">전통적이고 격식 있는 자리</span>에는 어울리지 않는다는 평가를 받았다. 어른들이 당신의 디자인에 실망했다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '옆이 트인 긴 소매 옷', 
                image: 'images/choice_40_3.png',
                isCorrect: true,
                successText: '훌륭한 선택이다! 긴 디자인은 우아함을 보여주고, 옆트임 덕분에 <span class="highlight-yellow">움직임이 편하고 바람이 잘 통한다</span>. 베트남의 <span class="highlight-yellow">더운 날씨</span>에 완벽한 옷이 탄생했다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_40.jpg',
                    text: '베트남의 전통 의상 <span class="highlight-yellow">\'아오자이(Áo dài)\'</span>는 더운 날씨에 적응하기 위해 만들어졌다. 얇고 가벼운 천으로 만들고, 치마 옆을 길게 터서 <span class="highlight-yellow">바람이 잘 통하고 움직이기 편하게</span> 했다. <span class="highlight-yellow">아름다움을 뽐내면서도 시원함</span>을 놓치지 않은 옷이다.'
                }
            }
        ]
    },
    {
        id: 41,
        title: '고원의 지혜',
        type: '의',
        image: 'images/situation_41.jpg',
        text: `당신은 스코틀랜드 고원지대의 양치기다. 이곳은 <span class="highlight-yellow">춥고 비가 자주 오는 날씨</span>에, 땅은 늘 질퍽한 <span class="highlight-yellow">언덕과 습지</span>로 가득하다. 양들을 돌보기 위해 매일 이곳을 다녀야 한다. 어떤 옷을 입어야 할까?`,
        choices: [
            { 
                text: '화려하고 긴 면 바지', 
                image: 'images/choice_41_1.png',
                isCorrect: false,
                failureText: '면 바지는 비에 젖자 무거워지고 몸에 달라붙어 움직이기 힘들었다. <span class="highlight-yellow">젖은 옷이 체온을 빠르게 빼앗아</span> 추위에 떨어야 했다. 이 지역의 <span class="highlight-yellow">습한 날씨</span>에는 맞지 않는 선택이었다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '가볍고 얇은 비단 옷', 
                image: 'images/choice_41_2.png',
                isCorrect: false,
                failureText: '비단 옷은 <span class="highlight-yellow">험한 언덕의 나뭇가지와 돌</span>에 쉽게 찢어졌다. 또한, 비를 막아주지도 못하고 <span class="highlight-yellow">추운 날씨</span>에 몸을 전혀 따뜻하게 해주지 못했다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '두꺼운 양모 치마', 
                image: 'images/choice_41_3.png',
                isCorrect: true,
                successText: '최고의 선택이다! 양모 치마는 <span class="highlight-yellow">비에 젖어도 몸을 따뜻하게 지켜주었고</span>, 치마 형태라 <span class="highlight-yellow">언덕을 오르내리기 아주 편했다</span>. 젖은 땅을 걸어도 바지가 젖을 걱정이 없었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_41.jpg',
                    text: '스코틀랜드의 전통 의상 <span class="highlight-yellow">\'킬트(Kilt)\'</span>는 춥고 습한 고원지대 환경에 딱 맞는 옷이다. <span class="highlight-yellow">젖어도 따뜻한 양털</span>로 만들고, <span class="highlight-yellow">험한 지형에서 움직이기 편하도록</span> 바지 대신 치마 형태로 만들어졌다.'
                }
            }
        ]
    },
    {
        id: 42,
        title: '새로운 시대의 춤',
        type: '의',
        image: 'images/situation_42.jpg',
        text: `1920년대, 제1차 세계대전이 끝나고 사회 분위기가 바뀌었다. <span class="highlight-yellow">여성들도 사회에서 목소리를 내기 시작</span>하며 더 자유로워지기를 원했다. 새 시대의 여성인 당신은 신나는 파티에 가기 위해, <span class="highlight-yellow">답답하고 불편한, 몸을 많이 가리는 옛날 옷</span>을 벗어 던지고 싶다. 어떤 옷을 선택하겠는가?`,
        choices: [
            { 
                text: '몸을 꽉 조이는 드레스', 
                image: 'images/choice_42_1.png',
                isCorrect: false,
                failureText: '춤을 추기 시작하자 숨이 막히고 움직일 수 없었다. 이것은 <span class="highlight-yellow">자유로운 새 시대</span>와는 어울리지 않는, 과거의 불편한 옷이다. 친구들이 당신을 답답하게 쳐다본다.<br> ❤️ -5',
                failureDamage: 5
            },
            { 
                text: '온몸을 감싸는 무거운 치마', 
                image: 'images/choice_42_2.png',
                isCorrect: false,
                failureText: '빠른 음악에 맞춰 춤을 추기에는 치마가 <span class="highlight-yellow">길고 무거웠다</span>. 새 시대의 자유로운 여성이라기엔 <span class="highlight-yellow">너무 답답했다.</span><br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '짧고 장식이 달린 헐렁한 원피스', 
                image: 'images/choice_42_3.png',
                isCorrect: true,
                successText: '훌륭하다! 몸에 달라붙지 않아 <span class="highlight-yellow">아주 편하고</span>, 짧은 길이가 <span class="highlight-yellow">자유로운 여성상을 보여주는 듯 했다</span>.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_42.jpg',
                    text: '1920년대에 유행한 <span class="highlight-yellow">\'플래퍼(Flapper) 드레스\'</span>는 인문환경의 변화를 잘 보여준다. 전쟁 이후 <span class="highlight-yellow">여성의 사회적 지위가 높아지자</span>, 여성들은 몸을 조이는 옷 대신 <span class="highlight-yellow">자유롭게 활동하고 춤추기 편하도록</span> 짧고 헐렁한 옷을 입기 시작했다. 이 옷에는 <span class="highlight-yellow">자유를 향한 여성들의 생각</span>이 담겨 있다.'
                }
            }
        ]
    },
    {
        id: 43,
        title: '전쟁이 만든 요리',
        type: '식',
        image: 'images/situation_43.jpg',
        text: `당신은 한국전쟁 직후, 가난한 한 마을의 주민이다. 주변의 미군 부대에서 <span class="highlight-yellow">미군들이 남긴, 썩기 직전의 햄과 소시지</span>를 구할 수 있게 되었다. 이 귀한 서양 재료로 <span class="highlight-yellow">온 가족의 입맛에 맞으면서 배불리</span> 먹을 수 있는 음식을 만들어야 한다.`,
        choices: [
            { 
                text: '햄과 소시지를 서양식으로 빵에 끼워 먹기', 
                image: 'images/choice_43_1.png',
                isCorrect: false,
                failureText: '햄과 소시지는 모두가 나누어 먹기에는 양이 부족했다. 빵도 구하기 어려워 <span class="highlight-yellow">온 가족이 배불리 먹지 못했다</span>. 귀한 재료를 <span class="highlight-yellow">효율적으로 사용</span>하지 못했다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '햄과 소시지를 잘게 썰어 밥에 비벼 먹기', 
                image: 'images/choice_43_2.png',
                isCorrect: false,
                failureText: '썩기 직전의 햄과 소시지는 <span class="highlight-yellow">악취가 풍겨 그대로 먹기 어려웠다.</span> 또, 느끼한 맛 때문에 <span class="highlight-yellow">한국인의 입맛에 맞지 않았다.</span>.<br> ❤️ -5',
                failureDamage: 5
            },
            { 
                text: '김치와 고추장으로 햄과 소시지를 끓이기', 
                image: 'images/choice_43_3.png',
                isCorrect: true,
                successText: '최고의 선택이다! 찌개로 끓이니 <span class="highlight-yellow">적은 고기로 많은 음식을 만들 수</span> 있었다. 또 김치와 고추장 덕분에 <span class="highlight-yellow">잡내를 잡을 수 있었다.</span>.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_43.jpg',
                    text: '한국의 <span class="highlight-yellow">\'부대찌개\'</span>는 한국전쟁이라는 <span class="highlight-yellow">역사적 인문환경</span>이 만든 음식이다. 전쟁 후 <span class="highlight-yellow">식량이 부족</span>할 때, 미군에게서 나온 햄, 소시지 같은 서양 재료를 <span class="highlight-yellow">한국 전통의 김치찌개 조리법</span>과 합쳐 <span class="highlight-yellow">생존을 위한 음식</span>으로 만들어냈다.'
                }
            }
        ]
    },
    {
        id: 44,
        title: '부족함이 만든 달콤함',
        type: '식',
        image: 'images/situation_44.jpg',
        text: `당신은 이탈리아의 제과점 주인이다. <span class="highlight-yellow">큰 전쟁이 막 끝나</span>, 초콜릿의 재료인 카카오가 아주 귀해지고 비싸졌다. 사람들은 여전히 달콤한 것을 원한다. <span class="highlight-yellow">모두가 살 수 있는 가격</span>의 맛있는 초콜릿 스프레드를 만들어야 한다.`,
        choices: [
            { 
                text: '비싼 카카오만 사용하기', 
                image: 'images/choice_44_1.png',
                isCorrect: false,
                failureText: '고급 초콜릿 스프레드를 만들었지만, <span class="highlight-yellow">너무 비싸서 아무도 사지 못했다</span>. 가게는 텅 비었다. <span class="highlight-yellow">전쟁 후의 어려운 경제 상황</span>을 생각하지 않은 계획이었다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '카카오 대신 소금만 사용하기', 
                image: 'images/choice_44_2.png',
                isCorrect: false,
                failureText: '초콜릿 맛 없이 짠맛만 나는 스프레드는 아무도 좋아하지 않았다. 사람들은 달콤한 것을 원했다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '카카오에 흔하고 고소한 헤이즐넛 섞기', 
                image: 'images/choice_44_3.png',
                isCorrect: true,
                successText: '엄청난 성공이다! <span class="highlight-yellow">주변에서 구하기 쉬운 헤이즐넛</span> 덕분에 가격을 낮출 수 있었고, 카카오와 섞여 더 고소하고 새로운 맛을 만들어냈다. 전 세계 사람들이 사랑하는 간식이 탄생했다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_44.jpg',
                    text: '세계적인 초콜릿 스프레드 <span class="highlight-yellow">\'누텔라\'</span>는 제2차 세계대전이라는 <span class="highlight-yellow">인문환경</span> 속에서 탄생했다. 전쟁으로 <span class="highlight-yellow">카카오가 부족해지자</span>, 이탈리아에서 구하기 쉬운 <span class="highlight-yellow">헤이즐넛을 섞어</span> 양을 늘린 것이 시작이었다. 물자가 부족한 상황을 이겨내려는 창의적인 발상이 새로운 맛을 만들어냈다.'
                }
            }
        ]
    }
];
