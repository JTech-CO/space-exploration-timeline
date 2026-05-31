// The timeline content. Each entry: a year and a short description in three
// languages. Dates and "firsts" were checked against multiple sources; where the
// original list was imprecise (e.g. the V-2 reaching space), it has been corrected.
//
// The continuous ruler of years 1903–2026 is generated in code; only years that
// carry an event are listed here. Pre-1903 entries (the "ground" — humanity's
// early reach toward space) are listed individually.

export const TICK_START = 1903
export const TICK_END = 2026

export const entries = [
  // ── Before the rocket age: looking up, and the first rockets ──────────────
  {
    year: 1232,
    body: {
      en: "Chinese forces unleash gunpowder 'fire arrows' — among the earliest documented rockets.",
      ko: '중국 군대가 화약 무기인 화전(火箭)을 사용하다 — 기록에 남은 가장 오래된 로켓의 하나.',
      ja: '中国軍が火薬式の「火箭(かせん)」を用いる — 記録に残る最古級のロケット。',
    },
  },
  {
    year: 1543,
    body: {
      en: 'Copernicus publishes his heliocentric model, placing the Sun — not Earth — at the centre.',
      ko: '코페르니쿠스가 지동설(태양 중심설)을 발표하다 — 중심은 지구가 아니라 태양.',
      ja: 'コペルニクスが地動説(太陽中心説)を発表 — 中心は地球ではなく太陽。',
    },
  },
  {
    year: 1609,
    body: {
      en: 'Kepler derives the first laws of planetary motion, describing how worlds orbit the Sun.',
      ko: '케플러가 행성 운동 법칙을 처음으로 정립하다 — 행성이 태양을 도는 방식을 밝히다.',
      ja: 'ケプラーが惑星運動の法則を初めて導く — 惑星が太陽を回る仕組みを解明。',
    },
  },
  {
    year: 1610,
    body: {
      en: "Galileo turns a telescope to the sky, discovering Jupiter's moons and the craters of our Moon.",
      ko: '갈릴레오가 망원경으로 하늘을 관측하다 — 목성의 위성과 달의 분화구를 발견.',
      ja: 'ガリレオが望遠鏡で天体を観測 — 木星の衛星や月のクレーターを発見。',
    },
  },
  {
    year: 1687,
    body: {
      en: "Newton's Principia sets out universal gravitation — the physics that governs every orbit.",
      ko: '뉴턴이 『프린키피아』에서 만유인력을 제시하다 — 모든 궤도를 지배하는 물리 법칙.',
      ja: 'ニュートンが『プリンキピア』で万有引力を提示 — あらゆる軌道を支配する物理法則。',
    },
  },
  {
    year: 1865,
    body: {
      en: "Jules Verne's novel 'From the Earth to the Moon' imagines a crewed voyage to the Moon.",
      ko: '쥘 베른의 소설 『지구에서 달까지』가 유인 달 여행을 상상하다.',
      ja: 'ジュール・ヴェルヌの小説『地球から月へ』が有人月旅行を描く。',
    },
  },

  // ── The pioneers ─────────────────────────────────────────────────────────
  {
    year: 1903,
    body: {
      en: 'Konstantin Tsiolkovsky publishes the rocket equation, founding the theory of spaceflight.',
      ko: '콘스탄틴 치올콥스키가 로켓 방정식을 발표하다 — 우주비행 이론의 토대를 놓다.',
      ja: 'コンスタンチン・ツィオルコフスキーがロケット方程式を発表 — 宇宙飛行理論の礎を築く。',
    },
  },
  {
    year: 1909,
    body: {
      en: 'Robert Goddard writes his first paper on using liquid propellants to fuel rockets.',
      ko: '로버트 고더드가 로켓 연료로서 액체 추진제에 관한 첫 논문을 쓰다.',
      ja: 'ロバート・ゴダードが、ロケット燃料としての液体推進剤に関する最初の論文を著す。',
    },
  },
  {
    year: 1914,
    body: {
      en: 'Goddard patents designs for a liquid-fuelled rocket and a multi-stage rocket.',
      ko: '고더드가 액체연료 로켓과 다단 로켓 설계로 특허를 받다.',
      ja: 'ゴダードが液体燃料ロケットと多段式ロケットの設計で特許を取得。',
    },
  },
  {
    year: 1919,
    body: {
      en: "Goddard publishes 'A Method of Reaching Extreme Altitudes.'",
      ko: '고더드가 『극고도에 도달하는 방법』을 발표하다.',
      ja: 'ゴダードが『極高度に到達する方法』を発表。',
    },
  },
  {
    year: 1921,
    body: {
      en: 'Goddard begins experiments with liquid-oxygen and gasoline rocket engines.',
      ko: '고더드가 액체산소·가솔린 로켓 엔진 실험을 시작하다.',
      ja: 'ゴダードが液体酸素とガソリンを用いるロケットエンジンの実験を開始。',
    },
  },
  {
    year: 1923,
    body: {
      en: 'Goddard tests the first successful liquid-propellant rocket engine.',
      ko: '고더드가 최초로 액체 추진 로켓 엔진 시험에 성공하다.',
      ja: 'ゴダードが初の液体推進ロケットエンジンの試験に成功。',
    },
  },
  {
    year: 1926,
    body: {
      en: "Goddard launches the world's first liquid-fuelled rocket (16 March, in Auburn, Massachusetts).",
      ko: '고더드가 세계 최초의 액체연료 로켓을 발사하다 (3월 16일, 매사추세츠주 오번).',
      ja: 'ゴダードが世界初の液体燃料ロケットを打ち上げ(3月16日、マサチューセッツ州オーバーン)。',
    },
  },
  {
    year: 1927,
    body: {
      en: 'The VfR (Society for Space Travel) is founded in Germany; a teenage Wernher von Braun later joins.',
      ko: '독일에서 우주여행협회(VfR)가 설립되다; 십 대의 베르너 폰 브라운이 훗날 합류한다.',
      ja: 'ドイツで宇宙旅行協会(VfR)が設立される; 10代のヴェルナー・フォン・ブラウンが後に参加する。',
    },
  },
  {
    year: 1929,
    body: {
      en: 'Goddard launches a rocket carrying the first scientific payload — a barometer and a camera.',
      ko: '고더드가 최초의 과학 탑재체(기압계와 카메라)를 실은 로켓을 발사하다.',
      ja: 'ゴダードが初の科学観測機器(気圧計とカメラ)を搭載したロケットを打ち上げ。',
    },
  },
  {
    year: 1931,
    body: {
      en: 'Sergei Korolev helps found GIRD, the Group for the Study of Reactive Motion, in Moscow.',
      ko: '세르게이 코롤료프가 모스크바에서 반작용추진연구단(GIRD) 설립에 참여하다.',
      ja: 'セルゲイ・コロリョフがモスクワで反作用推進研究グループ(GIRD)の設立に関わる。',
    },
  },
  {
    year: 1932,
    body: {
      en: "Von Braun becomes technical director of the German army's rocket programme.",
      ko: '폰 브라운이 독일 육군 로켓 개발 계획의 기술 책임자가 되다.',
      ja: 'フォン・ブラウンがドイツ陸軍ロケット開発計画の技術責任者となる。',
    },
  },
  {
    year: 1933,
    body: {
      en: "Korolev's team launches the USSR's first liquid-fuelled rocket, GIRD-09.",
      ko: '코롤료프 팀이 소련 최초의 액체연료 로켓 GIRD-09를 발사하다.',
      ja: 'コロリョフのチームがソ連初の液体燃料ロケット GIRD-09 を打ち上げ。',
    },
  },
  {
    year: 1934,
    body: {
      en: "Von Braun's A-2 rockets reach an altitude of about 2.4 km.",
      ko: '폰 브라운의 A-2 로켓이 약 2.4 km 고도에 도달하다.',
      ja: 'フォン・ブラウンの A-2 ロケットが約2.4 kmの高度に到達。',
    },
  },
  {
    year: 1936,
    body: {
      en: "Korolev develops the RP-318, the USSR's first rocket-powered aircraft.",
      ko: '코롤료프가 소련 최초의 로켓추진 항공기 RP-318을 개발하다.',
      ja: 'コロリョフがソ連初のロケット推進機 RP-318 を開発。',
    },
  },
  {
    year: 1939,
    body: {
      en: "Von Braun's A-5 test rocket reaches an altitude of about 8 km.",
      ko: '폰 브라운의 A-5 시험 로켓이 약 8 km 고도에 도달하다.',
      ja: 'フォン・ブラウンの A-5 試験ロケットが約8 kmの高度に到達。',
    },
  },
  {
    year: 1942,
    body: {
      en: 'On 3 October the A-4 (V-2) makes its first successful flight, reaching about 85 km — the first human-made object to touch the edge of space.',
      ko: '10월 3일, A-4(V-2)가 첫 비행에 성공하여 약 85 km에 도달하다 — 우주의 가장자리에 닿은 최초의 인공물.',
      ja: '10月3日、A-4(V-2)が初の飛行に成功し約85 kmに到達 — 宇宙の縁に達した最初の人工物。',
    },
  },
  {
    year: 1943,
    body: {
      en: 'V-2 mass production begins; the Jet Propulsion Laboratory (JPL) is established in the USA.',
      ko: 'V-2 대량생산이 시작되다; 미국에서 제트추진연구소(JPL)가 설립되다.',
      ja: 'V-2の量産が始まる; 米国でジェット推進研究所(JPL)が設立される。',
    },
  },
  {
    year: 1944,
    body: {
      en: 'On 20 June a V-2 test flight (MW 18014) becomes the first human-made object to cross the Kármán line (100 km), reaching ~176 km; that autumn, V-2s strike Paris, London and Antwerp — the first ballistic-missile attacks in history.',
      ko: '6월 20일, V-2 시험 비행(MW 18014)이 카르만 선(100 km)을 넘은 최초의 인공물이 되어 약 176 km에 도달하다; 그해 가을 V-2가 파리·런던·안트베르펜을 공격 — 역사상 첫 탄도미사일 공격.',
      ja: '6月20日、V-2の試験飛行(MW 18014)がカーマン・ライン(100 km)を越えた最初の人工物となり約176 kmに到達; その秋、V-2がパリ・ロンドン・アントワープを攻撃 — 史上初の弾道ミサイル攻撃。',
    },
  },
  {
    year: 1945,
    body: {
      en: 'As the war ends, the USA recruits von Braun and his team (Operation Paperclip).',
      ko: '종전과 함께 미국이 폰 브라운과 그의 팀을 영입하다 (페이퍼클립 작전).',
      ja: '終戦に伴い、米国がフォン・ブラウンらのチームを獲得(ペーパークリップ作戦)。',
    },
  },
  {
    year: 1946,
    body: {
      en: 'The USA and USSR independently begin reverse-engineering the captured V-2.',
      ko: '미국과 소련이 각각 노획한 V-2를 역설계하기 시작하다.',
      ja: '米国とソ連がそれぞれ、鹵獲した V-2 のリバースエンジニアリングを開始。',
    },
  },
  {
    year: 1947,
    body: {
      en: 'Fruit flies launched aboard a US V-2 become the first animals in space.',
      ko: '미국 V-2에 실려 발사된 초파리가 우주에 간 최초의 동물이 되다.',
      ja: '米国の V-2 に搭載されたショウジョウバエが、宇宙に到達した最初の動物となる。',
    },
  },
  {
    year: 1948,
    body: {
      en: "Korolev's R-1, a Soviet copy of the V-2, is successfully launched.",
      ko: 'V-2를 복제한 코롤료프의 R-1 로켓이 발사에 성공하다.',
      ja: 'V-2 を複製したコロリョフの R-1 ロケットが打ち上げに成功。',
    },
  },
  {
    year: 1949,
    body: {
      en: 'Albert II, a rhesus monkey, becomes the first mammal in space aboard a US V-2.',
      ko: '붉은털원숭이 앨버트 2세가 미국 V-2에 실려 우주에 간 최초의 포유류가 되다.',
      ja: 'アカゲザルのアルバート2世が、米国の V-2 で宇宙に到達した最初の哺乳類となる。',
    },
  },
  {
    year: 1953,
    body: {
      en: "Korolev begins design of the R-7 — soon to become the world's first ICBM.",
      ko: '코롤료프가 R-7 설계를 시작하다 — 머지않아 세계 최초의 ICBM이 된다.',
      ja: 'コロリョフが R-7 の設計を開始 — まもなく世界初の ICBM となる。',
    },
  },
  {
    year: 1954,
    body: {
      en: 'Korolev formally proposes an artificial-satellite programme to the Soviet leadership.',
      ko: '코롤료프가 소련 지도부에 인공위성 계획을 공식 제안하다.',
      ja: 'コロリョフがソ連指導部に人工衛星計画を正式に提案。',
    },
  },
  {
    year: 1955,
    body: {
      en: 'The USA announces Project Vanguard, its plan to launch a scientific satellite.',
      ko: '미국이 과학 위성 발사 계획인 뱅가드 계획을 발표하다.',
      ja: '米国が科学衛星打ち上げ計画「ヴァンガード計画」を発表。',
    },
  },
  {
    year: 1956,
    body: {
      en: "Von Braun's Redstone rocket is successfully tested; R-7 development nears completion.",
      ko: '폰 브라운의 레드스톤 로켓 시험에 성공하다; R-7 개발이 완성 단계에 이르다.',
      ja: 'フォン・ブラウンのレッドストーン・ロケットの試験に成功; R-7 の開発が完成に近づく。',
    },
  },

  // ── The Space Age ────────────────────────────────────────────────────────
  {
    year: 1957,
    body: {
      en: "Korolev's R-7 becomes the world's first ICBM; Sputnik 1 (4 Oct) is the first artificial satellite in orbit; Sputnik 2 (3 Nov) carries Laika, the first living creature to orbit Earth.",
      ko: '코롤료프의 R-7이 세계 최초의 ICBM이 되다; 스푸트니크 1호(10월 4일)가 최초의 인공위성으로 궤도에 오르다; 스푸트니크 2호(11월 3일)가 지구를 돈 최초의 생명체 라이카를 태우다.',
      ja: 'コロリョフの R-7 が世界初の ICBM となる; スプートニク1号(10月4日)が初の人工衛星として軌道に乗る; スプートニク2号(11月3日)が地球を周回した最初の生き物ライカを乗せる。',
    },
  },
  {
    year: 1958,
    body: {
      en: 'The USA launches Explorer 1 (31 Jan), which discovers the Van Allen radiation belts; NASA is founded; the first US Moon-probe attempt (Pioneer 0) fails.',
      ko: '미국이 익스플로러 1호(1월 31일)를 발사하여 밴앨런대를 발견하다; NASA가 창설되다; 미국 최초의 달 탐사선 시도(파이오니어 0호)는 실패하다.',
      ja: '米国がエクスプローラー1号(1月31日)を打ち上げ、ヴァン・アレン帯を発見; NASA が創設される; 米国初の月探査機(パイオニア0号)は失敗。',
    },
  },
  {
    year: 1959,
    body: {
      en: "Luna 1 is the first spacecraft to escape Earth's gravity; Luna 2 is the first human-made object to reach the Moon; Luna 3 returns the first photos of the Moon's far side.",
      ko: '루나 1호가 지구 중력을 벗어난 최초의 우주선이 되다; 루나 2호가 달에 도달한 최초의 인공물; 루나 3호가 달 뒷면을 처음으로 촬영하다.',
      ja: 'ルナ1号が地球の重力を脱した最初の宇宙機となる; ルナ2号が月に到達した最初の人工物; ルナ3号が月の裏側を初めて撮影。',
    },
  },
  {
    year: 1960,
    body: {
      en: 'TIROS-1, the first weather satellite, and Echo 1, the first communications satellite, are launched by the USA; Soviet dogs Belka and Strelka orbit Earth and return alive.',
      ko: '미국이 최초의 기상위성 타이로스 1호와 최초의 통신위성 에코 1호를 발사하다; 소련의 개 벨카와 스트렐카가 지구를 돈 뒤 무사히 귀환하다.',
      ja: '米国が初の気象衛星タイロス1号と初の通信衛星エコー1号を打ち上げ; ソ連の犬ベルカとストレルカが地球を周回し無事帰還。',
    },
  },
  {
    year: 1961,
    body: {
      en: 'Yuri Gagarin becomes the first human in space and to orbit Earth (12 April); Alan Shepard becomes the first American in space (5 May).',
      ko: '유리 가가린이 인류 최초로 우주에 나가 지구 궤도를 돌다(4월 12일); 앨런 셰퍼드가 미국인 최초로 우주에 가다(5월 5일).',
      ja: 'ユーリイ・ガガーリンが人類初の宇宙飛行・地球周回を達成(4月12日); アラン・シェパードが米国人初の宇宙飛行(5月5日)。',
    },
  },
  {
    year: 1962,
    body: {
      en: 'Mariner 2 is the first spacecraft to fly by another planet (Venus); Telstar 1 is the first active communications satellite.',
      ko: '매리너 2호가 다른 행성(금성)을 근접 통과한 최초의 우주선이 되다; 텔스타 1호가 최초의 능동형 통신위성이 되다.',
      ja: 'マリナー2号が他の惑星(金星)を接近通過した最初の宇宙機となる; テルスター1号が初の能動型通信衛星となる。',
    },
  },
  {
    year: 1963,
    body: {
      en: 'Valentina Tereshkova becomes the first woman in space.',
      ko: '발렌티나 테레시코바가 우주에 간 최초의 여성이 되다.',
      ja: 'ワレンチナ・テレシコワが宇宙に行った最初の女性となる。',
    },
  },
  {
    year: 1964,
    body: {
      en: "Ranger 7 returns the first close-up photographs of the Moon's surface.",
      ko: '레인저 7호가 달 표면을 처음으로 근접 촬영하다.',
      ja: 'レインジャー7号が月面を初めて接近撮影。',
    },
  },
  {
    year: 1965,
    body: {
      en: 'Alexei Leonov makes the first spacewalk; Mariner 4 returns the first close-up images of Mars.',
      ko: '알렉세이 레오노프가 최초의 우주유영을 하다; 매리너 4호가 화성을 처음으로 근접 촬영하다.',
      ja: 'アレクセイ・レオーノフが初の船外活動(宇宙遊泳)を行う; マリナー4号が火星を初めて接近撮影。',
    },
  },
  {
    year: 1966,
    body: {
      en: 'Luna 9 makes the first soft landing on the Moon; Gemini 8 performs the first orbital docking; Surveyor 1 is the first US soft landing on the Moon.',
      ko: '루나 9호가 달에 처음으로 연착륙하다; 제미니 8호가 최초의 궤도 도킹에 성공하다; 서베이어 1호가 미국 최초로 달에 연착륙하다.',
      ja: 'ルナ9号が月への初の軟着陸に成功; ジェミニ8号が初の軌道ドッキングを達成; サーベイヤー1号が米国初の月軟着陸。',
    },
  },
  {
    year: 1967,
    body: {
      en: "The Apollo 1 fire kills three astronauts; Venera 4 is the first probe to enter another planet's atmosphere (Venus).",
      ko: '아폴로 1호 화재로 우주비행사 3명이 사망하다; 베네라 4호가 다른 행성(금성)의 대기에 진입한 최초의 탐사선이 되다.',
      ja: 'アポロ1号の火災で宇宙飛行士3名が死亡; ベネラ4号が他の惑星(金星)の大気に突入した最初の探査機となる。',
    },
  },
  {
    year: 1968,
    body: {
      en: "Apollo 8 is the first crewed mission to orbit the Moon, returning the famous 'Earthrise' photograph.",
      ko: "아폴로 8호가 달 궤도를 돈 최초의 유인 임무가 되어 그 유명한 '지구돋이' 사진을 보내오다.",
      ja: 'アポロ8号が月を周回した初の有人ミッションとなり、有名な「地球の出」の写真を持ち帰る。',
    },
  },
  {
    year: 1969,
    body: {
      en: 'Apollo 11 lands the first humans on the Moon (20 July); Apollo 12 follows with the second landing.',
      ko: '아폴로 11호가 인류를 최초로 달에 착륙시키다(7월 20일); 아폴로 12호가 두 번째 착륙을 이어가다.',
      ja: 'アポロ11号が人類を初めて月に着陸させる(7月20日); アポロ12号が2度目の着陸を続ける。',
    },
  },
  {
    year: 1970,
    body: {
      en: "Apollo 13's Moon landing is aborted after an explosion, but the crew returns safely; Luna 16 makes the first robotic Moon-sample return; Lunokhod 1 is the first lunar rover.",
      ko: '아폴로 13호가 폭발로 달 착륙을 포기하지만 승무원은 무사히 귀환하다; 루나 16호가 최초로 무인 달 시료를 회수하다; 루노호트 1호가 최초의 달 탐사차가 되다.',
      ja: 'アポロ13号は爆発で月着陸を断念するも乗員は無事帰還; ルナ16号が初の無人月サンプル回収を達成; ルノホート1号が初の月面ローバーとなる。',
    },
  },
  {
    year: 1971,
    body: {
      en: 'Salyut 1 is the first space station; Mariner 9 is the first spacecraft to orbit another planet (Mars); Apollo 14 and 15 land on the Moon.',
      ko: '살류트 1호가 최초의 우주정거장이 되다; 매리너 9호가 다른 행성(화성) 궤도를 돈 최초의 우주선이 되다; 아폴로 14호와 15호가 달에 착륙하다.',
      ja: 'サリュート1号が初の宇宙ステーションとなる; マリナー9号が他の惑星(火星)を周回した最初の宇宙機となる; アポロ14号と15号が月に着陸。',
    },
  },
  {
    year: 1972,
    body: {
      en: 'Apollo 16 and 17 make the final crewed Moon landings — the last humans on the Moon to date; Pioneer 10 launches toward Jupiter.',
      ko: '아폴로 16호와 17호가 마지막 유인 달 착륙을 수행하다 — 지금까지 달에 간 마지막 인류; 파이오니어 10호가 목성을 향해 발사되다.',
      ja: 'アポロ16号と17号が最後の有人月着陸を実施 — 現在までで月に立った最後の人類; パイオニア10号が木星へ向けて打ち上げられる。',
    },
  },
  {
    year: 1973,
    body: {
      en: 'Pioneer 10 makes the first flyby of Jupiter; Skylab, the first US space station, is launched.',
      ko: '파이오니어 10호가 목성을 최초로 근접 통과하다; 미국 최초의 우주정거장 스카이랩이 발사되다.',
      ja: 'パイオニア10号が木星を初めて接近通過; 米国初の宇宙ステーション「スカイラブ」が打ち上げられる。',
    },
  },
  {
    year: 1974,
    body: {
      en: 'Mariner 10 performs the first gravity-assist manoeuvre and the first flyby of Mercury.',
      ko: '매리너 10호가 최초의 중력 보조(스윙바이) 기동과 최초의 수성 근접 통과를 수행하다.',
      ja: 'マリナー10号が初の重力アシスト(スイングバイ)と初の水星接近通過を実施。',
    },
  },
  {
    year: 1975,
    body: {
      en: 'Apollo–Soyuz is the first joint US–Soviet crewed flight; Venera 9 returns the first photographs from the surface of Venus.',
      ko: '아폴로-소유즈가 최초의 미·소 공동 유인 비행이 되다; 베네라 9호가 금성 표면을 처음으로 촬영해 보내오다.',
      ja: 'アポロ・ソユーズが初の米ソ共同有人飛行となる; ベネラ9号が金星表面を初めて撮影して送る。',
    },
  },
  {
    year: 1976,
    body: {
      en: 'Viking 1 and 2 become the first successful Mars landers, returning the first images from the Martian surface.',
      ko: '바이킹 1호와 2호가 최초로 화성 착륙에 성공하여 화성 표면의 첫 사진을 보내오다.',
      ja: 'バイキング1号と2号が初の火星着陸に成功し、火星表面からの最初の画像を送る。',
    },
  },
  {
    year: 1977,
    body: {
      en: "Voyager 1 and 2 launch on a grand tour of the outer Solar System, each carrying a 'Golden Record.'",
      ko: "보이저 1호와 2호가 외태양계 대탐사에 나서다 — 각각 '골든 레코드'를 싣고.",
      ja: 'ボイジャー1号と2号が外太陽系の大旅行へ出発 — それぞれ「ゴールデンレコード」を搭載して。',
    },
  },
  {
    year: 1979,
    body: {
      en: 'Voyager 1 flies by Jupiter; Pioneer 11 makes the first flyby of Saturn.',
      ko: '보이저 1호가 목성을 근접 통과하다; 파이오니어 11호가 토성을 최초로 근접 통과하다.',
      ja: 'ボイジャー1号が木星を接近通過; パイオニア11号が土星を初めて接近通過。',
    },
  },
  {
    year: 1980,
    body: {
      en: 'Voyager 1 flies by Saturn, sending back detailed views of its rings.',
      ko: '보이저 1호가 토성을 근접 통과하며 고리의 상세한 모습을 보내오다.',
      ja: 'ボイジャー1号が土星を接近通過し、環の詳細な姿を送る。',
    },
  },
  {
    year: 1981,
    body: {
      en: 'Space Shuttle Columbia makes the first flight of a reusable orbital spacecraft.',
      ko: '우주왕복선 컬럼비아가 재사용 가능한 궤도 우주선의 첫 비행을 하다.',
      ja: 'スペースシャトル「コロンビア」が再使用可能な軌道宇宙船の初飛行を行う。',
    },
  },
  {
    year: 1983,
    body: {
      en: "Pioneer 10 becomes the first spacecraft to travel beyond Neptune's orbit; the Space Shuttle Challenger makes its maiden flight.",
      ko: '파이오니어 10호가 해왕성 궤도 밖으로 나간 최초의 우주선이 되다; 우주왕복선 챌린저가 첫 비행을 하다.',
      ja: 'パイオニア10号が海王星の軌道の外へ出た最初の宇宙機となる; スペースシャトル「チャレンジャー」が初飛行。',
    },
  },
  {
    year: 1984,
    body: {
      en: 'Bruce McCandless makes the first untethered spacewalk, flying free with a jet backpack.',
      ko: '브루스 매캔들리스가 제트 배낭을 메고 줄 없이 비행하는 최초의 무선 우주유영을 하다.',
      ja: 'ブルース・マッカンドレスが、ジェット噴射式の装置を背負い命綱なしの初の船外活動を行う。',
    },
  },
  {
    year: 1986,
    body: {
      en: 'Voyager 2 makes the first flyby of Uranus; the Challenger disaster kills seven astronauts; the first module of the Mir space station is launched.',
      ko: '보이저 2호가 천왕성을 최초로 근접 통과하다; 챌린저 참사로 우주비행사 7명이 사망하다; 우주정거장 미르의 첫 모듈이 발사되다.',
      ja: 'ボイジャー2号が天王星を初めて接近通過; チャレンジャー号の事故で宇宙飛行士7名が死亡; 宇宙ステーション「ミール」の最初のモジュールが打ち上げられる。',
    },
  },
  {
    year: 1989,
    body: {
      en: 'Voyager 2 makes the first — and so far only — flyby of Neptune.',
      ko: '보이저 2호가 처음이자 지금까지 유일한 해왕성 근접 통과를 하다.',
      ja: 'ボイジャー2号が初の、そして現在まで唯一の海王星接近通過を行う。',
    },
  },
  {
    year: 1990,
    body: {
      en: "The Hubble Space Telescope is launched; Voyager 1 takes the 'Pale Blue Dot' photograph of Earth from 6 billion km away.",
      ko: "허블 우주망원경이 발사되다; 보이저 1호가 60억 km 거리에서 지구를 담은 '창백한 푸른 점' 사진을 찍다.",
      ja: 'ハッブル宇宙望遠鏡が打ち上げられる; ボイジャー1号が60億km彼方から地球を写した「ペイル・ブルー・ドット」を撮影。',
    },
  },
  {
    year: 1991,
    body: {
      en: 'The Galileo probe makes the first close flyby of an asteroid (951 Gaspra).',
      ko: '갈릴레오 탐사선이 소행성(951 가스프라)을 최초로 근접 통과하다.',
      ja: 'ガリレオ探査機が小惑星(951 ガスプラ)を初めて接近通過。',
    },
  },
  {
    year: 1992,
    body: {
      en: 'Astronomers confirm the first exoplanets, orbiting the pulsar PSR B1257+12.',
      ko: '천문학자들이 펄서 PSR B1257+12를 도는 최초의 외계행성을 확인하다.',
      ja: '天文学者がパルサー PSR B1257+12 を回る最初の系外惑星を確認。',
    },
  },
  {
    year: 1993,
    body: {
      en: "Astronauts repair Hubble's flawed optics on the first servicing mission, restoring its vision.",
      ko: '우주비행사들이 첫 정비 임무에서 허블의 결함 있는 광학계를 수리해 시야를 되찾아 주다.',
      ja: '宇宙飛行士が初の補修ミッションでハッブルの欠陥のある光学系を修理し、視力を取り戻させる。',
    },
  },
  {
    year: 1994,
    body: {
      en: 'Comet Shoemaker–Levy 9 collides with Jupiter — the first directly observed collision between two Solar System bodies.',
      ko: '슈메이커-레비 9 혜성이 목성과 충돌하다 — 태양계 천체 간 충돌을 직접 관측한 최초의 사례.',
      ja: 'シューメーカー・レヴィ第9彗星が木星に衝突 — 太陽系の天体同士の衝突を直接観測した初の事例。',
    },
  },
  {
    year: 1995,
    body: {
      en: 'Cosmonaut Valeri Polyakov completes a record 437-day spaceflight; Galileo arrives at Jupiter; 51 Pegasi b is found — the first exoplanet around a Sun-like star.',
      ko: '우주비행사 발레리 폴랴코프가 437일 우주 체류 기록을 세우다; 갈릴레오가 목성에 도착하다; 51 페가시 b가 발견되다 — 태양 같은 항성을 도는 최초의 외계행성.',
      ja: '宇宙飛行士ワレリー・ポリャコフが437日間の宇宙滞在記録を達成; ガリレオが木星に到着; 51ペガスス座b が発見される — 太陽に似た恒星を回る初の系外惑星。',
    },
  },
  {
    year: 1996,
    body: {
      en: 'Mars Global Surveyor and the NEAR mission launch toward Mars and a near-Earth asteroid.',
      ko: '마스 글로벌 서베이어와 NEAR 탐사선이 각각 화성과 지구접근 소행성을 향해 발사되다.',
      ja: 'マーズ・グローバル・サーベイヤーと NEAR 探査機が、それぞれ火星と地球近傍小惑星へ向けて打ち上げられる。',
    },
  },
  {
    year: 1997,
    body: {
      en: 'Mars Pathfinder delivers Sojourner, the first operational rover to explore Mars.',
      ko: '마스 패스파인더가 화성을 탐사한 최초의 실용 로버 소저너를 내려놓다.',
      ja: 'マーズ・パスファインダーが、火星を探査した初の実用ローバー「ソジャーナ」を送り届ける。',
    },
  },
  {
    year: 1998,
    body: {
      en: 'The first module of the International Space Station (Zarya) is launched, beginning ISS construction.',
      ko: '국제우주정거장(ISS)의 첫 모듈 자랴가 발사되어 ISS 건설이 시작되다.',
      ja: '国際宇宙ステーション(ISS)の最初のモジュール「ザーリャ」が打ち上げられ、ISS の建設が始まる。',
    },
  },
  {
    year: 1999,
    body: {
      en: 'The Chandra X-ray Observatory is launched to study the high-energy universe.',
      ko: '찬드라 X선 관측위성이 고에너지 우주를 연구하기 위해 발사되다.',
      ja: 'チャンドラX線観測衛星が、高エネルギーの宇宙を研究するために打ち上げられる。',
    },
  },
  {
    year: 2000,
    body: {
      en: 'The ISS is permanently crewed for the first time, beginning an unbroken human presence in orbit.',
      ko: 'ISS에 처음으로 상주 승무원이 들어가 궤도에서 인류의 끊임없는 거주가 시작되다.',
      ja: 'ISS に初めて常駐クルーが入り、軌道上での途切れない有人滞在が始まる。',
    },
  },
  {
    year: 2001,
    body: {
      en: 'Dennis Tito becomes the first paying space tourist, visiting the ISS; Mars Odyssey launches.',
      ko: '데니스 티토가 돈을 내고 우주를 여행한 최초의 관광객이 되어 ISS를 방문하다; 마스 오디세이가 발사되다.',
      ja: 'デニス・チトーが料金を支払った初の宇宙旅行者として ISS を訪れる; マーズ・オデッセイが打ち上げられる。',
    },
  },
  {
    year: 2003,
    body: {
      en: 'The Space Shuttle Columbia disaster kills seven astronauts; China becomes the third nation to launch a human into orbit independently (Yang Liwei).',
      ko: '우주왕복선 컬럼비아 참사로 우주비행사 7명이 사망하다; 중국이 독자적으로 인간을 궤도에 올린 세 번째 국가가 되다(양리웨이).',
      ja: 'スペースシャトル「コロンビア」の事故で宇宙飛行士7名が死亡; 中国が独自に人間を軌道へ送った3番目の国となる(楊利偉)。',
    },
  },
  {
    year: 2004,
    body: {
      en: 'The rovers Spirit and Opportunity land on Mars; Cassini arrives at Saturn; SpaceShipOne makes the first crewed private spaceflight.',
      ko: '탐사 로버 스피릿과 오퍼튜니티가 화성에 착륙하다; 카시니가 토성에 도착하다; 스페이스십원이 최초의 민간 유인 우주비행을 하다.',
      ja: '探査ローバーのスピリットとオポチュニティが火星に着陸; カッシーニが土星に到着; スペースシップワンが初の民間有人宇宙飛行を達成。',
    },
  },
  {
    year: 2005,
    body: {
      en: "The Huygens probe lands on Saturn's moon Titan — the first landing in the outer Solar System.",
      ko: '하위헌스 탐사선이 토성의 위성 타이탄에 착륙하다 — 외태양계에서의 최초 착륙.',
      ja: 'ホイヘンス・プローブが土星の衛星タイタンに着陸 — 外太陽系における初の着陸。',
    },
  },
  {
    year: 2006,
    body: {
      en: 'New Horizons launches toward Pluto; that same year, Pluto is reclassified as a dwarf planet.',
      ko: '뉴호라이즌스가 명왕성을 향해 발사되다; 같은 해 명왕성이 왜소행성으로 재분류되다.',
      ja: 'ニューホライズンズが冥王星へ向けて打ち上げられる; 同年、冥王星が準惑星に再分類される。',
    },
  },
  {
    year: 2008,
    body: {
      en: "Phoenix confirms water ice just beneath the surface of Mars; SpaceX's Falcon 1 becomes the first privately developed liquid-fuelled rocket to reach orbit.",
      ko: '피닉스 착륙선이 화성 표면 바로 아래의 물 얼음을 확인하다; 스페이스X의 팰컨 1이 궤도에 도달한 최초의 민간 개발 액체연료 로켓이 되다.',
      ja: 'フェニックスが火星の地表直下の水の氷を確認; スペースXのファルコン1が、軌道に到達した初の民間開発の液体燃料ロケットとなる。',
    },
  },
  {
    year: 2009,
    body: {
      en: "The Kepler Space Telescope launches to hunt for exoplanets; astronauts complete Hubble's final servicing mission.",
      ko: '케플러 우주망원경이 외계행성을 찾기 위해 발사되다; 우주비행사들이 허블의 마지막 정비 임무를 완수하다.',
      ja: 'ケプラー宇宙望遠鏡が系外惑星を探すために打ち上げられる; 宇宙飛行士がハッブルの最後の補修ミッションを完了。',
    },
  },
  {
    year: 2010,
    body: {
      en: "Japan's Hayabusa returns the first samples from an asteroid (Itokawa); SpaceX's Dragon becomes the first commercial spacecraft recovered from orbit.",
      ko: '일본의 하야부사가 소행성(이토카와)에서 최초로 시료를 채취해 귀환하다; 스페이스X의 드래건이 궤도에서 회수된 최초의 민간 우주선이 되다.',
      ja: '日本の「はやぶさ」が小惑星(イトカワ)から初めて試料を持ち帰る; スペースXのドラゴンが軌道から回収された初の商業宇宙船となる。',
    },
  },
  {
    year: 2011,
    body: {
      en: 'The Space Shuttle programme ends after 30 years; MESSENGER becomes the first spacecraft to orbit Mercury; Juno launches toward Jupiter.',
      ko: '30년에 걸친 우주왕복선 계획이 종료되다; 메신저가 수성 궤도를 돈 최초의 우주선이 되다; 주노가 목성을 향해 발사되다.',
      ja: '30年に及んだスペースシャトル計画が終了; メッセンジャーが水星を周回した最初の宇宙機となる; ジュノーが木星へ向けて打ち上げられる。',
    },
  },
  {
    year: 2012,
    body: {
      en: "Curiosity lands on Mars; Voyager 1 enters interstellar space — the first human-made object to leave the Sun's bubble.",
      ko: '큐리오시티가 화성에 착륙하다; 보이저 1호가 성간 우주에 진입하다 — 태양의 영향권을 벗어난 최초의 인공물.',
      ja: 'キュリオシティが火星に着陸; ボイジャー1号が星間空間に突入 — 太陽の影響圏を離れた最初の人工物。',
    },
  },
  {
    year: 2013,
    body: {
      en: "China's Chang'e 3 and its Yutu rover make the first soft landing on the Moon since 1976.",
      ko: '중국의 창어 3호와 위투 로버가 1976년 이후 처음으로 달에 연착륙하다.',
      ja: '中国の嫦娥3号と探査車「玉兎」が、1976年以来初となる月への軟着陸を達成。',
    },
  },
  {
    year: 2014,
    body: {
      en: 'Rosetta becomes the first spacecraft to orbit a comet; its Philae lander makes the first landing on a comet.',
      ko: '로제타가 혜성 궤도를 돈 최초의 우주선이 되다; 그 착륙선 필레가 최초로 혜성에 착륙하다.',
      ja: 'ロゼッタが彗星を周回した最初の宇宙機となる; その着陸機フィラエが初の彗星着陸を達成。',
    },
  },
  {
    year: 2015,
    body: {
      en: 'New Horizons makes the first flyby of Pluto; SpaceX lands a Falcon 9 booster for the first time — the first orbital-class rocket to return and land.',
      ko: '뉴호라이즌스가 명왕성을 최초로 근접 통과하다; 스페이스X가 팰컨 9 부스터를 처음으로 착륙시키다 — 궤도급 로켓이 돌아와 착륙한 최초의 사례.',
      ja: 'ニューホライズンズが冥王星を初めて接近通過; スペースXがファルコン9のブースターを初めて着陸させる — 軌道級ロケットが帰還・着陸した初の事例。',
    },
  },
  {
    year: 2016,
    body: {
      en: 'Juno arrives at Jupiter, beginning a close study of the giant planet.',
      ko: '주노가 목성에 도착하여 거대 행성에 대한 근접 연구를 시작하다.',
      ja: 'ジュノーが木星に到着し、巨大惑星の接近観測を開始。',
    },
  },
  {
    year: 2017,
    body: {
      en: "The Cassini mission ends with a planned plunge into Saturn; 1I/'Oumuamua is detected — the first known interstellar object to pass through our Solar System.",
      ko: '카시니 임무가 계획된 토성 진입으로 종료되다; 1I/오우무아무아가 발견되다 — 태양계를 지나간 것으로 확인된 최초의 성간 천체.',
      ja: 'カッシーニのミッションが計画的な土星突入で終了; 1I/オウムアムアが発見される — 太陽系を通過した、知られている初の恒星間天体。',
    },
  },
  {
    year: 2018,
    body: {
      en: "The Parker Solar Probe launches to 'touch' the Sun's corona; Falcon Heavy, the most powerful operational rocket, makes its first flight.",
      ko: "파커 태양탐사선이 태양의 코로나에 '닿기' 위해 발사되다; 가장 강력한 현역 로켓 팰컨 헤비가 첫 비행을 하다.",
      ja: 'パーカー・ソーラー・プローブが太陽のコロナに「触れる」ために打ち上げられる; 現役で最も強力なロケット「ファルコン・ヘビー」が初飛行。',
    },
  },
  {
    year: 2019,
    body: {
      en: "The Event Horizon Telescope captures the first image of a black hole; China's Chang'e 4 makes the first landing on the Moon's far side.",
      ko: '사건의 지평선 망원경(EHT)이 블랙홀을 최초로 촬영하다; 중국의 창어 4호가 달 뒷면에 최초로 착륙하다.',
      ja: 'イベント・ホライズン・テレスコープがブラックホールを初めて撮影; 中国の嫦娥4号が月の裏側への初の着陸を達成。',
    },
  },
  {
    year: 2020,
    body: {
      en: "SpaceX's Crew Dragon carries astronauts to the ISS — the first crewed orbital spaceflight by a private company.",
      ko: '스페이스X의 크루 드래건이 우주비행사를 ISS로 보내다 — 민간 기업 최초의 유인 궤도 우주비행.',
      ja: 'スペースXのクルードラゴンが宇宙飛行士を ISS へ運ぶ — 民間企業による初の有人軌道飛行。',
    },
  },
  {
    year: 2021,
    body: {
      en: 'Perseverance lands on Mars and the Ingenuity helicopter makes the first powered flight on another world; the James Webb Space Telescope launches; Inspiration4 flies the first all-civilian crew to orbit; Blue Origin and Virgin Galactic begin suborbital tourism.',
      ko: '퍼서비어런스가 화성에 착륙하고 인저뉴어티 헬리콥터가 다른 천체에서 최초의 동력 비행을 하다; 제임스 웹 우주망원경이 발사되다; 인스피레이션4가 민간인만으로 구성된 최초의 궤도 비행을 하다; 블루 오리진과 버진 갤럭틱이 준궤도 관광을 시작하다.',
      ja: 'パーサヴィアランスが火星に着陸し、ヘリコプター「インジェニュイティ」が他天体での初の動力飛行を達成; ジェームズ・ウェッブ宇宙望遠鏡が打ち上げられる; インスピレーション4が民間人だけによる初の軌道飛行を実施; ブルーオリジンとヴァージン・ギャラクティックが弾道宇宙旅行を開始。',
    },
  },
  {
    year: 2022,
    body: {
      en: "The first full-colour James Webb images are released; NASA's DART becomes the first mission to deliberately change an asteroid's orbit; Artemis I sends an uncrewed Orion around the Moon.",
      ko: '제임스 웹의 첫 풀컬러 이미지가 공개되다; NASA의 DART가 소행성의 궤도를 의도적으로 바꾼 최초의 임무가 되다; 아르테미스 1호가 무인 오리온 우주선을 달 주위로 보내다.',
      ja: 'ジェームズ・ウェッブの初のフルカラー画像が公開される; NASA の DART が小惑星の軌道を意図的に変えた初のミッションとなる; アルテミス1号が無人のオリオン宇宙船を月の周りへ送る。',
    },
  },
  {
    year: 2023,
    body: {
      en: "India's Chandrayaan-3 makes the first landing near the Moon's south pole, and India becomes the fourth nation to soft-land on the Moon.",
      ko: '인도의 찬드라얀 3호가 달 남극 부근에 최초로 착륙하여, 인도가 달에 연착륙한 네 번째 국가가 되다.',
      ja: 'インドのチャンドラヤーン3号が月の南極付近への初の着陸を達成し、インドが月に軟着陸した4番目の国となる。',
    },
  },
  {
    year: 2024,
    body: {
      en: "China's Chang'e 6 returns the first samples ever collected from the Moon's far side; Intuitive Machines' Odysseus makes the first US Moon landing since 1972 — and the first ever by a private spacecraft; SpaceX catches a returning Super Heavy booster with its launch tower for the first time.",
      ko: '중국의 창어 6호가 달 뒷면에서 채취한 최초의 시료를 가지고 귀환하다; 인튜이티브 머신스의 오디세우스가 1972년 이후 미국 최초이자 민간 우주선 최초로 달에 착륙하다; 스페이스X가 돌아오는 슈퍼헤비 부스터를 발사탑으로 처음 붙잡다.',
      ja: '中国の嫦娥6号が月の裏側から採取した史上初の試料を持ち帰る; インテュイティブ・マシーンズのオデュッセウスが1972年以来の米国初、かつ民間宇宙船として初の月着陸を達成; スペースXが帰還するスーパーヘビー・ブースターを発射塔で初めて捕捉。',
    },
  },
  {
    year: 2025,
    body: {
      en: "Blue Origin's New Glenn reaches orbit on its debut launch; Firefly's Blue Ghost achieves the first fully successful commercial Moon landing; SpaceX's Fram2 flies the first humans over Earth's poles; the ISS marks 25 years of continuous human habitation.",
      ko: '블루 오리진의 뉴 글렌이 첫 발사에서 궤도에 도달하다; 파이어플라이의 블루 고스트가 최초로 완전히 성공한 민간 달 착륙을 이루다; 스페이스X의 프램2가 지구의 극지방 위를 비행한 최초의 유인 비행이 되다; ISS가 25년 연속 유인 거주를 기록하다.',
      ja: 'ブルーオリジンのニュー・グレンが初打ち上げで軌道に到達; ファイアフライのブルーゴーストが初の完全成功となる商業月着陸を達成; スペースXのフラム2が地球の極上空を飛行した初の有人飛行となる; ISS が25年連続の有人滞在を記録。',
    },
  },
  {
    year: 2026,
    body: {
      en: 'Artemis II carries astronauts Reid Wiseman, Victor Glover, Christina Koch and Jeremy Hansen on a flyby of the Moon (1–11 April) — the first crewed lunar mission since Apollo 17 in 1972, and the farthest from Earth any humans have ever travelled.',
      ko: '아르테미스 2호가 우주비행사 리드 와이즈먼, 빅터 글로버, 크리스티나 코크, 제러미 핸슨을 태우고 달을 근접 비행하다(4월 1–11일) — 1972년 아폴로 17호 이후 첫 유인 달 임무이자, 인류가 지구에서 가장 멀리 나아간 비행.',
      ja: 'アルテミス2号が宇宙飛行士リード・ワイズマン、ビクター・グローバー、クリスティーナ・コック、ジェレミー・ハンセンを乗せて月をフライバイ(4月1〜11日) — 1972年のアポロ17号以来初の有人月ミッションであり、人類が地球から最も遠くまで到達した飛行。',
    },
  },
]

// The four real altitude/frontier crossings, shown as markers in the timeline.
// Each marker is placed directly above (i.e. just after, going forward in time)
// the row for `year`.
export const markers = [
  {
    year: 1944,
    label: {
      en: 'Kármán line · 100 km — the edge of space',
      ko: '카르만 선 · 100 km — 우주의 경계',
      ja: 'カーマン・ライン · 100 km — 宇宙の境界',
    },
  },
  {
    year: 1957,
    label: {
      en: "Low Earth orbit · humanity's first satellites circle the planet",
      ko: '지구 저궤도 · 인류 최초의 위성들이 지구를 돌다',
      ja: '地球低軌道 · 人類初の人工衛星が地球を巡る',
    },
  },
  {
    year: 1969,
    label: {
      en: 'Cislunar space · 384,400 km to the Moon',
      ko: '지구–달 공간 · 달까지 384,400 km',
      ja: '地球–月の空間 · 月まで 384,400 km',
    },
  },
  {
    year: 2012,
    label: {
      en: "Interstellar space · beyond the Sun's reach",
      ko: '성간 우주 · 태양의 영향권 너머',
      ja: '星間空間 · 太陽の影響圏の彼方',
    },
  },
]
