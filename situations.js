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
                successChance: 0.5,
                successText: '당신의 명령에 따라 오랜 시간을 들여 나무집을 지어놓았다. 그러나 몇 주 안에 가축에게 줄 풀이 다 떨어져 <span class="highlight-yellow">다른 곳으로 이동하게 되었다</span>. 다행히 피해를 보지는 않았지만 얻은 것도 없다.',
                failureText: '당신의 명령에 따라 오랜 시간을 들여 나무집을 지어놓았다. 그러나 몇 주 안에 가축에게 줄 풀이 다 떨어져 <span class="highlight-yellow">다른 곳으로 이동하게 되었다</span>. 이동한 곳에서 집을 새로 지어야 했고, 시간이 너무 소요되어 부족에 위기가 닥쳤다.<br> ❤️ -4',
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
                successText: '당신의 명령에 따라 쉽게 철거하고 다시 지을 수 있는 텐트형 집을 지었다. 몇 주 뒤 수많은 양떼가 풀을 다 뜯어먹었고, 당신의 부족은 <span class="highlight-yellow">하루만에 모든 집과 집기를 가진 채 그대로 다른 곳으로 이주할 준비</span>를 마칠 수 있었다.<br>✨ +{xpGained}',
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
        text: `당신은 아프리카 북서부, 사하라 사막 가장자리에 있는 마을의 건축가다. 이곳의 자연은 극단적이다. 낮에는 모든 것을 증발시킬 듯한 <span class="highlight-yellow">강렬한 태양</span>이 내리쬐지만, 밤에는 기온이 급격히 떨어져 <span class="highlight-yellow">매서운 추위</span>가 찾아온다.<br><br>주변을 둘러보면 건축에 쓸 만한 <span class="highlight-yellow">나무나 암석은 거의 보이지 않고</span>, 오직 붉은 흙과 모래만이 끝없이 펼쳐져 있다. 당신은 이 척박한 환경에서 사람들을 보호할 가장 이상적인 집을 설계해야 한다. 어떤 선택을 하겠는가?`,
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
                failureText: '끔찍한 결과를 낳았다. 낮 동안은 그럭저럭 버틸 수 있었지만, 해가 지자마자 재앙이 닥쳤다. 얇은 천은 <span class="highlight-yellow">밤의 혹독한 추위</span>를 전혀 막아주지 못했고, 사람들은 밤새 추위에 떨어야 했다. 당신의 설계는 이 땅의 <span class="highlight-yellow">거대한 일교차</span>를 전혀 고려하지 않았다.<br> ❤️ -6',
                failureDamage: 6
            },
            { 
                text: '주변의 흙을 이용해 두꺼운 벽을 쌓고, 창문은 작게 만들어 집을 짓는다.', 
                isCorrect: true,
                successXp: 5,
                successText: '완벽한 통찰력이다! 두꺼운 흙벽은 낮 동안의 <span class="highlight-yellow">뜨거운 열기를 서서히 흡수하여 실내를 시원하게</span> 유지해주었고, 밤에는 <span class="highlight-yellow">흡수했던 열을 서서히 방출하여 실내를 따뜻하게</span> 만들어주었다. 작은 창문은 열의 출입을 최소화했다. 당신은 이 땅의 지혜를 완벽하게 구현해냈다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_2.png',
                    text: '모로코의 전통 가옥 <span class="highlight-yellow">\'카스바(Kasbah)\'</span>는 이처럼 극한의 자연환경에 적응한 건축의 정수입니다. 주변에서 가장 구하기 쉬운 흙을 주재료로, <span class="highlight-yellow">열용량이 큰 두꺼운 흙벽</span>을 만들어 외부의 급격한 온도 변화로부터 실내를 보호합니다. 이는 에어컨 없이도 집을 시원하고 따뜻하게 유지하는 <span class="highlight-yellow">천연 단열재이자 냉난방 시스템</span>의 역할을 합니다.'
                }
            }
        ]
    },
    {
        id: 3,
        title: '영혼과의 만찬',
        image: 'images/situation_3.png',
        text: `고대 멕시코의 아즈텍 문명에서는 <span class="highlight-yellow">죽음을 삶의 끝이 아닌, 또 다른 단계로 나아가는 과정</span>이라고 생각했다. 이러한 사상은 가톨릭 문화와 결합하여, <span class="highlight-yellow">일 년에 한 번 세상을 떠난 영혼들이 사랑하는 가족을 만나러 이승으로 돌아온다</span>는 믿음으로 발전했다.<br><br>당신은 바로 그 시기에 멕시코 친구의 집에 방문했다. 친구의 가족들은 고인이 된 할머니의 사진 앞에 그녀가 좋아하던 음식과 꽃을 두고, 즐겁게 이야기를 나누고 있습니다. 이 믿음을 바탕으로 추론할 때, 당신이 해야 할 가장 적절한 행동은 무엇일까?`,
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
                successText: '훌륭한 선택이다! 당신이 할머니에 대한 즐거운 추억을 이야기하자 친구와 가족들이 기뻐한다. "맞아! 바로 그거야. <span class="highlight-yellow">우리가 즐겁게 기억해주는 것이 바로 영혼을 위한 최고의 대접</span>이거든." 당신은 멕시코의 문화를 깊이 이해했다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_3.png',
                    text: '이것이 바로 멕시코의 <span class="highlight-yellow">\'죽은 자들의 날(Día de los Muertos)\'</span>입니다. 죽음을 삶의 일부로 여기고, 떠난 이와의 재회를 축제로 여기는 이들의 인문환경은 슬픔과 두려움이 아닌, <span class="highlight-yellow">기억과 사랑을 통한 유대</span>를 강조하는 독특한 의식주 문화를 만들어냈습니다. 제단인 \'오프렌다\'에 올리는 음식과 장식 모두 이러한 사상의 결과물입니다.'
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
        text: `당신은 튀르키예의 이스탄불을 여행하던 중, 유서 깊은 이슬람 사원 '블루 모스크'에 방문하게 되었다. 사원의 입구에는 '방문객 안내문'이 세워져 있다. 안내문에는 '<span class="highlight-yellow">이곳은 신성한 장소입니다. 신께서는 겸손하고 정숙한 마음을 가진 이를 사랑하십니다</span>' 라고 적혀 있다.<br><br>또한, '<span class="highlight-yellow">여성은 머리카락과 신체의 많은 부분을 가려야 합니다</span>'라는 구체적인 복장 규정이 강조되어 있다. 사원 관리인은 규정을 따르지 않은 여성 방문객에게 입구에서 빌려주는 스카프를 가리키고 있다. 이 상황에서, 당신이 사원에 들어가기 위해 해야 할 가장 올바른 행동은 무엇일까?`,
        choices: [
            { 
                text: '개인의 자유를 존중해야 하므로, 복장 규정을 무시하고 그대로 들어간다.', 
                isCorrect: false,
                failureText: '당신이 안으로 들어가려 하자, 사원 관리인이 당신을 정중하지만 단호하게 막아섰다. "죄송하지만, 이곳의 규칙을 따라 주셔야 합니다. <span class="highlight-yellow">이곳의 문화를 존중하지 않는다면 들어오실 수 없습니다</span>." 당신은 결국 사원에 들어가지 못했다.<br> ❤️ -5',
                failureDamage: 5
            },
            { 
                text: '남녀평등의 원칙에 따라, 남성에게도 똑같이 머리를 가리라고 항의한다.', 
                isCorrect: false,
                failureText: '당신의 항의에 관리인은 차분히 설명했다. "이 규정은 차별이 아니라, 저희의 <span class="highlight-yellow">경전(쿠란)에 명시된 여성의 정숙함에 대한 가르침</span>을 따르는 것입니다." 당신의 주장은 문화적 맥락을 이해하지 못한 무례한 행동으로 비춰졌다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '안내문의 가르침을 존중하여, 입구에서 스카프를 빌려 머리와 어깨를 가린다.', 
                isCorrect: true,
                successXp: 5,
                successText: '올바른 선택이다. 당신이 스카프로 머리를 가리고 입장하자, 관리인은 부드러운 미소로 당신을 환영했다. <span class="highlight-yellow">다른 문화의 신성한 장소를 방문할 때는 그들의 방식을 존중</span>하는 것이 가장 중요한 예절임을 당신은 이해했다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_4.png',
                    text: '이슬람 문화권 여성의 <span class="highlight-yellow">\'히잡(Hijab)\'</span>은 단순히 머리를 가리는 천이 아니라, 경전의 가르침에 따라 <span class="highlight-yellow">겸손함과 정숙함을 표현하는 종교적 신념의 상징</span>입니다. 특히 성스러운 공간인 사원에 들어갈 때 히잡을 착용하는 것은 신에 대한 깊은 존경심을 나타내는 중요한 행위로 여겨집니다. 이는 종교라는 인문환경이 의복 문화에 직접적인 영향을 미친 대표적인 사례입니다.'
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
                    text: '유대인 남성이 머리에 쓰는 이 작은 모자는 <span class="highlight-yellow">\'키파(Kippah)\'</span>라고 불립니다. 이는 자연환경이 아닌, 종교라는 인문환경의 영향을 받은 대표적인 사례입니다. 키파는 <span class="highlight-yellow">항상 내 위에 신이 존재한다는 것을 잊지 않고, 겸손함을 유지하기 위한 신앙의 표현</span>으로, 신자들에게는 삶의 일부와도 같은 중요한 의복입니다.'
                }
            }
        ]
    },
    {
        id: 6,
        title: '혹한의 생존법',
        image: 'images/situation_6.png',
        text: `당신은 겨울에 러시아의 광활한 평원, 시베리아에 도착했다. 기온은 영하 20도 아래로 떨어졌고, 숨을 쉴 때마다 날카로운 공기가 폐를 찌르는 듯하다. <span class="highlight-yellow">뼈를 에는 듯한 칼바람</span>이 아무런 장애물 없이 평원을 가로질러 불어온다.<br><br>잠시만 밖에 서 있어도 <span class="highlight-yellow">귀와 턱, 뺨의 감각이 사라지는 것</span>을 느끼며, 피부를 보호할 무언가가 절실히 필요하다는 것을 깨달았다. 이 생존이 걸린 환경에서, 당신의 머리를 보호하기 위한 가장 합리적인 선택은 무엇일까?`,
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
                successText: '최고의 선택이다. 두꺼운 가죽과 털이 머리의 열을 완벽하게 보존해주었고, 무엇보다 <span class="highlight-yellow">귀와 턱, 뺨까지 모두 감싸주는 덮개</span>가 살을 에는 칼바람으로부터 당신을 완벽하게 보호했다. 당신은 혹한 속에서 살아남는 지혜를 터득했다.<br>✨ +{xpGained}',
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
        text: `당신은 베트남의 메콩강 삼각주에서 일하는 농부다. 이곳의 기후는 변화무쌍하다. 오전 내내 <span class="highlight-yellow">피부를 태울 듯한 뜨거운 햇볕</span>이 내리쬐어 공기가 후텁지근하다가도, 오후가 되면 갑자기 하늘이 어두워지며 <span class="highlight-yellow">장대 같은 폭우(스콜)</span>가 쏟아진다.<br><br>이처럼 강한 햇빛과 갑작스러운 비가 반복되는 변덕스러운 날씨 속에서 농사일을 계속하기 위해, 당신에게는 두 가지 상황 모두에 효과적으로 대처할 수 있는 모자가 필요하다. 가장 실용적인 선택은 무엇일까?`,
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
                    text: '베트남의 전통 모자 <span class="highlight-yellow">\'논라(Nón Lá)\'</span>는 아열대 몬순 기후라는 자연환경에 완벽하게 적응한 생활용품입니다. 주변에서 쉽게 구할 수 있는 야자수 잎 등으로 만들어 가볍고, <span class="highlight-yellow">강한 햇빛과 갑작스러운 비를 동시에 막을 수 있도록</span> 설계되었습니다. 이는 베트남 사람들의 생활의 지혜가 담긴 상징적인 물건입니다.'
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
                text: '가공하기 쉬운 얇은 나무판자를 이어 붙여 최대한 넓은 집을 짓는다.', 
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
                    text: '캐나다의 <span class="highlight-yellow">\'통나무집(Log Cabin)\'</span>은 춥고 눈이 많은 기후와 울창한 숲이라는 자연환경이 결합하여 탄생한 주거 형태입니다. 주변에서 쉽게 구할 수 있는 나무를 이용하되, <span class="highlight-yellow">두꺼운 통나무 자체를 단열재로 활용</span>하여 혹한을 견딥니다. 또한 지붕을 경사지게 만들어 <span class="highlight-yellow">폭설의 무게를 견디도록</span> 설계한 것은 생존을 위한 필연적인 선택이었습니다.'
                }
            }
        ]
    },
    {
        id: 9,
        title: '강과 함께 사는 법',
        image: 'images/situation_9.png',
        text: `당신은 방글라데시의 강가 마을에 사는 주민이다. 이 지역은 거대한 강들이 만나는 <span class="highlight-yellow">세계 최대의 삼각주</span>로, 땅이 매우 낮고 평평하다. 매년 우기가 되면 <span class="highlight-yellow">몬순 기후</span>의 영향으로 엄청난 비가 쏟아져 강물이 불어나고, 마을 전체가 <span class="highlight-yellow">몇 달 동안 물에 잠기는 일</span>이 반복된다.<br><br>곧 우기가 시작될 것이다. 당신은 이 피할 수 없는 홍수 속에서 가족과 재산을 지킬 수 있는 집을 지어야 한다. 이 환경에 가장 적합한 집은 어떤 모습일까?`,
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
                    text: '방글라데시에서는 매년 반복되는 홍수에 적응하기 위해 다양한 형태의 집을 짓습니다. 땅에 높은 기둥을 세워 짓는 <span class="highlight-yellow">\'고상 가옥\'</span>이나, 물 위에 집을 띄우는 <span class="highlight-yellow">\'수상 가옥\'</span> 모두가 그 대표적인 예입니다. 이는 자연재해를 극복하고 환경에 순응하며 살아가려는 사람들의 독창적인 지혜를 보여줍니다.'
                }
            },
            { 
                text: '물에 뜰 수 있는 뗏목 같은 기반을 만들고, 그 위에 가벼운 집을 짓는다.', 
                isCorrect: true,
                successXp: 5,
                successText: '현명한 해결책이다. 강물이 불어나자, 당신의 집은 <span class="highlight-yellow">수위에 맞춰 자연스럽게 함께 떠올랐다.</span> 덕분에 당신의 가족과 재산은 모두 안전했으며, 물이 잠긴 동안에도 배를 이용해 자유롭게 이동하며 생활할 수 있었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_9.png',
                    text: '방글라데시에서는 매년 반복되는 홍수에 적응하기 위해 다양한 형태의 집을 짓습니다. 땅에 높은 기둥을 세워 짓는 <span class="highlight-yellow">\'고상 가옥\'</span>이나, 물 위에 집을 띄우는 <span class="highlight-yellow">\'수상 가옥\'</span> 모두가 그 대표적인 예입니다. 이는 자연재해를 극복하고 환경에 순응하며 살아가려는 사람들의 독창적인 지혜를 보여줍니다.'
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
                text: '누구나 즐길 수 있는 신선한 열대 과일이나 견과류로 만든 디저트를 선물한다.', 
                isCorrect: true,
                successXp: 5,
                successText: '매우 사려 깊은 선택이다. 당신이 가져온 과일과 디저트를 보고 가족 모두가 기뻐했다. 당신의 선물 덕분에 식사는 더욱 풍성해졌고, 당신은 <span class="highlight-yellow">문화적 배경을 존중하는 예의 바른 손님</span>으로 환영받았다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_10.png',
                    text: '이슬람 율법은 무슬림의 생활 모든 부분에 영향을 미치며, 특히 식문화에서 뚜렷하게 나타납니다. 율법에서 허용하는 <span class="highlight-yellow">\'할랄\'</span> 음식만 먹을 수 있으며, 돼지고기처럼 부정하거나 술처럼 <span class="highlight-yellow">정신에 영향을 주는 \'하람\'</span>은 절대 먹지 않습니다. 이는 종교라는 인문환경이 특정 지역의 주된 식문화를 결정한 가장 대표적인 사례입니다.'
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
                failureText: '매우 근시안적인 판단이었다. 농사를 지을 수 있는 소는 식량보다 훨씬 중요한 자산이었다. <span class="highlight-yellow">귀한 가축을 잡아먹은 탓</span>에, 당신의 공동체는 다음 해 농사에 심각한 차질을 겪게 되었다. 눈앞의 축제 때문에 미래를 망친 셈이다.<br> ❤️ -6',
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
                    text: '미국의 <span class="highlight-yellow">\'추수감사절(Thanksgiving Day)\'</span>과 칠면조 요리는 바로 이 역사적 사실에서 유래했습니다. 당시 이주민들에게 칠면조는 <span class="highlight-yellow">북미 대륙에서 쉽게 구할 수 있는 크고 풍부한 식량 자원</span>이었습니다. 생존을 위한 현실적인 선택이 시간이 흘러 하나의 문화적 상징으로 자리 잡은 것입니다. 이는 역사적, 환경적 요인이 식문화에 미친 영향을 보여주는 좋은 사례입니다.'
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
                    text: '튀르키예의 대표 요리 <span class="highlight-yellow">\'케밥(Kebab)\'</span>은 바로 이러한 유목민의 생활 환경에서 탄생했습니다. 땔감이 부족한 초원에서 고기를 가장 빨리 익히기 위해 <span class="highlight-yellow">작게 잘라 꼬치에 꿰어 굽는 방식</span>이 발전한 것입니다. 현대에는 거대한 꼬치구이로 변형해서 판매하기도 합니다.'
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
                failureText: '잘못된 선택이다. 기름은 귀할 뿐더러 바삭한 튀김은 맛있는 간식은 될 수 있었지만, 힘든 노동에 필요한 에너지를 채워주는 <span class="highlight-yellow">든든한 주식으로는 부족했다.</span> 식사를 마친 사람들은 금방 허기를 느꼈고, 오후 내내 기운 없이 일해야 했다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '재료를 곱게 갈아 가루로 만든 뒤, 화덕에서 부풀려 빵으로 굽는다.', 
                isCorrect: false,
                failureText: '결과가 좋지 않았다. 카사바 가루는 밀가루와 달리 글루텐이 없어 빵처럼 부풀어 오르지 않고 딱딱하게 굳어버렸다. 또한, <span class="highlight-yellow">더운 날씨에 집 전체를 뜨겁게 만드는 화덕</span>은 비효율적인 조리 방식이었다. 당신은 재료의 특성과 환경을 모두 놓쳤다.<br> ❤️ -5',
                failureDamage: 5
            },
            { 
                text: '재료를 푹 삶은 뒤, 커다란 절구에 넣고 찧어 쫀득하고 찰진 반죽으로 만든다.', 
                isCorrect: true,
                successXp: 5,
                successText: '정확한 방법이다. 쫀득하게 뭉쳐진 반죽은 매우 든든했고, 소화가 천천히 되어 오랫동안 포만감과 에너지를 유지해주었다. 덕분에 마을 사람들은 <span class="highlight-yellow">오후 내내 지치지 않고 일할 힘</span>을 얻을 수 있었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_14.png',
                    text: '이 음식이 바로 가나를 비롯한 서아프리카의 대표 주식 <span class="highlight-yellow">\'푸푸(Fufu)\'</span>입니다. 푸푸는 고된 노동에 필요한 <span class="highlight-yellow">에너지를 가장 효율적으로 공급</span>하기 위해 탄생했습니다. 열대 기후에서 잘 자라는 카사바 같은 <span class="highlight-yellow">칼로리 높은 뿌리채소</span>를 주재료로, 최대한 든든하게 먹을 수 있도록 찧어서 뭉치는 조리법을 발전시킨 것입니다.'
                }
            }
        ]
    },
    {
        id: 15,
        title: '지지 않는 태양의 도시',
        image: 'images/situation_15.png',
        text: `당신은 6월 말, 러시아의 상트페테르부르크에 도착했다. 이 도시는 <span class="highlight-yellow">북극에 가까운 고위도</span>에 위치해 있어 여름이 되면 아주 특별한 현상이 나타난다. 자정이 넘은 깊은 밤이지만, <span class="highlight-yellow">마치 해질녘처럼 하늘이 계속 밝은 상태</span>가 유지된다.<br><br>이러한 '백야(白夜)' 현상은 몇 주간 계속될 것이라고 한다. 당신은 창밖을 내다보았다. 늦은 시간임에도 불구하고, 거리에는 수많은 인파가 몰려나와 활기가 넘친다. 이 독특한 자연 현상 속에서, 현지인들과 어울리기 위한 가장 적절한 행동 방식은 무엇일까?`,
        choices: [
            { 
                text: '생체 리듬을 위해, 두꺼운 암막 커튼을 치고 평소처럼 잠자리에 든다.', 
                isCorrect: false,
                successChance: 0.6,
                successText: '당신은 숙면을 취해 다음 날 상쾌하게 일어날 수 있었다. 하지만 창밖에서 들려오던 희미한 음악과 환호 소리를 들으며, <span class="highlight-yellow">평생 한번뿐일지도 모르는 특별한 경험</span>을 놓쳤을지도 모른다는 아쉬움이 남았다.',
                failureText: '당신은 잠을 자기 위해 노력했지만, 밖에서 계속되는 축제의 소음 때문에 결국 한숨도 자지 못했다. <span class="highlight-yellow">이 도시의 밤은 잠들지 않는다</span>는 사실을 간과한 탓에, 당신은 휴식과 경험을 모두 놓치고 말았다.<br> ❤️ -3',
                failureDamage: 3
            },
            { 
                text: '밤에도 밝은 것은 사람들에게 스트레스일 것이므로, 숙소에서 조용히 머무른다.', 
                isCorrect: false,
                failureText: '잘못된 판단이었다. 당신이 숙소에서 조용히 숨죽이고 있는 동안, 밖에서는 화려한 불꽃놀이와 함께 대규모 오페라 공연이 펼쳐지고 있었다. <span class="highlight-yellow">사람들은 이 현상을 불편함이 아닌, 축복으로 여기고 있었다.</span> 당신은 도시의 활기를 전혀 이해하지 못했다.<br> ❤️ -4',
                failureDamage: 4
            },
            { 
                text: '이 밤을 낮의 연장선으로 생각하고, 밖으로 나가 현지인들과 함께 축제를 즐긴다.', 
                isCorrect: true,
                successXp: 5,
                successText: '가장 좋은 선택이었다. 당신은 거리로 나가 강변에서 펼쳐지는 클래식 음악회와 예술 공연을 즐겼다. <span class="highlight-yellow">자연 현상을 불편함으로 여기지 않고 오히려 즐기는 축제로 승화시킨</span> 이들의 문화를 직접 체험할 수 있었다.<br>✨ +{xpGained}',
                info: {
                    image: 'images/info_15.png',
                    text: '이것이 바로 러시아 상트페테르부르크의 <span class="highlight-yellow">\'백야 축제(White Nights Festival)\'</span>입니다. 북극권에 가까운 지리적 특성 때문에 여름철이면 해가 지지 않는 <span class="highlight-yellow">\'백야\'</span> 현상이 나타납니다. 러시아인들은 이 독특한 자연환경을 예술과 문화가 결합된 세계적인 축제로 발전시켰습니다.'
                }
            }
        ]
    },
];
