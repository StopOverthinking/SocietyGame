const SITUATIONS = [
    {
        id: 1,
        title: '초원의 형제들',
        image: 'images/situation_1.png',
        text: `당신은 초원을 누비는 몽골의 부족장이다. 당신의 부족민은 모두 <span class="highlight-yellow">양과 말을 기르고 살아간다</span>. 세차고 메마른 바람 때문에 볼이 아프다. 넓은 풀밭과 하늘이 시야를 가득 메우지만, <span class="highlight-yellow">나무 그늘은 커녕</span> 무릎을 넘기는 높이의 풀도 보이지 않는다. 이곳에 비가 온 것은 몇 달이나 지난 일이다. 부족장으로서, 당신은 부족민들의 새 집을 짓도록 명령해야 한다. 당신의 선택은?`,
        choices: [
            { 
                text: '강한 바람을 막기 위해, 튼튼한 나무집을 짓는다.', 
                isCorrect: false,
                successChance: 0.4,
                successText: '오랜 시간을 들여 나무집을 지어놓았지만, 몇 주 안에 가축에게 줄 풀이 다 떨어져 <span class="highlight-yellow">다른 곳으로 이동해야 한다</span>. 많은 목재를 들인 집은 그대로 버려졌고 상당한 자재의 낭비가 되었다.',
                failureText: '오랜 시간을 들여 나무집을 지어놓았지만, 몇 주 안에 가축에게 줄 풀이 다 떨어져 <span class="highlight-yellow">다른 곳으로 이동해야 한다</span>. 이동한 곳에서 집을 새로 지어야 했고, 시간이 너무 소요되어 부족에 위기가 닥쳤다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '많은 부족민을 수용하기 위해, 철골 콘크리트로 높은 아파트를 짓는다.', 
                isCorrect: false,
                failureText: '<span class="highlight-yellow">이 건조한 초원에서 철근? 콘크리트?</span> 말도 안 되는 소리를 지껄이자, 부족민들은 부족장이 미쳤다며 당신에게 손가락질했다.<br> ❤️ -5',
                failureDamage: 5
            },
            { 
                text: '가축에게 먹일 풀이 떨어지면 쉽게 이동하기 위해, 천으로 텐트형 집을 짓는다.', 
                isCorrect: true,
                successXp: 5,
                successText: '당신의 명령에 따라 쉽게 철거하고 다시 지을 수 있는 텐트형 집을 지었다. 몇 주 뒤 양떼가 풀을 다 뜯어먹었고, 당신의 부족은 <span class="highlight-yellow">하루만에 모든 물건을 들고 그대로 다른 곳으로 이주할 준비</span>를 마칠 수 있었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_1.png',
                    text: '몽골의 전통 가옥인 <span class="highlight-yellow">\'게르(Ger)\'</span>는 텐트와 비슷한 이동식 집입니다. 몽골은 건조해 농사를 짓기 어려워 많은 사람들이 가축을 기르고 살았습니다. 가축이 풀을 모두 뜯어먹으면 다른 목초지를 찾아가야 했기 때문에, 쉽게 만들고 해체할 수 있는 게르를 만들었습니다.'
                }
            },
        ]
    },
    {
        id: 2,
        title: '사막의 요새',
        image: 'images/situation_2.png',
        text: `당신은 모로코의 사하라 사막 가장자리에 있는 마을의 건축가다. 이곳의 자연은 극단적이다. 낮에는 모든 것을 증발시킬 듯한 <span class="highlight-yellow">강렬한 태양</span>이 내리쬐지만, 밤에는 기온이 급격히 떨어져 <span class="highlight-yellow">매서운 추위</span>가 찾아온다.<br><br>주변을 둘러보면 건축에 쓸 만한 <span class="highlight-yellow">나무나 암석은 거의 보이지 않고</span>, 오직 붉은 흙과 모래만이 끝없이 펼쳐져 있다. 당신은 이 척박한 환경에서 사람들을 보호할 집을 설계해야 한다. 어떤 선택을 하겠는가?`,
        choices: [
            { 
                text: '단열 효과가 뛰어난 목재를 수입해 튼튼한 통나무집을 짓는다.', 
                isCorrect: false,
                failureText: '치명적인 판단이다. 이 지역에서 나무는 가장 구하기 힘든 귀중한 자원이다. <span class="highlight-yellow">모든 건축 자재를 수입</span>하는 데는 천문학적인 비용이 들 것이며, 결국 당신의 계획은 예산 부족으로 시작도 못 하고 실패했다. <span class="highlight-yellow">주변에서 쉽게 구할 수 있는 자원</span>이 무엇인지 먼저 고려해야 했다.<br> ❤️ -5',
                failureDamage: 5
            },
            { 
                text: '낮의 더위를 피하기 위해, 통풍이 잘되는 얇은 천으로 텐트를 짓는다.', 
                isCorrect: false,
                failureText: '끔찍한 결과를 낳았다. 낮 동안은 그럭저럭 버틸 수 있었지만, 해가 지자마자 재앙이 닥쳤다. 얇은 천은 <span class="highlight-yellow">밤의 혹독한 추위</span>를 전혀 막아주지 못했고, 사람들은 밤새 추위에 떨어야 했다. 당신의 설계는 이 땅의 <span class="highlight-yellow">거대한 일교차</span>를 고려하지 않았다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '주변의 흙을 이용해 두꺼운 벽을 쌓고, 창문은 작게 만들어 집을 짓는다.', 
                isCorrect: true,
                successXp: 5,
                successText: '성공적이었다. 두꺼운 흙벽은 낮 동안의 <span class="highlight-yellow">뜨거운 열기를 서서히 흡수하여 실내를 시원하게</span> 유지해주었고, 밤에는 <span class="highlight-yellow">흡수했던 열을 서서히 방출하여 실내를 따뜻하게</span> 만들어주었다. 작은 창문은 열의 출입을 최소화했다. 적절한 정도의 온도가 방 안에 갇혀 쾌적한 실내가 만들어졌다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_2.png',
                    text: '모로코의 전통 가옥 <span class="highlight-yellow">\'카스바\'</span>는 사막의 자연환경에 적응한 것입니다. 주변에서 가장 구하기 쉬운 흙을 주재료로, <span class="highlight-yellow">열용량이 큰 두꺼운 흙벽</span>을 만들어 외부의 급격한 온도 변화로부터 실내를 보호합니다. 이는 에어컨 없이도 집을 시원하고 따뜻하게 유지하는 <span class="highlight-yellow">천연 단열재이자 냉난방 시스템</span>의 역할을 합니다.'
                }
            }
        ]
    },
    {
        id: 3,
        title: '영혼과의 만찬',
        image: 'images/situation_3.png',
        text: `고대 멕시코의 아즈텍 문명에서는 <span class="highlight-yellow">죽음을 삶의 끝이 아닌, 또 다른 단계로 나아가는 과정</span>이라고 생각했다. 이 사상은 가톨릭 문화와 결합하여, <span class="highlight-yellow">일 년에 한 번 세상을 떠난 영혼들이 사랑하는 가족을 만나러 이승으로 돌아온다</span>는 믿음으로 발전했다.<br><br>당신은 바로 그 시기에 멕시코 친구의 집에 방문했다. 멕시코 전통 신앙을 바탕으로 추론할 때, 당신이 해야 할 가장 적절한 행동은 무엇일까?`,
        choices: [
            { 
                text: '영혼이 찾아오는 엄숙한 순간이므로, 경건하게 묵념하며 애도의 뜻을 표한다.', 
                isCorrect: false,
                successChance: 0.4,
                successText: '친구는 당신의 정중한 태도에 고마워하면서도, 조용히 설명해주었다. "마음은 고맙지만, 오늘은 슬퍼하는 날이 아니야. <span class="highlight-yellow">우리는 할머니를 웃으며 맞이하고 싶어</span>." 당신은 문화를 완전히 이해하진 못했지만, 다행히 무례를 범하지는 않았다.',
                failureText: '당신의 침묵에 즐겁던 파티 분위기가 순간 싸늘해졌다. 친구가 당신을 옆으로 끌어내며 말했다. "이건 <span class="highlight-yellow">슬퍼하는 날이 아니라 기뻐하는 날</span>이라고. 당신의 행동은 좋은 의도였지만, 결과적으로는 실례가 되었어."<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '돌아온 영혼과 함께하는 자리이므로, 그들을 환영하며 즐거운 기억을 나눈다.', 
                isCorrect: true,
                successXp: 5,
                successText: '당신이 할머니에 대한 즐거운 추억을 이야기하자 친구와 가족들이 기뻐한다. "맞아! 바로 그거야. <span class="highlight-yellow">우리가 즐겁게 기억해주는 것이 바로 영혼을 위한 최고의 대접</span>이거든." 당신은 멕시코의 문화를 깊이 이해했다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_3.png',
                    text: '멕시코의 <span class="highlight-yellow">\'죽은 자들의 날(Día de los Muertos)\'</span> 분위기는 축제와 같습니다. 죽음을 삶의 일부로 여기고, 떠난 이와의 재회를 축제로 여기는 이들의 인문환경은 슬픔과 두려움이 아닌, <span class="highlight-yellow">기억과 사랑을 통한 유대</span>를 강조하는 독특한 의식주 문화를 만들어냈습니다. 제단인 \'오프렌다\'에 올리는 음식과 장식 모두 이러한 사상의 결과물입니다.'
                }
            },
            { 
                text: '산 자와 죽은 자의 영역은 다르므로, 혹시 모를 위험을 피해 최대한 멀리 떨어져 있는다.', 
                isCorrect: false,
                failureText: '당신이 뒷걸음질 치자 가족들의 얼굴에서 웃음기가 사라졌다. 친구가 실망한 목소리로 말했다. "정보에서 영혼이 우리를 <span class="highlight-yellow">\'방문\'</span>한다고 했잖아. <span class="highlight-yellow">사랑하는 가족을 귀신 취급</span>하다니, 그건 정말 큰 실례야." 당신의 행동은 모두를 불쾌하게 만들었다.<br> ❤️ -5',
                failureDamage: 5
            }
        ]
    },
    {
        id: 4,
        title: '성스러운 가르침',
        image: 'images/situation_4.png',
        text: `당신은 <span class="highlight-yellow">여자 관광객</span>이다. 튀르키예를 여행하던 중, 유서 깊은 이슬람 사원 '블루 모스크'에 방문하게 되었다. 사원의 입구에는 '방문객 안내문'이 세워져 있다. 안내문에는 '<span class="highlight-yellow">이곳은 신성한 장소입니다. 신께서는 겸손하고 정숙한 마음을 가진 이를 사랑하십니다</span>' 라고 적혀 있다. 사원 입구에서는 \'관광객 대여용\' 팻말이 붙은 스카프가 쌓여 있다. 이 상황에서, 당신이 사원에 들어가기 위해 해야 할 가장 올바른 행동은 무엇일까?`,
        choices: [
            { 
                text: '입은 옷 그대로 들어간다.', 
                isCorrect: false,
                failureText: '당신이 안으로 들어가려 하자, 사원 관리인이 당신을 정중하지만 단호하게 막아섰다. "죄송하지만, 이곳의 규칙을 따라 주셔야 합니다. <span class="highlight-yellow">이곳의 문화를 존중하지 않는다면 들어오실 수 없습니다</span>." 당신은 결국 사원에 들어가지 못했다.<br> ❤️ -4',
                failureDamage: 5
            },
            { 
                text: '단추를 열고 피부를 드러낸 채 들어간다.', 
                isCorrect: false,
                failureText: '관리인은 기겁하며 당신을 막아세웠다. "맙소사! 신성한 성전에서 무슨 꼴입니까?<span class="highlight-yellow">경전에 적힌 대로 정숙한 옷차림</span>을 하지는 못할 망정, 그렇게 살을 드러내다니!" 당신은 모스크에서 내쫓겼다.<br> ❤️ -6',
                failureDamage: 4
            },
            { 
                text: '입구에서 스카프를 빌려 머리와 어깨를 가리고 들어간다.', 
                isCorrect: true,
                successXp: 5,
                successText: '올바른 선택이다. 당신이 스카프로 머리를 가리고 입장하자, 관리인은 부드러운 미소로 당신을 환영했다. <span class="highlight-yellow">다른 문화의 신성한 장소를 방문할 때는 그들의 방식을 존중</span>하는 것이 가장 중요한 예절임을 당신은 이해했다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_4.png',
                    text: '이슬람 문화권 여성의 <span class="highlight-yellow">\'히잡(Hijab)\'</span>은 단순히 머리를 가리는 천이 아니라, 경전의 가르침에 따라 <span class="highlight-yellow">겸손함과 정숙함을 표현하는 종교적 신념의 상징</span>입니다. 특히 성스러운 공간인 사원에 들어갈 때 히잡을 착용하는 것은 신에 대한 깊은 존경심을 나타내는 중요한 행위로 여겨집니다.'
                }
            }
        ]
    },
    {
        id: 5,
        title: '신 앞의 겸손함',
        image: 'images/situation_5.png',
        text: `당신은 유대교의 핵심 교리에 대해 배우고 있다. 가장 중요한 가르침 중 하나는 '<span class="highlight-yellow">신은 늘 우리 위에 존재하며 모든 것을 보고 있다</span>'는 것이다. 따라서 신자들은 일상 속에서 항상 신에 대한 존경심을 표해야 하며, <span class="highlight-yellow">자신의 머리 꼭대기를 신에게 직접적으로 보이는 것</span>은 오만한 행동으로 간주된다.<br><br>당신은 유대교 회당(시나고그)에 방문할 기회가 생겼다. 회당 입구에는 작은 바구니가 놓여 있고, 그 안에는 여러 개의 작고 동그란 모자들이 들어있다. 배운 가르침을 바탕으로, 회당에 들어가기 전 당신이 해야 할 가장 올바른 행동은 무엇일까?`,
        choices: [
            { 
                text: '다른 종교처럼, 성스러운 장소에 들어갈 때는 모든 모자를 벗어야 한다.', 
                isCorrect: false,
                successChance: 0.3,
                successText: '당신이 모자를 벗으려 하자, 한 신도가 미소를 지으며 당신을 막았다. "존중하려는 마음은 정말 감사합니다. 하지만 저희는 반대입니다. <span class="highlight-yellow">오히려 머리를 가림으로써 신께 존경을 표한답니다</span>." 당신의 정중한 태도 덕분에 실수를 면할 수 있었다.',
                failureText: '당신이 모자를 벗자 주변 사람들이 깜짝 놀라며 수군거린다. 한 사람이 다가와 작은 목소리로 말했다. "어서 모자를 쓰세요. <span class="highlight-yellow">신 앞에서 머리를 드러내는 것은 큰 결례입니다</span>." 당신의 행동은 의도와 정반대의 결과를 낳았다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '신성한 장소에 들어가기 전, 바구니의 모자로 손과 얼굴을 닦아 몸을 정결히 한다.', 
                isCorrect: false,
                failureText: '당신이 모자로 얼굴을 닦으려 하자 옆에 있던 친구가 기겁하며 당신의 손을 붙잡았다. "<span class="highlight-yellow">이건 신성한 물건이야!</span> 걸레처럼 사용하다니, 정말 끔찍한 모욕이야!" 당신은 회당에 들어가기도 전에 쫓겨날 뻔했다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '신에게 머리 꼭대기를 보이지 않기 위해, 바구니에 있는 모자를 집어 머리에 쓴다.', 
                isCorrect: true,
                successXp: 5,
                successText: '정확한 판단이다. 당신이 자연스럽게 모자를 집어 머리에 쓰자, 주변 신도들이 따뜻한 미소로 당신을 맞이했다. <span class="highlight-yellow">머리를 가리는 행위</span>를 통해 당신은 이들의 종교와 문화를 깊이 존중하고 있음을 보여주었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_5.png',
                    text: '유대인 남성이 머리에 쓰는 이 작은 모자는 <span class="highlight-yellow">\'키파\'</span>라고 불립니다. 이는 유대교의 영향을 받았습니다. 키파는 <span class="highlight-yellow">항상 내 위에 신이 존재한다는 것을 잊지 않고, 겸손함을 유지하기 위한 신앙의 표현</span>으로, 신자들에게는 삶의 일부와도 같은 중요한 의복입니다.'
                }
            }
        ]
    },
    {
        id: 6,
        title: '혹한의 생존법',
        image: 'images/situation_6.png',
        text: `당신은 겨울에 러시아의 평원, 시베리아에 도착했다. 기온은 영하 20도 아래로 떨어졌고, 숨을 쉴 때마다 날카로운 공기가 폐를 찌르는 듯하다. <span class="highlight-yellow">칼바람</span>이 아무런 장애물 없이 평원을 가로질러 불어온다.<br><br>잠시만 밖에 서 있어도 <span class="highlight-yellow">귀와 턱, 뺨의 감각이 사라지는 것</span>을 느끼며, 피부를 보호할 무언가가 절실히 필요하다는 것을 깨달았다. 이 생존이 걸린 환경에서, 당신의 머리를 보호하기 위한 가장 합리적인 선택은 무엇일까?`,
        choices: [
            { 
                text: '최첨단 신소재로 만든 두꺼운 방한 비니(beanie)를 착용한다.', 
                isCorrect: false,
                successChance: 0.3,
                successText: '최첨단 소재 덕분에 머리의 온기는 어느 정도 지킬 수 있었다. 하지만, 쉴 새 없이 불어오는 <span class="highlight-yellow">칼바람에 귀와 뺨이 노출</span>되는 것은 막을 수 없었다. 당신은 곧 심각한 동상에 걸릴 위험을 깨달았다.',
                failureText: '두꺼운 비니조차도 이 혹한 앞에서는 역부족이었다. 매서운 바람이 모자의 니트 사이를 파고들었고, <span class="highlight-yellow">특히 보호받지 못한 귀와 턱은 이미 감각이 없다.</span> 당신은 심각한 저체온증과 동상 위기에 처했다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '두꺼운 가죽으로 만들어 귀와 턱까지 완벽히 덮을 수 있는 모자를 쓴다.', 
                isCorrect: true,
                successXp: 5,
                successText: '최고의 선택이다. 두꺼운 가죽과 털이 머리의 열을 완벽하게 보존해주었고, 무엇보다 <span class="highlight-yellow">귀와 턱, 뺨까지 모두 감싸주는 덮개</span>가 살을 에는 칼바람으로부터 당신을 완벽하게 보호했다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_6.png',
                    text: '러시아의 상징과도 같은 털모자 <span class="highlight-yellow">\'샤프카-우샨카(Шапка-ушанка)\'</span>는 혹독한 추위라는 러시아의 자연환경이 만들어낸 필연적인 결과물입니다. \'우샨카\'는 \'귀 덮개가 달린 모자\'라는 뜻으로, 생명까지 위협하는 <span class="highlight-yellow">시베리아의 칼바람으로부터 귀, 턱, 목덜미 등 취약 부위를 보호</span>하기 위해 탄생한 생존 장비에 가깝습니다.'
                }
            },
            { 
                text: '머리카락이 젖지 않도록 방수가 되는 넓은 챙의 모자를 쓴다.', 
                isCorrect: false,
                failureText: '치명적인 판단 착오다. 방수 기능은 눈을 막아주었지만, 영하 20도의 기온에서 <span class="highlight-yellow">열을 보존하는 데는 아무런 도움이 되지 않았다.</span> 챙과 머리 사이로 들어온 냉기는 당신의 체온을 급격히 빼앗아 갔다. 당신은 멋을 부리다가 얼어 죽을 위기에 처했다.<br> ❤️ -6',
                failureDamage: 6
            }
        ]
    },
    {
        id: 7,
        title: '태양과 비의 땅',
        image: 'images/situation_7.png',
        text: `당신은 베트남의 메콩강 삼각주에서 일하는 농부다. 이곳의 기후는 변화무쌍하다. 오전 내내 <span class="highlight-yellow">피부를 태울 듯한 뜨거운 햇볕</span>이 내리쬐어 공기가 후텁지근하다가도, 오후가 되면 갑자기 하늘이 어두워지며 <span class="highlight-yellow">장대 같은 폭우</span>가 쏟아진다.<br><br>이처럼 강한 햇빛과 갑작스러운 비가 반복되는 변덕스러운 날씨 속에서 농사일을 계속하기 위해, 당신에게는 두 가지 상황 모두에 효과적으로 대처할 수 있는 모자가 필요하다. 가장 실용적인 선택은 무엇일까?`,
        choices: [
            { 
                text: '통풍이 잘되는 가벼운 밀짚모자를 써서 더위를 피한다.', 
                isCorrect: false,
                failureText: '판단 착오였다. 밀짚모자는 햇볕은 잘 막아주었지만, 갑자기 쏟아진 폭우에 순식간에 물을 먹어 축 처지고 망가져 버렸다. <span class="highlight-yellow">비에 대한 대책</span>이 전혀 되지 않았다. 당신은 비를 그대로 맞으며 일해야 했다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '나뭇잎을 엮어 만든, 끝이 뾰족한 원뿔 형태의 모자를 쓴다.', 
                isCorrect: true,
                successXp: 5,
                successText: '합리적인 선택이다. 모자의 넓은 챙은 강한 햇볕을 막아 시원한 그늘을 만들어주었고, 원뿔 형태의 빗면은 갑작스레 쏟아지는 <span class="highlight-yellow">폭우가 그대로 흘러내리게</span> 해 훌륭한 우산 역할을 했다. 이 모자 하나로 두 가지 문제를 모두 해결했다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_7.png',
                    text: '베트남의 전통 모자 <span class="highlight-yellow">\'논라(Nón Lá)\'</span>는 아열대 몬순 기후라는 자연환경에 완벽하게 적응한 생활용품입니다. 주변에서 쉽게 구할 수 있는 야자수 잎 등으로 만들어 가볍고, <span class="highlight-yellow">강한 햇빛과 갑작스러운 비를 동시에 막을 수 있도록</span> 설계되었습니다.'
                }
            },
            { 
                text: '방수 기능이 있는 우비의 모자를 뒤집어써서 비에 대비한다.', 
                isCorrect: false,
                successChance: 0.3,
                successText: '당신은 비는 피할 수 있었다. 하지만 비가 그치고 다시 해가 뜨자, <span class="highlight-yellow">통풍이 전혀 되지 않는 방수 모자</span> 때문에 머리에 땀이 차고 더워서 일을 할 수가 없었다. 절반의 해결책은 때로 아무 소용이 없다.',
                failureText: '최악의 선택이었다. 비가 오지 않는 동안, 통풍이 안 되는 방수 모자는 당신의 머리를 찜통으로 만들었다. <span class="highlight-yellow">땀과 열기가 빠져나가지 못해</span> 당신은 곧 현기증을 느끼며 쓰러질 것만 같았다.<br> ❤️ -5',
                failureDamage: 5
            }
        ]
    },
    {
        id: 8,
        title: '숲의 온기',
        image: 'images/situation_8.png',
        text: `당신은 19세기 캐나다의 개척민이다. 이곳은 <span class="highlight-yellow">울창한 침엽수림</span>이 끝없이 펼쳐져 있어 목재를 구하기가 매우 쉽다. 하지만 겨울이 되면 상황은 완전히 달라진다. 기온이 영하 20도 이하로 떨어지는 것은 기본이고, <span class="highlight-yellow">몇 달 동안 폭설</span>이 계속되어 세상이 하얗게 고립된다.<br><br>이 길고 혹독한 겨울을 안전하게 보내기 위해서는, 추위를 막고 눈의 무게를 견딜 수 있는 튼튼한 집이 반드시 필요하다. 주변의 풍부한 자원을 활용하여 어떤 집을 지어야 할까?`,
        choices: [
            { 
                text: '충분한 공기를 가두기 위해 가공하기 쉬운 얇은 나무판자를 이어 붙여 최대한 넓은 집을 짓는다.', 
                isCorrect: false,
                failureText: '치명적인 실수였다. 얇은 나무판자는 혹독한 겨울 추위를 전혀 막아주지 못했고, 당신과 가족들은 실내에서도 추위에 떨어야 했다. 더욱이, <span class="highlight-yellow">지붕에 쌓인 눈의 무게</span>를 이기지 못한 집은 결국 무너져 내렸다. 자원의 양뿐만 아니라 <span class="highlight-yellow">특성</span>을 고려해야 했다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '구하기 쉬운 나무를 땔감으로 삼고, 동굴을 파서 그 안에서 지낸다.', 
                isCorrect: false,
                successChance: 0.2,
                successText: '동굴은 매서운 바람을 막아주어 임시 거처로는 나쁘지 않았다. 하지만 땅에서 올라오는 한기와 습기 때문에 건강이 나빠졌고, 언제 닥칠지 모르는 <span class="highlight-yellow">야생 동물의 위협</span>에 밤새 불안에 떨어야 했다. 이것은 장기적인 해결책이 될 수 없다.',
                failureText: '끔찍한 선택이었다. 당신이 잠든 사이, 겨울잠 잘 곳을 찾던 <span class="highlight-yellow">굶주린 곰</span>이 동굴로 들이닥쳤다. 당신은 간신히 도망쳤지만 모든 것을 잃었다. 자연은 아늑한 안식처인 동시에 무서운 위협이 될 수 있다는 것을 잊었다.<br> ❤️ -5',
                failureDamage: 5
            },
            { 
                text: '두껍고 무거운 통나무를 겹겹이 쌓아 올려 벽을 만들고, 지붕은 경사지게 짓는다.', 
                isCorrect: true,
                successXp: 5,
                successText: '탁월한 판단이다. 두꺼운 통나무 벽은 외부의 냉기를 완벽하게 차단하여 <span class="highlight-yellow">실내를 따뜻하게 유지</span>해주었다. 또한, 경사진 지붕 덕분에 <span class="highlight-yellow">쌓인 눈이 자연스럽게 흘러내려</span> 집이 무너질 걱정도 없었다. 당신은 숲의 지혜로 혹독한 겨울을 이겨냈다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_8.png',
                    text: '캐나다의 <span class="highlight-yellow">\'통나무집(Log Cabin)\'</span>은 춥고 눈이 많은 기후와 울창한 숲이라는 자연환경이 결합하여 탄생한 주거 형태입니다. 주변에서 쉽게 구할 수 있는 나무를 이용하되, <span class="highlight-yellow">두꺼운 통나무 자체를 단열재로 활용</span>하여 혹한을 견딥니다. 또한 지붕을 경사지게 만들어 <span class="highlight-yellow">폭설의 무게를 견디도록</span> 설계했습니다.'
                }
            }
        ]
    },
    {
        id: 9,
        title: '강과 함께 사는 법',
        image: 'images/situation_9.png',
        text: `당신은 방글라데시의 강가 마을에 사는 주민이다. 이 지역은 거대한 강들이 만나는 <span class="highlight-yellow">세계 최대의 삼각주</span>로, 땅이 매우 낮고 평평하다. 매년 우기가 되면 <span class="highlight-yellow">엄청난 비가 쏟아져 강물이 불어나고</span>, 마을 전체가 <span class="highlight-yellow">몇 달 동안 물에 잠기는 일</span>이 반복된다.<br><br>곧 우기가 시작될 것이다. 당신은 이 피할 수 없는 홍수 속에서 가족과 재산을 지킬 수 있는 집을 지어야 한다. 이 환경에 가장 적합한 집은 어떤 모습일까?`,
        choices: [
            { 
                text: '물에 쓸려가지 않도록, 땅을 깊게 파고 튼튼한 벽돌집을 짓는다.', 
                isCorrect: false,
                failureText: '최악의 판단이었다. 우기가 시작되자 불어난 강물은 당신의 튼튼한 집을 그대로 삼켜버렸다. 집은 물에 잠겨 버렸고, 당신과 가족은 모든 것을 버리고 지붕 위에서 구조를 기다려야만 했다. <span class="highlight-yellow">홍수를 힘으로 이기려 한 것</span>이 가장 큰 실수였다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '높은 나무 기둥을 땅에 박고, 그 위에 집을 지어 침수를 피한다.', 
                isCorrect: true,
                successXp: 5,
                successText: '훌륭한 선택이다. 강물이 마을을 덮쳤지만, 당신의 집은 <span class="highlight-yellow">높은 기둥 덕분에 물에 잠기지 않았다.</span> 당신과 가족들은 불어난 물 위에서 안전하게 생활하며 우기가 끝나기를 기다릴 수 있었다. 환경의 위협을 지혜롭게 피하는 방법을 찾았다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_9.png',
                    text: '방글라데시에서는 매년 반복되는 홍수에 적응하기 위해 다양한 형태의 집을 짓습니다. 땅에 높은 기둥을 세워 짓는 <span class="highlight-yellow">\'고상 가옥\'</span>이나, 물 위에 집을 띄우는 <span class="highlight-yellow">\'수상 가옥\'</span> 모두가 그 대표적인 예입니다.'
                }
            },
            { 
                text: '물에 뜰 수 있는 뗏목 같은 기반을 만들고, 그 위에 가벼운 집을 짓는다.', 
                isCorrect: true,
                successXp: 5,
                successText: '현명한 해결책이다. 강물이 불어나자, 당신의 집은 <span class="highlight-yellow">수위에 맞춰 자연스럽게 함께 떠올랐다.</span> 덕분에 당신의 가족과 재산은 모두 안전했으며, 물이 잠긴 동안에도 배를 이용해 자유롭게 이동하며 생활할 수 있었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_9.png',
                    text: '방글라데시에서는 매년 반복되는 홍수에 적응하기 위해 다양한 형태의 집을 짓습니다. 땅에 높은 기둥을 세워 짓는 <span class="highlight-yellow">\'고상 가옥\'</span>이나, 물 위에 집을 띄우는 <span class="highlight-yellow">\'수상 가옥\'</span> 모두가 그 대표적인 예입니다.'
                }
            }
        ]
    },
   {
        id: 10,
        title: '할랄과 하람',
        image: 'images/situation_10.png',
        text: `당신은 <span class="highlight-yellow">세계 최대의 이슬람 국가</span>인 인도네시아를 여행 중이다. 이곳 사람들의 삶은 이슬람 율법과 깊이 연관되어 있다. 당신은 이슬람 율법에서 허용된 음식은 '할랄', 금지된 음식은 <span class="highlight-yellow">'하람'</span>이라고 불린다는 것을 배웠다.<br><br>율법은 <span class="highlight-yellow">정신을 흐리게 만드는 것</span>과 특정 동물을 부정하게 여겨 금지하는데, 특히 돼지는 <span class="highlight-yellow">가장 대표적인 금기 식품</span>으로 꼽힌다. 현지에서 사귄 친구의 가족이 당신을 저녁 식사에 초대했다. 당신은 감사의 표시로 파티에 어울리는 음식을 선물하고 싶다. 어떤 음식을 가져가는 것이 가장 적절할까?`,
        choices: [
            { 
                text: '가장 비싸고 고급스러운 부위로 만든 돼지고기 바비큐 요리를 선물한다.', 
                isCorrect: false,
                failureText: '당신이 선물을 내미는 순간, 집주인의 얼굴이 하얗게 질렸다. 파티 분위기는 순식간에 얼어붙었다. 당신은 이 문화권에서 <span class="highlight-yellow">가장 모욕적이고 무례한 행동</span>을 저질렀다. 결국 당신은 식사에 참여하지 못하고 쫓겨났다.<br> ❤️ -7',
                failureDamage: 7
            },
            { 
                text: '축제 분위기를 돋울 수 있는 고급 샴페인(술)을 선물한다.', 
                isCorrect: false,
                failureText: '집주인은 당신의 선물에 정중하게 감사했지만, 곤란한 표정으로 술병을 받지 않았다. "마음은 정말 감사합니다. 하지만 율법은 <span class="highlight-yellow">정신을 흐리게 만드는 것 또한 금지</span>하고 있습니다." 당신은 주어진 단서를 꼼꼼히 읽지 않았다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '신선한 열대 과일이나 견과류로 만든 디저트를 선물한다.', 
                isCorrect: true,
                successXp: 5,
                successText: '사려 깊은 선택이다. 당신이 가져온 과일과 디저트를 보고 가족 모두가 기뻐했다. 당신의 선물 덕분에 식사는 더욱 풍성해졌고, 당신은 <span class="highlight-yellow">문화적 배경을 존중하는 예의 바른 손님</span>으로 환영받았다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_10.png',
                    text: '이슬람 율법은 무슬림의 생활 모든 부분에 영향을 미치며, 특히 식문화에서 뚜렷하게 나타납니다. 율법에서 허용하는 <span class="highlight-yellow">\'할랄\'</span> 음식만 먹을 수 있으며, 돼지고기처럼 부정하거나 술처럼 <span class="highlight-yellow">정신에 영향을 주는 \'하람\'</span>은 절대 먹지 않습니다.'
                }
            }
        ]
    },
    {
        id: 11,
        title: '첫 번째 추수감사절',
        image: 'images/situation_11.png',
        text: `당신은 17세기 초, 북미 대륙에 막 정착한 유럽인 이주민 중 한 명이다. 혹독한 첫 겨울을 보낸 뒤, 당신의 공동체는 <span class="highlight-yellow">원주민들의 도움으로 첫 농사를 성공적으로</span> 마쳤다. 당신은 이 수확의 기쁨을 나누고 감사들 표하기 위해, 원주민들을 초대하여 성대한 만찬을 대접하려고 한다.<br><br>가장 중요한 메인 요리를 정해야 한다. 이 <span class="highlight-yellow">새로운 땅에서 풍부하게 구할 수 있으면서도</span>, 많은 사람을 대접할 수 있는 푸짐한 음식이어야 한다. 유럽에서 가져온 몇 안 되는 소와 닭은 농사와 알을 위해 매우 귀한 상황이다. 어떤 음식을 메인 요리로 선택하는 것이 가장 합리적일까?`,
        choices: [
            { 
                text: '농사의 성공을 축하하며, 귀한 소를 잡아 푸짐한 스테이크를 대접한다.', 
                isCorrect: false,
                failureText: '근시안적인 판단이었다. 농사를 지을 수 있는 소는 식량보다 훨씬 중요한 자산이었다. <span class="highlight-yellow">귀한 가축을 잡아먹은 탓</span>에, 당신의 공동체는 다음 해 농사에 심각한 차질을 겪게 되었다. 눈앞의 축제 때문에 미래를 망친 셈이다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '풍성하게 수확한 옥수수와 호박을 이용해 다양한 채소 요리를 선보인다.', 
                isCorrect: false,
                successChance: 0.5,
                successText: '채소 요리는 훌륭했지만, 무언가 부족했다. 원주민들은 감사를 표했지만, 잔치의 중심이 되는 <span class="highlight-yellow">푸짐한 고기 요리가 없어</span> 모두 아쉬워했다. 당신의 잔치는 풍성했지만, 사람들의 기대를 완벽히 만족시키지는 못했다.',
                failureText: '당신이 채소 요리만 내놓자, 손님들은 크게 실망했다. 힘든 노동 끝에 열리는 축제에서 모두가 기대했던 것은 <span class="highlight-yellow">든든한 고기 요리</span>였다. 당신은 잔치의 핵심을 놓쳤고, 축제 분위기는 어색해졌다.<br> ❤️ -3',
                failureDamage: 3
            },
            { 
                text: '주변 숲으로 사냥을 나가, 이곳에 흔한 커다란 야생 날짐승을 사냥해온다.', 
                isCorrect: true,
                successXp: 5,
                successText: '현실적인 판단이다. 사냥팀은 이 대륙의 토종새인 커다란 <span class="highlight-yellow">야생 칠면조</span>를 여러 마리 잡아왔다. 칠면조 구이는 모든 손님을 배불리 먹이기에 충분했고, 귀한 가축을 희생할 필요도 없었다. 잔치는 대성공이었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_11.png',
                    text: '미국에서는 <span class="highlight-yellow">\'추수감사절(Thanksgiving Day)\'</span>에 칠면조 요리를 먹는 전통이 있습니다. 당시 이주민들에게 칠면조는 <span class="highlight-yellow">북미 대륙에서 쉽게 구할 수 있는 크고 풍부한 식량 자원</span>이었습니다. 생존을 위한 현실적인 선택이 시간이 흘러 하나의 문화적 상징으로 자리 잡은 것입니다.'
                }
            }
        ]
    },
    {
        id: 12,
        title: '초원의 요리사',
        image: 'images/situation_12.png',
        text: `당신은 중앙아시아의 건조한 초원을 누비는 튀르키예 유목민 부족의 요리사다. 당신의 부족은 <span class="highlight-yellow">양과 염소를 이끌고 새로운 목초지를 찾아 끊임없이 이동</span>한다. 때문에 요리 도구는 최대한 간단해야만 한다.<br><br>또한, 이 넓은 초원에서는 <span class="highlight-yellow">땔감으로 쓸 만한 큰 나무를 구하기가 매우 어렵다.</span> 당신은 부족 전체를 먹이기 위해, 가지고 있는 양고기를 가장 빠르고 효율적인 방법으로 조리해야 한다. 어떤 방식을 선택하겠는가?`,
        choices: [
            { 
                text: '고기를 큰 덩어리째로, 구덩이를 파고 장작불을 피워 천천히 굽는다.', 
                isCorrect: false,
                failureText: '치명적인 실수였다. 큰 고기 덩어리를 익히는 데 필요한 <span class="highlight-yellow">장작을 충분히 구할 수 없었고</span>, 불의 세기가 약해 고기는 제대로 익지도 않았다. 당신은 귀한 고기와 시간을 낭비했고, 굶주린 부족민들의 원성을 들어야 했다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '고기를 잘게 잘라 금속 꼬치에 꿰어, 작은 불 위에 놓고 돌려가며 굽는다.', 
                isCorrect: true,
                successXp: 5,
                successText: '가장 현명한 방법이다. 고기를 작게 자르자 <span class="highlight-yellow">적은 땔감으로도 금방</span> 익힐 수 있었고, 꼬치 덕분에 모든 고기를 골고루 익힐 수 있었다. 당신은 최소한의 자원으로 모든 부족민에게 따뜻한 음식을 대접하는 데 성공했다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_12.png',
                    text: '튀르키예의 대표 요리 <span class="highlight-yellow">\'케밥(Kebab)\'</span>은 유목민의 생활 환경에서 탄생했습니다. 땔감이 부족한 초원에서 고기를 가장 빨리 익히기 위해 <span class="highlight-yellow">작게 잘라 꼬치에 꿰어 굽는 방식</span>이 발전한 것입니다. 현대에는 거대한 꼬치구이로 변형해서 판매하기도 합니다.'
                }
            },
            { 
                text: '물을 사용해 고기를 끓이고, 주변에서 찾은 풀을 넣어 국을 만든다.', 
                isCorrect: false,
                failureText: '잘못된 판단이다. <span class="highlight-yellow">건조한 초원지대에서 물은 식수만으로도 부족</span>했다. 당신은 음식을 만들기 위해 귀한 물을 너무 많이 낭비했고, 결국 부족 전체가 식수 부족으로 큰 고통을 겪게 되었다. 이곳에서는 물을 사용하는 요리는 최후의 수단이다.<br> ❤️ -5',
                failureDamage: 5
            }
        ]
    },
    {
        id: 13,
        title: '신성한 생명',
        image: 'images/situation_13.png',
        text: `당신은 <span class="highlight-yellow">힌두교가 생활의 중심인 인도</span>의 한 가정에 저녁 식사 초대를 받았다. 힌두교는 <span class="highlight-yellow">모든 생명을 소중히 여기는 '아힘사(Ahimsa, 비폭력)'</span> 정신을 매우 중요하게 생각한다. 특히, 암소는 풍요와 생명의 상징으로서 <span class="highlight-yellow">신성한 존재로 여겨져 절대 해치거나 먹지 않는다.</span><br><br>당신은 이 집에 어떤 음식을 가져가야 존중을 표하고 함께 즐길 수 있을지 고민하고 있다. 배운 가르침을 바탕으로, 당신의 가장 사려 깊은 선택은 무엇일까?`,
        choices: [
            { 
                text: '인도의 더운 날씨에 기운을 돋울 수 있도록, 영양가 높은 소고기 스테이크를 가져간다.', 
                isCorrect: false,
                failureText: '당신이 소고기를 꺼내자 집주인의 얼굴이 굳어졌다. "지금 저희에게... <span class="highlight-yellow">신성한 소를 먹으라는 겁니까?</span>" 당신의 선물은 끔찍한 모욕으로 받아들여졌고, 당신은 집에서 쫓겨났다. 당신은 이 문화의 가장 중요한 금기를 어겼다.<br> ❤️ -7',
                failureDamage: 7
            },
            { 
                text: '다양한 향신료를 사용해 만든 닭고기 카레를 만들어 가져간다.', 
                isCorrect: false,
                successChance: 0.7,
                successText: '다행히 그 가족은 닭고기를 먹는 사람들이었다. 하지만 집주인은 조심스럽게 설명해주었다. "맛있게 잘 먹겠습니다. 하지만 <span class="highlight-yellow">아힘사 정신에 따라 고기를 먹지 않는 힌두교도</span>도 많습니다."',
                failureText: '집주인은 난처한 표정을 지으며 말했다. "정말 죄송하지만... 저희 가족은 <span class="highlight-yellow">아힘사 가르침에 따라 어떤 고기도 먹지 않습니다.</span>" 당신의 요리는 결국 아무도 손대지 못했다. 소고기만 피하면 될 것이라는 생각이 짧았다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '신선한 채소와 렌틸콩, 그리고 향신료를 듬뿍 넣어 만든 채식 카레를 가져간다.', 
                isCorrect: true,
                successXp: 5,
                successText: '완벽한 선택이었다. 집주인은 당신이 가져온 채식 카레를 보고 활짝 웃으며 감사를 표했다. "저희의 문화를 존중해주셨군요. <span class="highlight-yellow">모든 생명을 존중하는 마음</span>이 담긴, 정말 훌륭한 선물입니다." 당신의 배려 덕분에 모두가 행복한 식사를 할 수 있었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_13.png',
                    text: '인도 식문화의 가장 큰 특징 중 하나는 힌두교의 영향입니다. 생명을 존중하는 <span class="highlight-yellow">\'아힘사\'</span> 교리에 따라 많은 힌두교도들이 채식을 하며, 특히 <span class="highlight-yellow">신성시되는 소는 절대 먹지 않습니다.</span>'
                }
            }
        ]
    },
    {
        id: 14,
        title: '뜨거운 땅의 에너지',
        image: 'images/situation_14.png',
        text: `당신은 서아프리카 가나의 한 마을에 살고 있다. 이곳은 일 년 내내 덥고 습한 열대기후로, 주민들은 뜨거운 태양 아래에서 <span class="highlight-yellow">힘든 농사일</span>을 하며 살아간다. 따라서 이들에게는 고된 노동을 이겨낼 <span class="highlight-yellow">높은 열량을 내는 주식(主食)</span>이 반드시 필요하다.<br><br>이 지역의 토양과 기후는 밀이나 쌀 농사에는 적합하지 않다. 대신, 땅속에서 자라는 <span class="highlight-yellow">카사바, 얌(yam) 같은 녹말이 풍부한 뿌리채소</span>가 주된 식량 자원이다. 당신은 이 재료를 이용해 마을 사람들에게 힘을 주는 음식을 만들어야 한다. 어떤 방법이 가장 효과적일까?`,
        choices: [
            { 
                text: '재료를 얇게 썰어 기름에 튀겨, 바삭한 과자로 만든다.', 
                isCorrect: false,
                failureText: '잘못된 선택이다. 기름은 귀할 뿐더러, 바삭한 튀김은 맛있는 간식은 될 수 있었지만, 힘든 노동에 필요한 에너지를 채워주는 <span class="highlight-yellow">든든한 주식으로는 부족했다.</span> 식사를 마친 사람들은 금방 허기를 느꼈고, 오후 내내 기운 없이 일해야 했다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '재료를 곱게 갈아 가루로 만든 뒤, 화덕에서 부풀려 빵으로 굽는다.', 
                isCorrect: false,
                failureText: '결과가 좋지 않았다. 카사바 가루는 밀가루와 달리 글루텐이 없어 빵처럼 부풀어 오르지 않고 딱딱하게 굳어버렸다. 또한, <span class="highlight-yellow">더운 날씨에 집 전체를 뜨겁게 만드는 화덕</span>은 비효율적인 조리 방식이었다.<br> ❤️ -5',
                failureDamage: 5
            },
            { 
                text: '재료를 푹 삶은 뒤, 커다란 절구에 넣고 찧어 쫀득하고 찰진 반죽으로 만든다.', 
                isCorrect: true,
                successXp: 5,
                successText: '정확한 방법이다. 쫀득하게 뭉쳐진 반죽은 매우 든든했고, 소화가 천천히 되어 오랫동안 포만감과 에너지를 유지해주었다. 덕분에 마을 사람들은 <span class="highlight-yellow">오후 내내 지치지 않고 일할 힘</span>을 얻을 수 있었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_14.png',
                    text: '가나를 비롯한 서아프리카의 대표 주식은 <span class="highlight-yellow">\'푸푸(Fufu)\'</span>입니다. 푸푸는 고된 노동에 필요한 <span class="highlight-yellow">에너지를 효율적으로 공급</span>하기 위해 탄생했습니다. 열대 기후에서 잘 자라는 카사바 등의 <span class="highlight-yellow">칼로리 높은 뿌리채소</span>를 주재료로 하며, 최대한 든든하게 먹을 수 있도록 찧어서 뭉치는 조리법을 발전시킨 것입니다.'
                }
            }
        ]
    },
    {
        id: 15,
        title: '지지 않는 태양의 도시',
        image: 'images/situation_15.png',
        text: `당신은 6월 말, 러시아의 상트페테르부르크의 시장이 되었다. 이 도시는 <span class="highlight-yellow">북극에 가까운 고위도</span>에 위치해 있어 여름이 되면 아주 특별한 현상이 나타난다. 자정이 넘은 깊은 밤이지만, <span class="highlight-yellow">마치 해질녘처럼 하늘이 계속 밝은 상태</span>가 유지된다.<br><br>이러한 '백야(白夜)' 현상은 몇 주간 계속될 것이라고 한다. 시민의 쾌적환 삶을 위해 이 자연현상을 어떻게 대처해야 할까?`,
        choices: [
            { 
                text: '두꺼운 암막 커튼을 보급한다.', 
                isCorrect: false,
                failureText: '그럭저럭 효과가 있었다. 하지만 이 특별한 자연현상은 이 지역만의 특색이기에, 좀 더 효과적으로 이용하는 방법이 있을 수도 있다.<br> ❤️ -1',
                failureDamage: 1
            },
            { 
                text: '별도로 대처하지 않아 다른 지역과의 통일성을 유지한다.', 
                isCorrect: false,
                failureText: '잘못된 판단이었다. 밝은 밤은 주민들에게 휴식할 수 없는 스트레스를 가져왔다. <span class="highlight-yellow">잠을 충분히 잘 수 없어 쌓인 정신적 스트레스</span>는 곧 주민들의 건강 악화와 생산성 저하로 나타났다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '이 현상을 즐기는 축제를 연다.', 
                isCorrect: true,
                successXp: 5,
                successText: '가장 좋은 선택이었다. 강변에서 펼쳐지는 클래식 음악회와 예술 공연을 열자, 주민들은 고통받지 않고 오히려 자연현상을 즐겼다. 뿐만 아니라 외지에서 찾아온 관광객으로 인해 수입이 늘고, 도시에 활기가 돌았다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_15.png',
                    text: '러시아 상트페테르부르크에서는 <span class="highlight-yellow">\'백야 축제\'</span>를 엽니다. 북극권에 가까운 지리적 특성 때문에 여름철이면 해가 지지 않는 <span class="highlight-yellow">\'백야\'</span> 현상이 나타납니다. 러시아인들은 이 독특한 자연환경을 예술과 문화가 결합된 세계적인 축제로 발전시켰습니다.'
                }
            }
        ]
    },
    {
        id: 16,
        title: '미래를 위한 약속',
        image: 'images/situation_16.png',
        text: `당신은 덴마크의 입법자로서 새로운 작명(아기의 이름 짓기)법의 초안을 만들고 있다. 개인의 자유가 우선되어야 한다는 의견이 있지만, 여전히 '<span class="highlight-yellow">개인의 자유가 공동체의 안정이나 다른 개인(특히 아동)의 복지를 해쳐서는 안 된다</span>'는 의견이 주류이다. 당신은 이러한 덴마크의 핵심 가치관을 법에 담아내야 한다. 어떤 법안을 발의하겠는가?`,
        choices: [
            { 
                text: '개인의 자유를 최우선으로, 부모가 원하는 어떤 이름이든 등록할 수 있도록 전면 자유화한다.', 
                isCorrect: false,
                failureText: '잘못된 해석이다. 당신의 법안은 <span class="highlight-yellow">개인의 자유가 아동의 복지를 해칠 수 있다는 사회적 우려</span>를 전혀 반영하지 못했다. "자유가 방종이 되어서는 안 된다"는 거센 비판과 함께 법안은 부결되었다.<br> ❤️ -5',
                failureDamage: 5
            },
            { 
                text: '공동체의 안정을 최우선으로, 지정된 고유 이름 목록 외의 모든 현대적, 외국식 이름을 금지한다.', 
                isCorrect: false,
                failureText: '지나치게 경직된 법안이다. 당신의 법안은 <span class="highlight-yellow">개인의 자유를 존중해야 한다는 사회적 합의</span>를 무시했다는 비판을 받았다. "전통을 지키는 것이 개인의 권리를 억압하는 수단이 될 수는 없다"는 반대에 부딪혔다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '전통 이름 목록을 기본으로 제공하되, 목록에 없는 이름은 아동의 복지를 기준으로 심사 후 허용한다.', 
                isCorrect: true,
                successText: '정확한 판단이다. 당신의 법안은 아동의 복지와 공동체를 보호하는 틀 안에서 개인의 자유를 허용하는 방식으로, <span class="highlight-yellow">덴마크 사회의 핵심 가치관</span>을 완벽하게 구현했다. 법안은 폭넓은 지지를 받으며 통과되었다.',
                info: {
                    image: 'images/info_16.png',
                    text: '덴마크에서는 원칙적으로 <span class="highlight-yellow">\'정해진 이름 목록 중에서만 아기의 이름을 지을 수 있습니다.\'</span>. <span class="highlight-yellow">정부가 승인한 이름 목록</span>을 통해 문화유산을 지키고 아이를 보호합니다. 새로운 이름을 짓기 원한다면 <span class="highlight-yellow">별도 심사를 통해 등록</span>할 수 있습니다. 이는 조상의 유산을 중시하는 덴마크의 철학이 반영된 것입니다.'
                }
            }
        ]
    },
    {
        id: 17,
        title: '태양을 피하는 방법',
        image: 'images/situation_17.png',
        text: `당신은 스페인의 농부다. 여름의 태양은 믿을 수 없을 정도로 강렬하다. 오전에는 그럭저럭 일할 만하지만, 오후 2시가 넘어가면 <span class="highlight-yellow">공기가 아지랑이처럼 피어오를 정도로 기온이 치솟는다.</span><br><br>이글거리는 태양 아래에서 계속 일하는 것은 생산성을 급격히 떨어뜨릴 뿐만 아니라, 열사병의 위험을 부르는 <span class="highlight-yellow">매우 위험하고 비효율적인 행동</span>이다. 하지만 하루에 끝내야 할 일은 아직 많이 남아있다. 어떻게 하루의 노동 시간을 구성하는 것이 가장 현명할까?`,
        choices: [
            { 
                text: '강한 정신력으로 버티며, 물을 많이 마시면서 계속 일한다.', 
                isCorrect: false,
                failureText: '무모한 선택이었다. 당신의 의지와는 상관없이, 끓어오르는 열기는 당신의 체력을 빠르게 고갈시켰다. 결국 당신은 <span class="highlight-yellow">탈진하여 쓰러졌고</span>, 그날의 일을 전혀 끝마치지 못했다. 자연의 힘을 의지만으로 이기려 한 것은 어리석었다.<br> ❤️ -5',
                failureDamage: 5
            },
            { 
                text: '가장 더운 시간에는 일을 멈추고 실내에서 긴 휴식을 취한 뒤, 해가 질 무렵 서늘해지면 다시 일을 시작한다.', 
                isCorrect: true,
                successText: '가장 효율적인 판단이다. 실내에서 충분한 휴식을 취한 당신은, 서늘해진 늦은 오후에 다시 밭으로 나갔다. <span class="highlight-yellow">재충전된 체력 덕분에 일의 능률은 최고조에 달했고</span>, 당신은 안전하고 빠르게 모든 일을 끝마칠 수 있었다.',
                info: {
                    image: 'images/info_17.png',
                    text: '스페인에서는 수많은 노동자가 <span class="highlight-yellow">\'시에스타(Siesta)\'</span>라는 이름으로 한낮에 쉬며 낮잠을 잡니다. 시에스타는 게으름의 상징이 아니라, <span class="highlight-yellow">가장 덥고 비효율적인 시간을 피해</span> 에너지를 보존하고, 서늘한 시간에 다시 일의 능률을 높이는 <span class="highlight-yellow">지혜로운 시간 관리 전략</span>입니다.'
                }
            },
            { 
                text: '나무 그늘 밑으로 자리를 옮겨, 조금 느린 속도로 계속해서 일한다.', 
                isCorrect: false,
                successChance: 0.3,
                successText: '그늘 덕분에 최악의 상황은 피할 수 있었다. 하지만 공기 전체가 뜨거웠기 때문에, 생산성은 오르지 않았고 <span class="highlight-yellow">오후 내내 무기력함과 싸워야 했다.</span> 당신은 일을 끝냈지만 평소보다 두 배의 시간을 허비했다.',
                failureText: '그늘도 소용없었다. 땅에서 올라오는 열기와 뜨거운 공기는 당신을 끊임없이 지치게 만들었다. 결국 당신은 <span class="highlight-yellow">느려터진 속도로 겨우 일하는 흉내</span>만 냈을 뿐, 아무런 성과도 내지 못했다.<br> ❤️ -3',
                failureDamage: 3
            }
        ]
    },
    {
        id: 18,
        title: '사막의 생존 의복',
        image: 'images/situation_18.png',
        text: `당신은 상인으로서 거대한 사우디아라비아의 사막을 횡단할 준비를 하고 있다. 사막의 환경은 극단적이다. 낮 동안에는 그늘 한 점 없는 곳에서 <span class="highlight-yellow">모든 것을 태워버릴 듯한 태양</span>이 내리쬔다. 또한, 이따금씩 <span class="highlight-yellow">뜨겁고 건조한 바람</span>이 불어와 피부에 닿는 모든 것을 따갑게 만드는 모래를 실어 나른다.<br><br>이 혹독한 환경에서 당신의 생존을 좌우할 가장 중요한 것은 바로 '의복'이다. 당신의 몸을 가장 효과적으로 보호하고 시원하게 유지해 줄 복장은 무엇일까?`,
        choices: [
            { 
                text: '최대한 많은 피부를 노출시켜 땀을 증발시키기 위해, 반소매와 반바지를 입는다.', 
                isCorrect: false,
                failureText: '재앙과도 같은 선택이었다. 당신의 맨살은 <span class="highlight-yellow">강렬한 햇볕에 그대로 노출되어 심각한 화상</span>을 입었다. 또한, 건조한 바람은 당신의 땀을 너무 빨리 증발시켜 급격한 탈수 증상을 일으켰다. 당신은 얼마 못 가 쓰러지고 말았다.<br> ❤️ -7',
                failureDamage: 7
            },
            { 
                text: '햇빛을 반사하는 흰색의, 온몸을 덮는 헐렁한 긴 옷을 입는다.', 
                isCorrect: true,
                successText: '가장 현명한 판단이었다. 흰색의 긴 옷은 <span class="highlight-yellow">햇빛을 반사</span>해 몸이 뜨거워지는 것을 막아주었고, 헐렁한 품 덕분에 <span class="highlight-yellow">옷과 몸 사이로 공기가 순환</span>하며 오히려 시원함을 느낄 수 있었다. 당신은 쾌적하고 안전하게 사막을 여행했다.',
                info: {
                    image: 'images/info_18.png',
                    text: '사우디아라비아를 포함하여, 아랍 문화권의 남성은 전통 의상 <span class="highlight-yellow">\'토브(Thobe)\'</span>를 입습니다. 토브는 사막 기후에서 쾌적하게 지내기 위한 복장입니다. <span class="highlight-yellow">햇빛을 반사하는 밝은 색</span>, 피부를 보호하고 공기를 순환시키는 <span class="highlight-yellow">헐렁하고 긴 디자인</span>으로 극도의 건조함과 더위에 대응합니다.'
                }
            },
            { 
                text: '열을 잘 흡수하는 검은색의 몸에 딱 붙는 옷을 입어, 체온을 밖으로 방출한다.', 
                isCorrect: false,
                failureText: '완전히 잘못된 생각이었다. 검은 옷은 태양열을 그대로 흡수하여 당신의 몸을 오븐처럼 만들었다. 몸에 딱 붙는 디자인은 <span class="highlight-yellow">공기의 순환을 막아 열을 옷 안에 가두는</span> 최악의 결과를 낳았다. 당신은 극심한 더위로 고통받았다.<br> ❤️ -5',
                failureDamage: 5
            }
        ]
    },
    {
        id: 19,
        title: '편의의 왕국',
        image: 'images/situation_19.png',
        text: `당신은 일본의 대도시에서 사업을 시작하려는 사업가다. 일본 사회를 관찰하며 몇 가지 특징을 발견했다. 첫째, <span class="highlight-yellow">치안이 매우 좋아</span> 길거리에 있는 물건도 거의 도난당하지 않는다. 둘째, 사회 전반적으로 <span class="highlight-yellow">편리함과 효율성</span>을 매우 중시한다.<br><br>하지만 사업 환경은 만만치 않다. <span class="highlight-yellow">인구 밀도가 높아 가게 임대료가 비싸고</span>, <span class="highlight-yellow">인건비 또한 매우 높다.</span> 당신은 좁은 공간에서 24시간 음료를 판매하고 싶다. 이 사회경제적 환경을 고려할 때, 가장 합리적인 사업 모델은 무엇일까?`,
        choices: [
            { 
                text: '24시간 운영을 위해, 직원을 2명 고용하여 교대로 가게를 지키게 한다.', 
                isCorrect: false,
                failureText: '사업은 한 달 만에 파산 위기에 처했다. 당신은 높은 임대료와 비싼 인건비를 감당할 수 없었다. <span class="highlight-yellow">비용 문제를 해결하지 않고서는</span> 이 나라에서 24시간 사업을 유지할 수 없다는 것을 뒤늦게 깨달았다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '치안이 좋다는 점을 믿고, 돈통만 놓아둔 무인 가판대를 설치한다.', 
                isCorrect: false,
                failureText: '좋은 시도였지만 사업적으로는 실패했다. 대부분의 사람들이 정직하게 돈을 냈지만, 일부는 그렇지 않았다. 무엇보다, 거스름돈을 준비하고 상품을 채우는 과정이 <span class="highlight-yellow">너무 비효율적</span>이었다. 당신의 가게는 신뢰에만 기댄 아마추어적인 가게로 남았다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '직원 없이 24시간 작동하는 자동판매기를 설치하여 음료를 판매한다.', 
                isCorrect: true,
                successText: '탁월한 사업 전략이다. 자동판매기는 좁은 공간에서 최소한의 비용으로 24시간 내내 수익을 창출했다. 당신은 일본의 <span class="highlight-yellow">사회경제적 환경에 완벽하게 적응</span>하여 사업을 성공으로 이끌었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_19.png',
                    text: '일본의 유명한 <span class="highlight-yellow">\'자동판매기 = 자판기\'</span> 문화는 일본 도시 환경에 최적화된 장사 방법입니다. <span class="highlight-yellow">높은 인건비와 임대료, 낮은 범죄율, 그리고 편리함을 추구하는 문화</span>가 결합하여 무인 자동화 상점이 번성할 최적의 조건을 만들었습니다.'
                }
            }
        ]
    },
    {
        id: 20,
        title: '땅을 만드는 기술',
        image: 'images/situation_20.png',
        text: `당신은 17세기 네덜란드의 지도자다. 국토의 상당 부분이 <span class="highlight-yellow">해수면보다 낮은 거대한 늪지대</span>라 농사를 짓거나 살 수가 없다. 당신의 최우선 과제는 이 물을 모두 퍼내어, 사람이 살 수 있는 <span class="highlight-yellow">새롭고 마른 땅</span>을 만드는 것이다.<br><br>이를 위해서는 거대한 펌프를 쉼 없이 돌릴 동력이 필요하다. 주변을 둘러보니, 북해에서는 <span class="highlight-yellow">강력하고 끊임없는 바람</span>이 불어온다. 하지만 석탄은 아직 흔한 연료가 아니고, 땅이 평평해 수력 발전을 쓸 수도 없다. 어떤 동력을 활용하는 것이 가장 합리적일까?`,
        choices: [
            { 
                text: '강력한 공동체 의식을 바탕으로, 모든 주민을 동원해 양동이로 물을 퍼낸다.', 
                isCorrect: false,
                failureText: '결과는 처참했다. 주민들이 밤낮없이 물을 퍼냈지만, <span class="highlight-yellow">땅속에서 스며 나오는 물의 양</span>을 따라잡을 수 없었다. 사람들은 금방 지쳐 쓰러졌고, 늪의 수위는 전혀 변하지 않았다. 당신은 문제의 규모를 과소평가했다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '수많은 말을 동원하여, 말이 끄는 힘으로 펌프를 작동시킨다.', 
                isCorrect: false,
                successChance: 0.2,
                successText: '엄청난 비용을 들여 수많은 말을 동원한 결과, 마침내 작은 땅 하나를 얻는 데는 성공했다. 하지만 이것은 지속 가능한 방법이 아니었다. <span class="highlight-yellow">말을 유지하는 데 드는 막대한 비용</span> 때문에 더 이상의 간척 사업은 불가능했다.',
                failureText: '처음에는 효과가 있는 듯 보였다. 하지만 펌프를 계속 돌리기 위해 필요한 <span class="highlight-yellow">수많은 말을 먹일 막대한 양의 사료</span>를 감당할 수 없었다. 결국 비용 문제로 프로젝트는 중단되었고, 땅은 다시 물에 잠겼다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '커다란 날개가 달린 기계를 만들어, 끊임없이 부는 바람의 힘으로 펌프를 돌린다.', 
                isCorrect: true,
                successText: '혁신적인 해결책이었다. 바람의 힘으로 작동하는 펌프는 지치지 않고 밤낮으로 물을 퍼냈고, 마침내 질척이던 늪은 비옥한 농경지로 변했다. 당신은 <span class="highlight-yellow">자연의 힘을 이용해 자연을 극복</span>하는 위업을 달성했다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_20.png',
                    text: '과거 네덜란드에서는 곳곳에 <span class="highlight-yellow">\'풍차\'</span>가 세워져 물을 퍼냈습니다. <span class="highlight-yellow">해수면보다 낮은 땅</span>이라는 절망적인 자연환경을, <span class="highlight-yellow">끊임없이 부는 바람</span>이라는 또 다른 자연환경을 이용해 극복한 것입니다. 이러한 풍차는 지금은 전동 펌프로 대체되었지만, 몇몇 지역에서는 여전히 남아 있어 관광객을 모으고 있습니다.'
                }
            }
        ]
    },
    {
        id: 21,
        title: '어둠과 추위 속에서',
        image: 'images/situation_21.png',
        text: `당신은 고대 핀란드의 숲속에 사는 정착민이다. 길고 혹독한 겨울이 찾아왔다. 해는 거의 뜨지 않아 세상은 <span class="highlight-yellow">끝없는 어둠</span>에 잠겨 있고, <span class="highlight-yellow">뼛속까지 파고드는 추위</span>가 오두막의 벽을 뚫고 들어온다.<br><br>이러한 어둠과 추위는 육체뿐만 아니라 정신까지 지치게 만들어 마을 전체가 고립감에 빠져있다. 당신과 공동체는 이 겨울을 이겨내기 위해, <span class="highlight-yellow">몸을 덥히고, 청결을 유지하며, 공동체의 유대감</span>을 다질 효과적인 방법이 절실히 필요하다. 어떤 해결책이 가장 현명할까?`,
        choices: [
            { 
                text: '각자 자신의 오두막에서, 화롯불에 의지하며 최대한 외부 활동을 줄인다.', 
                isCorrect: false,
                failureText: '최악의 결과가 찾아왔다. 사람들은 추위는 겨우 견뎠지만, 기나긴 어둠 속에서 <span class="highlight-yellow">완전히 고립되어 깊은 우울감</span>에 빠졌다. 공동체 의식은 사라졌고, 마을은 활기를 잃었다. 당신은 육체의 생존만큼 정신의 생존도 중요하다는 것을 잊었다.<br> ❤️ -5',
                failureDamage: 5
            },
            { 
                text: '마을 중앙에 거대한 모닥불을 피워, 다 함께 온기를 쬐고 이야기를 나눈다.', 
                isCorrect: false,
                successChance: 0.2,
                successText: '며칠 동안은 효과가 있었다. 사람들은 오랜만에 함께 모여 활기를 되찾았다. 하지만 <span class="highlight-yellow">비효율적인 모닥불은 일주일 만에 겨울 동안 쓸 땔감의 절반</span>을 태워버렸고, 마을은 더 혹독한 추위의 위협에 직면하게 되었다.',
                failureText: '치명적인 실수였다. 거대한 모닥불은 열기 대부분을 공기 중으로 날려버렸고, <span class="highlight-yellow">귀한 땔감만 엄청난 속도로 낭비</span>했다. 결국 땔감이 다 떨어져 마을 전체가 추위에 떨게 되었다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '단열이 잘 된 작은 나무 방을 만들어, 적은 땔감으로 뜨겁게 달군 돌로 온도를 높여 함께 사용한다.', 
                isCorrect: true,
                successText: '완벽한 해결책이었다. 뜨거운 증기가 가득한 방은 뼛속까지 스민 한기를 몰아냈고, 땀을 흘리며 몸을 씻을 수도 있었다. 무엇보다 이 공간은 <span class="highlight-yellow">마을 사람들이 함께 모여 이야기하는 사랑방</span>이 되었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_21.png',
                    text: '<span class="highlight-yellow">\'사우나(Sauna)\'</span>의 기원은 핀란드입니다. 사우나는 단순한 목욕 시설이 아니라, 혹독한 자연환경을 이겨내기 위한 <span class="highlight-yellow">생존의 필수 요소</span>였습니다. <span class="highlight-yellow">추위와 어둠, 위생 문제, 그리고 사회적 고립감</span>이라는 복합적인 문제에 대한 가장 효율적인 해결책이 바로 사우나였습니다.'
                }
            }
        ]
    },
        {
        id: 22,
        title: '산맥 속의 나라',
        image: 'images/situation_22.png',
        text: `당신은 스위스 연방의 지도자다. 당신의 나라는 <span class="highlight-yellow">유럽의 강력한 국가들 사이에 둘러싸여</span> 있으며, 이웃 국가들은 언제든 전쟁을 일으킬 수 있는 잠재적 위협이다. 당신의 국토 대부분은 <span class="highlight-yellow">험준하고 거대한 알프스 산맥</span>으로 이루어져 있다.<br><br>스위스는 이웃에 비해 인구도 적고 자원도 부족하여 전면전으로는 승산이 없다. 당신의 목표는 전쟁을 이기는 것이 아니라, <span class="highlight-yellow">아무도 감히 침략할 엄두를 내지 못하게 만들어</span> 국가의 독립과 평화를 지키는 것이다. 어떤 국방 정책을 채택해야 하는가?`,
        choices: [
            { 
                text: '강력한 이웃 국가 중 하나와 군사 동맹을 맺어 안보를 보장받는다.', 
                isCorrect: false,
                failureText: '치명적인 외교적 실수였다. 당신이 한 국가와 동맹을 맺자, 다른 경쟁 국가들이 스위스를 <span class="highlight-yellow">적대 세력으로 간주</span>하기 시작했다. 결국 스위스는 강대국들의 대리 전쟁터가 될 위기에 처했고, 평화는 더욱 멀어졌다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '이웃 국가들을 자극하지 않기 위해, 군대를 해산하고 완전한 비무장 중립을 선언한다.', 
                isCorrect: false,
                successChance: 0.1,
                successText: '운 좋게도 한동안 평화가 유지되었다. 하지만 이웃 나라에서 야심 있는 독재자가 등장하자, <span class="highlight-yellow">스위스는 아무런 저항도 하지 못하고</span> 그대로 합병될 것이라는 소문이 돌기 시작했다. 당신의 나라는 바람 앞의 촛불 신세가 되었다.',
                failureText: '끔찍한 판단이었다. 당신의 선의와는 달리, 이웃 국가는 스위스를 <span class="highlight-yellow">손쉬운 먹잇감</span>으로 여기고 침략했다. 아무런 방어 수단이 없었던 당신의 나라는 힘없이 무너졌다. 힘없는 중립은 공허한 외침일 뿐이었다.<br> ❤️ -5',
                failureDamage: 5
            },
            { 
                text: '알프스 산맥 전체를 요새로 만들고, 모든 시민이 군인이 되어 침략 시 끝까지 저항하는 전략을 세운다.', 
                isCorrect: true,
                successText: '가장 현명한 전략이었다. 스위스를 침략하는 비용이 얻는 이득보다 훨씬 크다는 것을 깨달은 이웃 국가들은 아무도 스위스를 넘보지 않았다. 당신은 <span class="highlight-yellow">나라의 지형적 강점을 활용하여</span> 누구도 깨뜨릴 수 없는 평화를 쟁취했다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_22.png',
                    text: '스위스의 <span class="highlight-yellow">\'무장 중립(Armed Neutrality)\'</span> 정책은 산맥 지형의 특징을 활용한 것입니다. 스위스는 험준한 산악 지형을 최대한 활용해 국토 전체를 <span class="highlight-yellow">거대한 요새</span>로 만들었습니다. 이 덕분에 스위스는 어느 연합에 편을 들지 않고도 높은 국방력을 가지게 되었습니다.'
                }
            }
        ]
    },  
    {
        id: 23,
        title: '산의 도전',
        image: 'images/situation_23.png',
        text: `당신은 필리핀 북부 산악지대에 사는 '이푸가오' 부족의 일원이다. 당신의 부족은 대대로 쌀을 주식으로 삼아왔다. 하지만 주변을 둘러봐도 <span class="highlight-yellow">농사를 지을 만한 평평한 땅은 전혀 보이지 않고</span>, 오직 가파른 산비탈만이 끝없이 이어진다.<br><br>당신과 부족민들의 생존은 이 험준한 산에서 쌀을 재배하는 불가능에 가까운 도전에 달려있다. 쌀농사는 <span class="highlight-yellow">물을 가두어 둘 수 있는 평평한 땅</span>이 반드시 필요하다. 이 척박한 환경을 극복하고 쌀을 얻기 위한 가장 합리적인 방법은 무엇일까?`,
        choices: [
            { 
                text: '쌀을 포기하고, 산비탈에서도 잘 자라는 다른 작물(예: 옥수수)을 찾아다닌다.', 
                isCorrect: false,
                successChance: 0.3,
                successText: '당신은 굶주림은 면할 수 있었다. 하지만 쌀을 주식으로 하는 부족의 오랜 전통과 식문화를 포기한 대가로, 당신은 <span class="highlight-yellow">공동체 내에서 정체성을 잃어버린 이방인</span>이 되었다. 생존은 했지만 많은 것을 잃었다.',
                failureText: '당신은 새로운 작물을 찾아 헤맸지만, 낯선 식물에 대한 지식 부족으로 결국 굶주림에 시달렸다. 당신은 <span class="highlight-yellow">조상 대대로 이어져 온 쌀농사 기술</span>이라는 소중한 자산을 너무 쉽게 포기했다.<br> ❤️ -5',
                failureDamage: 5
            },
            { 
                text: '산의 경사와 상관없이, 비가 올 때마다 볍씨를 뿌려 빗물에 의존한다.', 
                isCorrect: false,
                failureText: '결과는 처참했다. 볍씨는 <span class="highlight-yellow">가파른 경사면을 따라 모두 빗물에 휩쓸려 내려갔고</span>, 땅에는 아무것도 남지 않았다. 당신은 쌀농사의 가장 기본 원리인 \'물을 가두는 것\'의 중요성을 완전히 무시했다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '산비탈을 직접 깎아 수평의 층계를 만들고, 돌로 벽을 쌓아 물을 가둔다.', 
                isCorrect: true,
                successText: '엄청난 노력 끝에, 불가능해 보였던 산비탈은 물을 가득 담은 수천 개의 논으로 변했다. 당신과 부족은 <span class="highlight-yellow">자연의 한계를 인간의 의지와 노력으로 극복</span>하는 위대한 업적을 이루었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_23.png',
                    text: '필리핀의 <span class="highlight-yellow">\'계단식 논(Rice Terraces)\'</span>은 평야가 부족한 산악지대에서 쌀을 재배하기 위한 인간 노력의 결정체입니다. 험준한 산을 깎아 층을 만들고 관개 시설을 연결한 이 거대한 구조물은, 척박한 <span class="highlight-yellow">자연환경에 순응하기보다 극복하려 했던</span> 이푸가오 부족의 독창적인 지혜와 기술력을 보여주는 문화유산입니다.'
                }
            }
        ]
    },
    {
        id: 24,
        title: '도시의 점심시간',
        image: 'images/situation_24.png',
        text: `당신은 인도 뭄바이에서 새로운 사업을 구상 중이다. 뭄바이의 수많은 직장인들은 종교나 입맛, 비용 문제로 외식보다 <span class="highlight-yellow">가정에서 만든 따뜻한 도시락</span>을 점심으로 먹고 싶어 한다. 하지만 살인적인 <span class="highlight-yellow">뭄바이의 교통체증</span> 때문에, 개인이 매일 아침 집에서 사무실까지 도시락을 제시간에 가져오는 것은 거의 불가능하다.<br><br>당신은 이 도시 전체의 점심 식사를 책임질 거대한 시스템을 만들어야 한다. 이 복잡한 문제를 해결할 가장 효율적이고 확장 가능한 방법은 무엇일까?`,
        choices: [
            { 
                text: '최신 기술을 도입, 오토바이 배달원 네트워크를 이용해 각 가정에서 사무실로 개별 배송한다.', 
                isCorrect: false,
                failureText: '완벽한 실패였다. 오토바이조차도 뭄바이의 교통지옥 앞에서는 속수무책이었다. 배달은 항상 늦었고, 음식은 식어버렸다. <span class="highlight-yellow">수백만 개의 개별 주문을 처리하는 비용</span>은 수익을 넘어섰고, 당신의 회사는 곧 파산했다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '도심에 대형 급식 시설을 짓고, 다양한 종류의 집밥 스타일 메뉴를 제공한다.', 
                isCorrect: false,
                successChance: 0.2,
                successText: '일부 고객들은 당신의 서비스를 이용했다. 하지만 대부분의 사람들은 "아무리 맛있어도 <span class="highlight-yellow">우리 집에서 만든 음식과는 다르다</span>"며 구독을 거절했다. 당신은 이들의 문화적 욕구를 정확히 파악하지 못했다.',
                failureText: '사람들의 반응은 차가웠다. 그들이 원했던 것은 \'집밥 스타일\'이 아니라, <span class="highlight-yellow">진짜 \'우리 집\'에서 만든 바로 그 음식</span>이었다. 당신의 사업은 고객의 핵심적인 요구를 놓쳤기 때문에 외면받았다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '교통체증을 피해 도시의 정시성 높은 통근 열차로 도시락을 옮기고, 역에서부터는 인력으로 배달한다.', 
                isCorrect: true,
                successText: '그야말로 천재적인 발상이었다. 혼잡한 도로를 완벽하게 피한 당신의 배달 시스템은 매일 수십만 개의 도시락을 <span class="highlight-yellow">정확한 시간에, 뜨거운 상태로</span> 배달했다. 당신의 사업은 뭄바이 직장인들의 점심을 책임지는 도시의 혈관이 되었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_24.png',
                    text: '뭄바이의 <span class="highlight-yellow">\'다바왈라(Dabbawala)\'</span>는 기술 없이 인간의 협업만으로 운영되는 세계 최고 수준의 물류 시스템입니다. <span class="highlight-yellow">극심한 교통체증</span>이라는 문제와 <span class="highlight-yellow">집밥을 원하는 문화적 수요</span>가 만나, 가장 효율적인 운송수단인 열차와 정교한 인적 네트워크를 활용하는 독창적인 해결책을 만들어냈습니다.'
                }
            }
        ]
    },
    {
        id: 25,
        title: '절벽 위의 마을',
        image: 'images/situation_25.png',
        text: `당신은 그리스 산토리니섬에 새로운 마을을 건설하는 건축가다. 이곳의 자연환경은 까다롭기 그지없다. 에게해의 태양은 <span class="highlight-yellow">일 년 내내 매우 뜨겁고 강렬</span>하며, 가파른 절벽 위에는 <span class="highlight-yellow">강한 바닷바람</span>이 쉴 새 없이 불어온다.<br><br>또한, 이 섬은 화산 활동으로 만들어져, 건축에 쓸 만한 <span class="highlight-yellow">커다란 나무가 거의 자라지 않는다.</span> 당신은 이 모든 조건을 고려하여 시원하고, 튼튼하며, 구하기 쉬운 재료로 지을 수 있는 집을 설계해야 한다. 어떤 설계가 가장 합리적일까?`,
        choices: [
            { 
                text: '목재를 주재료로, 통풍을 위해 창문이 큰 집을 짓는다.', 
                isCorrect: false,
                failureText: '총체적 난국이다. 비싼 수입 목재 때문에 건축 비용은 천정부지로 치솟았다. 큰 창문은 시원한 바람이 아닌 <span class="highlight-yellow">뜨거운 햇빛을 그대로 받아들여</span> 실내를 찜통으로 만들었고, 강풍에 창문이 파손되기 일쑤였다. 당신의 설계는 이 땅과 최악의 상성을 보였다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '주변의 화산암을 이용하되, 열을 잘 흡수하도록 어두운 색으로 짓는다.', 
                isCorrect: false,
                successChance: 0.2,
                successText: '튼튼한 집을 짓는 데는 성공했다. 하지만 어두운 돌벽은 <span class="highlight-yellow">낮 동안 햇빛을 전부 흡수</span>했고, 집 안은 사람이 견디기 힘들 정도로 뜨거워졌다. 결국 주민들은 시원한 저녁이 되기 전까지 집에 들어갈 수 없었다.',
                failureText: '끔찍한 결과였다. 어두운 색의 돌집은 낮 동안의 열을 그대로 머금어, 밤이 되어도 식지 않는 <span class="highlight-yellow">거대한 불가마</span>가 되어버렸다. 당신의 집은 사람이 살 수 없는 공간이 되었다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '화산암으로 두꺼운 벽을 쌓고 햇빛을 반사하도록 하얀색 칠을 하며, 지붕은 둥근 돔 형태로 짓는다.', 
                isCorrect: true,
                successText: '완벽한 설계였다. 하얀 벽은 강렬한 햇빛을 튕겨내 실내를 시원하게 유지해주었고, 둥근 돔 지붕은 <span class="highlight-yellow">거센 바닷바람의 저항을 최소화</span>하여 안정성을 높여주었다. 당신의 마을은 이 땅의 지혜 그 자체가 되었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_25.png',
                    text: '그리스 산토리니의 건축물은 지중해의 자연환경에 최적화된 결과물입니다. <span class="highlight-yellow">하얀색 회벽</span>은 강한 햇빛을 반사하여 실내 온도를 낮추고, <span class="highlight-yellow">둥근 돔 형태의 지붕</span>은 강한 바람의 영향을 줄여줍니다. 또한, <span class="highlight-yellow">나무가 귀한 환경</span>에서 주변의 돌과 흙을 주재료로 사용한 것은 생존을 위한 합리적인 선택이었습니다.'
                }
            }
        ]
    },
    {
        id: 26,
        title: '불과 얼음의 땅',
        image: 'images/situation_26.png',
        text: `당신은 아이슬란드에 정착한 초기 바이킹의 지도자다. 생존을 위한 가장 큰 과제는 <span class="highlight-yellow">길고 혹독한 겨울의 추위</span>를 이겨내는 것이다. 이 섬은 <span class="highlight-yellow">땔감으로 쓸 숲이 거의 없고</span>, 연료를 수입하는 것은 현실적으로 불가능하다.<br><br>하지만 당신의 발밑, 땅에서는 엄청난 에너지가 끓어오르고 있다. 섬 곳곳에서 <span class="highlight-yellow">뜨거운 증기가 뿜어져 나오고 온천수가 솟아난다.</span> 당신은 이 자연의 힘을 이용해, 공동체가 겨울을 따뜻하게 날 수 있는 지속 가능한 난방 시스템을 만들어야 한다.`,
        choices: [
            { 
                text: '화산암을 채굴하여, 그 안에 섞인 석탄이나 연료가 될 만한 광물을 찾는다.', 
                isCorrect: false,
                failureText: '헛된 노력이었다. 귀중한 시간을 들여 땅을 파헤쳤지만 나오는 것은 평범한 돌멩이뿐이었다. <span class="highlight-yellow">눈앞에 끓어오르는 명백한 에너지원</span>을 무시하고 불확실한 가능성에 매달린 대가는 혹독한 겨울이었다.<br> ❤️ -5',
                failureDamage: 5
            },
            { 
                text: '해안가로 떠내려온 유목이나 얼마 없는 관목을 모아, 각 집의 화로에서 아껴 쓴다.', 
                isCorrect: false,
                successChance: 0.2,
                successText: '부족민들은 땔감이 다 떨어지기 전까지, 약 한 달간은 따뜻하게 지낼 수 있었다. 하지만 <span class="highlight-yellow">혹독한 겨울은 이제 막 시작</span>되었을 뿐이다. 당신의 임시방편은 더 큰 재앙을 예고하고 있다.',
                failureText: '결국 땔감은 한 달 만에 바닥났다. 겨울이 한창일 때 난방이 끊기자, 사람들은 추위와 질병에 시달리기 시작했다. <span class="highlight-yellow">부족한 자원에만 의존</span>한 당신의 계획은 공동체를 위기에 빠뜨렸다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '땅에서 솟는 온천수와 증기를 단열된 파이프로 연결해, 각 가정에 직접 공급한다.', 
                isCorrect: true,
                successText: '그야말로 최고의 해결책이었다. 땅의 열기는 파이프를 통해 각 가정으로 전달되어, <span class="highlight-yellow">땔감 하나 없이도 마을 전체를 따뜻하게</span> 만들었다. 당신은 자연의 선물을 슬기롭게 이용하여 혹한의 저주를 축복으로 바꾸었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_26.png',
                    text: '아이슬란드는 <span class="highlight-yellow">지열 에너지</span>를 활용하여 척박한 자연환경을 극복한 나라입니다. <span class="highlight-yellow">화산 활동으로 얻는 막대한 지열</span>을 이용한 중앙난방 시스템은, 숲이 거의 없는 아이슬란드인들이 춥고 긴 겨울을 이겨낼 수 있었던 핵심적인 생존 기술이었습니다.'
                }
            }
        ]
    },
    {
        id: 27,
        title: '물의 골목길',
        image: 'images/situation_27.png',
        text: `당신은 '물의 도시' 이탈리아 베네치아의 상인이다. 이 도시의 '도로'는 아스팔트가 아닌 <span class="highlight-yellow">거미줄처럼 얽힌 수로(운하)</span>이며, 시민들의 주요 교통수단은 당연히 배다.<br><br>하지만 도시의 많은 수로는 폭이 매우 <span class="highlight-yellow">좁고 구불구불하며, 수심 또한 얕다.</span> 당신은 이 독특하고 복잡한 도시의 어느 곳이든 자유롭게 오가며 사람과 물건을 실어 나를 수 있는 배가 필요하다. 어떤 배를 선택해야 할까?`,
        choices: [
            { 
                text: '안정성을 위해 바닥이 깊은 작은 돛단배를 이용한다.', 
                isCorrect: false,
                failureText: '출항하자마자 문제가 발생했다. 배의 깊은 바닥은 <span class="highlight-yellow">얕은 수로의 바닥에 걸려</span> 옴짝달싹 못 하게 되었다. 설상가상으로, 돛대는 낮은 다리들에 계속 부딪혀 결국 부러지고 말았다. 이 배는 이 도시와는 최악의 궁합이다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '힘들게 노를 젓지 않도록, 프로펠러가 달린 작은 모터보트를 이용한다.', 
                isCorrect: false,
                successChance: 0.3,
                successText: '넓은 중앙 운하에서는 모터보트가 빠르고 편리했다. 하지만 목적지로 가기 위해 좁은 수로로 들어서자, 모터와 배터리가 필요한 모터보트는<span class="highlight-yellow">배의 폭이 너무 넓어</span> 더 이상 나아갈 수 없었다. 당신은 결국 목적지까지 걸어가야만 했다.',
                failureText: '당신의 모터보트는 도시의 골칫거리가 되었다. 프로펠러는 <span class="highlight-yellow">얕은 수로 바닥의 진흙</span>에 계속 걸렸고, 배가 만들어내는 물결은 오래된 건물들의 토대를 손상시켰다. 주민들의 항의에 당신은 운행을 포기해야 했다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '바닥이 평평하고, 폭이 좁고 긴 모양의 배를 긴 노 하나로 저어 나아간다.', 
                isCorrect: true,
                successText: '완벽한 선택이었다. 평평한 바닥은 얕은 수로를 막힘없이 나아갔고, 길고 날렵한 선체는 <span class="highlight-yellow">좁은 골목길 같은 운하</span>를 자유자재로 통과했다. 당신은 베네치아의 혈관을 누비는 최고의 운송수단을 손에 넣었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_27.png',
                    text: '베네치아의 <span class="highlight-yellow">\'곤돌라(Gondola)\'</span>는 도시의 독특한 지리 환경이 만들어낸 발명품입니다. <span class="highlight-yellow">얕은 수심</span>을 다니기 위한 평평한 바닥과, <span class="highlight-yellow">좁고 구불구불한 수로</span>를 통과하기 위한 길고 날렵한 선체는 수백 년에 걸쳐 이 도시에 가장 최적화된 형태로 발전했습니다. 곤돌라는 단순한 관광 상품이 아닌, 베네치아의 지형에 완벽하게 적응한 교통수단입니다.'
                }
            }
        ]
    },
    {
        id: 28,
        title: '대초원의 개척자',
        image: 'images/situation_28.png',
        text: `당신은 19세기 미국 중부 대평원에 정착한 개척자다. 혹독한 겨울이 오기 전에 가족이 살 집을 지어야만 한다. 하지만 주위를 둘러봐도 보이는 것은 끝없는 풀밭뿐, <span class="highlight-yellow">집을 지을 나무나 돌을 전혀 찾을 수가 없다.</span><br><br>당신이 가진 유일한 자원은 발밑에 있는, <span class="highlight-yellow">풀뿌리가 빽빽하게 얽혀있는 두껍고 단단한 흙</span>뿐이다. 이 독특한 환경에서, 당신은 어떤 방법으로 비바람과 추위를 막을 집을 지어야 할까?`,
        choices: [
            { 
                text: '수백 킬로미터 떨어진 동부의 도시까지 가서 비싼 값에 목재를 사서 운반해온다.', 
                isCorrect: false,
                failureText: '현실을 무시한 계획이었다. 목재를 운반해 오는 데 모든 돈과 시간을 허비한 당신은, 결국 <span class="highlight-yellow">겨울이 오기 전까지 집을 완성하지 못했다.</span> 첫눈이 내리는 날, 당신의 가족은 아무런 보금자리 없이 추위에 떨어야 했다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '강둑이나 언덕의 측면을 파고 들어가, 최소한의 비바람만 막을 수 있는 동굴집을 만든다.', 
                isCorrect: false,
                successChance: 0.4,
                successText: '당신은 최악의 추위는 피할 수 있었다. 하지만 <span class="highlight-yellow">어둡고 축축한 흙 동굴</span>은 비가 올 때마다 진흙이 떨어졌고, 뱀과 벌레의 위협에 시달려야 했다. 이것은 임시 대피소일 뿐, 가족이 살 수 있는 집은 아니었다.',
                failureText: '비가 내리자 재앙이 닥쳤다. 당신의 동굴집은 <span class="highlight-yellow">맥없이 무너져 내렸고</span>, 당신과 가족은 흙더미 속에서 간신히 빠져나와야 했다. 당신은 땅을 너무 얕게 파서 안정성을 확보하지 못했다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '풀뿌리가 엉킨 흙을 벽돌처럼 잘라내어, 차곡차곡 쌓아 올려 벽을 만든다.', 
                isCorrect: true,
                successText: '그야말로 최고의 아이디어였다. 두꺼운 흙벽돌은 여름의 더위와 겨울의 추위를 완벽하게 막아주는 <span class="highlight-yellow">훌륭한 단열재</span> 역할을 했다. 당신은 <span class="highlight-yellow">주변의 유일한 자원을 활용</span>하여 튼튼하고 아늑한 보금자리를 만드는 데 성공했다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_28.png',
                    text: '미국 대평원의 <span class="highlight-yellow">\'소드 하우스(Sod House)\'</span>는 척박한 환경에 대한 인간 적응의 상징입니다. 건축용 <span class="highlight-yellow">나무와 돌이 절대적으로 부족했던 대초원</span>에서, 개척자들은 유일한 자원인 <span class="highlight-yellow">풀뿌리가 얽힌 흙</span>을 벽돌로 사용했습니다. 이 흙집은 단열 효과가 뛰어나고 심지어 초원의 불에도 강해, 척박한 환경 속 생존을 가능하게 한 지혜의 산물이었습니다.'
                }
            }
        ]
    },
    {
        id: 29,
        title: '따뜻한 바닥의 비밀',
        image: 'images/situation_29.png',
        text: `당신은 조선시대의 건축가다. 한국의 겨울은 <span class="highlight-yellow">춥고 건조하며, 특히 바닥에서부터 한기가 올라온다.</span> 당신은 이 추위를 가장 효율적으로 막을 수 있는 난방 방식을 설계해야 한다. 당시의 기술로는 방 전체의 공기를 데우는 것은 매우 비효율적이다.<br><br>당신은 아궁이의 열기를 바닥 밑으로 통과시켜 <span class="highlight-yellow">방바닥 전체를 데우는 '온돌'</span> 시스템을 완성했다. 이제 이 따뜻한 바닥의 효율을 극대화할 수 있는 실내 생활 방식을 정해야 한다. 어떤 방식을 채택하는 것이 가장 합리적일까?`,
        choices: [
            { 
                text: '바닥의 온기를 등지고 서서 생활하며, 잠은 침대 위에서 잔다.', 
                isCorrect: false,
                failureText: '비효율적인 방식이다. 따뜻한 공기는 위로 올라가기 때문에, 서서 생활하는 것은 <span class="highlight-yellow">온돌의 열기를 거의 느끼지 못하는</span> 결과를 낳았다. 또한, 바닥에서 떨어진 침대는 온돌의 장점을 전혀 활용하지 못했다. 당신은 스스로 만든 발명품을 제대로 이해하지 못했다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '차가운 벽에 의자를 붙여 앉고, 잠은 해먹을 설치하여 잔다.', 
                isCorrect: false,
                failureText: '최악의 설계였다. 따뜻한 바닥의 열기는 당신이 앉은 의자까지 닿지 않았고, 공중에 매달린 해먹은 <span class="highlight-yellow">가장 차가운 공기 속에서 잠을 자는</span> 끔찍한 결과를 만들었다. 당신의 생활 방식은 온돌과 정반대로 움직였다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '바닥에 방석을 깔고 앉아 생활하고, 잠은 바닥에 이불을 깔고 잔다.', 
                isCorrect: true,
                successText: '완벽한 조화였다. 바닥에 직접 앉고 누워 생활하자, 당신은 <span class="highlight-yellow">온돌의 따뜻한 열기를 몸 전체로 직접 느낄 수 있었다.</span> 당신의 난방 시스템과 생활 방식은 최고의 효율을 보여주었고, 이는 한국인의 삶의 일부가 되었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_29.png',
                    text: '한국의 <span class="highlight-yellow">\'온돌\'</span>은 바닥을 데워 난방하는 독특한 시스템으로, 이는 자연스럽게 <span class="highlight-yellow">\'좌식 생활\'</span> 문화로 이어졌습니다. 바닥에서 올라오는 열을 가장 효율적으로 느끼기 위해 의자나 침대 대신 바닥에 직접 앉고 눕는 생활 방식이 발달한 것입니다.'
                }
            }
        ]
    },
    {
        id: 30,
        title: '왕국의 철학',
        image: 'images/situation_30.png',
        text: `당신은 히말라야의 작은 왕국, 부탄의 정책 결정자다. 이 나라의 국민들은 깊은 불교 신자이며, 국정 운영의 가장 중요한 목표는 <span class="highlight-yellow">모든 살아있는 것들에 대한 자비심</span>을 실현하고, 국민들이 <span class="highlight-yellow">물질적 탐욕에서 벗어나 내면의 평화</span>를 얻도록 돕는 것이다.<br><br>당신에게 외국 자본이 들어오는 거대한 국가 개발 프로젝트 세 가지가 제안되었다. 당신은 부탄의 이러한 종교적, 문화적 가치관에 따라 가장 올바른 결정을 내려야 한다.`,
        choices: [
            { 
                text: '최첨단 반도체 공장을 유치하여, 막대한 부와 일자리를 창출한다.', 
                isCorrect: false,
                failureText: '재앙적인 결정이었다. 공장은 부를 가져왔지만, 동시에 <span class="highlight-yellow">강을 오염시켜 수많은 생명을 해쳤다.</span> 국민들은 돈을 얻었지만 마음의 평화를 잃었다. 당신은 자비심이라는 국가의 근본 가치를 짓밟았다.<br> ❤️ -7',
                failureDamage: 7
            },
            { 
                text: '산 전체를 깎아 거대한 스키 리조트를 건설하고, 대규모 관광객을 유치한다.', 
                isCorrect: false,
                successChance: 0.2,
                successText: '리조트는 큰 성공을 거둬 많은 수익을 올렸다. 하지만 국민들은 당신이 불교적 행복보다 돈을 탐낸다고 생각하게 되었다. 당신은 수익금을 환경 보존 사업에 투자하겠다고 말하며 민심을 잠재웠지만, 국민의 불신은 여전히 남아 있다.',
                failureText: '리조트는 건설 과정에서 수천 그루의 나무를 베어냈고, <span class="highlight-yellow">소란스러운 유흥 문화</span>는 마을의 평화를 깨뜨렸다. 당신은 단기적인 이익을 위해 자연과의 조화라는 소중한 가치를 훼손했다.<br> ❤️ -5',
                failureDamage: 5
            },
            { 
                text: '자연을 훼손하지 않는 소규모 생태 관광을 육성하고, 수익은 지역 복지로 분배한다.', 
                isCorrect: true,
                successText: '가장 현명한 길이었다. 이 프로젝트는 부탄의 <span class="highlight-yellow">아름다운 자연과 평화로운 문화를 지키면서도</span>, 공동체에 지속 가능한 수입을 안겨주었다. 당신의 결정은 불교의 가르침과 완벽한 조화를 이루었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_30.png',
                    text: '부탄에서는 불교적 가치관을 국가 정책으로 체계화한 <span class="highlight-yellow">\'국민총행복(GNH)\'</span>이라는 개념을 사용합니다. GNH는 무분별한 개발보다는 <span class="highlight-yellow">환경 보호, 문화 보존, 공동체의 행복</span>과 같은 가치가 조화를 이루는 지속 가능한 발전을 추구합니다.'
                }
            }
        ]
    },
    {
        id: 31,
        title: '계곡의 연금술',
        image: 'images/situation_31.png',
        text: '당신은 오래전 노르웨이의 깊은 산골짜기에서 목장을 운영하는 농부다. 척박하고 추운 기후 탓에 <span class="highlight-yellow">식량이 항상 부족하고 모든 것을 아껴야만 한다.</span> 당신의 주된 수입원은 우유로 만든 하얀 치즈다.<br><br>하지만 일반 치즈를 만들고 나면, 영양분이 아직 많이 남아있는 <span class="highlight-yellow">뿌연 액체(유청, whey)</span>가 대량으로 남는다. 이전까지 사람들은 유청을 버렸지만, 당신은 이 남은 유청을 버리지 않고 겨울을 날 수 있는 새로운 식량으로 만들 방법을 찾으려 한다.',
        choices: [
            { 
                text: '유청을 가축에게 먹여, 고기의 질을 높이는 사료로 활용한다.', 
                isCorrect: false,
                successChance: 0.4,
                successText: '좋은 생각이었다. 유청을 먹은 가축들은 더 건강해졌다. 하지만 이것은 간접적인 해결책일 뿐, <span class="highlight-yellow">당장 겨울을 보낼 인간의 식량</span>을 만들어내지는 못했다. 당신은 문제를 한 단계 거쳐서 해결하려 했다.',
                failureText: '결과적으로 아무것도 얻지 못했다. 유청을 먹인다고 해서 가축이 두 배로 늘어나는 것은 아니었다. 결국 당신과 가족은 <span class="highlight-yellow">귀중한 영양분을 가축에게 다 줘버린 셈</span>이 되었고, 겨울 동안 배고픔에 시달려야 했다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '신선함을 유지하기 위해, 차가운 계곡물에 담가 음료수로 보존한다.', 
                isCorrect: false,
                failureText: '끔찍한 실수였다. 유청은 우유보다 훨씬 빨리 상했고, 며칠 만에 시큼하게 변해버렸다. 당신은 <span class="highlight-yellow">보존 식량을 만들어야 하는 상황</span>에서 가장 보존 기간이 짧은 선택을 하고 말았다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '커다란 솥에 넣고, 수분이 날아가 갈색이 될 때까지 오랜 시간 천천히 졸인다.', 
                isCorrect: true,
                successText: '위대한 발견이었다. 액체였던 유청은 오랜 시간 졸이자 캐러멜처럼 달콤하고 열량이 높은 <span class="highlight-yellow">갈색의 고체 덩어리</span>로 변했다. 이 새로운 음식은 보존성도 뛰어나, 당신의 가족이 겨울을 나는 데 큰 힘이 되었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_31.png',
                    text: '노르웨이의 갈색 치즈 <span class="highlight-yellow">\'브루노스트(Brunost)\'</span>는 일반 치즈를 만들고 남은 유청을 재활용한 것입니다. 이 지역에서는 농작물을 다량으로 수확하기 어려워 우유가 중요한 식자원이었습니다. 척박한 환경에서 <span class="highlight-yellow">버려지는 식재료의 영양분</span>까지 최대한 활용하려던 절약 정신이, 유청에 남은 유당을 캐러멜화시키는 독특한 조리법을 탄생시켰습니다.'
                }
            }
        ]
    },
    {
        id: 32,
        title: '붉은 땅의 사람들',
        image: 'images/situation_32.png',
        text: `당신은 아프리카 남서부, 나미비아의 건조한 사막 지대에 사는 힘바족의 일원이다. 이곳은 <span class="highlight-yellow">생명수가 되는 물이 극도로 귀하며</span>, 목욕은 상상하기 어렵다. 내리쬐는 <span class="highlight-yellow">태양은 살갗을 태울 듯이 강렬</span>하고, 건조한 공기는 피부의 수분을 계속해서 빼앗아 간다.<br><br>또한, 주변에는 성가신 벌레들이 끊임없이 달려든다. 당신은 이 모든 위협으로부터 당신의 피부를 보호하고 청결을 유지할 수 있는 가장 효과적인 방법을 찾아야 한다.`,
        choices: [
            { 
                text: '몸을 최대한 가릴 수 있는 두껍고 긴 옷을 구해 입는다.', 
                isCorrect: false,
                failureText: '잘못된 선택이었다. 긴 옷은 햇볕은 어느 정도 막아주었지만, <span class="highlight-yellow">찌는 듯한 더위</span>에 당신은 금방 지쳐버렸다. 또한, 옷만으로는 건조한 공기와 벌레들로부터 피부를 완벽하게 보호할 수 없었다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '생존에 필수적인 물을 아껴서, 하루에 한 번씩 몸을 씻는다.', 
                isCorrect: false,
                failureText: '치명적인 실수였다. 당신이 몸을 씻는 데 사용한 물은, 당신의 부족 전체가 하루 동안 마실 수 있는 양이었다. <span class="highlight-yellow">가장 귀한 자원인 물을 낭비</span>한 당신은 공동체 전체를 생존의 위협에 빠뜨렸다.<br> ❤️ -7',
                failureDamage: 7
            },
            { 
                text: '주변의 붉은 흙(오커)을 갈아, 동물의 젖으로 만든 기름과 섞어 온몸에 바른다.', 
                isCorrect: true,
                successText: '완벽한 생존의 지혜였다. 붉은 진흙은 <span class="highlight-yellow">강렬한 햇빛을 막아주는 보호막</span>이 되었고, 기름은 피부가 마르지 않도록 수분을 지켜주었으며, 특유의 향은 벌레들의 접근을 막아주었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_32.png',
                    text: '나미비아의 힘바족은 붉은 흙과 버터기름을 섞은 <span class="highlight-yellow">\'오트지제\'</span>를 온몸에 바릅니다. 이는 물이 귀한 사막 환경에서 <span class="highlight-yellow">자외선 차단, 보습, 해충 방지</span>라는 복합적인 기능을 하는 실용적인 방법이며, 동시에 그들의 문화적 정체성을 나타내는 상징이기도 합니다.'
                }
            }
        ]
    },
    {
        id: 33,
        title: '밀림의 사냥꾼',
        image: 'images/situation_33.png',
        text: `당신은 말레이시아 열대우림의 원주민 사냥꾼이다. 당신의 주된 사냥감은 <span class="highlight-yellow">높은 나뭇가지 위에서 생활하는 원숭이나 새</span>다. 하지만 밀림은 <span class="highlight-yellow">빽빽한 나뭇잎과 덩굴</span>로 가득 차 있어, 팔을 크게 휘두르거나 움직일 공간이 거의 없다.<br><br>또한, 밀림은 매우 고요해서 작은 소리도 금방 퍼져나간다. 사냥에 성공하려면 <span class="highlight-yellow">사냥감이 눈치채지 못하도록 최대한 소리를 내지 않아야</span> 한다. 나뭇잎 사이로 사냥감이 보인다. 어떤 도구를 사용하는 것이 가장 효과적일까?`,
        choices: [
            { 
                text: '강력하고 정확한 활을 이용해 원거리에서 사냥감을 쏜다.', 
                isCorrect: false,
                failureText: '좋은 무기지만, 이곳엔 적합하지 않다. 활시위를 당기려 하자, <span class="highlight-yellow">활의 양 끝이 나뭇가지와 덩굴에 걸려</span> 제대로 조준할 수 없었다. 당신이 쩔쩔매는 사이 사냥감은 이미 사라지고 없었다.<br> ❤️ -5',
                failureDamage: 5
            },
            { 
                text: '소리를 내지 않고 나무 위로 올라가, 가까운 거리에서 창으로 사냥한다.', 
                isCorrect: false,
                successChance: 0.1,
                successText: '기적적으로, 당신은 사냥감이 눈치채기 전에 나무 위로 올라가는 데 성공했다. 당신의 놀라운 은신 능력 덕분에 겨우 사냥에 성공했지만, 이것은 다시는 반복하기 힘든 행운이었다.',
                failureText: '당신이 나무를 오르기 시작하자마자, <span class="highlight-yellow">나뭇잎이 바스락거리는 소리</span>에 놀란 사냥감이 순식간에 다른 나무로 달아나 버렸다. 인간이 원숭이보다 나무를 잘 탈 수는 없었다.<br> ❤️ -3',
                failureDamage: 3
            },
            { 
                text: '길고 속이 빈 대롱에 독침을 넣고, 입으로 불어 소리 없이 쏜다.', 
                isCorrect: true,
                successText: '이 환경을 위한 완벽한 도구였다. 당신은 좁은 틈 사이로 대롱을 조준하고, <span class="highlight-yellow">아주 작은 숨소리</span>와 함께 독침을 발사했다. 사냥감은 아무것도 눈치채지 못했고, 당신은 조용히 사냥에 성공했다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_33.png',
                    text: '열대우림의 <span class="highlight-yellow">\'블로우파이프(Blowpipe)\'</span>는 빽빽한 밀림 환경에 맞게 진화한 사냥 도구입니다. <span class="highlight-yellow">덩굴과 나뭇잎이 무성하여</span> 활처럼 넓은 공간이 필요한 무기를 쓰기 힘든 곳에서, 블로우파이프는 <span class="highlight-yellow">최소한의 움직임과 소음</span>으로 사냥할 수 있는 최적의 해결책이었습니다.'
                }
            }
        ]
    },
    {
        id: 34,
        title: '숨겨진 힘',
        image: 'images/situation_34.png',
        text: `당신은 18세기 브라질의 사탕수수 농장에서 일하는 아프리카 노예다. 농장주들은 노예들의 반란을 두려워하여 <span class="highlight-yellow">어떤 형태의 무술 훈련도 철저히 금지</span>하고 있다. 발각될 경우 가혹한 처벌이 뒤따른다.<br><br>하지만, 고된 노동을 달래기 위한 <span class="highlight-yellow">음악과 춤은 오히려 장려</span>하는 분위기다. 당신은 이 억압적인 상황 속에서, 언젠가 자유를 되찾기 위해 동료들과 함께 비밀리에 자신을 단련할 방법을 찾아야만 한다.`,
        choices: [
            { 
                text: '농장주의 눈을 피해, 밤에 몰래 모여 전통 무술을 수련한다.', 
                isCorrect: false,
                failureText: '결국 당신들의 비밀 훈련은 감독관에게 발각되었다. 저항을 준비했다는 죄목으로 당신과 동료들은 끔찍한 처벌을 받았고, 감시는 이전보다 훨씬 심해졌다. <span class="highlight-yellow">정면으로 부딪히는 것은 최악의 선택</span>이었다.<br> ❤️ -7',
                failureDamage: 7
            },
            { 
                text: '춤의 형태를 빌려, 음악에 맞춰 싸움 기술을 연습하고 수련한다.', 
                isCorrect: true,
                successText: '천재적인 위장이었다. 당신들의 움직임은 <span class="highlight-yellow">음악과 어우러져 마치 격렬한 춤처럼</span> 보였고, 농장주들은 아무것도 의심하지 않았다. 당신들은 모두의 눈앞에서 자유를 위한 힘을 기를 수 있었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_34.png',
                    text: '브라질의 전통 무술 <span class="highlight-yellow">\'카포에라(Capoeira)\'</span>는 춤과 음악, 곡예가 결합된 독특한 형태를 띱니다. 이는 과거 아프리카 노예들이 <span class="highlight-yellow">농장주들의 감시를 피해 싸움 기술을 연마</span>하기 위해 춤으로 위장했던 역사에서 비롯되었습니다. 카포에라는 억압 속에서 피어난 저항과 자유의 정신을 상징합니다.'
                }
            },
            { 
                text: '농장주의 신뢰를 얻기 위해, 모든 훈련을 포기하고 농사일에만 전념한다.', 
                isCorrect: false,
                successChance: 0.1,
                successText: '당신의 성실함 덕분에 운 좋게도 조금 더 편한 일을 맡게 되었다. 하지만 당신은 <span class="highlight-yellow">자유를 향한 의지와 스스로를 지킬 힘</span>을 모두 잃어버렸다. 당신은 순응하는 법을 배웠을 뿐, 아무것도 바꾸지 못했다.',
                failureText: '당신이 모든 것을 포기했음에도, 농장주의 착취는 끝나지 않았다. 오히려 당신을 더 만만하게 보고 노동의 강도는 심해졌다. <span class="highlight-yellow">스스로를 지킬 힘이 없는 자에게 자유는 주어지지 않는다</span>는 것을 너무 늦게 깨달았다.<br> ❤️ -5',
                failureDamage: 5
            }
        ]
    },
    {
        id: 35,
        title: '강의 어부',
        image: 'images/situation_35.png',
        text: `당신은 중국 남부의 강에서 고기를 잡는 어부다. 이 강은 <span class="highlight-yellow">물이 깊고 흙탕물이라</span> 사람의 눈으로는 물고기가 어디에 있는지 파악하기가 매우 어렵다. 낚싯대를 드리워도, 그물을 던져도 허탕치기 일쑤다.<br><br>그러던 어느 날, 당신은 강가의 새들이 <span class="highlight-yellow">놀라운 솜씨로 물속에 뛰어들어 정확히 물고기를 낚아채는 모습</span>을 목격한다. 당신은 인간의 한계를 넘어설, 혁신적인 어업 방식을 고안해야 한다. 어떤 방법을 시도하겠는가?`,
        choices: [
            { 
                text: '강 전체를 가로지르는 거대한 그물을 만들어, 바닥까지 훑어 물고기를 잡는다.', 
                isCorrect: false,
                successChance: 0.2,
                successText: '엄청난 노동 끝에, 운 좋게도 몇 마리의 물고기를 잡는 데는 성공했다. 하지만 이 거대한 그물을 만들고 끌기 위해 <span class="highlight-yellow">마을 사람 전체가 며칠을 매달려야 했다.</span> 이것은 결코 효율적인 방법이 아니었다.',
                failureText: '완전히 실패했다. 강은 너무 넓고 깊어 그물은 계속 바닥의 바위나 나무에 걸려 찢어졌다. 당신은 <span class="highlight-yellow">귀한 그물만 잃고 물고기는 한 마리도 잡지 못했다.</span> 이 강에는 다른 방법이 필요하다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '강물에 독성이 있는 풀을 풀어, 기절해서 떠오르는 물고기를 건져낸다.', 
                isCorrect: false,
                failureText: '가장 끔찍한 결과를 낳았다. 강물에 퍼진 독은 물고기뿐만 아니라 <span class="highlight-yellow">강의 모든 생태계를 파괴</span>했고, 독에 중독된 물고기는 팔 수도 없었다. 당신은 단기적인 욕심 때문에 강 전체를 망쳐버렸다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '물고기 잡는 새를 길들여, 그 새들이 나를 위해 물고기를 잡도록 훈련시킨다.', 
                isCorrect: true,
                successText: '그야말로 혁명적인 발상이었다. 훈련된 새들은 당신의 눈이 닿지 않는 <span class="highlight-yellow">물속 깊은 곳까지 헤엄쳐</span> 정확하게 물고기를 사냥해왔다. 당신은 인간과 동물의 협력을 통해 자연의 한계를 극복했다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_35.png',
                    text: '이 놀라운 어업 방식은 <span class="highlight-yellow">\'가마우지(Cormorant)\'</span>라는 새를 이용한 전통 낚시입니다. 시야 확보가 어려운 강에서, 인간은 <span class="highlight-yellow">가마우지의 뛰어난 사냥 능력</span>을 빌리는 대신, 목에 끈을 묶어 잡은 물고기를 공유하는 독창적인 공생 관계를 만들어냈습니다.'
                }
            }
        ]
    },
];
