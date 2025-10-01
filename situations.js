const SITUATIONS = [
    {
        id: 1,
        title: '초원의 형제들',
        image: 'images/situation_1.png',
        text: `당신은 몽골의 부족장이다. 부족민들은 <span class="highlight-yellow">양과 말을 기르며 살아간다</span>. 하지만 건조한 날씨가 계속되어 가축이 먹을 풀이 부족해지고 있다. <span class="highlight-yellow">나무도 거의 보이지 않는</span> 이 초원에서, 부족을 이끌고 새 집을 지어야 한다. 당신의 선택은?`,
        choices: [
            { 
                text: '강한 바람을 막기 위해, <u>튼튼한 나무집</u>을 짓는다.', 
                isCorrect: false,
                successChance: 0.4,
                successText: '나무집을 지었지만, 곧 가축의 풀이 떨어져 <span class="highlight-yellow">다른 곳으로 이동해야 했다</span>. 힘들여 지은 집은 버려졌고, 자원 낭비가 심했다.',
                failureText: '나무집을 지었지만, 곧 풀이 떨어져 <span class="highlight-yellow">이동해야 했다</span>. 새 집을 짓는 데 시간이 너무 오래 걸려 부족이 위기에 처했다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '많은 부족민을 수용할 <u>철골 콘크리트 아파트</u>를 짓는다.', 
                isCorrect: false,
                failureText: '<span class="highlight-yellow">건조한 초원에서 철근과 콘크리트</span>를 구하는 것은 불가능하다. 비현실적인 계획에 부족민들이 당신을 불신하기 시작했다.<br> ❤️ -5',
                failureDamage: 5
            },
            { 
                text: '풀이 떨어지면 <u>쉽게 이동할 수 있는 텐트형 집</u>을 짓는다.', 
                isCorrect: true,
                successXp: 5,
                successText: '쉽게 짓고 해체할 수 있는 텐트형 집을 지었다. 풀이 다 떨어지자, 부족은 <span class="highlight-yellow">신속하게 다른 목초지로 이주할 준비</span>를 마쳤다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_1.png',
                    text: '몽골의 전통 가옥 <span class="highlight-yellow">\'게르(Ger)\'</span>는 이동식 집이다. 유목민은 풀을 찾아 이동해야 했기에, 쉽게 짓고 해체할 수 있는 게르를 만들었다.'
                }
            },
        ]
    },
    {
        id: 2,
        title: '사막의 요새',
        image: 'images/situation_2.png',
        text: `당신은 모로코 사하라 사막 인근 마을의 건축가다. 이곳은 낮에는 <span class="highlight-yellow">매우 덥고</span> 밤에는 <span class="highlight-yellow">매우 추운</span> 극단적인 기후를 보인다. 주변에는 <span class="highlight-yellow">나무나 암석이 거의 없고</span> 붉은 흙과 모래뿐이다. 이 환경에서 사람들을 보호할 집을 설계해야 한다.`,
        choices: [
            { 
                text: '단열 효과가 좋은 <u>목재를 수입해</u> 통나무집을 짓는다.', 
                isCorrect: false,
                failureText: '이 지역에서 나무는 구하기 매우 힘든 자원이다. <span class="highlight-yellow">모든 자재를 수입</span>하는 데 막대한 비용이 들어 계획은 예산 부족으로 실패했다. <span class="highlight-yellow">주변에서 쉽게 구할 수 있는 자원</span>을 먼저 고려해야 했다.<br> ❤️ -5',
                failureDamage: 5
            },
            { 
                text: '낮 더위를 피하기 위해 통풍이 잘되는 <u>얇은 천 텐트</u>를 짓는다.', 
                isCorrect: false,
                failureText: '낮에는 버틸 만했지만, 해가 지자 얇은 천은 <span class="highlight-yellow">밤의 혹독한 추위</span>를 전혀 막아주지 못했다. 사람들은 밤새 추위에 떨어야 했다. 이 지역의 <span class="highlight-yellow">큰 일교차</span>를 고려하지 않은 설계였다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '주변 <u>흙으로 두꺼운 벽</u>을 쌓고, 창문은 작게 낸다.', 
                isCorrect: true,
                successXp: 5,
                successText: '성공적이었다. 두꺼운 흙벽은 낮의 <span class="highlight-yellow">열기를 흡수해 실내를 시원하게</span> 유지했고, 밤에는 <span class="highlight-yellow">흡수한 열을 방출해 실내를 따뜻하게</span> 만들었다. 작은 창문은 열 출입을 최소화하여 쾌적한 온도를 유지했다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_2.png',
                    text: '모로코 전통 가옥 <span class="highlight-yellow">\'카스바\'</span>는 사막 환경에 적응한 결과물이다. 구하기 쉬운 흙으로 <span class="highlight-yellow">열용량이 큰 두꺼운 벽</span>을 만들어 외부 온도 변화로부터 실내를 보호하며, <span class="highlight-yellow">천연 냉난방 시스템</span> 역할을 한다.'
                }
            }
        ]
    },
    {
        id: 3,
        title: '영혼과의 만찬',
        image: 'images/situation_3.png',
        text: `멕시코에서는 <span class="highlight-yellow">죽음을 삶의 또 다른 단계</span>로 여기는 전통이 있다. 이 믿음에 따라, <span class="highlight-yellow">일 년에 한 번 세상을 떠난 영혼들이 가족을 만나러 돌아온다</span>고 생각한다.<br><br>당신은 바로 그 시기에 멕시코 친구의 집에 방문했다. 이들의 문화를 고려할 때, 가장 적절한 행동은 무엇일까?`,
        choices: [
            { 
                text: '엄숙한 순간이므로, 경건하게 <u>묵념하며 애도한다</u>.', 
                isCorrect: false,
                successChance: 0.4,
                successText: '친구는 당신의 태도에 고마워하며 설명했다. "마음은 고맙지만, 오늘은 슬퍼하는 날이 아니야. <span class="highlight-yellow">우리는 돌아가신 분을 웃으며 맞이하고 싶어</span>." 다행히 무례를 범하지는 않았다.',
                failureText: '당신의 침묵에 즐겁던 분위기가 싸늘해졌다. 친구가 말했다. "이건 <span class="highlight-yellow">슬퍼하는 날이 아니라 기뻐하는 날</span>이야. 당신의 행동은 좋은 의도였지만 실례가 되었어."<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '돌아온 영혼을 환영하며, 함께 <u>즐거운 기억을 나눈다</u>.', 
                isCorrect: true,
                successXp: 5,
                successText: '당신이 고인에 대한 즐거운 추억을 이야기하자 친구와 가족들이 기뻐했다. "<span class="highlight-yellow">우리가 즐겁게 기억해주는 것이 바로 영혼을 위한 최고의 대접</span>이야." 당신은 멕시코의 문화를 깊이 이해했다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_3.png',
                    text: '멕시코의 <span class="highlight-yellow">\'죽은 자들의 날\'</span>은 축제 분위기다. 죽음을 삶의 일부로 여기고 떠난 이와의 재회를 축하하며, 슬픔 대신 <span class="highlight-yellow">기억과 사랑을 통한 유대</span>를 강조한다. 제단 \'오프렌다\'의 음식과 장식도 이러한 사상의 결과물이다.'
                }
            },
            { 
                text: '산 자와 죽은 자의 영역은 다르므로, <u>위험을 피해 멀리 떨어져</u> 있는다.', 
                isCorrect: false,
                failureText: '당신이 뒷걸음질 치자 가족들의 표정이 굳었다. 친구가 실망하며 말했다. "영혼이 우리를 <span class="highlight-yellow">\'방문\'</span>한다고 했잖아. <span class="highlight-yellow">사랑하는 가족을 귀신 취급</span>하는 건 정말 큰 실례야."<br> ❤️ -5',
                failureDamage: 5
            }
        ]
    },
    {
        id: 4,
        title: '성스러운 가르침',
        image: 'images/situation_4.png',
        text: `당신은 <span class="highlight-yellow">여성 관광객</span>으로 튀르키예의 이슬람 사원 '블루 모스크'에 방문했다. 입구 안내문에는 '<span class="highlight-yellow">이곳은 신성한 장소입니다. 신께서는 겸손하고 정숙한 마음을 가진 이를 사랑하십니다</span>'라고 적혀 있다. 입구에는 관광객에게 빌려주는 스카프가 놓여 있다. 사원에 들어가기 위해 어떻게 해야 할까?`,
        choices: [
            { 
                text: '입은 <u>옷 그대로</u> 들어간다.', 
                isCorrect: false,
                failureText: '사원 관리인이 당신을 막아섰다. "죄송하지만, 이곳의 규칙을 따라 주셔야 합니다. <span class="highlight-yellow">이곳의 문화를 존중하지 않으면 들어올 수 없습니다</span>." 당신은 결국 사원에 들어가지 못했다.<br> ❤️ -4',
                failureDamage: 5
            },
            { 
                text: '단추를 열고 <u>피부를 드러낸 채</u> 들어간다.', 
                isCorrect: false,
                failureText: '관리인이 당신을 막아세웠다. "신성한 장소에서 무슨 꼴입니까? <span class="highlight-yellow">경전의 가르침대로 정숙한 옷차림</span>을 해야 합니다." 당신은 사원에서 쫓겨났다.<br> ❤️ -6',
                failureDamage: 4
            },
            { 
                text: '입구의 <u>스카프로 머리와 어깨를 가리고</u> 들어간다.', 
                isCorrect: true,
                successXp: 5,
                successText: '올바른 선택이다. 당신이 스카프로 머리를 가리자, 관리인이 미소로 환영했다. <span class="highlight-yellow">다른 문화의 신성한 장소를 방문할 때는 그들의 방식을 존중</span>하는 것이 중요함을 이해했다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_4.png',
                    text: '이슬람 문화권 여성의 <span class="highlight-yellow">\'히잡(Hijab)\'</span>은 경전 가르침에 따라 <span class="highlight-yellow">겸손함과 정숙함을 표현하는 종교적 신념의 상징</span>이다. 특히 사원에 들어갈 때 히잡 착용은 신에 대한 깊은 존경심을 나타내는 중요한 행위다.'
                }
            }
        ]
    },
    {
        id: 5,
        title: '신 앞의 겸손함',
        image: 'images/situation_5.png',
        text: `유대교의 핵심 교리 중 하나는 '<span class="highlight-yellow">신은 늘 우리 위에 존재한다</span>'는 것이다. 따라서 신자들은 신에 대한 존경의 표시로, <span class="highlight-yellow">자신의 머리 꼭대기를 신에게 직접 보이는 것</span>을 오만한 행동으로 여긴다.<br><br>당신은 유대교 회당에 방문하게 되었다. 입구 바구니에 작고 동그란 모자들이 들어있다. 배운 가르침에 따라 어떻게 행동해야 할까?`,
        choices: [
            { 
                text: '성스러운 장소이므로, 다른 종교처럼 <u>모든 모자를 벗는다</u>.', 
                isCorrect: false,
                successChance: 0.3,
                successText: '당신이 모자를 벗으려 하자, 한 신도가 막으며 설명했다. "존중하려는 마음은 감사합니다. 하지만 저희는 반대입니다. <span class="highlight-yellow">오히려 머리를 가림으로써 신께 존경을 표합니다</span>." 당신의 태도 덕분에 실수를 면했다.',
                failureText: '당신이 모자를 벗자 주변 사람들이 놀라며 수군거린다. 한 사람이 다가와 말했다. "어서 모자를 쓰세요. <span class="highlight-yellow">신 앞에서 머리를 드러내는 것은 큰 결례입니다</span>."<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '바구니의 <u>모자로 손과 얼굴을 닦아</u> 몸을 정결히 한다.', 
                isCorrect: false,
                failureText: '당신이 모자로 얼굴을 닦으려 하자 옆 사람이 기겁하며 당신을 말렸다. "<span class="highlight-yellow">이건 신성한 물건입니다!</span> 걸레처럼 사용하다니, 정말 큰 모욕입니다!" 당신은 회당에서 쫓겨날 뻔했다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '신에게 머리 꼭대기를 보이지 않도록, <u>바구니의 모자를 쓴다</u>.', 
                isCorrect: true,
                successXp: 5,
                successText: '정확한 판단이다. 당신이 자연스럽게 모자를 쓰자, 주변 신도들이 따뜻한 미소로 맞이했다. <span class="highlight-yellow">머리를 가리는 행위</span>를 통해 당신은 이들의 종교와 문화를 존중함을 보여주었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_5.png',
                    text: '유대인 남성이 머리에 쓰는 작은 모자 <span class="highlight-yellow">\'키파\'</span>는 <span class="highlight-yellow">항상 내 위에 신이 존재함을 잊지 않고, 겸손함을 유지하기 위한 신앙의 표현</span>으로, 신자들에게 삶의 일부와도 같은 중요한 의복이다.'
                }
            }
        ]
    },
    {
        id: 6,
        title: '혹한의 생존법',
        image: 'images/situation_6.png',
        text: `당신은 겨울에 러시아 시베리아에 도착했다. 기온은 영하 20도 아래로 떨어졌고, 장애물 없는 평원을 가로지르는 <span class="highlight-yellow">칼바람</span>이 분다.<br><br>잠시만 밖에 있어도 <span class="highlight-yellow">귀와 턱, 뺨의 감각이 사라진다.</span> 이 혹한의 환경에서 당신의 머리를 보호하기 위한 가장 합리적인 선택은 무엇일까?`,
        choices: [
            { 
                text: '최첨단 신소재로 만든 <u>두꺼운 방한 비니</u>를 쓴다.', 
                isCorrect: false,
                successChance: 0.3,
                successText: '머리의 온기는 지킬 수 있었지만, <span class="highlight-yellow">칼바람에 노출된 귀와 뺨</span>은 막을 수 없었다. 곧 심각한 동상에 걸릴 위험을 깨달았다.',
                failureText: '두꺼운 비니도 혹한 앞에서는 역부족이었다. 매서운 바람이 모자 사이를 파고들었고, <span class="highlight-yellow">보호받지 못한 귀와 턱은 감각이 없어졌다.</span> 당신은 저체온증과 동상 위기에 처했다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '두꺼운 가죽으로 만들어 <u>귀와 턱까지 덮는 모자</u>를 쓴다.', 
                isCorrect: true,
                successXp: 5,
                successText: '최고의 선택이다. 두꺼운 가죽과 털이 머리의 열을 보존했고, <span class="highlight-yellow">귀와 턱, 뺨까지 감싸는 덮개</span>가 칼바람으로부터 당신을 완벽하게 보호했다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_6.png',
                    text: '러시아 털모자 <span class="highlight-yellow">\'샤프카-우샨카\'</span>는 혹독한 추위가 만든 결과물이다. \'우샨카\'는 \'귀 덮개가 달린 모자\'라는 뜻으로, <span class="highlight-yellow">시베리아 칼바람으로부터 귀, 턱, 목덜미 등 취약 부위를 보호</span>하기 위해 탄생한 생존 장비에 가깝다.'
                }
            },
            { 
                text: '머리카락이 젖지 않게 <u>방수가 되는 넓은 챙 모자</u>를 쓴다.', 
                isCorrect: false,
                failureText: '치명적인 판단 착오다. 방수 기능은 눈을 막아주었지만, <span class="highlight-yellow">열을 보존하는 데는 아무런 도움이 되지 않았다.</span> 챙 사이로 들어온 냉기가 당신의 체온을 급격히 빼앗아 갔다.<br> ❤️ -6',
                failureDamage: 6
            }
        ]
    },
    {
        id: 7,
        title: '태양과 비의 땅',
        image: 'images/situation_7.png',
        text: `당신은 베트남 메콩강 삼각주의 농부다. 이곳은 오전에는 <span class="highlight-yellow">매우 뜨거운 햇볕</span>이 내리쬐다가, 오후에는 갑자기 <span class="highlight-yellow">폭우</span>가 쏟아지는 변덕스러운 날씨를 보인다.<br><br>강한 햇빛과 갑작스러운 비에 모두 대처할 수 있는 모자가 필요하다. 가장 실용적인 선택은 무엇일까?`,
        choices: [
            { 
                text: '통풍이 잘되는 <u>가벼운 밀짚모자</u>로 더위를 피한다.', 
                isCorrect: false,
                failureText: '판단 착오였다. 밀짚모자는 햇볕은 잘 막아주었지만, 갑자기 쏟아진 폭우에 금방 망가져 버렸다. <u>비에 대한 대책</u>이 전혀 되지 않았다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '나뭇잎으로 만든, 끝이 뾰족한 <u>원뿔 형태의 모자</u>를 쓴다.', 
                isCorrect: true,
                successXp: 5,
                successText: '합리적인 선택이다. 넓은 챙은 햇볕을 막아 그늘을 만들었고, 원뿔 형태는 쏟아지는 <span class="highlight-yellow">폭우가 그대로 흘러내리게</span> 해 우산 역할을 했다. 이 모자 하나로 두 문제를 모두 해결했다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_7.png',
                    text: '베트남 전통 모자 <span class="highlight-yellow">\'논라(Nón Lá)\'</span>는 아열대 몬순 기후에 완벽히 적응한 생활용품이다. 구하기 쉬운 야자수 잎으로 가볍게 만들어, <span class="highlight-yellow">강한 햇빛과 갑작스러운 비를 동시에 막도록</span> 설계되었다.'
                }
            },
            { 
                text: '<u>방수 기능이 있는 우비 모자</u>를 뒤집어써 비에 대비한다.', 
                isCorrect: false,
                successChance: 0.3,
                successText: '비는 피할 수 있었지만, 비가 그치고 해가 뜨자 <span class="highlight-yellow">통풍이 안 되는 방수 모자</span> 때문에 머리에 땀이 차고 더워서 일할 수 없었다.',
                failureText: '최악의 선택이었다. 비가 오지 않는 동안, 통풍이 안 되는 방수 모자는 머리를 찜통으로 만들었다. <span class="highlight-yellow">땀과 열기가 빠져나가지 못해</span> 현기증을 느끼며 쓰러질 뻔했다.<br> ❤️ -5',
                failureDamage: 5
            }
        ]
    },
    {
        id: 8,
        title: '숲의 온기',
        image: 'images/situation_8.png',
        text: `당신은 19세기 캐나다의 개척민이다. 이곳은 <span class="highlight-yellow">울창한 침엽수림</span> 덕분에 목재를 구하기 쉽다. 하지만 겨울에는 기온이 영하 20도 이하로 떨어지고 <span class="highlight-yellow">몇 달간 폭설</span>이 계속된다.<br><br>혹독한 겨울을 안전하게 보내려면 추위를 막고 눈의 무게를 견딜 튼튼한 집이 필요하다. 주변의 풍부한 자원을 활용하여 어떤 집을 지어야 할까?`,
        choices: [
            { 
                text: '가공하기 쉬운 <u>얇은 나무판자</u>를 이어 붙여 넓은 집을 짓는다.', 
                isCorrect: false,
                failureText: '치명적인 실수였다. 얇은 판자는 추위를 막지 못했고, <span class="highlight-yellow">지붕에 쌓인 눈의 무게</span>를 이기지 못한 집은 결국 무너졌다. 자원의 양뿐만 아니라 <span class="highlight-yellow">특성</span>을 고려해야 했다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '나무를 땔감으로 삼고, <u>동굴을 파서</u> 그 안에서 지낸다.', 
                isCorrect: false,
                successChance: 0.2,
                successText: '동굴은 바람을 막아주었지만, 땅에서 올라오는 한기와 습기, 그리고 <span class="highlight-yellow">야생 동물의 위협</span> 때문에 장기적인 해결책이 될 수 없었다.',
                failureText: '끔찍한 선택이었다. 당신이 잠든 사이, 겨울잠을 자려던 <span class="highlight-yellow">굶주린 곰</span>이 동굴로 들이닥쳤다. 간신히 도망쳤지만 모든 것을 잃었다.<br> ❤️ -5',
                failureDamage: 5
            },
            { 
                text: '<u>두꺼운 통나무</u>를 겹겹이 쌓아 벽을 만들고, 지붕은 경사지게 짓는다.', 
                isCorrect: true,
                successXp: 5,
                successText: '탁월한 판단이다. 두꺼운 통나무 벽은 냉기를 차단해 <span class="highlight-yellow">실내를 따뜻하게 유지</span>해주었다. 경사진 지붕 덕분에 <span class="highlight-yellow">쌓인 눈이 자연스럽게 흘러내려</span> 집이 무너질 걱정도 없었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_8.png',
                    text: '캐나다 <span class="highlight-yellow">\'통나무집(Log Cabin)\'</span>은 춥고 눈 많은 기후와 울창한 숲 환경이 결합해 탄생했다. 구하기 쉬운 나무를 이용하되, <span class="highlight-yellow">두꺼운 통나무 자체를 단열재로 활용</span>해 혹한을 견딘다. 지붕을 경사지게 만들어 <span class="highlight-yellow">폭설의 무게를 견디도록</span> 설계했다.'
                }
            }
        ]
    },
    {
        id: 9,
        title: '강과 함께 사는 법',
        image: 'images/situation_9.png',
        text: `당신은 방글라데시 강가 마을의 주민이다. 이 지역은 <span class="highlight-yellow">세계 최대의 삼각주</span>로 땅이 낮고 평평하다. 매년 우기에는 <span class="highlight-yellow">강물이 불어나</span> 마을 전체가 <span class="highlight-yellow">몇 달 동안 물에 잠긴다.</span><br><br>곧 우기가 시작된다. 이 홍수 속에서 가족과 재산을 지킬 집을 지어야 한다. 이 환경에 가장 적합한 집은 무엇일까?`,
        choices: [
            { 
                text: '물에 쓸려가지 않게, <u>땅을 깊게 파고 튼튼한 벽돌집</u>을 짓는다.', 
                isCorrect: false,
                failureText: '최악의 판단이었다. 우기가 시작되자 불어난 강물은 당신의 집을 그대로 삼켜버렸다. 집이 물에 잠겨, 가족과 함께 지붕 위에서 구조를 기다려야 했다. <span class="highlight-yellow">홍수를 힘으로 이기려 한 것</span>이 실수였다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '<u>높은 나무 기둥</u>을 땅에 박고, 그 위에 집을 지어 침수를 막는다.', 
                isCorrect: true,
                successXp: 5,
                successText: '훌륭한 선택이다. 강물이 마을을 덮쳤지만, 당신의 집은 <span class="highlight-yellow">높은 기둥 덕분에 물에 잠기지 않았다.</span> 가족들은 불어난 물 위에서 안전하게 우기가 끝나기를 기다릴 수 있었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_9.png',
                    text: '방글라데시에서는 반복되는 홍수에 적응하기 위해 다양한 집을 짓는다. 땅에 높은 기둥을 세우는 <span class="highlight-yellow">\'고상 가옥\'</span>이나, 물 위에 집을 띄우는 <span class="highlight-yellow">\'수상 가옥\'</span>이 대표적인 예다.'
                }
            },
            { 
                text: '<u>물에 뜨는 뗏목 기반</u>을 만들고, 그 위에 가벼운 집을 짓는다.', 
                isCorrect: true,
                successXp: 5,
                successText: '현명한 해결책이다. 강물이 불어나자, 당신의 집은 <span class="highlight-yellow">수위에 맞춰 자연스럽게 떠올랐다.</span> 덕분에 가족과 재산 모두 안전했고, 배를 이용해 자유롭게 이동할 수 있었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_9.png',
                    text: '방글라데시에서는 반복되는 홍수에 적응하기 위해 다양한 집을 짓는다. 땅에 높은 기둥을 세우는 <span class="highlight-yellow">\'고상 가옥\'</span>이나, 물 위에 집을 띄우는 <span class="highlight-yellow">\'수상 가옥\'</span>이 대표적인 예다.'
                }
            }
        ]
    },
   {
        id: 10,
        title: '할랄과 하람',
        image: 'images/situation_10.png',
        text: `당신은 <span class="highlight-yellow">이슬람 국가</span>인 인도네시아를 여행 중이다. 이슬람 율법에서 허용된 음식은 '할랄', 금지된 음식은 <span class="highlight-yellow">'하람'</span>이라 불린다. 율법은 <span class="highlight-yellow">정신을 흐리게 만드는 것</span>과 특정 동물을 금지하는데, 특히 돼지는 <span class="highlight-yellow">대표적인 금기 식품</span>이다.<br><br>현지 친구 가족의 저녁 식사에 초대받았다. 감사의 표시로 어떤 음식을 선물하는 것이 가장 적절할까?`,
        choices: [
            { 
                text: '가장 비싼 부위로 만든 <u>돼지고기 바비큐</u>를 선물한다.', 
                isCorrect: false,
                failureText: '당신이 선물을 내밀자 집주인의 얼굴이 굳었다. 파티 분위기는 순식간에 얼어붙었다. 당신은 이 문화권에서 <span class="highlight-yellow">가장 모욕적인 행동</span>을 저질렀고, 결국 쫓겨났다.<br> ❤️ -7',
                failureDamage: 7
            },
            { 
                text: '축제 분위기를 돋울 <u>고급 샴페인(술)</u>을 선물한다.', 
                isCorrect: false,
                failureText: '집주인은 곤란한 표정으로 선물을 거절했다. "마음은 감사합니다. 하지만 율법은 <span class="highlight-yellow">정신을 흐리게 만드는 것 또한 금지</span>하고 있습니다." 당신은 주어진 단서를 꼼꼼히 읽지 않았다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '신선한 <u>열대 과일과 견과류</u>로 만든 디저트를 선물한다.', 
                isCorrect: true,
                successXp: 5,
                successText: '사려 깊은 선택이다. 당신이 가져온 과일 디저트를 보고 가족 모두가 기뻐했다. 당신은 <span class="highlight-yellow">문화를 존중하는 예의 바른 손님</span>으로 환영받았다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_10.png',
                    text: '이슬람 율법은 무슬림 생활 전반, 특히 식문화에 큰 영향을 미친다. 율법에서 허용하는 <span class="highlight-yellow">\'할랄\'</span> 음식만 먹을 수 있으며, 돼지고기나 술처럼 <span class="highlight-yellow">정신에 영향을 주는 \'하람\'</span>은 절대 먹지 않는다.'
                }
            }
        ]
    },
    {
        id: 11,
        title: '첫 번째 추수감사절',
        image: 'images/situation_11.png',
        text: `당신은 17세기 초 북미 대륙에 정착한 이주민이다. 혹독한 첫 겨울 후, <span class="highlight-yellow">원주민의 도움으로 첫 농사를 성공적으로</span> 마쳤다. 수확의 기쁨을 나누고 감사를 표하기 위해 원주민들을 만찬에 초대했다.<br><br>메인 요리는 <span class="highlight-yellow">이 새로운 땅에서 풍부하게 구할 수 있는</span> 푸짐한 음식이어야 한다. 소와 닭은 농사와 알을 위해 매우 귀하다. 어떤 음식을 선택하는 것이 가장 합리적일까?`,
        choices: [
            { 
                text: '농사 성공을 축하하며, <u>귀한 소로 스테이크</u>를 대접한다.', 
                isCorrect: false,
                failureText: '근시안적인 판단이었다. 농사에 필요한 소는 중요한 자산이었다. <span class="highlight-yellow">귀한 가축을 잡아먹은 탓</span>에, 다음 해 농사에 심각한 차질을 겪게 되었다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '풍성하게 수확한 <u>옥수수와 호박으로 채소 요리</u>를 선보인다.', 
                isCorrect: false,
                successChance: 0.5,
                successText: '채소 요리는 훌륭했지만, 잔치의 중심이 되는 <span class="highlight-yellow">푸짐한 고기 요리가 없어</span> 모두 아쉬워했다. 잔치는 사람들의 기대를 완벽히 만족시키지 못했다.',
                failureText: '채소 요리만 내놓자 손님들은 크게 실망했다. 모두가 기대했던 것은 <span class="highlight-yellow">든든한 고기 요리</span>였다. 잔치의 핵심을 놓쳐 분위기가 어색해졌다.<br> ❤️ -3',
                failureDamage: 3
            },
            { 
                text: '주변 숲에서 흔한 <u>야생 날짐승을 사냥</u>해온다.', 
                isCorrect: true,
                successXp: 5,
                successText: '현실적인 판단이다. 사냥팀은 이 대륙의 토종새인 커다란 <span class="highlight-yellow">야생 칠면조</span>를 여러 마리 잡아왔다. 칠면조 구이는 모든 손님을 배불리 먹이기에 충분했고, 귀한 가축을 희생할 필요도 없었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_11.png',
                    text: '미국에서는 <span class="highlight-yellow">\'추수감사절\'</span>에 칠면조 요리를 먹는 전통이 있다. 당시 이주민들에게 칠면조는 <span class="highlight-yellow">북미 대륙에서 쉽게 구할 수 있는 풍부한 식량 자원</span>이었다. 생존을 위한 현실적인 선택이 문화적 상징으로 자리 잡았다.'
                }
            }
        ]
    },
    {
        id: 12,
        title: '초원의 요리사',
        image: 'images/situation_12.png',
        text: `당신은 중앙아시아 초원의 튀르키예 유목민 요리사다. 부족은 <span class="highlight-yellow">양과 염소를 이끌고 끊임없이 이동</span>하므로 요리 도구는 간단해야 한다. 또한, 초원에서는 <span class="highlight-yellow">땔감으로 쓸 나무를 구하기 매우 어렵다.</span><br><br>가진 양고기를 가장 빠르고 효율적으로 조리해야 한다. 어떤 방식을 선택하겠는가?`,
        choices: [
            { 
                text: '고기를 <u>큰 덩어리째로</u>, 구덩이를 파 장작불에 천천히 굽는다.', 
                isCorrect: false,
                failureText: '치명적인 실수였다. 큰 고기 덩어리를 익히는 데 필요한 <span class="highlight-yellow">장작을 충분히 구할 수 없었고</span>, 불이 약해 고기는 제대로 익지도 않았다. 귀한 고기와 시간을 낭비하여 부족민들의 원성을 샀다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '고기를 <u>잘게 잘라 금속 꼬치에 꿰어</u>, 작은 불에 돌려가며 굽는다.', 
                isCorrect: true,
                successXp: 5,
                successText: '가장 현명한 방법이다. 고기를 작게 자르니 <span class="highlight-yellow">적은 땔감으로도 금방</span> 익힐 수 있었고, 꼬치 덕분에 골고루 익힐 수 있었다. 최소한의 자원으로 모든 부족민에게 따뜻한 음식을 대접했다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_12.png',
                    text: '튀르키예 대표 요리 <span class="highlight-yellow">\'케밥(Kebab)\'</span>은 유목민 생활 환경에서 탄생했다. 땔감이 부족한 초원에서 고기를 빨리 익히기 위해 <span class="highlight-yellow">작게 잘라 꼬치에 꿰어 굽는 방식</span>이 발전했다. 현대에는 거대한 꼬치구이 형태로 변형되기도 한다.'
                }
            },
            { 
                text: '<u>물을 사용해 고기를 끓이고</u>, 주변 풀을 넣어 국을 만든다.', 
                isCorrect: false,
                failureText: '잘못된 판단이다. <span class="highlight-yellow">건조한 초원에서 물은 식수만으로도 부족</span>했다. 요리를 위해 귀한 물을 너무 많이 낭비하여 부족 전체가 식수 부족으로 고통받았다.<br> ❤️ -5',
                failureDamage: 5
            }
        ]
    },
    {
        id: 13,
        title: '신성한 생명',
        image: 'images/situation_13.png',
        text: `당신은 <span class="highlight-yellow">힌두교 중심의 인도</span> 가정에 저녁 식사 초대를 받았다. 힌두교는 <span class="highlight-yellow">모든 생명을 소중히 여기는 '아힘사(Ahimsa, 비폭력)'</span> 정신을 중요하게 생각한다. 특히 암소는 <span class="highlight-yellow">신성한 존재로 여겨져 절대 먹지 않는다.</span><br><br>존중을 표하고 함께 즐길 수 있는 음식은 무엇일까? 배운 가르침을 바탕으로 선택해 보자.`,
        choices: [
            { 
                text: '더운 날씨에 기운을 돋울 영양가 높은 <u>소고기 스테이크</u>를 가져간다.', 
                isCorrect: false,
                failureText: '당신이 소고기를 꺼내자 집주인의 얼굴이 굳었다. "저희에게... <span class="highlight-yellow">신성한 소를 먹으라는 겁니까?</span>" 당신의 선물은 끔찍한 모욕으로 받아들여져 집에서 쫓겨났다.<br> ❤️ -7',
                failureDamage: 7
            },
            { 
                text: '다양한 향신료를 사용해 만든 <u>닭고기 카레</u>를 가져간다.', 
                isCorrect: false,
                successChance: 0.7,
                successText: '다행히 그 가족은 닭고기를 먹었다. 하지만 집주인은 설명해주었다. "맛있게 먹겠습니다. 하지만 <span class="highlight-yellow">아힘사 정신에 따라 고기를 먹지 않는 힌두교도</span>도 많습니다."',
                failureText: '집주인은 난처한 표정으로 말했다. "죄송하지만 저희 가족은 <span class="highlight-yellow">아힘사 가르침에 따라 어떤 고기도 먹지 않습니다.</span>" 당신의 요리는 아무도 손대지 못했다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '신선한 채소와 렌틸콩, 향신료를 넣은 <u>채식 카레</u>를 가져간다.', 
                isCorrect: true,
                successXp: 5,
                successText: '완벽한 선택이었다. 집주인은 당신의 채식 카레를 보고 활짝 웃으며 감사를 표했다. "저희 문화를 존중해주셨군요. <span class="highlight-yellow">모든 생명을 존중하는 마음</span>이 담긴 훌륭한 선물입니다."<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_13.png',
                    text: '인도 식문화의 큰 특징은 힌두교의 영향이다. 생명을 존중하는 <span class="highlight-yellow">\'아힘사\'</span> 교리에 따라 많은 힌두교도들이 채식을 하며, 특히 <span class="highlight-yellow">신성시되는 소는 절대 먹지 않는다.</span>'
                }
            }
        ]
    },
    {
        id: 14,
        title: '뜨거운 땅의 에너지',
        image: 'images/situation_14.png',
        text: `당신은 서아프리카 가나의 마을에 산다. 이곳은 덥고 습한 열대기후로, 주민들은 <span class="highlight-yellow">힘든 농사일</span>을 한다. 고된 노동을 이겨낼 <span class="highlight-yellow">높은 열량의 주식</span>이 필요하다.<br><br>이곳은 밀이나 쌀 농사에 적합하지 않다. 대신 땅속에서 자라는 <span class="highlight-yellow">카사바, 얌(yam) 같은 녹말이 풍부한 뿌리채소</span>가 주된 식량이다. 이 재료로 마을 사람들에게 힘을 주는 음식을 만들어야 한다.`,
        choices: [
            { 
                text: '재료를 얇게 썰어 기름에 튀겨 <u>바삭한 과자</u>로 만든다.', 
                isCorrect: false,
                failureText: '잘못된 선택이다. 튀김은 맛있는 간식은 될 수 있지만, 힘든 노동에 필요한 에너지를 채워주는 <span class="highlight-yellow">든든한 주식으로는 부족했다.</span> 사람들은 금방 허기를 느꼈다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '재료를 곱게 갈아 가루로 만든 뒤, <u>화덕에서 빵으로 굽는다</u>.', 
                isCorrect: false,
                failureText: '결과가 좋지 않았다. 카사바 가루는 글루텐이 없어 빵처럼 부풀지 않고 딱딱하게 굳었다. 또한, <span class="highlight-yellow">더운 날씨에 화덕을 사용하는 것</span>은 비효율적이었다.<br> ❤️ -5',
                failureDamage: 5
            },
            { 
                text: '재료를 푹 삶은 뒤, 절구에 넣고 <u>찧어 쫀득한 반죽</u>으로 만든다.', 
                isCorrect: true,
                successXp: 5,
                successText: '정확한 방법이다. 쫀득한 반죽은 매우 든든했고, 소화가 천천히 되어 오랫동안 포만감을 유지해주었다. 덕분에 마을 사람들은 <span class="highlight-yellow">오후 내내 지치지 않고 일할 힘</span>을 얻었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_14.png',
                    text: '서아프리카 대표 주식 <span class="highlight-yellow">\'푸푸(Fufu)\'</span>는 고된 노동에 필요한 <span class="highlight-yellow">에너지를 효율적으로 공급</span>하기 위해 탄생했다. 열대 기후에서 잘 자라는 <span class="highlight-yellow">칼로리 높은 뿌리채소</span>를 주재료로, 든든하게 먹기 위해 찧어서 뭉치는 조리법을 발전시켰다.'
                }
            }
        ]
    },
    {
        id: 15,
        title: '지지 않는 태양의 도시',
        image: 'images/situation_15.png',
        text: `당신은 러시아 상트페테르부르크의 시장이다. 이 도시는 <span class="highlight-yellow">북극에 가까운 고위도</span>에 위치해, 여름이 되면 자정이 넘어도 <span class="highlight-yellow">하늘이 계속 밝은 상태</span>가 유지된다.<br><br>이 '백야(白夜)' 현상은 몇 주간 계속될 것이다. 시민들의 쾌적한 삶을 위해 이 현상에 어떻게 대처해야 할까?`,
        choices: [
            { 
                text: '시민들의 수면을 위해, <u>두꺼운 암막 커튼</u>을 보급한다.', 
                isCorrect: false,
                failureText: '효과는 있었지만, 이 지역만의 특별한 자연현상을 더 효과적으로 이용하는 방법이 있을 수도 있다.<br> ❤️ -1',
                failureDamage: 1
            },
            { 
                text: '다른 지역과의 통일성을 위해, <u>별도로 대처하지 않는다</u>.', 
                isCorrect: false,
                failureText: '잘못된 판단이었다. 밝은 밤 때문에 주민들은 휴식하지 못했다. <span class="highlight-yellow">수면 부족으로 쌓인 스트레스</span>는 건강 악화와 생산성 저하로 이어졌다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '이 현상을 즐길 수 있는 <u>대규모 예술 축제</u>를 연다.', 
                isCorrect: true,
                successXp: 5,
                successText: '가장 좋은 선택이었다. 강변에서 음악회와 예술 공연을 열자, 주민들은 자연현상을 즐겼다. 또한 관광객이 늘어 수입이 증가하고 도시에 활기가 돌았다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_15.png',
                    text: '러시아 상트페테르부르크에서는 <span class="highlight-yellow">\'백야 축제\'</span>를 연다. 북극권에 가까워 여름철에 해가 지지 않는 <span class="highlight-yellow">\'백야\'</span> 현상이 나타나기 때문이다. 러시아인들은 이 독특한 자연환경을 예술과 문화가 결합된 세계적인 축제로 발전시켰다.'
                }
            }
        ]
    },
    {
        id: 16,
        title: '미래를 위한 약속',
        image: 'images/situation_16.png',
        text: `당신은 덴마크의 입법자로서 새로운 작명법 초안을 만들고 있다. 개인의 자유도 중요하지만, '<span class="highlight-yellow">개인의 자유가 공동체의 안정이나 아동의 복지를 해쳐서는 안 된다</span>'는 의견이 주류이다. 이러한 덴마크의 핵심 가치관을 법에 담아내야 한다. 어떤 법안을 발의하겠는가?`,
        choices: [
            { 
                text: '개인의 자유를 최우선으로, <u>모든 이름을 허용</u>한다.', 
                isCorrect: false,
                failureText: '잘못된 해석이다. 당신의 법안은 <span class="highlight-yellow">개인의 자유가 아동의 복지를 해칠 수 있다는 사회적 우려</span>를 반영하지 못했다. "자유가 방종이 되어서는 안 된다"는 비판과 함께 법안은 부결되었다.<br> ❤️ -5',
                failureDamage: 5
            },
            { 
                text: '공동체 안정을 위해, <u>지정된 이름 목록 외에는 모두 금지</u>한다.', 
                isCorrect: false,
                failureText: '지나치게 경직된 법안이다. 당신의 법안은 <span class="highlight-yellow">개인의 자유를 존중해야 한다는 사회적 합의</span>를 무시했다는 비판을 받았다. "전통을 지키는 것이 개인의 권리를 억압해서는 안 된다"는 반대에 부딪혔다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '<u>기본 목록을 제공</u>하고, 새 이름은 <u>아동 복지 기준으로 심사</u>한다.', 
                isCorrect: true,
                successXp: 5,
                successText: '정확한 판단이다. 당신의 법안은 아동 복지와 공동체를 보호하는 틀 안에서 개인의 자유를 허용하여, <span class="highlight-yellow">덴마크 사회의 핵심 가치관</span>을 완벽하게 구현했다. 법안은 폭넓은 지지를 받으며 통과되었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_16.png',
                    text: '덴마크에서는 원칙적으로 <span class="highlight-yellow">정부가 승인한 이름 목록</span>에서만 이름을 짓는다. 이는 문화유산과 아이를 보호하기 위함이다. 새 이름은 <span class="highlight-yellow">별도 심사</span>를 통해 등록할 수 있으며, 이는 조상의 유산을 중시하는 철학이 반영된 것이다.'
                }
            }
        ]
    },
    {
        id: 17,
        title: '태양을 피하는 방법',
        image: 'images/situation_17.png',
        text: `당신은 스페인의 농부다. 여름에는 오후 2시가 넘어가면 <span class="highlight-yellow">기온이 매우 높게 치솟는다.</span><br><br>뜨거운 태양 아래에서 계속 일하는 것은 생산성을 떨어뜨리고 열사병을 유발하는 <span class="highlight-yellow">매우 위험하고 비효율적인 행동</span>이다. 하지만 아직 끝내야 할 일이 많다. 하루 노동 시간을 어떻게 구성하는 것이 가장 현명할까?`,
        choices: [
            { 
                text: '강한 정신력으로 버티며, <u>물을 마시면서 계속 일한다</u>.', 
                isCorrect: false,
                failureText: '무모한 선택이었다. 끓어오르는 열기는 당신의 체력을 빠르게 고갈시켰고, 결국 당신은 <span class="highlight-yellow">탈진하여 쓰러져</span> 일을 끝마치지 못했다. 자연의 힘을 의지만으로 이기려 한 것은 어리석었다.<br> ❤️ -5',
                failureDamage: 5
            },
            { 
                text: '<u>가장 더운 시간에는 쉬고</u>, 서늘해지면 다시 일한다.', 
                isCorrect: true,
                successXp: 5,
                successText: '가장 효율적인 판단이다. 실내에서 충분히 휴식한 뒤, 서늘해진 늦은 오후에 다시 일했다. <span class="highlight-yellow">재충전된 체력 덕분에 일의 능률은 최고조에 달했고</span>, 안전하고 빠르게 모든 일을 끝마칠 수 있었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_17.png',
                    text: '스페인의 <span class="highlight-yellow">\'시에스타(Siesta)\'</span>는 한낮의 낮잠 문화다. 이는 게으름이 아니라, <span class="highlight-yellow">가장 덥고 비효율적인 시간을 피해</span> 에너지를 보존하고, 서늘한 시간에 능률을 높이는 <span class="highlight-yellow">지혜로운 시간 관리 전략</span>이다.'
                }
            },
            { 
                text: '<u>나무 그늘로 자리를 옮겨</u>, 느린 속도로 계속 일한다.', 
                isCorrect: false,
                successChance: 0.3,
                successText: '그늘 덕분에 최악은 피했지만, 공기 전체가 뜨거워 생산성은 오르지 않았고 <span class="highlight-yellow">오후 내내 무기력함과 싸워야 했다.</span> 평소보다 두 배의 시간을 허비했다.',
                failureText: '그늘도 소용없었다. 땅에서 올라오는 열기와 뜨거운 공기는 당신을 지치게 만들었다. 결국 당신은 <span class="highlight-yellow">느린 속도로 일하는 흉내</span>만 냈을 뿐, 아무런 성과도 내지 못했다.<br> ❤️ -3',
                failureDamage: 3
            }
        ]
    },
    {
        id: 18,
        title: '사막의 생존 의복',
        image: 'images/situation_18.png',
        text: `당신은 상인으로서 사우디아라비아의 사막을 횡단할 준비를 하고 있다. 낮에는 그늘 한 점 없는 곳에서 <span class="highlight-yellow">매우 강한 태양</span>이 내리쬐고, 이따금씩 <span class="highlight-yellow">뜨겁고 건조한 모래바람</span>이 분다.<br><br>이 혹독한 환경에서 당신의 몸을 가장 효과적으로 보호하고 시원하게 유지해 줄 복장은 무엇일까?`,
        choices: [
            { 
                text: '땀 증발을 위해, <u>피부를 많이 노출하는 반소매와 반바지</u>를 입는다.', 
                isCorrect: false,
                failureText: '재앙 같은 선택이었다. 당신의 맨살은 <span class="highlight-yellow">강렬한 햇볕에 노출되어 심각한 화상</span>을 입었다. 건조한 바람은 땀을 너무 빨리 증발시켜 급격한 탈수 증상을 일으켰다.<br> ❤️ -7',
                failureDamage: 7
            },
            { 
                text: '햇빛을 반사하는 <u>흰색의, 온몸을 덮는 헐렁한 옷</u>을 입는다.', 
                isCorrect: true,
                successText: '가장 현명한 판단이었다. 흰색 긴 옷은 <span class="highlight-yellow">햇빛을 반사</span>해 몸이 뜨거워지는 것을 막았고, 헐렁한 품 덕분에 <span class="highlight-yellow">옷과 몸 사이로 공기가 순환</span>하며 시원함을 느낄 수 있었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_18.png',
                    text: '아랍 문화권 남성의 전통 의상 <span class="highlight-yellow">\'토브(Thobe)\'</span>는 사막 기후에 최적화된 복장이다. <span class="highlight-yellow">햇빛을 반사하는 밝은 색</span>과, 피부를 보호하고 공기를 순환시키는 <span class="highlight-yellow">헐렁하고 긴 디자인</span>으로 극심한 더위와 건조함에 대응한다.'
                }
            },
            { 
                text: '열을 잘 흡수하는 <u>검은색의 몸에 딱 붙는 옷</u>을 입는다.', 
                isCorrect: false,
                failureText: '완전히 잘못된 생각이었다. 검은 옷은 태양열을 그대로 흡수해 몸을 오븐처럼 만들었다. 몸에 붙는 디자인은 <span class="highlight-yellow">공기 순환을 막아 열을 옷 안에 가두는</span> 최악의 결과를 낳았다.<br> ❤️ -5',
                failureDamage: 5
            }
        ]
    },
    {
        id: 19,
        title: '편의의 왕국',
        image: 'images/situation_19.png',
        text: `당신은 일본 대도시의 사업가다. 일본은 <span class="highlight-yellow">치안이 매우 좋고</span>, <span class="highlight-yellow">편리함과 효율성</span>을 중시한다. 하지만 <span class="highlight-yellow">임대료와 인건비가 매우 높다.</span><br><br>당신은 좁은 공간에서 24시간 음료를 판매하고 싶다. 이 사회경제적 환경을 고려할 때, 가장 합리적인 사업 모델은 무엇일까?`,
        choices: [
            { 
                text: '24시간 운영을 위해, <u>직원을 2명 고용</u>해 교대로 가게를 지킨다.', 
                isCorrect: false,
                failureText: '사업은 한 달 만에 파산 위기에 처했다. 높은 임대료와 비싼 인건비를 감당할 수 없었다. <span class="highlight-yellow">비용 문제를 해결하지 않고는</span> 24시간 사업을 유지할 수 없다는 것을 깨달았다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '치안을 믿고, <u>돈통만 놓아둔 무인 가판대</u>를 설치한다.', 
                isCorrect: false,
                failureText: '사업적으로는 실패했다. 대부분 정직하게 돈을 냈지만, 일부는 그렇지 않았다. 무엇보다 거스름돈 준비와 상품을 채우는 과정이 <span class="highlight-yellow">너무 비효율적</span>이었다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '직원 없이 24시간 작동하는 <u>자동판매기</u>를 설치한다.', 
                isCorrect: true,
                successText: '탁월한 사업 전략이다. 자동판매기는 좁은 공간에서 최소 비용으로 24시간 수익을 창출했다. 당신은 일본의 <span class="highlight-yellow">사회경제적 환경에 완벽하게 적응</span>하여 사업을 성공시켰다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_19.png',
                    text: '일본의 <span class="highlight-yellow">\'자동판매기(자판기)\'</span> 문화는 도시 환경에 최적화된 사업 방식이다. <span class="highlight-yellow">높은 인건비와 임대료, 낮은 범죄율, 편리함을 추구하는 문화</span>가 결합하여 무인 자동화 상점이 번성할 최적의 조건을 만들었다.'
                }
            }
        ]
    },
    {
        id: 20,
        title: '땅을 만드는 기술',
        image: 'images/situation_20.png',
        text: `당신은 17세기 네덜란드의 지도자다. 국토의 상당 부분이 <span class="highlight-yellow">해수면보다 낮은 늪지대</span>라 살 수가 없다. 최우선 과제는 물을 퍼내어 사람이 살 수 있는 <span class="highlight-yellow">새롭고 마른 땅</span>을 만드는 것이다.<br><br>이를 위해 펌프를 쉼 없이 돌릴 동력이 필요하다. 주변 북해에서는 <span class="highlight-yellow">강하고 끊임없는 바람</span>이 분다. 하지만 석탄은 흔치 않고, 수력 발전도 쓸 수 없다. 어떤 동력을 활용해야 할까?`,
        choices: [
            { 
                text: '공동체 의식을 바탕으로, 모든 주민을 동원해 <u>양동이로 물을 퍼낸다</u>.', 
                isCorrect: false,
                failureText: '결과는 처참했다. 주민들이 밤낮없이 물을 퍼냈지만, <span class="highlight-yellow">땅속에서 스며 나오는 물의 양</span>을 따라잡을 수 없었다. 사람들은 지쳐 쓰러졌고, 늪의 수위는 변하지 않았다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '<u>수많은 말을 동원</u>하여, 말이 끄는 힘으로 펌프를 돌린다.', 
                isCorrect: false,
                successChance: 0.2,
                successText: '막대한 비용으로 말을 동원해 작은 땅 하나를 얻는 데 성공했다. 하지만 <span class="highlight-yellow">말을 유지하는 데 드는 비용</span> 때문에 더 이상의 간척 사업은 불가능했다.',
                failureText: '처음에는 효과가 있는 듯 보였지만, <span class="highlight-yellow">수많은 말을 먹일 막대한 사료</span>를 감당할 수 없었다. 결국 비용 문제로 프로젝트는 중단되었고, 땅은 다시 물에 잠겼다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '큰 날개가 달린 기계를 만들어, <u>바람의 힘으로 펌프</u>를 돌린다.', 
                isCorrect: true,
                successText: '혁신적인 해결책이었다. 바람으로 작동하는 펌프는 밤낮으로 물을 퍼냈고, 마침내 늪은 비옥한 농경지로 변했다. 당신은 <span class="highlight-yellow">자연의 힘을 이용해 자연을 극복</span>하는 위업을 달성했다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_20.png',
                    text: '과거 네덜란드에서는 곳곳에 <span class="highlight-yellow">\'풍차\'</span>를 세워 물을 퍼냈다. <span class="highlight-yellow">해수면보다 낮은 땅</span>이라는 자연환경을, <span class="highlight-yellow">끊임없이 부는 바람</span>이라는 또 다른 자연환경을 이용해 극복한 것이다. 이 풍차는 현재 전동 펌프로 대체되었지만, 일부는 여전히 남아 있다.'
                }
            }
        ]
    },
    {
        id: 21,
        title: '어둠과 추위 속에서',
        image: 'images/situation_21.png',
        text: `당신은 고대 핀란드의 정착민이다. 길고 혹독한 겨울이 찾아왔다. 해가 거의 뜨지 않는 <span class="highlight-yellow">끝없는 어둠</span>과 <span class="highlight-yellow">극심한 추위</span>가 계속된다.<br><br>이러한 환경은 육체와 정신을 지치게 해 마을 전체가 고립감에 빠져있다. 겨울을 이겨내기 위해 <span class="highlight-yellow">몸을 덥히고, 청결을 유지하며, 공동체 유대감</span>을 다질 효과적인 방법이 필요하다.`,
        choices: [
            { 
                text: '각자 자신의 오두막에서, <u>화롯불에 의지하며 외부 활동을 줄인다</u>.', 
                isCorrect: false,
                failureText: '최악의 결과였다. 사람들은 추위는 견뎠지만, 긴 어둠 속에서 <span class="highlight-yellow">완전히 고립되어 깊은 우울감</span>에 빠졌다. 공동체 의식이 사라지고 마을은 활기를 잃었다.<br> ❤️ -5',
                failureDamage: 5
            },
            { 
                text: '마을 중앙에 <u>큰 모닥불을 피워</u>, 다 함께 온기를 쬐고 이야기한다.', 
                isCorrect: false,
                successChance: 0.2,
                successText: '며칠간은 효과가 있었다. 사람들은 함께 모여 활기를 되찾았다. 하지만 <span class="highlight-yellow">비효율적인 모닥불은 일주일 만에 겨울 땔감의 절반</span>을 태워버렸고, 마을은 더 큰 추위의 위협에 직면했다.',
                failureText: '치명적인 실수였다. 거대한 모닥불은 열기 대부분을 공기 중으로 날려 <span class="highlight-yellow">귀한 땔감만 빠르게 낭비</span>했다. 결국 땔감이 떨어져 마을 전체가 추위에 떨게 되었다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '<u>단열된 작은 나무 방</u>을 만들어, <u>달군 돌로 온도를 높여</u> 함께 사용한다.', 
                isCorrect: true,
                successText: '완벽한 해결책이었다. 뜨거운 증기가 가득한 방은 한기를 몰아냈고, 땀을 흘리며 몸을 씻을 수도 있었다. 무엇보다 이 공간은 <span class="highlight-yellow">마을 사람들이 함께 모여 이야기하는 사랑방</span>이 되었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_21.png',
                    text: '<span class="highlight-yellow">\'사우나(Sauna)\'</span>의 기원은 핀란드다. 사우나는 단순한 목욕 시설이 아니라, 혹독한 자연환경을 이겨내기 위한 <span class="highlight-yellow">생존의 필수 요소</span>였다. <span class="highlight-yellow">추위, 어둠, 위생, 사회적 고립감</span>이라는 복합적인 문제에 대한 가장 효율적인 해결책이었다.'
                }
            }
        ]
    },
        {
        id: 22,
        title: '산맥 속의 나라',
        image: 'images/situation_22.png',
        text: `당신은 스위스 연방의 지도자다. 나라는 <span class="highlight-yellow">강력한 유럽 국가들 사이에 둘러싸여</span> 있고, 국토 대부분은 <span class="highlight-yellow">험준한 알프스 산맥</span>이다. 이웃에 비해 인구와 자원이 부족해 전면전은 승산이 없다.<br><br>목표는 전쟁에서 이기는 것이 아니라, <span class="highlight-yellow">아무도 침략할 엄두를 내지 못하게 만들어</span> 독립과 평화를 지키는 것이다. 어떤 국방 정책을 채택해야 하는가?`,
        choices: [
            { 
                text: '강력한 이웃 국가와 <u>군사 동맹</u>을 맺어 안보를 보장받는다.', 
                isCorrect: false,
                failureText: '치명적인 외교 실수였다. 한 국가와 동맹을 맺자, 다른 경쟁국들이 스위스를 <span class="highlight-yellow">적대 세력으로 간주</span>하기 시작했다. 결국 스위스는 강대국들의 대리 전쟁터가 될 위기에 처했다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '이웃을 자극하지 않기 위해, <u>군대를 해산하고 비무장 중립</u>을 선언한다.', 
                isCorrect: false,
                successChance: 0.1,
                successText: '운 좋게 한동안 평화가 유지되었지만, 이웃 나라에 야심 있는 독재자가 등장하자 <span class="highlight-yellow">스위스는 아무 저항도 못 하고</span> 합병될 것이라는 소문이 돌기 시작했다.',
                failureText: '끔찍한 판단이었다. 이웃 국가는 스위스를 <span class="highlight-yellow">손쉬운 먹잇감</span>으로 여기고 침략했다. 방어 수단이 없던 나라는 힘없이 무너졌다. 힘없는 중립은 공허한 외침일 뿐이었다.<br> ❤️ -5',
                failureDamage: 5
            },
            { 
                text: '<u>알프스 산맥을 요새</u>로 만들고, <u>모든 시민이 군인</u>이 되어 저항한다.', 
                isCorrect: true,
                successText: '가장 현명한 전략이었다. 스위스 침략 비용이 이득보다 훨씬 크다는 것을 깨달은 이웃 국가들은 스위스를 넘보지 않았다. 당신은 <span class="highlight-yellow">지형적 강점을 활용하여</span> 평화를 쟁취했다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_22.png',
                    text: '스위스의 <span class="highlight-yellow">\'무장 중립\'</span> 정책은 산맥 지형을 활용한 것이다. 스위스는 험준한 산악 지형을 활용해 국토 전체를 <span class="highlight-yellow">거대한 요새</span>로 만들었다. 덕분에 스위스는 어느 편에도 서지 않고 높은 국방력을 갖추게 되었다.'
                }
            }
        ]
    },  
    {
        id: 23,
        title: '산의 도전',
        image: 'images/situation_23.png',
        text: `당신은 필리핀 북부 산악지대의 '이푸가오' 부족이다. 부족은 대대로 쌀을 주식으로 삼았지만, 주변에는 <span class="highlight-yellow">농사지을 평평한 땅이 전혀 없고</span> 가파른 산비탈뿐이다.<br><br>생존은 이 험준한 산에서 쌀을 재배하는 것에 달렸다. 쌀농사는 <span class="highlight-yellow">물을 가둘 수 있는 평평한 땅</span>이 반드시 필요하다. 이 환경을 극복하고 쌀을 얻을 가장 합리적인 방법은 무엇일까?`,
        choices: [
            { 
                text: '<u>쌀을 포기하고</u>, 산비탈에서 잘 자라는 다른 작물을 찾는다.', 
                isCorrect: false,
                successChance: 0.3,
                successText: '굶주림은 면했지만, 쌀을 주식으로 하는 부족의 전통과 식문화를 포기한 대가로 <span class="highlight-yellow">공동체 내에서 정체성을 잃은 이방인</span>이 되었다. 생존은 했지만 많은 것을 잃었다.',
                failureText: '새로운 작물을 찾아 헤맸지만, 지식 부족으로 결국 굶주림에 시달렸다. 당신은 <span class="highlight-yellow">조상 대대로 이어진 쌀농사 기술</span>이라는 소중한 자산을 너무 쉽게 포기했다.<br> ❤️ -5',
                failureDamage: 5
            },
            { 
                text: '산의 경사와 상관없이, 비가 올 때마다 <u>볍씨를 뿌려 빗물에 의존</u>한다.', 
                isCorrect: false,
                failureText: '결과는 처참했다. 볍씨는 <span class="highlight-yellow">가파른 경사면을 따라 모두 빗물에 휩쓸려 내려갔고</span>, 땅에는 아무것도 남지 않았다. 쌀농사의 기본 원리인 \'물을 가두는 것\'의 중요성을 무시했다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '<u>산비탈을 깎아 수평의 층계</u>를 만들고, 돌벽을 쌓아 물을 가둔다.', 
                isCorrect: true,
                successText: '엄청난 노력 끝에, 불가능해 보였던 산비탈은 물을 가득 담은 수천 개의 논으로 변했다. 당신과 부족은 <span class="highlight-yellow">자연의 한계를 인간의 의지와 노력으로 극복</span>하는 위업을 이루었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_23.png',
                    text: '필리핀의 <span class="highlight-yellow">\'계단식 논\'</span>은 평야가 부족한 산악지대에서 쌀을 재배하기 위한 인간 노력의 결정체다. 험준한 산을 깎아 층을 만든 이 구조물은, 척박한 <span class="highlight-yellow">자연환경을 극복하려 했던</span> 이푸가오 부족의 지혜와 기술력을 보여주는 문화유산이다.'
                }
            }
        ]
    },
    {
        id: 24,
        title: '도시의 점심시간',
        image: 'images/situation_24.png',
        text: `당신은 인도 뭄바이에서 사업을 구상 중이다. 뭄바이 직장인들은 외식보다 <span class="highlight-yellow">가정에서 만든 따뜻한 도시락</span>을 선호한다. 하지만 극심한 <span class="highlight-yellow">뭄바이의 교통체증</span> 때문에, 개인이 매일 도시락을 제시간에 가져오는 것은 거의 불가능하다.<br><br>당신은 도시 전체의 점심 식사를 책임질 거대한 시스템을 만들어야 한다. 이 문제를 해결할 가장 효율적인 방법은 무엇일까?`,
        choices: [
            { 
                text: '최신 기술로, <u>오토바이 배달원 네트워크</u>를 이용해 개별 배송한다.', 
                isCorrect: false,
                failureText: '완벽한 실패였다. 오토바이도 뭄바이의 교통지옥 앞에서는 속수무책이었다. 배달은 항상 늦었고 음식은 식었다. <span class="highlight-yellow">수많은 개별 주문을 처리하는 비용</span>이 수익을 넘어 회사는 파산했다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '도심에 <u>대형 급식 시설</u>을 짓고, 다양한 집밥 스타일 메뉴를 제공한다.', 
                isCorrect: false,
                successChance: 0.2,
                successText: '일부 고객은 서비스를 이용했지만, 대부분은 "아무리 맛있어도 <span class="highlight-yellow">우리 집 음식과는 다르다</span>"며 거절했다. 당신은 이들의 문화적 욕구를 정확히 파악하지 못했다.',
                failureText: '사람들의 반응은 차가웠다. 그들이 원한 것은 \'집밥 스타일\'이 아니라, <span class="highlight-yellow">진짜 \'우리 집\'에서 만든 음식</span>이었다. 고객의 핵심 요구를 놓쳐 사업은 외면받았다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '교통체증을 피해 <u>정시성 높은 통근 열차</u>로 옮기고, <u>인력으로 배달</u>한다.', 
                isCorrect: true,
                successText: '천재적인 발상이었다. 혼잡한 도로를 피한 당신의 배달 시스템은 매일 수십만 개의 도시락을 <span class="highlight-yellow">정확한 시간에, 뜨거운 상태로</span> 배달했다. 당신의 사업은 뭄바이 직장인들의 점심을 책임지는 도시의 혈관이 되었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_24.png',
                    text: '뭄바이의 <span class="highlight-yellow">\'다바왈라\'</span>는 기술 없이 인간의 협업만으로 운영되는 세계 최고 수준의 물류 시스템이다. <span class="highlight-yellow">극심한 교통체증</span>과 <span class="highlight-yellow">집밥을 원하는 문화적 수요</span>가 만나, 열차와 인적 네트워크를 활용하는 독창적인 해결책을 만들었다.'
                }
            }
        ]
    },
    {
        id: 25,
        title: '절벽 위의 마을',
        image: 'images/situation_25.png',
        text: `당신은 그리스 산토리니섬의 건축가다. 이곳은 <span class="highlight-yellow">일 년 내내 햇빛이 강렬</span>하고, 절벽 위에는 <span class="highlight-yellow">강한 바닷바람</span>이 분다. 또한, 화산섬이라 건축에 쓸 <span class="highlight-yellow">큰 나무가 거의 자라지 않는다.</span><br><br>이 모든 조건을 고려하여 시원하고 튼튼하며, 구하기 쉬운 재료로 집을 설계해야 한다.`,
        choices: [
            { 
                text: '<u>목재를 주재료</u>로, 통풍을 위해 <u>창문을 크게 낸</u> 집을 짓는다.', 
                isCorrect: false,
                failureText: '총체적 난국이다. 비싼 수입 목재로 건축비가 치솟았다. 큰 창문은 <span class="highlight-yellow">뜨거운 햇빛을 그대로 받아들여</span> 실내를 찜통으로 만들었고, 강풍에 자주 파손되었다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '주변 화산암을 이용하되, 열 흡수를 위해 <u>어두운 색</u>으로 짓는다.', 
                isCorrect: false,
                successChance: 0.2,
                successText: '튼튼한 집은 지었지만, 어두운 돌벽이 <span class="highlight-yellow">낮 동안 햇빛을 전부 흡수</span>해 집 안이 매우 뜨거워졌다. 주민들은 저녁이 되기 전까지 집에 들어갈 수 없었다.',
                failureText: '끔찍한 결과였다. 어두운 돌집은 낮 동안의 열을 머금어 밤에도 식지 않는 <span class="highlight-yellow">거대한 불가마</span>가 되어버렸다. 사람이 살 수 없는 공간이 되었다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '화산암 벽에 <u>하얀 칠</u>을 하고, 지붕은 <u>둥근 돔 형태</u>로 짓는다.', 
                isCorrect: true,
                successText: '완벽한 설계였다. 하얀 벽은 햇빛을 튕겨내 실내를 시원하게 유지했고, 둥근 돔 지붕은 <span class="highlight-yellow">바닷바람의 저항을 최소화</span>하여 안정성을 높였다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_25.png',
                    text: '그리스 산토리니의 건축물은 지중해 자연환경에 최적화된 결과물이다. <span class="highlight-yellow">하얀색 회벽</span>은 햇빛을 반사해 실내 온도를 낮추고, <span class="highlight-yellow">둥근 돔 지붕</span>은 강한 바람의 영향을 줄인다. <span class="highlight-yellow">나무가 귀한 환경</span>에서 주변의 돌과 흙을 주재료로 사용한 것은 합리적인 선택이었다.'
                }
            }
        ]
    },
    {
        id: 26,
        title: '불과 얼음의 땅',
        image: 'images/situation_26.png',
        text: `당신은 아이슬란드에 정착한 초기 바이킹 지도자다. 가장 큰 과제는 <span class="highlight-yellow">길고 혹독한 겨울의 추위</span>를 이겨내는 것이다. 이 섬은 <span class="highlight-yellow">땔감으로 쓸 숲이 거의 없고</span>, 연료 수입은 불가능하다.<br><br>하지만 땅에서는 엄청난 에너지가 끓어오른다. 섬 곳곳에서 <span class="highlight-yellow">뜨거운 증기와 온천수</span>가 솟아난다. 이 자연의 힘을 이용해 지속 가능한 난방 시스템을 만들어야 한다.`,
        choices: [
            { 
                text: '화산암을 채굴하여, <u>연료가 될 만한 광물</u>을 찾는다.', 
                isCorrect: false,
                failureText: '헛된 노력이었다. 시간을 들여 땅을 파헤쳤지만 나오는 것은 평범한 돌뿐이었다. <span class="highlight-yellow">눈앞에 끓어오르는 명백한 에너지원</span>을 무시하고 불확실한 가능성에 매달린 대가는 혹독했다.<br> ❤️ -5',
                failureDamage: 5
            },
            { 
                text: '<u>떠내려온 유목이나 관목</u>을 모아, 각 집 화로에서 아껴 쓴다.', 
                isCorrect: false,
                successChance: 0.2,
                successText: '땔감이 떨어지기 전까지 약 한 달간은 따뜻하게 지낼 수 있었다. 하지만 <span class="highlight-yellow">혹독한 겨울은 이제 막 시작</span>되었을 뿐이다. 임시방편은 더 큰 재앙을 예고한다.',
                failureText: '땔감은 한 달 만에 바닥났다. 한겨울에 난방이 끊기자 사람들은 추위와 질병에 시달렸다. <span class="highlight-yellow">부족한 자원에만 의존</span>한 계획은 공동체를 위기에 빠뜨렸다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '땅에서 솟는 <u>온천수와 증기를 파이프로 연결</u>해 각 가정에 공급한다.', 
                isCorrect: true,
                successText: '최고의 해결책이었다. 땅의 열기는 파이프를 통해 각 가정으로 전달되어, <span class="highlight-yellow">땔감 없이도 마을 전체를 따뜻하게</span> 만들었다. 당신은 자연의 선물을 슬기롭게 활용했다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_26.png',
                    text: '아이슬란드는 <span class="highlight-yellow">지열 에너지</span>를 활용해 척박한 자연환경을 극복했다. <span class="highlight-yellow">화산 활동으로 얻는 막대한 지열</span>을 이용한 중앙난방 시스템은, 숲이 거의 없는 아이슬란드인들이 춥고 긴 겨울을 이겨낸 핵심 생존 기술이었다.'
                }
            }
        ]
    },
    {
        id: 27,
        title: '물의 골목길',
        image: 'images/situation_27.png',
        text: `당신은 '물의 도시' 이탈리아 베네치아의 상인이다. 이 도시의 '도로'는 <span class="highlight-yellow">거미줄처럼 얽힌 수로(운하)</span>이며, 주요 교통수단은 배다.<br><br>하지만 많은 수로는 폭이 <span class="highlight-yellow">좁고 구불구불하며, 수심도 얕다.</span> 당신은 이 복잡한 도시 어디든 자유롭게 오갈 수 있는 배가 필요하다. 어떤 배를 선택해야 할까?`,
        choices: [
            { 
                text: '안정성을 위해 <u>바닥이 깊은 작은 돛단배</u>를 사용한다.', 
                isCorrect: false,
                failureText: '출항하자마자 문제가 발생했다. 배의 깊은 바닥이 <span class="highlight-yellow">얕은 수로 바닥에 걸려</span> 움직일 수 없게 되었다. 설상가상으로 돛대는 낮은 다리에 계속 부딪혀 부러졌다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '노를 젓지 않도록, <u>프로펠러가 달린 작은 모터보트</u>를 사용한다.', 
                isCorrect: false,
                successChance: 0.3,
                successText: '넓은 중앙 운하에서는 모터보트가 편리했지만, 좁은 수로로 들어서자 <span class="highlight-yellow">배의 폭이 너무 넓어</span> 더 이상 나아갈 수 없었다. 결국 목적지까지 걸어가야 했다.',
                failureText: '모터보트는 도시의 골칫거리가 되었다. 프로펠러는 <span class="highlight-yellow">얕은 수로 바닥의 진흙</span>에 계속 걸렸고, 배가 만드는 물결은 건물 토대를 손상시켰다. 주민들의 항의에 운행을 포기해야 했다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '<u>바닥이 평평하고, 폭이 좁고 긴 배</u>를 긴 노 하나로 젓는다.', 
                isCorrect: true,
                successText: '완벽한 선택이었다. 평평한 바닥은 얕은 수로를 막힘없이 나아갔고, 길고 날렵한 선체는 <span class="highlight-yellow">좁은 골목 같은 운하</span>를 자유자재로 통과했다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_27.png',
                    text: '베네치아의 <span class="highlight-yellow">\'곤돌라(Gondola)\'</span>는 도시의 독특한 지리 환경이 만든 발명품이다. <span class="highlight-yellow">얕은 수심</span>을 위한 평평한 바닥과 <span class="highlight-yellow">좁고 구불구불한 수로</span>를 통과하기 위한 길고 날렵한 선체는 수백 년에 걸쳐 이 도시에 최적화된 형태로 발전했다.'
                }
            }
        ]
    },
    {
        id: 28,
        title: '대초원의 개척자',
        image: 'images/situation_28.png',
        text: `당신은 19세기 미국 중부 대평원의 개척자다. 겨울이 오기 전에 집을 지어야 한다. 하지만 주위에는 끝없는 풀밭뿐, <span class="highlight-yellow">집 지을 나무나 돌을 전혀 찾을 수 없다.</span><br><br>유일한 자원은 발밑의 <span class="highlight-yellow">풀뿌리가 빽빽하게 얽힌 단단한 흙</span>뿐이다. 이 독특한 환경에서 어떻게 비바람과 추위를 막을 집을 지어야 할까?`,
        choices: [
            { 
                text: '수백 km 떨어진 도시에서 <u>비싼 목재를 사서 운반</u>해온다.', 
                isCorrect: false,
                failureText: '현실을 무시한 계획이었다. 목재를 운반하는 데 모든 돈과 시간을 허비하여, 결국 <span class="highlight-yellow">겨울이 오기 전까지 집을 완성하지 못했다.</span> 가족들은 보금자리 없이 추위에 떨어야 했다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '강둑이나 언덕 측면을 파고 들어가, 비바람만 막는 <u>동굴집</u>을 만든다.', 
                isCorrect: false,
                successChance: 0.4,
                successText: '최악의 추위는 피했지만, <span class="highlight-yellow">어둡고 축축한 흙 동굴</span>은 비가 올 때마다 진흙이 떨어졌고 뱀과 벌레의 위협에 시달려야 했다. 임시 대피소일 뿐, 집은 아니었다.',
                failureText: '비가 내리자 재앙이 닥쳤다. 동굴집은 <span class="highlight-yellow">맥없이 무너져 내렸고</span>, 가족은 흙더미 속에서 간신히 빠져나와야 했다. 땅을 너무 얕게 파 안정성을 확보하지 못했다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '<u>풀뿌리가 엉킨 흙을 벽돌처럼 잘라내어</u>, 쌓아 올려 벽을 만든다.', 
                isCorrect: true,
                successText: '최고의 아이디어였다. 두꺼운 흙벽돌은 더위와 추위를 막아주는 <span class="highlight-yellow">훌륭한 단열재</span> 역할을 했다. 당신은 <span class="highlight-yellow">주변의 유일한 자원을 활용</span>하여 튼튼하고 아늑한 보금자리를 만드는 데 성공했다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_28.png',
                    text: '미국 대평원의 <span class="highlight-yellow">\'소드 하우스(Sod House)\'</span>는 척박한 환경에 대한 인간 적응의 상징이다. <span class="highlight-yellow">나무와 돌이 절대적으로 부족했던 대초원</span>에서, 개척자들은 유일한 자원인 <span class="highlight-yellow">풀뿌리가 얽힌 흙</span>을 벽돌로 사용했다. 이 흙집은 단열 효과가 뛰어나고 불에도 강해, 척박한 환경 속 생존을 가능하게 한 지혜의 산물이었다.'
                }
            }
        ]
    },
    {
        id: 29,
        title: '따뜻한 바닥의 비밀',
        image: 'images/situation_29.png',
        text: `당신은 조선시대 건축가다. 한국의 겨울은 <span class="highlight-yellow">춥고 건조하며 바닥에서 한기가 올라온다.</span> 이 추위를 가장 효율적으로 막을 난방 방식을 설계해야 한다. 당시 기술로 방 전체 공기를 데우는 것은 비효율적이다.<br><br>당신은 아궁이 열기를 바닥 밑으로 통과시켜 <span class="highlight-yellow">방바닥 전체를 데우는 '온돌'</span> 시스템을 완성했다. 이제 온돌의 효율을 극대화할 실내 생활 방식을 정해야 한다.`,
        choices: [
            { 
                text: '바닥 온기를 등지고 <u>서서 생활하며, 침대 위에서 잔다</u>.', 
                isCorrect: false,
                failureText: '비효율적인 방식이다. 서서 생활하면 <span class="highlight-yellow">온돌의 열기를 거의 느끼지 못한다.</span> 바닥에서 떨어진 침대 역시 온돌의 장점을 활용하지 못했다. 스스로 만든 발명품을 제대로 이해하지 못했다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '차가운 벽에 <u>의자를 붙여 앉고, 해먹을 설치</u>하여 잔다.', 
                isCorrect: false,
                failureText: '최악의 설계였다. 바닥의 열기는 의자까지 닿지 않았고, 공중에 매달린 해먹은 <span class="highlight-yellow">가장 차가운 공기 속에서 자는</span> 끔찍한 결과를 만들었다. 당신의 생활 방식은 온돌과 정반대였다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '<u>바닥에 방석을 깔고 앉아</u> 생활하고, <u>바닥에 이불을 깔고 잔다</u>.', 
                isCorrect: true,
                successText: '완벽한 조화였다. 바닥에 직접 앉고 누워 생활하자, <span class="highlight-yellow">온돌의 따뜻한 열기를 몸 전체로 직접 느낄 수 있었다.</span> 난방 시스템과 생활 방식이 최고의 효율을 보여주었고, 이는 한국인의 삶의 일부가 되었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_29.png',
                    text: '한국의 <span class="highlight-yellow">\'온돌\'</span>은 바닥을 데우는 독특한 난방 시스템으로, 자연스럽게 <span class="highlight-yellow">\'좌식 생활\'</span> 문화로 이어졌다. 바닥의 열을 가장 효율적으로 느끼기 위해 의자나 침대 대신 바닥에 직접 앉고 눕는 생활 방식이 발달했다.'
                }
            }
        ]
    },
    {
        id: 30,
        title: '왕국의 철학',
        image: 'images/situation_30.png',
        text: `당신은 히말라야의 작은 왕국, 부탄의 정책 결정자다. 국민 대다수가 불교 신자이며, 국정의 가장 중요한 목표는 <span class="highlight-yellow">모든 생명에 대한 자비심</span>을 실현하고 국민이 <span class="highlight-yellow">물질적 탐욕에서 벗어나 내면의 평화</span>를 얻도록 돕는 것이다.<br><br>당신에게 세 가지 국가 개발 프로젝트가 제안되었다. 부탄의 종교적, 문화적 가치관에 따라 가장 올바른 결정을 내려야 한다.`,
        choices: [
            { 
                text: '<u>최첨단 반도체 공장</u>을 유치해, 막대한 부와 일자리를 창출한다.', 
                isCorrect: false,
                failureText: '재앙적인 결정이었다. 공장은 부를 가져왔지만, 동시에 <span class="highlight-yellow">강을 오염시켜 수많은 생명을 해쳤다.</span> 국민들은 돈을 얻었지만 마음의 평화를 잃었다. 국가의 근본 가치를 짓밟았다.<br> ❤️ -7',
                failureDamage: 7
            },
            { 
                text: '<u>산 전체를 깎아 거대한 스키 리조트</u>를 짓고, 관광객을 유치한다.', 
                isCorrect: false,
                successChance: 0.2,
                successText: '리조트는 큰 성공을 거뒀지만, 국민들은 당신이 불교적 행복보다 돈을 탐낸다고 생각하게 되었다. 수익금을 환경 보존에 투자하겠다고 말하며 민심을 잠재웠지만, 불신은 여전히 남아 있다.',
                failureText: '리조트 건설 과정에서 수천 그루의 나무를 베어냈고, <span class="highlight-yellow">소란스러운 유흥 문화</span>는 마을의 평화를 깨뜨렸다. 단기적인 이익을 위해 자연과의 조화라는 가치를 훼손했다.<br> ❤️ -5',
                failureDamage: 5
            },
            { 
                text: '자연을 훼손 않는 <u>소규모 생태 관광</u>을 육성하고, 수익은 복지로 분배한다.', 
                isCorrect: true,
                successText: '가장 현명한 길이었다. 이 프로젝트는 부탄의 <span class="highlight-yellow">자연과 문화를 지키면서도</span>, 공동체에 지속 가능한 수입을 안겨주었다. 당신의 결정은 불교의 가르침과 완벽한 조화를 이루었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_30.png',
                    text: '부탄에서는 불교적 가치관을 국가 정책으로 체계화한 <span class="highlight-yellow">\'국민총행복(GNH)\'</span> 개념을 사용한다. GNH는 무분별한 개발보다 <span class="highlight-yellow">환경 보호, 문화 보존, 공동체의 행복</span>이 조화를 이루는 지속 가능한 발전을 추구한다.'
                }
            }
        ]
    },
    {
        id: 31,
        title: '계곡의 연금술',
        image: 'images/situation_31.png',
        text: '당신은 오래전 노르웨이 산골짜기의 농부다. 척박하고 추운 기후 탓에 <span class="highlight-yellow">식량이 항상 부족해 모든 것을 아껴야 한다.</span> 주 수입원은 우유로 만든 하얀 치즈다.<br><br>하지만 치즈를 만들고 나면, 영양분이 남은 <span class="highlight-yellow">뿌연 액체(유청)</span>가 대량으로 남는다. 당신은 이 유청을 버리지 않고 겨울을 날 새로운 식량으로 만들 방법을 찾으려 한다.',
        choices: [
            { 
                text: '유청을 <u>가축에게 먹여</u>, 고기 질을 높이는 사료로 활용한다.', 
                isCorrect: false,
                successChance: 0.4,
                successText: '좋은 생각이었다. 유청을 먹은 가축은 더 건강해졌다. 하지만 이것은 간접적인 해결책일 뿐, <span class="highlight-yellow">당장 겨울을 보낼 인간의 식량</span>을 만들지는 못했다.',
                failureText: '결과적으로 아무것도 얻지 못했다. 유청을 먹여도 가축이 두 배로 늘지는 않았다. 결국 <span class="highlight-yellow">귀중한 영양분을 가축에게 다 줘버린 셈</span>이 되어 겨울 동안 배고픔에 시달렸다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '신선함을 유지하기 위해, 차가운 계곡물에 담가 <u>음료수로 보관</u>한다.', 
                isCorrect: false,
                failureText: '끔찍한 실수였다. 유청은 우유보다 훨씬 빨리 상해 며칠 만에 시큼하게 변했다. 당신은 <span class="highlight-yellow">보존 식량을 만들어야 하는 상황</span>에서 가장 보존 기간이 짧은 선택을 했다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '큰 솥에 넣고, 수분이 날아가 갈색이 될 때까지 <u>오래 졸인다</u>.', 
                isCorrect: true,
                successText: '위대한 발견이었다. 액체 유청은 오랜 시간 졸이자 캐러멜처럼 달콤하고 열량 높은 <span class="highlight-yellow">갈색 고체 덩어리</span>로 변했다. 보존성도 뛰어나 겨울을 나는 데 큰 힘이 되었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_31.png',
                    text: '노르웨이의 갈색 치즈 <span class="highlight-yellow">\'브루노스트(Brunost)\'</span>는 치즈를 만들고 남은 유청을 재활용한 것이다. 척박한 환경에서 <span class="highlight-yellow">버려지는 식재료의 영양분</span>까지 활용하려던 절약 정신이, 유청의 유당을 캐러멜화시키는 독특한 조리법을 탄생시켰다.'
                }
            }
        ]
    },
    {
        id: 32,
        title: '붉은 땅의 사람들',
        image: 'images/situation_32.png',
        text: `당신은 아프리카 남서부 나미비아 사막 지대의 힘바족이다. 이곳은 <span class="highlight-yellow">물이 극도로 귀해</span> 목욕은 상상하기 어렵다. 내리쬐는 <span class="highlight-yellow">태양은 매우 강렬</span>하고, 건조한 공기는 피부 수분을 계속 빼앗아 간다.<br><br>또한, 주변에는 성가신 벌레들이 끊임없이 달려든다. 이 모든 위협으로부터 피부를 보호하고 청결을 유지할 가장 효과적인 방법을 찾아야 한다.`,
        choices: [
            { 
                text: '몸을 최대한 가릴 수 있는 <u>두껍고 긴 옷</u>을 입는다.', 
                isCorrect: false,
                failureText: '잘못된 선택이었다. 긴 옷은 햇볕은 막아주었지만, <span class="highlight-yellow">찌는 듯한 더위</span>에 금방 지쳐버렸다. 옷만으로는 건조한 공기와 벌레로부터 피부를 완벽히 보호할 수 없었다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '생존에 필수적인 물을 아껴, 하루에 한 번씩 <u>몸을 씻는다</u>.', 
                isCorrect: false,
                failureText: '치명적인 실수였다. 몸을 씻는 데 사용한 물은 부족 전체가 하루 동안 마실 수 있는 양이었다. <span class="highlight-yellow">가장 귀한 자원인 물을 낭비</span>하여 공동체 전체를 생존 위협에 빠뜨렸다.<br> ❤️ -7',
                failureDamage: 7
            },
            { 
                text: '주변 <u>붉은 흙을 갈아, 동물 기름과 섞어</u> 온몸에 바른다.', 
                isCorrect: true,
                successText: '완벽한 생존의 지혜였다. 붉은 진흙은 <span class="highlight-yellow">강렬한 햇빛을 막는 보호막</span>이 되었고, 기름은 피부 수분을 지켜주었으며, 특유의 향은 벌레 접근을 막아주었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_32.png',
                    text: '나미비아의 힘바족은 붉은 흙과 버터기름을 섞은 <span class="highlight-yellow">\'오트지제\'</span>를 온몸에 바른다. 이는 물이 귀한 사막 환경에서 <span class="highlight-yellow">자외선 차단, 보습, 해충 방지</span>의 복합적인 기능을 하는 실용적인 방법이며, 문화적 정체성을 나타내는 상징이기도 하다.'
                }
            }
        ]
    },
    {
        id: 33,
        title: '밀림의 사냥꾼',
        image: 'images/situation_33.png',
        text: `당신은 말레이시아 열대우림의 원주민 사냥꾼이다. 주된 사냥감은 <span class="highlight-yellow">높은 나뭇가지 위의 원숭이나 새</span>다. 하지만 밀림은 <span class="highlight-yellow">빽빽한 나뭇잎과 덩굴</span>로 가득해 움직일 공간이 거의 없다.<br><br>또한, 밀림은 매우 고요해서 작은 소리도 금방 퍼진다. 사냥에 성공하려면 <span class="highlight-yellow">사냥감이 눈치채지 못하게 최대한 소리를 내지 않아야</span> 한다. 나뭇잎 사이로 사냥감이 보인다. 어떤 도구를 사용해야 할까?`,
        choices: [
            { 
                text: '강력하고 정확한 <u>활</u>을 이용해 원거리에서 쏜다.', 
                isCorrect: false,
                failureText: '좋은 무기지만 이곳엔 적합하지 않다. 활시위를 당기려 하자, <span class="highlight-yellow">활의 양 끝이 나뭇가지와 덩굴에 걸려</span> 제대로 조준할 수 없었다. 그 사이 사냥감은 사라졌다.<br> ❤️ -5',
                failureDamage: 5
            },
            { 
                text: '소리 없이 <u>나무 위로 올라가</u>, 가까운 거리에서 창으로 사냥한다.', 
                isCorrect: false,
                successChance: 0.1,
                successText: '기적적으로 사냥감이 눈치채기 전에 나무 위로 올라가는 데 성공했다. 놀라운 은신 능력 덕분에 겨우 사냥에 성공했지만, 반복하기 힘든 행운이었다.',
                failureText: '나무를 오르자마자 <span class="highlight-yellow">나뭇잎 바스락거리는 소리</span>에 놀란 사냥감이 순식간에 다른 나무로 달아나 버렸다. 인간이 원숭이보다 나무를 잘 탈 수는 없었다.<br> ❤️ -3',
                failureDamage: 3
            },
            { 
                text: '길고 속이 빈 <u>대롱에 독침을 넣고, 입으로 불어</u> 소리 없이 쏜다.', 
                isCorrect: true,
                successText: '이 환경을 위한 완벽한 도구였다. 좁은 틈으로 대롱을 조준하고, <span class="highlight-yellow">아주 작은 숨소리</span>와 함께 독침을 발사했다. 사냥감은 눈치채지 못했고, 조용히 사냥에 성공했다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_33.png',
                    text: '열대우림의 <span class="highlight-yellow">\'블로우파이프(Blowpipe)\'</span>는 빽빽한 밀림 환경에 맞게 진화한 사냥 도구다. <span class="highlight-yellow">덩굴과 나뭇잎이 무성해</span> 넓은 공간이 필요한 무기를 쓰기 힘든 곳에서, 블로우파이프는 <span class="highlight-yellow">최소한의 움직임과 소음</span>으로 사냥할 수 있는 최적의 해결책이었다.'
                }
            }
        ]
    },
    {
        id: 34,
        title: '숨겨진 힘',
        image: 'images/situation_34.png',
        text: `당신은 18세기 브라질 사탕수수 농장의 아프리카 노예다. 농장주들은 반란을 두려워하여 <span class="highlight-yellow">어떤 형태의 무술 훈련도 철저히 금지</span>하고 있다. 발각되면 가혹한 처벌이 뒤따른다.<br><br>하지만, 고된 노동을 달래기 위한 <span class="highlight-yellow">음악과 춤은 오히려 장려</span>하는 분위기다. 이 억압적인 상황에서 자유를 되찾기 위해 동료들과 비밀리에 자신을 단련할 방법을 찾아야 한다.`,
        choices: [
            { 
                text: '농장주의 눈을 피해, <u>밤에 몰래 모여 전통 무술</u>을 수련한다.', 
                isCorrect: false,
                failureText: '비밀 훈련은 감독관에게 발각되었다. 저항을 준비했다는 죄목으로 당신과 동료들은 끔찍한 처벌을 받았고, 감시는 더 심해졌다. <span class="highlight-yellow">정면으로 부딪히는 것은 최악의 선택</span>이었다.<br> ❤️ -7',
                failureDamage: 7
            },
            { 
                text: '<u>춤의 형태를 빌려</u>, 음악에 맞춰 싸움 기술을 연습한다.', 
                isCorrect: true,
                successText: '천재적인 위장이었다. 당신들의 움직임은 <span class="highlight-yellow">음악과 어우러져 격렬한 춤처럼</span> 보였고, 농장주들은 아무것도 의심하지 않았다. 모두의 눈앞에서 자유를 위한 힘을 기를 수 있었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_34.png',
                    text: '브라질의 전통 무술 <span class="highlight-yellow">\'카포에라(Capoeira)\'</span>는 춤과 음악, 곡예가 결합된 독특한 형태다. 이는 과거 아프리카 노예들이 <span class="highlight-yellow">농장주의 감시를 피해 싸움 기술을 연마</span>하기 위해 춤으로 위장했던 역사에서 비롯되었다. 카포에라는 억압 속에서 피어난 저항과 자유의 정신을 상징한다.'
                }
            },
            { 
                text: '농장주의 신뢰를 얻기 위해, <u>모든 훈련을 포기</u>하고 농사일에 전념한다.', 
                isCorrect: false,
                successChance: 0.1,
                successText: '성실함 덕분에 운 좋게 조금 더 편한 일을 맡게 되었다. 하지만 당신은 <span class="highlight-yellow">자유를 향한 의지와 스스로를 지킬 힘</span>을 모두 잃었다. 순응하는 법을 배웠을 뿐, 아무것도 바꾸지 못했다.',
                failureText: '모든 것을 포기했음에도 농장주의 착취는 끝나지 않았다. 오히려 당신을 만만하게 보고 노동 강도는 심해졌다. <span class="highlight-yellow">스스로를 지킬 힘이 없는 자에게 자유는 주어지지 않는다</span>는 것을 너무 늦게 깨달았다.<br> ❤️ -5',
                failureDamage: 5
            }
        ]
    },
    {
        id: 35,
        title: '강의 어부',
        image: 'images/situation_35.png',
        text: `당신은 중국 남부의 강에서 고기를 잡는 어부다. 이 강은 <span class="highlight-yellow">물이 깊고 흙탕물이라</span> 사람 눈으로는 물고기 위치를 파악하기 매우 어렵다. 낚싯대나 그물을 던져도 허탕치기 일쑤다.<br><br>어느 날, 강가의 새들이 <span class="highlight-yellow">놀라운 솜씨로 물속에 뛰어들어 정확히 물고기를 낚아채는 모습</span>을 목격한다. 인간의 한계를 넘어서는 혁신적인 어업 방식을 고안해야 한다.`,
        choices: [
            { 
                text: '강 전체를 가로지르는 <u>거대한 그물</u>로 바닥까지 훑어 물고기를 잡는다.', 
                isCorrect: false,
                successChance: 0.2,
                successText: '엄청난 노동 끝에 운 좋게 몇 마리의 물고기를 잡았다. 하지만 이 거대한 그물을 만들고 끌기 위해 <span class="highlight-yellow">마을 사람 전체가 며칠을 매달려야 했다.</span> 결코 효율적인 방법이 아니었다.',
                failureText: '완전히 실패했다. 강이 너무 넓고 깊어 그물이 계속 바닥의 바위나 나무에 걸려 찢어졌다. <span class="highlight-yellow">귀한 그물만 잃고 물고기는 한 마리도 잡지 못했다.</span><br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '강물에 <u>독성이 있는 풀</u>을 풀어, 기절해 떠오르는 물고기를 건져낸다.', 
                isCorrect: false,
                failureText: '가장 끔찍한 결과를 낳았다. 강물에 퍼진 독은 물고기뿐만 아니라 <span class="highlight-yellow">강의 모든 생태계를 파괴</span>했고, 독에 중독된 물고기는 팔 수도 없었다. 단기적인 욕심 때문에 강 전체를 망쳤다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '<u>물고기 잡는 새를 길들여</u>, 나를 위해 물고기를 잡도록 훈련시킨다.', 
                isCorrect: true,
                successText: '혁명적인 발상이었다. 훈련된 새들은 눈이 닿지 않는 <span class="highlight-yellow">물속 깊은 곳까지 헤엄쳐</span> 정확하게 물고기를 사냥해왔다. 당신은 인간과 동물의 협력을 통해 자연의 한계를 극복했다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_35.png',
                    text: '이 놀라운 어업 방식은 <span class="highlight-yellow">\'가마우지\'</span>를 이용한 전통 낚시다. 시야 확보가 어려운 강에서, 인간은 <span class="highlight-yellow">가마우지의 뛰어난 사냥 능력</span>을 빌리는 대신, 목에 끈을 묶어 잡은 물고기를 공유하는 독창적인 공생 관계를 만들었다.'
                }
            }
        ]
    },
    {
        id: 36,
        title: '건조한 땅',
        image: 'images/situation_36.png',
        text: `당신은 칠레 아타카마 사막의 해안 마을 주민이다. 이곳은 <span class="highlight-yellow">수십 년간 비가 오지 않은</span> 극도로 건조한 곳으로, 강이나 우물이 없다.<br><br>유일한 수분 공급원은 바다에서 불어오는 <span class="highlight-yellow">짙은 안개</span>뿐이다. 이 안개에서 마을의 식수를 확보해야 한다. 가장 효율적인 방법은?`,
        choices: [
            { 
                text: '물이 나올 때까지 <u>땅을 깊게 파서 우물</u>을 만든다.', 
                isCorrect: false,
                failureText: '실패였다. 수십 미터를 파도 마른 흙만 나왔다. 당신은 <span class="highlight-yellow">비가 오지 않는 땅</span>이라는 핵심 정보를 무시하고 불가능한 일에 힘을 낭비했다.<br> ❤️ -5',
                failureDamage: 5
            },
            { 
                text: '안개 속에서 <u>불을 피워, 수분을 증발</u>시킨 뒤 소금을 얻는다.', 
                isCorrect: false,
                failureText: '목표와 반대되는 결과였다. 필요한 것은 <span class="highlight-yellow">마실 물</span>이지 소금이 아니었다. 당신은 땔감만 낭비하고 아무것도 얻지 못했다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '<u>촘촘한 그물을 세워</u>, 안개가 통과하며 물방울이 맺히도록 한다.', 
                isCorrect: true,
                successText: '성공적인 방법이었다. 안개가 그물을 통과하며 맺힌 물방울이 모여, <span class="highlight-yellow">공기 중에서 물을 수확</span>할 수 있게 되었다. 마을의 물 문제가 해결되었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_36.png',
                    text: '칠레 아타카마 사막의 <span class="highlight-yellow">\'안개 포획기\'</span>는 비가 오지 않는 환경에 적응한 기술입니다. <span class="highlight-yellow">바다 안개</span>에 포함된 수분을 촘촘한 그물로 모아 식수와 생활용수를 확보합니다.'
                }
            }
        ]
    },
    {
        id: 37,
        title: '강을 건너는 법',
        image: 'images/situation_37.png',
        text: `당신은 세계에서 가장 비가 많이 오는 곳 중 하나인 인도 메갈라야에 산다. 우기가 되면 계곡의 강은 <span class="highlight-yellow">모든 것을 휩쓸어버리는 거센 급류</span>로 변한다.<br><br>마을과 밭을 잇는 다리가 매년 파괴되어 고립되는 문제를 해결해야 한다. 강가에는 <span class="highlight-yellow">뿌리가 튼튼한 고무나무</span>가 많이 자란다. 어떤 다리를 만들어야 하는가?`,
        choices: [
            { 
                text: '강가의 튼튼한 <u>고무나무를 잘라, 통나무 다리</u>를 짓는다.', 
                isCorrect: false,
                failureText: '고무나무로 만든 다리는 잠깐은 튼튼했지만, 죽은 나무로 만든 다리는 결국 썩어 무너져버렸다.<br> ❤️ -5',
                failureDamage: 5
            },
            { 
                text: '강을 건너지 않고, <u>험준한 산을 빙 둘러가는 새로운 길</u>을 개척한다.', 
                isCorrect: false,
                successChance: 0.2,
                successText: '길은 사라지지 않았다. 하지만 밭까지 가는 데 반나절이 걸렸다. <span class="highlight-yellow">너무 비효율적인 경로</span> 때문에, 사실상 농사를 짓는 것은 불가능에 가까웠다. 당신은 문제를 피했을 뿐, 해결하지는 못했다.',
                failureText: '길을 만드는 데 수개월이 걸렸지만, 결국 아무 소용이 없었다. <span class="highlight-yellow">너무 멀고 험난한 길</span>이라 아무도 이용할 수 없었다. 당신의 노력은 시간 낭비로 끝났다.<br> ❤️ -3',
                failureDamage: 3
            },
            { 
                text: '강 양쪽의 <u>살아있는 고무나무 뿌리</u>가 서로를 향해 자라도록, 수년에 걸쳐 길을 내고 엮어준다.', 
                isCorrect: true,
                successText: '성공적이었다. 살아있는 뿌리는 당신의 유도에 따라 자라나 강을 가로질러 서로 얽혔고, 시간이 지나자 <span class="highlight-yellow">파괴되지 않는 강력한 다리</span>가 되었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_37.png',
                    text: '인도 메갈라야의 <span class="highlight-yellow">\'살아있는 뿌리 다리\'</span>는 세계에서 가장 비가 많이 오는 기후에 적응한 건축물입니다. 매년 다리를 파괴하는 <span class="highlight-yellow">강력한 몬순 급류</span>를 견디기 위해, 지역 주민들은 <span class="highlight-yellow">살아있는 나무의 뿌리</span>를 엮어 다리를 만듭니다. 이 다리는 시간이 지날수록 더 강해집니다.'
                }
            }
        ]
    },
    {
        id: 38,
        title: '북쪽의 부름',
        image: 'images/situation_38.png',
        text: `당신은 20세기 초 알래스카의 개척민이다. 이곳에는 길이 없고, 세상은 <span class="highlight-yellow">깊은 눈과 얼음</span>으로 뒤덮여 있다. 마을과 마을 사이를 이동하고 물자를 운송하기 위해서는 이 혹독한 설원을 가로지를 운송 수단이 반드시 필요하다.<br><br>당신은 함께할 동물을 선택해야 한다. 이 동물은 <span class="highlight-yellow">극한의 추위를 견뎌야 하고, 눈 위를 잘 달려야 하며</span>, 장거리를 이동할 끈기가 있어야 한다. 어떤 동물을 당신의 파트너로 삼겠는가?`,
        choices: [
            { 
                text: '힘이 좋고 지구력이 강한 <u>말</u>을 훈련시켜 짐을 운반한다.', 
                isCorrect: false,
                failureText: '치명적인 선택이었다. 말은 <span class="highlight-yellow">깊은 눈에 발이 빠져</span> 앞으로 나아가지 못했고, 혹독한 추위에 금방 지쳐버렸다. 당신은 설원 한가운데서 고립되었다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '추위에 강한 <u>순록 떼</u>를 이용해 썰매를 끌게 한다.', 
                isCorrect: false,
                successChance: 0.2,
                successText: '순록은 추위는 잘 견뎠지만 통제하기 어렵고 발이 느렸다. <span class="highlight-yellow">느린 속도와 무질서</span> 때문에, 당신은 목적지까지 예상보다 몇 배나 긴 시간을 허비했다.',
                failureText: '계획은 실패했다. 순록은 길들여지지 않은 야생성이 강해, 당신의 지시를 따르지 않고 흩어져 버렸다. 당신은 <span class="highlight-yellow">순록을 통제하는 데 실패</span>했고, 짐과 함께 설원에 남겨졌다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '추위에 강하고 발이 눈에 빠지지 않는 <u>썰매개</u>를 여러 마리 훈련시킨다.', 
                isCorrect: true,
                successText: '완벽한 파트너였다. 썰매개들은 <span class="highlight-yellow">지치지 않는 체력으로 눈 위를 질주했고</span>, 당신의 지시에 따라 일사불란하게 움직였다. 당신은 알래스카의 혹독한 환경을 극복할 최고의 운송 수단을 찾았다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_38.png',
                    text: '알래스카의 <span class="highlight-yellow">\'개썰매\'</span> 문화는 혹한의 설원 기후에 적응하기 위한 필수적인 생존 기술이었습니다. 말과 같은 동물이 다닐 수 없는 <span class="highlight-yellow">깊은 눈밭</span>에서, 추위에 강하고 지구력이 뛰어난 썰매개들은 우편물 배달, 물자 수송, 교통수단으로서 <span class="highlight-yellow">알래스카의 혈관과 같은 역할</span>을 했습니다.'
                }
            }
        ]
    },
    {
        id: 39,
        title: '하늘 위의 도시',
        image: 'images/situation_39.png',
        text: `당신은 볼리비아의 수도 라파스의 도시 계획가다. 이 도시는 안데스 산맥의 <span class="highlight-yellow">가파른 분지 지형</span>에 건설되어, 도시 내 지역 간의 <span class="highlight-yellow">고도 차이가 극심하다.</span><br><br>좁고 구불구불한 도로는 항상 <span class="highlight-yellow">극심한 교통체증</span>에 시달린다. 당신은 이 독특한 지형의 시민들을 위한 새롭고 효율적인 대중교통 시스템을 도입해야 한다. 어떤 방식을 선택하겠는가?`,
        choices: [
            { 
                text: '<u>기존의 도로를 확장</u>하고, 더 많은 버스 노선을 투입하여 문제를 해결한다.', 
                isCorrect: false,
                failureText: '상황은 더욱 악화되었다. 가파른 산비탈 때문에 도로를 확장할 공간이 부족했고, 늘어난 버스들은 <span class="highlight-yellow">기존의 교통체증에 그대로 갇혀버렸다.</span> 당신의 계획은 현실을 고려하지 않은 탁상공론이었다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '도시의 <u>지하를 뚫어, 거대한 지하철 시스템</u>을 건설한다.', 
                isCorrect: false,
                successChance: 0.1,
                successText: '천문학적인 비용과 시간을 들여, 겨우 한 개의 노선을 완공했다. 하지만 <span class="highlight-yellow">험준한 산악 지형</span> 때문에 더 이상의 노선 확장은 불가능했다. 당신의 지하철은 도시 전체를 감당하지 못하는 반쪽짜리 성공에 그쳤다.',
                failureText: '계획은 시작부터 난관에 부딪혔다. <span class="highlight-yellow">극심한 고도차와 불안정한 지반</span> 때문에 터널 공사 비용이 예상을 초과했고, 결국 프로젝트는 중단되었다. 당신은 이 도시의 지형을 너무 쉽게 생각했다.<br> ❤️ -5',
                failureDamage: 5
            },
            { 
                text: '<u>공중을 가로지르는 케이블카</u>를 설치하여, 도시의 높은 곳과 낮은 곳을 직접 연결한다.', 
                isCorrect: true,
                successText: '케이블카는 <span class="highlight-yellow">지상의 교통체증과 상관없이</span> 시민들을 빠르고 조용하게 실어 날랐다. 당신은 도시의 지형적 단점을 공중에서 극복하는 새로운 길을 열었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_39.png',
                    text: '볼리비아 라파스의 <span class="highlight-yellow">\'미 텔레페리코\'</span>는 세계 최대의 도시 케이블카 시스템입니다. <span class="highlight-yellow">극심한 고도차와 만성적인 교통체증</span>을 가진 분지 지형에서, 케이블카는 지하철이나 도로 확장보다 훨씬 효율적이고 경제적인 대안이었습니다.'
                }
            }
        ]
    },
];
