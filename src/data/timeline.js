// Curated trilingual history of astronomy and space exploration.
// Plain text only; source URLs are institutional references.
// Objects in the UI are explanatory reconstructions, not archival mission models.

export const TICK_START = 1903
export const TICK_END = 2026
export const UPDATED_AT = "2026-10-04"
export const VERIFICATION_NOTE = {
  "en": "Updated through 4 October 2026. Recent milestones use institutional mission reports; some retained early milestones link to broader historical references. Dates follow the cited agency; ancient years are approximate. Only completed events are included. This is a curated history, not an exhaustive literature review.",
  "ko": "2026년 10월 4일 기준. 최근 사건은 기관의 임무 보고로 확인했으며, 기존 초기 연혁 일부는 더 넓은 범위의 역사 자료를 연결한다. 날짜는 출처 기관의 표기를 따르고 고대 연도는 근삿값이다. 실제 완료된 사건만 담은 선별 연표로, 전체 학술 문헌 검토를 의미하지 않는다.",
  "ja": "2026年10月4日時点。近年の出来事は機関のミッション報告で確認し、既存の初期年表の一部には広範な歴史資料を付す。日付は出典機関の表記に従い、古代の年は概数。完了した出来事を選んだ年表であり、全学術文献の網羅的検証ではない。"
}

export const entries = [
  {
    "id": "eratosthenes-earth-circumference",
    "year": -240,
    "title": {
      "en": "Eratosthenes measures Earth",
      "ko": "에라토스테네스의 지구 측정",
      "ja": "エラトステネスの地球測定"
    },
    "body": {
      "en": "Around 240 BCE, Eratosthenes estimates Earth’s circumference from solar shadows and the distance between Alexandria and Syene, linking sky observations to terrestrial geometry.",
      "ko": "기원전 약 240년 에라토스테네스가 태양 그림자와 알렉산드리아–시에네 사이의 거리로 지구 둘레를 추정하여 천체 관측과 지상 기하학을 연결한다.",
      "ja": "紀元前約240年、エラトステネスが太陽の影とアレクサンドリア・シエネ間の距離から地球の周長を推定し、天体観測を地上の幾何学へ結び付ける。"
    },
    "category": "theory",
    "visual": "earth",
    "sources": [
      {
        "label": "NASA JPL · How Big Is the Earth?",
        "url": "https://pumas.nasa.gov/sites/default/files/examples/04_01_13_1.pdf"
      }
    ]
  },
  {
    "id": "hipparchus-star-catalogue",
    "year": -129,
    "title": {
      "en": "Hipparchus maps the stars",
      "ko": "히파르코스의 항성 목록",
      "ja": "ヒッパルコスの星表"
    },
    "body": {
      "en": "Around 129 BCE, Hipparchus catalogues the positions and relative brightness of stars with naked-eye observations, laying foundations for astrometry.",
      "ko": "기원전 약 129년 히파르코스가 맨눈 관측으로 별의 위치와 상대 밝기를 목록화하여 위치천문학의 토대를 놓는다.",
      "ja": "紀元前約129年、ヒッパルコスが肉眼観測で星の位置と相対的な明るさを星表に記し、位置天文学の基礎を築く。"
    },
    "category": "observation",
    "visual": "orbit",
    "sources": [
      {
        "label": "ESA · The legend of Gaia",
        "url": "https://www.esa.int/Science_Exploration/Space_Science/Gaia/The_legend_of_Gaia"
      }
    ],
    "detail": {
      "en": "The year is approximate; the surviving catalogue is fragmentary. The orbital diagram symbolises the celestial sphere used to describe positions on the sky.",
      "ko": "연도는 근삿값이며 항성 목록은 일부만 전해진다. 궤도 도형은 하늘의 위치를 나타내는 천구를 상징한다.",
      "ja": "年は概数で、星表は断片的に残る。軌道図は空の位置を記述する天球を象徴する。"
    }
  },
  {
    "id": "fire-arrows",
    "title": {
      "en": "Gunpowder fire arrows",
      "ko": "화약 화전의 기록",
      "ja": "火薬式火箭の記録"
    },
    "category": "mission",
    "visual": "rocket",
    "sources": [
      {
        "label": "NASA Glenn · Brief History of Rockets (historical reference)",
        "url": "https://www.grc.nasa.gov/www/k-12/TRC/Rockets/history_of_rockets.html"
      }
    ],
    "year": 1232,
    "body": {
      "en": "Chinese accounts of the siege of Kaifeng describe gunpowder fire arrows; identifying every early fire arrow as a self-propelled rocket remains uncertain.",
      "ko": "중국 개봉 공방전 기록에 화약 화전이 등장한다. 초기 화전이 모두 자체 추진 로켓이었는지는 불확실하다.",
      "ja": "中国の開封攻防戦の記録に火薬式の火箭が登場する。初期の火箭がすべて自力で飛ぶロケットだったかは不確かである。"
    }
  },
  {
    "id": "copernicus-heliocentric-model",
    "title": {
      "en": "Copernicus and the heliocentric model",
      "ko": "코페르니쿠스의 태양 중심 모형",
      "ja": "コペルニクスの太陽中心モデル"
    },
    "category": "theory",
    "visual": "orbit",
    "sources": [
      {
        "label": "NASA · Planetary Motion: The History of an Idea",
        "url": "https://science.nasa.gov/earth/earth-observatory/planetary-motion/"
      }
    ],
    "year": 1543,
    "body": {
      "en": "Copernicus publishes his heliocentric model, placing the Sun — not Earth — at the centre.",
      "ko": "코페르니쿠스가 지동설(태양 중심설)을 발표하다 — 중심은 지구가 아니라 태양.",
      "ja": "コペルニクスが地動説(太陽中心説)を発表 — 中心は地球ではなく太陽。"
    }
  },
  {
    "id": "kepler-planetary-laws",
    "title": {
      "en": "Kepler's first two laws",
      "ko": "케플러의 첫 두 법칙",
      "ja": "ケプラーの最初の二法則"
    },
    "category": "theory",
    "visual": "orbit",
    "sources": [
      {
        "label": "NASA Goddard · Chronology of early astronomy and spaceflight (archival reference)",
        "url": "https://cdaweb.gsfc.nasa.gov/pub/documents/archived_websites/pwg.gsfc.nasa.gov/stargaze/Stimeln2.htm"
      }
    ],
    "year": 1609,
    "body": {
      "en": "Kepler publishes the first two laws of planetary motion: elliptical orbits and equal areas swept in equal times. His third law follows in 1619.",
      "ko": "케플러가 행성의 타원 궤도와 면적 속도 일정의 법칙을 발표한다. 세 번째 법칙은 1619년에 뒤따른다.",
      "ja": "ケプラーが惑星の楕円軌道と面積速度一定の法則を発表。第三法則は1619年に続く。"
    }
  },
  {
    "id": "galileo-telescope",
    "title": {
      "en": "Galileo's telescopic sky",
      "ko": "갈릴레오가 망원경으로 본 하늘",
      "ja": "ガリレオの望遠鏡による観測"
    },
    "category": "observation",
    "visual": "telescope",
    "sources": [
      {
        "label": "NASA · Planetary Motion: The History of an Idea",
        "url": "https://science.nasa.gov/earth/earth-observatory/planetary-motion/"
      }
    ],
    "year": 1610,
    "body": {
      "en": "Galileo publishes Sidereus Nuncius, reporting mountains on the Moon, countless stars, and four satellites orbiting Jupiter after observations beginning in 1609.",
      "ko": "갈릴레오가 1609년부터 수행한 관측을 토대로 『별의 전령』을 출간한다. 달의 산, 수많은 별, 목성을 도는 네 위성을 보고한다.",
      "ja": "ガリレオが1609年からの観測を基に『星界の報告』を出版。月の山、多数の星、木星を回る四つの衛星を報告する。"
    }
  },
  {
    "id": "newton-principia",
    "title": {
      "en": "Newton's Principia",
      "ko": "뉴턴의 프린키피아",
      "ja": "ニュートンのプリンキピア"
    },
    "category": "theory",
    "visual": "orbit",
    "sources": [
      {
        "label": "NASA · Planetary Motion: The History of an Idea",
        "url": "https://science.nasa.gov/earth/earth-observatory/planetary-motion/"
      }
    ],
    "year": 1687,
    "body": {
      "en": "Newton's Principia sets out universal gravitation — the physics that governs every orbit.",
      "ko": "뉴턴이 『프린키피아』에서 만유인력을 제시하다 — 모든 궤도를 지배하는 물리 법칙.",
      "ja": "ニュートンが『プリンキピア』で万有引力を提示 — あらゆる軌道を支配する物理法則。"
    }
  },
  {
    "id": "herschel-uranus",
    "year": 1781,
    "title": {
      "en": "Herschel discovers Uranus",
      "ko": "허셜의 천왕성 발견",
      "ja": "ハーシェルの天王星発見"
    },
    "body": {
      "en": "William Herschel observes a new object that is recognised as Uranus, the first planet discovered with a telescope, enlarging the known Solar System.",
      "ko": "윌리엄 허셜이 새로운 천체를 관측한다. 이 천체는 망원경으로 발견한 최초의 행성 천왕성으로 확인되어 알려진 태양계의 범위를 넓힌다.",
      "ja": "ウィリアム・ハーシェルが新たな天体を観測。望遠鏡で発見された初の惑星、天王星と確認され、既知の太陽系の範囲を広げる。"
    },
    "category": "discovery",
    "visual": "telescope",
    "sources": [
      {
        "label": "Royal Museums Greenwich · The Herschel family",
        "url": "https://www.rmg.co.uk/stories/space-astronomy/herschel-family-royal-observatory"
      }
    ]
  },
  {
    "id": "neptune-prediction-discovery",
    "year": 1846,
    "title": {
      "en": "Neptune: prediction meets observation",
      "ko": "해왕성: 예측과 관측의 만남",
      "ja": "海王星：予測と観測の出会い"
    },
    "body": {
      "en": "Johann Galle and Heinrich d’Arrest observe Neptune close to Urbain Le Verrier’s predicted position, demonstrating the predictive power of gravitational calculations.",
      "ko": "요한 갈레와 하인리히 다레스트가 위르뱅 르베리에의 예측 위치 부근에서 해왕성을 관측하여 중력 계산의 예측력을 입증한다.",
      "ja": "ヨハン・ガレとハインリヒ・ダレストがユルバン・ルヴェリエの予測位置付近で海王星を観測し、重力計算の予測力を実証する。"
    },
    "category": "discovery",
    "visual": "orbit",
    "sources": [
      {
        "label": "American Physical Society · Neptune observationally confirmed",
        "url": "https://www.aps.org/apsnews/2020/08/neptunes-existence-confirmed"
      }
    ],
    "date": "1846-09-23"
  },
  {
    "id": "verne-earth-to-moon",
    "title": {
      "en": "Imagining a lunar voyage",
      "ko": "달 여행을 상상하다",
      "ja": "月旅行を想像する"
    },
    "category": "theory",
    "visual": "moon",
    "sources": [
      {
        "label": "NASA Goddard · Chronology of early astronomy and spaceflight (archival reference)",
        "url": "https://cdaweb.gsfc.nasa.gov/pub/documents/archived_websites/pwg.gsfc.nasa.gov/stargaze/Stimeln2.htm"
      }
    ],
    "year": 1865,
    "body": {
      "en": "Jules Verne's novel 'From the Earth to the Moon' imagines a crewed voyage to the Moon.",
      "ko": "쥘 베른의 소설 『지구에서 달까지』가 유인 달 여행을 상상하다.",
      "ja": "ジュール・ヴェルヌの小説『地球から月へ』が有人月旅行を描く。"
    }
  },
  {
    "id": "tsiolkovsky-rocket-equation",
    "title": {
      "en": "Tsiolkovsky's rocket equation",
      "ko": "치올콥스키의 로켓 방정식",
      "ja": "ツィオルコフスキーのロケット方程式"
    },
    "category": "theory",
    "visual": "rocket",
    "sources": [
      {
        "label": "NASA Glenn · Brief History of Rockets (historical reference)",
        "url": "https://www.grc.nasa.gov/www/k-12/TRC/Rockets/history_of_rockets.html"
      }
    ],
    "year": 1903,
    "body": {
      "en": "Konstantin Tsiolkovsky publishes the rocket equation, founding the theory of spaceflight.",
      "ko": "콘스탄틴 치올콥스키가 로켓 방정식을 발표하다 — 우주비행 이론의 토대를 놓다.",
      "ja": "コンスタンチン・ツィオルコフスキーがロケット方程式を発表 — 宇宙飛行理論の礎を築く。"
    }
  },
  {
    "id": "goddard-rocket-research",
    "title": {
      "en": "Goddard begins rocket research",
      "ko": "고더드의 로켓 연구 시작",
      "ja": "ゴダードのロケット研究開始"
    },
    "category": "theory",
    "visual": "rocket",
    "sources": [
      {
        "label": "NASA · Robert H. Goddard",
        "url": "https://www.nasa.gov/dr-robert-h-goddard-american-rocketry-pioneer/"
      }
    ],
    "year": 1909,
    "body": {
      "en": "Robert Goddard begins sustained research into rocket propulsion, laying the groundwork for his later liquid-fuelled experiments.",
      "ko": "로버트 고더드가 로켓 추진에 관한 본격적인 연구를 시작하여 훗날의 액체연료 실험에 토대를 놓는다.",
      "ja": "ロバート・ゴダードがロケット推進の本格的な研究を始め、後の液体燃料実験の基礎を築く。"
    }
  },
  {
    "id": "leavitt-period-luminosity",
    "year": 1912,
    "title": {
      "en": "Leavitt’s stellar distance key",
      "ko": "리비트의 별 거리 측정 열쇠",
      "ja": "リーヴィットの恒星距離の鍵"
    },
    "body": {
      "en": "Henrietta Swan Leavitt publishes the period–luminosity relation of Cepheid variables, giving astronomers a way to determine distances beyond nearby stars.",
      "ko": "헨리에타 스완 리비트가 세페이드 변광성의 주기–광도 관계를 발표하여 가까운 별 너머의 거리를 측정할 토대를 마련한다.",
      "ja": "ヘンリエッタ・スワン・リーヴィットがセファイド変光星の周期・光度関係を発表し、近傍の星を越えた距離測定の基礎を築く。"
    },
    "category": "discovery",
    "visual": "telescope",
    "sources": [
      {
        "label": "Harvard & Smithsonian · Leavitt’s variable stars",
        "url": "https://platestacks.cfa.harvard.edu/henrietta-swan-leavitt/variable-stars"
      }
    ]
  },
  {
    "id": "goddard-rocket-patents",
    "title": {
      "en": "Liquid fuel and multistage patents",
      "ko": "액체연료·다단 로켓 특허",
      "ja": "液体燃料・多段式ロケットの特許"
    },
    "category": "theory",
    "visual": "rocket",
    "sources": [
      {
        "label": "NASA · Robert H. Goddard",
        "url": "https://www.nasa.gov/dr-robert-h-goddard-american-rocketry-pioneer/"
      }
    ],
    "year": 1914,
    "body": {
      "en": "Goddard patents designs for a liquid-fuelled rocket and a multi-stage rocket.",
      "ko": "고더드가 액체연료 로켓과 다단 로켓 설계로 특허를 받다.",
      "ja": "ゴダードが液体燃料ロケットと多段式ロケットの設計で特許を取得。"
    }
  },
  {
    "id": "einstein-general-relativity",
    "year": 1915,
    "title": {
      "en": "Einstein’s general relativity",
      "ko": "아인슈타인의 일반상대성이론",
      "ja": "アインシュタインの一般相対性理論"
    },
    "body": {
      "en": "Einstein presents the final gravitational field equations of general relativity, describing gravity through spacetime curvature and reshaping modern cosmology.",
      "ko": "아인슈타인이 일반상대성이론의 최종 중력장 방정식을 제시한다. 중력을 시공간의 곡률로 설명하여 현대 우주론을 바꾼다.",
      "ja": "アインシュタインが一般相対性理論の最終的な重力場方程式を提示。重力を時空の曲率で説明し、現代宇宙論を変える。"
    },
    "category": "theory",
    "visual": "orbit",
    "sources": [
      {
        "label": "AIP · Einstein’s 26 November 1915 letter to Zangger",
        "url": "https://physicstoday.aip.org/letters/albert-einstein-to-heinrich-zangger-1"
      }
    ],
    "date": "1915-11-25"
  },
  {
    "id": "goddard-extreme-altitudes",
    "title": {
      "en": "A Method of Reaching Extreme Altitudes",
      "ko": "극고도에 도달하는 방법",
      "ja": "極高度に到達する方法"
    },
    "category": "theory",
    "visual": "rocket",
    "sources": [
      {
        "label": "NASA · Robert H. Goddard",
        "url": "https://www.nasa.gov/dr-robert-h-goddard-american-rocketry-pioneer/"
      }
    ],
    "year": 1919,
    "body": {
      "en": "Goddard publishes 'A Method of Reaching Extreme Altitudes.'",
      "ko": "고더드가 『극고도에 도달하는 방법』을 발표하다.",
      "ja": "ゴダードが『極高度に到達する方法』を発表。"
    }
  },
  {
    "id": "goddard-liquid-engine-experiments",
    "title": {
      "en": "Liquid-propellant experiments",
      "ko": "액체 추진제 실험",
      "ja": "液体推進剤の実験"
    },
    "category": "mission",
    "visual": "rocket",
    "sources": [
      {
        "label": "NASA · Robert H. Goddard",
        "url": "https://www.nasa.gov/dr-robert-h-goddard-american-rocketry-pioneer/"
      }
    ],
    "year": 1921,
    "body": {
      "en": "Goddard begins experiments with liquid-oxygen and gasoline rocket engines.",
      "ko": "고더드가 액체산소·가솔린 로켓 엔진 실험을 시작하다.",
      "ja": "ゴダードが液体酸素とガソリンを用いるロケットエンジンの実験を開始。"
    }
  },
  {
    "id": "goddard-liquid-engine-test",
    "title": {
      "en": "Testing a liquid rocket engine",
      "ko": "액체 로켓 엔진 시험",
      "ja": "液体ロケットエンジン試験"
    },
    "category": "mission",
    "visual": "rocket",
    "sources": [
      {
        "label": "NASA · Robert H. Goddard",
        "url": "https://www.nasa.gov/dr-robert-h-goddard-american-rocketry-pioneer/"
      }
    ],
    "year": 1923,
    "body": {
      "en": "Goddard develops and tests liquid-propellant engines before the successful free flight of his rocket in 1926.",
      "ko": "고더드가 액체 추진제 엔진을 개발하고 시험한다. 실제 로켓의 성공적인 자유 비행은 1926년에 이루어진다.",
      "ja": "ゴダードが液体推進剤エンジンを開発・試験する。ロケットの成功した自由飛行は1926年に実現する。"
    }
  },
  {
    "id": "goddard-liquid-rocket-launch",
    "title": {
      "en": "The first liquid-fuelled rocket",
      "ko": "최초의 액체연료 로켓",
      "ja": "初の液体燃料ロケット"
    },
    "category": "mission",
    "visual": "rocket",
    "sources": [
      {
        "label": "NASA · Robert H. Goddard",
        "url": "https://www.nasa.gov/dr-robert-h-goddard-american-rocketry-pioneer/"
      }
    ],
    "year": 1926,
    "body": {
      "en": "Goddard launches the world's first liquid-fuelled rocket (16 March, in Auburn, Massachusetts).",
      "ko": "고더드가 세계 최초의 액체연료 로켓을 발사하다 (3월 16일, 매사추세츠주 오번).",
      "ja": "ゴダードが世界初の液体燃料ロケットを打ち上げ(3月16日、マサチューセッツ州オーバーン)。"
    },
    "date": "1926-03-16"
  },
  {
    "id": "german-vfr-founded",
    "title": {
      "en": "The Society for Space Travel",
      "ko": "독일 우주여행협회",
      "ja": "ドイツ宇宙旅行協会"
    },
    "category": "theory",
    "visual": "rocket",
    "sources": [
      {
        "label": "NASA Glenn · Brief History of Rockets (historical reference)",
        "url": "https://www.grc.nasa.gov/www/k-12/TRC/Rockets/history_of_rockets.html"
      }
    ],
    "year": 1927,
    "body": {
      "en": "The VfR (Society for Space Travel) is founded in Germany; a teenage Wernher von Braun later joins.",
      "ko": "독일에서 우주여행협회(VfR)가 설립되다; 십 대의 베르너 폰 브라운이 훗날 합류한다.",
      "ja": "ドイツで宇宙旅行協会(VfR)が設立される; 10代のヴェルナー・フォン・ブラウンが後に参加する。"
    }
  },
  {
    "id": "goddard-scientific-payload",
    "title": {
      "en": "A rocket with instruments",
      "ko": "관측 기기를 실은 로켓",
      "ja": "観測機器を搭載したロケット"
    },
    "category": "mission",
    "visual": "rocket",
    "sources": [
      {
        "label": "NASA · Robert H. Goddard",
        "url": "https://www.nasa.gov/dr-robert-h-goddard-american-rocketry-pioneer/"
      }
    ],
    "year": 1929,
    "body": {
      "en": "Goddard launches a rocket carrying a barometer and a camera, demonstrating how rockets can carry scientific instruments.",
      "ko": "고더드가 기압계와 카메라를 실은 로켓을 발사하여 과학 기기를 탑재한 로켓 실험을 수행한다.",
      "ja": "ゴダードが気圧計とカメラを搭載したロケットを打ち上げ、科学機器を運ぶロケット実験を行う。"
    }
  },
  {
    "id": "hubble-expansion-law",
    "year": 1929,
    "title": {
      "en": "An expanding universe",
      "ko": "팽창하는 우주",
      "ja": "膨張する宇宙"
    },
    "body": {
      "en": "Edwin Hubble publishes a relation between galaxy distance and recession speed, building on earlier measurements and theoretical work by Slipher, Leavitt and Lemaître.",
      "ko": "에드윈 허블이 은하 거리와 후퇴 속도의 관계를 발표한다. 슬라이퍼·리비트·르메트르 등의 관측과 이론을 잇는 우주 팽창의 증거다.",
      "ja": "エドウィン・ハッブルが銀河の距離と後退速度の関係を発表。スライファー・リーヴィット・ルメートルらの観測と理論を受け継ぐ宇宙膨張の証拠となる。"
    },
    "category": "observation",
    "visual": "orbit",
    "sources": [
      {
        "label": "NASA · Hubble constant and expansion",
        "url": "https://science.nasa.gov/mission/hubble/science/science-behind-the-discoveries/hubble-constant-and-tension/"
      }
    ]
  },
  {
    "id": "korolev-gird",
    "title": {
      "en": "GIRD and Korolev",
      "ko": "GIRD와 코롤료프",
      "ja": "GIRDとコロリョフ"
    },
    "category": "theory",
    "visual": "rocket",
    "sources": [
      {
        "label": "NASA Glenn · Brief History of Rockets (historical reference)",
        "url": "https://www.grc.nasa.gov/www/k-12/TRC/Rockets/history_of_rockets.html"
      }
    ],
    "year": 1931,
    "body": {
      "en": "Sergei Korolev helps found GIRD, the Group for the Study of Reactive Motion, in Moscow.",
      "ko": "세르게이 코롤료프가 모스크바에서 반작용추진연구단(GIRD) 설립에 참여하다.",
      "ja": "セルゲイ・コロリョフがモスクワで反作用推進研究グループ(GIRD)の設立に関わる。"
    }
  },
  {
    "id": "von-braun-army-research",
    "title": {
      "en": "Army-funded rocket research",
      "ko": "군의 지원을 받은 로켓 연구",
      "ja": "軍の支援によるロケット研究"
    },
    "category": "theory",
    "visual": "rocket",
    "sources": [
      {
        "label": "NASA Glenn · Brief History of Rockets (historical reference)",
        "url": "https://www.grc.nasa.gov/www/k-12/TRC/Rockets/history_of_rockets.html"
      }
    ],
    "year": 1932,
    "body": {
      "en": "Wernher von Braun joins German army-funded rocket research at Kummersdorf; the large Peenemünde programme comes later.",
      "ko": "베르너 폰 브라운이 쿠머스도르프에서 독일 육군의 지원을 받는 로켓 연구에 참여한다. 대규모 페네뮌데 계획은 이후에 시작된다.",
      "ja": "ヴェルナー・フォン・ブラウンがクンマースドルフでドイツ陸軍の支援によるロケット研究に参加。大規模なペーネミュンデ計画は後に始まる。"
    }
  },
  {
    "id": "gird-09-launch",
    "title": {
      "en": "GIRD-09 launch",
      "ko": "GIRD-09 발사",
      "ja": "GIRD-09の打ち上げ"
    },
    "category": "mission",
    "visual": "rocket",
    "sources": [
      {
        "label": "NASA Glenn · Brief History of Rockets (historical reference)",
        "url": "https://www.grc.nasa.gov/www/k-12/TRC/Rockets/history_of_rockets.html"
      }
    ],
    "year": 1933,
    "body": {
      "en": "Korolev's team launches the USSR's first liquid-fuelled rocket, GIRD-09.",
      "ko": "코롤료프 팀이 소련 최초의 액체연료 로켓 GIRD-09를 발사하다.",
      "ja": "コロリョフのチームがソ連初の液体燃料ロケット GIRD-09 を打ち上げ。"
    }
  },
  {
    "id": "a2-test-flights",
    "title": {
      "en": "A-2 test flights",
      "ko": "A-2 시험 비행",
      "ja": "A-2の試験飛行"
    },
    "category": "mission",
    "visual": "rocket",
    "sources": [
      {
        "label": "NASA Glenn · Brief History of Rockets (historical reference)",
        "url": "https://www.grc.nasa.gov/www/k-12/TRC/Rockets/history_of_rockets.html"
      }
    ],
    "year": 1934,
    "body": {
      "en": "Von Braun's A-2 rockets reach an altitude of about 2.4 km.",
      "ko": "폰 브라운의 A-2 로켓이 약 2.4 km 고도에 도달하다.",
      "ja": "フォン・ブラウンの A-2 ロケットが約2.4 kmの高度に到達。"
    }
  },
  {
    "id": "korolev-rocket-aviation",
    "title": {
      "en": "Rocket-powered aviation research",
      "ko": "로켓추진 항공기 연구",
      "ja": "ロケット推進航空機の研究"
    },
    "category": "theory",
    "visual": "rocket",
    "sources": [
      {
        "label": "NASA Glenn · Brief History of Rockets (historical reference)",
        "url": "https://www.grc.nasa.gov/www/k-12/TRC/Rockets/history_of_rockets.html"
      }
    ],
    "year": 1936,
    "body": {
      "en": "Korolev works on rocket-powered aviation, including the RP-318 glider project, which first flies under rocket power in 1940.",
      "ko": "코롤료프가 RP-318 글라이더를 비롯한 로켓추진 항공기 연구를 수행한다. RP-318의 첫 로켓추진 비행은 1940년에 이루어진다.",
      "ja": "コロリョフがRP-318グライダーなどのロケット推進航空機を研究。RP-318の初のロケット推進飛行は1940年に行われる。"
    }
  },
  {
    "id": "a5-test-flights",
    "title": {
      "en": "A-5 test flights",
      "ko": "A-5 시험 비행",
      "ja": "A-5の試験飛行"
    },
    "category": "mission",
    "visual": "rocket",
    "sources": [
      {
        "label": "NASA Glenn · Brief History of Rockets (historical reference)",
        "url": "https://www.grc.nasa.gov/www/k-12/TRC/Rockets/history_of_rockets.html"
      }
    ],
    "year": 1939,
    "body": {
      "en": "Von Braun's A-5 test rocket reaches an altitude of about 8 km.",
      "ko": "폰 브라운의 A-5 시험 로켓이 약 8 km 고도에 도달하다.",
      "ja": "フォン・ブラウンの A-5 試験ロケットが約8 kmの高度に到達。"
    }
  },
  {
    "id": "a4-first-successful-flight",
    "title": {
      "en": "A-4's first successful flight",
      "ko": "A-4 첫 성공 비행",
      "ja": "A-4の初の成功飛行"
    },
    "category": "mission",
    "visual": "rocket",
    "sources": [
      {
        "label": "NASA Glenn · Brief History of Rockets (historical reference)",
        "url": "https://www.grc.nasa.gov/www/k-12/TRC/Rockets/history_of_rockets.html"
      }
    ],
    "year": 1942,
    "body": {
      "en": "The A-4, later called V-2, makes a successful test flight on 3 October, reaching roughly 85 km. It does not yet cross the conventional 100 km Kármán line.",
      "ko": "훗날 V-2로 불린 A-4가 10월 3일 시험 비행에 성공하여 약 85 km에 도달한다. 통상 우주 경계로 삼는 100 km 카르만 선은 아직 넘지 못한다.",
      "ja": "後にV-2と呼ばれるA-4が10月3日に試験飛行に成功し、約85 kmに達する。一般的な宇宙の境界である100 kmのカーマン・ラインには届かない。"
    }
  },
  {
    "id": "v2-production-jpl",
    "title": {
      "en": "V-2 production and JPL's founding",
      "ko": "V-2 생산과 JPL 설립",
      "ja": "V-2の生産とJPL設立"
    },
    "category": "mission",
    "visual": "rocket",
    "sources": [
      {
        "label": "NASA JPL · History",
        "url": "https://www.jpl.nasa.gov/who-we-are/history/"
      }
    ],
    "year": 1943,
    "body": {
      "en": "V-2 mass production begins; the Jet Propulsion Laboratory (JPL) is established in the USA.",
      "ko": "V-2 대량생산이 시작되다; 미국에서 제트추진연구소(JPL)가 설립되다.",
      "ja": "V-2の量産が始まる; 米国でジェット推進研究所(JPL)が設立される。"
    }
  },
  {
    "id": "v2-crosses-space-boundary",
    "title": {
      "en": "V-2 crosses 100 km",
      "ko": "V-2가 고도 100 km를 넘다",
      "ja": "V-2が高度100 kmを超える"
    },
    "category": "mission",
    "visual": "rocket",
    "sources": [
      {
        "label": "NASA Glenn · Brief History of Rockets (historical reference)",
        "url": "https://www.grc.nasa.gov/www/k-12/TRC/Rockets/history_of_rockets.html"
      }
    ],
    "year": 1944,
    "body": {
      "en": "On 20 June a V-2 test flight (MW 18014) becomes the first human-made object to cross the Kármán line (100 km), reaching ~176 km; that autumn, V-2s strike Paris, London and Antwerp — the first ballistic-missile attacks in history.",
      "ko": "6월 20일, V-2 시험 비행(MW 18014)이 카르만 선(100 km)을 넘은 최초의 인공물이 되어 약 176 km에 도달하다; 그해 가을 V-2가 파리·런던·안트베르펜을 공격 — 역사상 첫 탄도미사일 공격.",
      "ja": "6月20日、V-2の試験飛行(MW 18014)がカーマン・ライン(100 km)を越えた最初の人工物となり約176 kmに到達; その秋、V-2がパリ・ロンドン・アントワープを攻撃 — 史上初の弾道ミサイル攻撃。"
    }
  },
  {
    "id": "operation-paperclip",
    "title": {
      "en": "Operation Paperclip",
      "ko": "페이퍼클립 작전",
      "ja": "ペーパークリップ作戦"
    },
    "category": "mission",
    "visual": "rocket",
    "sources": [
      {
        "label": "NASA Glenn · Brief History of Rockets (historical reference)",
        "url": "https://www.grc.nasa.gov/www/k-12/TRC/Rockets/history_of_rockets.html"
      }
    ],
    "year": 1945,
    "body": {
      "en": "As the war ends, the USA recruits von Braun and his team (Operation Paperclip).",
      "ko": "종전과 함께 미국이 폰 브라운과 그의 팀을 영입하다 (페이퍼클립 작전).",
      "ja": "終戦に伴い、米国がフォン・ブラウンらのチームを獲得(ペーパークリップ作戦)。"
    }
  },
  {
    "id": "postwar-v2-research",
    "title": {
      "en": "Postwar V-2 research",
      "ko": "전후 V-2 연구",
      "ja": "戦後のV-2研究"
    },
    "category": "mission",
    "visual": "rocket",
    "sources": [
      {
        "label": "NASA Glenn · Brief History of Rockets (historical reference)",
        "url": "https://www.grc.nasa.gov/www/k-12/TRC/Rockets/history_of_rockets.html"
      }
    ],
    "year": 1946,
    "body": {
      "en": "The USA and USSR independently begin reverse-engineering the captured V-2.",
      "ko": "미국과 소련이 각각 노획한 V-2를 역설계하기 시작하다.",
      "ja": "米国とソ連がそれぞれ、鹵獲した V-2 のリバースエンジニアリングを開始。"
    }
  },
  {
    "id": "fruit-flies-space",
    "title": {
      "en": "Fruit flies reach space",
      "ko": "초파리가 우주에 도달하다",
      "ja": "ショウジョウバエが宇宙へ"
    },
    "category": "mission",
    "visual": "rocket",
    "sources": [
      {
        "label": "NASA · 60 Moments in NASA History (historical reference)",
        "url": "https://www.nasa.gov/specials/timeline/"
      }
    ],
    "year": 1947,
    "body": {
      "en": "Fruit flies launched aboard a US V-2 become the first animals in space.",
      "ko": "미국 V-2에 실려 발사된 초파리가 우주에 간 최초의 동물이 되다.",
      "ja": "米国の V-2 に搭載されたショウジョウバエが、宇宙に到達した最初の動物となる。"
    }
  },
  {
    "id": "r1-first-success",
    "title": {
      "en": "R-1 test flight",
      "ko": "R-1 시험 비행",
      "ja": "R-1の試験飛行"
    },
    "category": "mission",
    "visual": "rocket",
    "sources": [
      {
        "label": "NASA Glenn · Brief History of Rockets (historical reference)",
        "url": "https://www.grc.nasa.gov/www/k-12/TRC/Rockets/history_of_rockets.html"
      }
    ],
    "year": 1948,
    "body": {
      "en": "Korolev's R-1, a Soviet copy of the V-2, is successfully launched.",
      "ko": "V-2를 복제한 코롤료프의 R-1 로켓이 발사에 성공하다.",
      "ja": "V-2 を複製したコロリョフの R-1 ロケットが打ち上げに成功。"
    }
  },
  {
    "id": "albert-ii-space",
    "title": {
      "en": "Albert II's suborbital flight",
      "ko": "앨버트 2세의 준궤도 비행",
      "ja": "アルバート2世の弾道飛行"
    },
    "category": "mission",
    "visual": "rocket",
    "sources": [
      {
        "label": "NASA · 60 Moments in NASA History (historical reference)",
        "url": "https://www.nasa.gov/specials/timeline/"
      }
    ],
    "year": 1949,
    "body": {
      "en": "Albert II, a rhesus monkey, becomes the first mammal in space aboard a US V-2.",
      "ko": "붉은털원숭이 앨버트 2세가 미국 V-2에 실려 우주에 간 최초의 포유류가 되다.",
      "ja": "アカゲザルのアルバート2世が、米国の V-2 で宇宙に到達した最初の哺乳類となる。"
    }
  },
  {
    "id": "r7-development",
    "title": {
      "en": "Developing the R-7",
      "ko": "R-7 개발",
      "ja": "R-7の開発"
    },
    "category": "theory",
    "visual": "rocket",
    "sources": [
      {
        "label": "NASA Glenn · Brief History of Rockets (historical reference)",
        "url": "https://www.grc.nasa.gov/www/k-12/TRC/Rockets/history_of_rockets.html"
      }
    ],
    "year": 1953,
    "body": {
      "en": "Korolev begins design of the R-7 — soon to become the world's first ICBM.",
      "ko": "코롤료프가 R-7 설계를 시작하다 — 머지않아 세계 최초의 ICBM이 된다.",
      "ja": "コロリョフが R-7 の設計を開始 — まもなく世界初の ICBM となる。"
    }
  },
  {
    "id": "soviet-satellite-proposal",
    "title": {
      "en": "The Soviet satellite proposal",
      "ko": "소련의 인공위성 제안",
      "ja": "ソ連の人工衛星計画提案"
    },
    "category": "theory",
    "visual": "sputnik",
    "sources": [
      {
        "label": "NASA Glenn · Brief History of Rockets (historical reference)",
        "url": "https://www.grc.nasa.gov/www/k-12/TRC/Rockets/history_of_rockets.html"
      }
    ],
    "year": 1954,
    "body": {
      "en": "Korolev formally proposes an artificial-satellite programme to the Soviet leadership.",
      "ko": "코롤료프가 소련 지도부에 인공위성 계획을 공식 제안하다.",
      "ja": "コロリョフがソ連指導部に人工衛星計画を正式に提案。"
    }
  },
  {
    "id": "project-vanguard",
    "title": {
      "en": "Project Vanguard announced",
      "ko": "뱅가드 계획 발표",
      "ja": "ヴァンガード計画の発表"
    },
    "category": "mission",
    "visual": "sputnik",
    "sources": [
      {
        "label": "NASA · 60 Moments in NASA History (historical reference)",
        "url": "https://www.nasa.gov/specials/timeline/"
      }
    ],
    "year": 1955,
    "body": {
      "en": "The USA announces Project Vanguard, its plan to launch a scientific satellite.",
      "ko": "미국이 과학 위성 발사 계획인 뱅가드 계획을 발표하다.",
      "ja": "米国が科学衛星打ち上げ計画「ヴァンガード計画」を発表。"
    }
  },
  {
    "id": "jupiter-c-reentry-test",
    "title": {
      "en": "Jupiter-C high-altitude test",
      "ko": "주피터-C 고고도 시험",
      "ja": "ジュピターCの高高度試験"
    },
    "category": "mission",
    "visual": "rocket",
    "sources": [
      {
        "label": "NASA JPL · History",
        "url": "https://www.jpl.nasa.gov/who-we-are/history/"
      }
    ],
    "year": 1956,
    "body": {
      "en": "A Jupiter-C, derived from Redstone, reaches high altitude in a re-entry test. This launcher family later carries Explorer 1 into orbit.",
      "ko": "레드스톤을 발전시킨 주피터-C가 재진입 시험에서 고고도에 도달한다. 이 로켓 계열은 이후 익스플로러 1호를 궤도에 올린다.",
      "ja": "レッドストーンを発展させたジュピターCが再突入試験で高高度に達する。このロケット系統は後にエクスプローラー1号を軌道へ運ぶ。"
    }
  },
  {
    "id": "r7-first-success",
    "year": 1957,
    "title": {
      "en": "The R-7 reaches intercontinental range",
      "ko": "R-7의 대륙간 시험 비행",
      "ja": "R-7の大陸間試験飛行"
    },
    "body": {
      "en": "The Soviet R-7 succeeds in a long-range test, providing the launcher family that opens the orbital age.",
      "ko": "소련의 R-7이 장거리 시험에 성공한다. 이 로켓 계열은 이후 인공위성을 발사하여 궤도 시대를 연다.",
      "ja": "ソ連のR-7が長距離試験に成功。このロケット系統は後に人工衛星を打ち上げ、軌道時代を開く。"
    },
    "category": "mission",
    "visual": "rocket",
    "sources": [
      {
        "label": "NASA NSSDC · Planetary Exploration Timeline",
        "url": "https://nssdc.gsfc.nasa.gov/planetary/chronology.html"
      }
    ]
  },
  {
    "id": "sputnik-1-launch",
    "year": 1957,
    "title": {
      "en": "Sputnik 1: the first artificial satellite",
      "ko": "스푸트니크 1호: 최초의 인공위성",
      "ja": "スプートニク1号：初の人工衛星"
    },
    "body": {
      "en": "On 4 October, the Soviet Union launches Sputnik 1 into Earth orbit. Its radio signals are heard around the world.",
      "ko": "10월 4일 소련이 스푸트니크 1호를 지구 궤도에 올린다. 이 위성의 전파 신호가 세계 곳곳에서 수신된다.",
      "ja": "10月4日、ソ連がスプートニク1号を地球軌道に打ち上げる。その電波信号が世界各地で受信される。"
    },
    "category": "mission",
    "visual": "sputnik",
    "sources": [
      {
        "label": "NASA · Sputnik ushers in the Space Age",
        "url": "https://www.nasa.gov/history/65-years-ago-sputnik-ushers-in-the-space-age/"
      }
    ],
    "date": "1957-10-04"
  },
  {
    "id": "sputnik-2-laika",
    "year": 1957,
    "title": {
      "en": "Laika enters orbit aboard Sputnik 2",
      "ko": "스푸트니크 2호와 라이카",
      "ja": "スプートニク2号とライカ"
    },
    "body": {
      "en": "Sputnik 2 carries the dog Laika, the first animal to orbit Earth. The mission has no recovery system; she does not survive.",
      "ko": "스푸트니크 2호가 지구 궤도에 오른 최초의 동물인 개 라이카를 태운다. 회수 장치가 없는 임무에서 라이카는 살아 돌아오지 못한다.",
      "ja": "スプートニク2号が地球を周回した初の動物、犬のライカを運ぶ。回収装置のないミッションでライカは生還しなかった。"
    },
    "category": "mission",
    "visual": "sputnik",
    "sources": [
      {
        "label": "NASA NSSDC · Planetary Exploration Timeline",
        "url": "https://nssdc.gsfc.nasa.gov/planetary/chronology.html"
      }
    ],
    "date": "1957-11-03"
  },
  {
    "id": "explorer-nasa-founded",
    "title": {
      "en": "Explorer 1 and NASA",
      "ko": "익스플로러 1호와 NASA",
      "ja": "エクスプローラー1号とNASA"
    },
    "category": "mission",
    "visual": "sputnik",
    "sources": [
      {
        "label": "NASA NSSDC · Planetary Exploration Timeline (historical reference)",
        "url": "https://nssdc.gsfc.nasa.gov/planetary/chronology.html"
      },
      {
        "label": "NASA · 60 Moments in NASA History (historical reference)",
        "url": "https://www.nasa.gov/specials/timeline/"
      }
    ],
    "year": 1958,
    "body": {
      "en": "The USA launches Explorer 1 (31 Jan), which discovers the Van Allen radiation belts; NASA is founded; the first US Moon-probe attempt (Pioneer 0) fails.",
      "ko": "미국이 익스플로러 1호(1월 31일)를 발사하여 밴앨런대를 발견하다; NASA가 창설되다; 미국 최초의 달 탐사선 시도(파이오니어 0호)는 실패하다.",
      "ja": "米国がエクスプローラー1号(1月31日)を打ち上げ、ヴァン・アレン帯を発見; NASA が創設される; 米国初の月探査機(パイオニア0号)は失敗。"
    }
  },
  {
    "id": "luna-2-moon-impact",
    "year": 1959,
    "title": {
      "en": "Luna 2 reaches the Moon",
      "ko": "루나 2호가 달에 도달하다",
      "ja": "ルナ2号が月に到達"
    },
    "body": {
      "en": "Luna 2 strikes the Moon, becoming the first human-made object to reach another celestial body. This is an impact, rather than a soft landing.",
      "ko": "루나 2호가 달에 충돌하여 다른 천체에 도달한 최초의 인공물이 된다. 연착륙이 아닌 충돌 임무다.",
      "ja": "ルナ2号が月に衝突し、他の天体に到達した初の人工物となる。軟着陸ではなく衝突ミッションである。"
    },
    "category": "mission",
    "visual": "moon",
    "sources": [
      {
        "label": "NASA · Luna 1 and Luna 2",
        "url": "https://www.nasa.gov/history/60-years-ago-luna-2-makes-impact-in-moon-race/"
      }
    ]
  },
  {
    "id": "luna-3-far-side",
    "year": 1959,
    "title": {
      "en": "Luna 3 reveals the lunar far side",
      "ko": "루나 3호가 달 뒷면을 보여주다",
      "ja": "ルナ3号が月の裏側を示す"
    },
    "body": {
      "en": "Luna 3 photographs the far side of the Moon and sends the images to Earth, revealing terrain never seen directly from our planet.",
      "ko": "루나 3호가 지구에서 직접 볼 수 없던 달 뒷면을 촬영하여 영상을 지구로 전송한다.",
      "ja": "ルナ3号が地球から直接見えない月の裏側を撮影し、画像を地球へ送信する。"
    },
    "category": "observation",
    "visual": "moon",
    "sources": [
      {
        "label": "NASA NSSDC · Planetary Exploration Timeline",
        "url": "https://nssdc.gsfc.nasa.gov/planetary/chronology.html"
      }
    ]
  },
  {
    "id": "luna-1-solar-orbit",
    "year": 1959,
    "title": {
      "en": "Luna 1 enters solar orbit",
      "ko": "루나 1호의 태양 궤도 진입",
      "ja": "ルナ1号の太陽軌道進入"
    },
    "body": {
      "en": "Luna 1 misses its planned lunar impact and flies past the Moon, becoming the first spacecraft to enter solar orbit.",
      "ko": "루나 1호가 예정된 달 충돌 대신 달을 근접 통과하여 태양 주위를 도는 궤도에 들어간 최초의 우주선이 된다.",
      "ja": "ルナ1号が予定された月への衝突を逃して月を接近通過し、太陽を回る軌道に入った初の宇宙機となる。"
    },
    "category": "mission",
    "visual": "orbit",
    "sources": [
      {
        "label": "NASA · Luna 1 and Luna 2",
        "url": "https://www.nasa.gov/history/60-years-ago-luna-2-makes-impact-in-moon-race/"
      }
    ],
    "date": "1959-01-02"
  },
  {
    "id": "tiros-echo-belka-strelka",
    "title": {
      "en": "Weather, communication and safe return",
      "ko": "기상·통신 위성과 생환",
      "ja": "気象・通信衛星と生還"
    },
    "category": "mission",
    "visual": "earth",
    "sources": [
      {
        "label": "NASA · 60 Moments in NASA History (historical reference)",
        "url": "https://www.nasa.gov/specials/timeline/"
      }
    ],
    "year": 1960,
    "body": {
      "en": "TIROS-1 demonstrates weather observation from orbit; Echo 1 reflects radio signals as a passive communications satellite; Belka and Strelka return alive from an orbital flight.",
      "ko": "TIROS-1이 궤도에서 기상을 관측하고, 에코 1호가 전파를 반사하는 수동 통신위성으로 작동한다. 벨카와 스트렐카가 궤도 비행 후 살아 돌아온다.",
      "ja": "TIROS-1が軌道上の気象観測を実証し、エコー1号が電波を反射する受動通信衛星として働く。ベルカとストレルカは軌道飛行から生還する。"
    }
  },
  {
    "id": "gagarin-vostok-1",
    "year": 1961,
    "title": {
      "en": "Yuri Gagarin: the first human in space",
      "ko": "유리 가가린: 최초의 인간 우주비행",
      "ja": "ユーリ・ガガーリン：初の有人宇宙飛行"
    },
    "body": {
      "en": "Yuri Gagarin completes one Earth orbit aboard Vostok 1 on 12 April, beginning the era of human spaceflight.",
      "ko": "유리 가가린이 4월 12일 보스토크 1호를 타고 지구를 한 바퀴 돌아 유인 우주비행 시대를 연다.",
      "ja": "ユーリ・ガガーリンが4月12日にヴォストーク1号で地球を一周し、有人宇宙飛行の時代を開く。"
    },
    "category": "human",
    "visual": "earth",
    "sources": [
      {
        "label": "NASA · Yuri Gagarin",
        "url": "https://science.nasa.gov/resource/yuri-gagarin-first-human-in-space/"
      }
    ],
    "date": "1961-04-12"
  },
  {
    "id": "shepard-freedom-7",
    "year": 1961,
    "title": {
      "en": "Alan Shepard’s Freedom 7 flight",
      "ko": "앨런 셰퍼드의 프리덤 7 비행",
      "ja": "アラン・シェパードのフリーダム7飛行"
    },
    "body": {
      "en": "Alan Shepard becomes the first American in space on a 15-minute suborbital Mercury flight.",
      "ko": "앨런 셰퍼드가 약 15분의 머큐리 준궤도 비행으로 우주에 간 최초의 미국인이 된다.",
      "ja": "アラン・シェパードが約15分のマーキュリー弾道飛行で宇宙へ行った初の米国人となる。"
    },
    "category": "human",
    "visual": "rocket",
    "sources": [
      {
        "label": "NASA · Human Spaceflight",
        "url": "https://www3.nasa.gov/specials/60counting/spaceflight.html"
      }
    ],
    "date": "1961-05-05"
  },
  {
    "id": "mariner-telstar",
    "title": {
      "en": "Mariner 2 and Telstar 1",
      "ko": "매리너 2호와 텔스타 1호",
      "ja": "マリナー2号とテルスター1号"
    },
    "category": "mission",
    "visual": "dish",
    "sources": [
      {
        "label": "NASA · 60 Moments in NASA History (historical reference)",
        "url": "https://www.nasa.gov/specials/timeline/"
      }
    ],
    "year": 1962,
    "body": {
      "en": "Mariner 2 makes the first successful planetary flyby at Venus. Telstar 1 relays live transatlantic television; earlier satellites such as SCORE had already demonstrated communications.",
      "ko": "매리너 2호가 금성에서 최초의 성공적인 행성 근접 비행을 수행한다. 텔스타 1호가 대서양을 건너 실시간 TV 영상을 중계한다. 그 이전에도 SCORE 등의 위성이 통신 실험을 수행했다.",
      "ja": "マリナー2号が金星で初の成功した惑星接近飛行を行う。テルスター1号は大西洋を越えてテレビを生中継する。SCOREなどの先行衛星は既に通信実験を行っていた。"
    }
  },
  {
    "id": "tereshkova-spaceflight",
    "title": {
      "en": "Valentina Tereshkova",
      "ko": "발렌티나 테레시코바",
      "ja": "ワレンチナ・テレシコワ"
    },
    "category": "human",
    "visual": "earth",
    "sources": [
      {
        "label": "NASA · 60 Years and Counting: Human Spaceflight (historical reference)",
        "url": "https://www3.nasa.gov/specials/60counting/spaceflight.html"
      }
    ],
    "year": 1963,
    "body": {
      "en": "Valentina Tereshkova becomes the first woman in space.",
      "ko": "발렌티나 테레시코바가 우주에 간 최초의 여성이 되다.",
      "ja": "ワレンチナ・テレシコワが宇宙に行った最初の女性となる。"
    }
  },
  {
    "id": "ranger-7-moon-images",
    "title": {
      "en": "Ranger 7's close-up Moon",
      "ko": "레인저 7호의 달 근접 영상",
      "ja": "レインジャー7号の月接近画像"
    },
    "category": "observation",
    "visual": "moon",
    "sources": [
      {
        "label": "NASA NSSDC · Planetary Exploration Timeline (historical reference)",
        "url": "https://nssdc.gsfc.nasa.gov/planetary/chronology.html"
      },
      {
        "label": "NASA · 60 Moments in NASA History (historical reference)",
        "url": "https://www.nasa.gov/specials/timeline/"
      }
    ],
    "year": 1964,
    "body": {
      "en": "Ranger 7 returns the first close-up photographs of the Moon's surface.",
      "ko": "레인저 7호가 달 표면을 처음으로 근접 촬영하다.",
      "ja": "レインジャー7号が月面を初めて接近撮影。"
    }
  },
  {
    "id": "leonov-mariner-4",
    "title": {
      "en": "Spacewalk and Mars close-up",
      "ko": "우주유영과 화성 근접 영상",
      "ja": "宇宙遊泳と火星接近画像"
    },
    "category": "mission",
    "visual": "mars",
    "sources": [
      {
        "label": "NASA NSSDC · Planetary Exploration Timeline (historical reference)",
        "url": "https://nssdc.gsfc.nasa.gov/planetary/chronology.html"
      },
      {
        "label": "NASA · 60 Moments in NASA History (historical reference)",
        "url": "https://www.nasa.gov/specials/timeline/"
      }
    ],
    "year": 1965,
    "body": {
      "en": "Alexei Leonov makes the first spacewalk; Mariner 4 returns the first close-up images of Mars.",
      "ko": "알렉세이 레오노프가 최초의 우주유영을 하다; 매리너 4호가 화성을 처음으로 근접 촬영하다.",
      "ja": "アレクセイ・レオーノフが初の船外活動(宇宙遊泳)を行う; マリナー4号が火星を初めて接近撮影。"
    }
  },
  {
    "id": "cosmic-microwave-background",
    "year": 1965,
    "title": {
      "en": "The cosmic microwave background",
      "ko": "우주 마이크로파 배경",
      "ja": "宇宙マイクロ波背景放射"
    },
    "body": {
      "en": "Arno Penzias and Robert Wilson publish an unexplained microwave excess, interpreted with Princeton researchers as relic radiation from the early universe.",
      "ko": "아르노 펜지어스와 로버트 윌슨이 설명되지 않는 마이크로파 초과 신호를 발표한다. 프린스턴 연구진과 함께 초기 우주의 잔존 복사로 해석한다.",
      "ja": "アーノ・ペンジアスとロバート・ウィルソンが説明のつかないマイクロ波の超過信号を発表。プリンストンの研究者と共に初期宇宙の残存放射と解釈する。"
    },
    "category": "discovery",
    "visual": "dish",
    "sources": [
      {
        "label": "Nobel Prize · Robert Wilson’s Nobel lecture",
        "url": "https://www.nobelprize.org/uploads/2018/06/wilson-lecture-1.pdf"
      }
    ],
    "detail": {
      "en": "The detection arose from measurements in 1964–1965; the landmark papers were published in 1965. The microwave background probes the universe when it became transparent.",
      "ko": "검출은 1964–1965년 측정에서 비롯되었으며 주요 논문은 1965년에 출판되었다. 마이크로파 배경은 우주가 투명해지던 시대를 탐구하는 자료다.",
      "ja": "検出は1964〜1965年の測定に基づき、主要論文は1965年に出版された。マイクロ波背景放射は宇宙が透明になった時代を調べる資料となる。"
    }
  },
  {
    "id": "luna9-gemini8-surveyor1",
    "title": {
      "en": "Landing and docking milestones",
      "ko": "연착륙과 도킹의 이정표",
      "ja": "軟着陸とドッキングの節目"
    },
    "category": "mission",
    "visual": "lander",
    "sources": [
      {
        "label": "NASA NSSDC · Planetary Exploration Timeline (historical reference)",
        "url": "https://nssdc.gsfc.nasa.gov/planetary/chronology.html"
      },
      {
        "label": "NASA · 60 Moments in NASA History (historical reference)",
        "url": "https://www.nasa.gov/specials/timeline/"
      }
    ],
    "year": 1966,
    "body": {
      "en": "Luna 9 makes the first soft landing on the Moon; Gemini 8 performs the first orbital docking; Surveyor 1 is the first US soft landing on the Moon.",
      "ko": "루나 9호가 달에 처음으로 연착륙하다; 제미니 8호가 최초의 궤도 도킹에 성공하다; 서베이어 1호가 미국 최초로 달에 연착륙하다.",
      "ja": "ルナ9号が月への初の軟着陸に成功; ジェミニ8号が初の軌道ドッキングを達成; サーベイヤー1号が米国初の月軟着陸。"
    }
  },
  {
    "id": "apollo1-venera4",
    "title": {
      "en": "Apollo 1 and Venera 4",
      "ko": "아폴로 1호와 베네라 4호",
      "ja": "アポロ1号とベネラ4号"
    },
    "category": "mission",
    "visual": "lander",
    "sources": [
      {
        "label": "NASA NSSDC · Planetary Exploration Timeline (historical reference)",
        "url": "https://nssdc.gsfc.nasa.gov/planetary/chronology.html"
      },
      {
        "label": "NASA · 60 Moments in NASA History (historical reference)",
        "url": "https://www.nasa.gov/specials/timeline/"
      }
    ],
    "year": 1967,
    "body": {
      "en": "The Apollo 1 fire kills three astronauts; Venera 4 is the first probe to enter another planet's atmosphere (Venus).",
      "ko": "아폴로 1호 화재로 우주비행사 3명이 사망하다; 베네라 4호가 다른 행성(금성)의 대기에 진입한 최초의 탐사선이 되다.",
      "ja": "アポロ1号の火災で宇宙飛行士3名が死亡; ベネラ4号が他の惑星(金星)の大気に突入した最初の探査機となる。"
    }
  },
  {
    "id": "apollo-8-earthrise",
    "title": {
      "en": "Apollo 8 and Earthrise",
      "ko": "아폴로 8호와 지구돋이",
      "ja": "アポロ8号と地球の出"
    },
    "category": "human",
    "visual": "earth",
    "sources": [
      {
        "label": "NASA · 60 Years and Counting: Human Spaceflight (historical reference)",
        "url": "https://www3.nasa.gov/specials/60counting/spaceflight.html"
      }
    ],
    "year": 1968,
    "body": {
      "en": "Apollo 8 is the first crewed mission to orbit the Moon, returning the famous 'Earthrise' photograph.",
      "ko": "아폴로 8호가 달 궤도를 돈 최초의 유인 임무가 되어 그 유명한 '지구돋이' 사진을 보내오다.",
      "ja": "アポロ8号が月を周回した初の有人ミッションとなり、有名な「地球の出」の写真を持ち帰る。"
    }
  },
  {
    "id": "apollo-lunar-landings",
    "title": {
      "en": "Apollo 11 and Apollo 12",
      "ko": "아폴로 11호·12호의 달 착륙",
      "ja": "アポロ11号・12号の月着陸"
    },
    "category": "human",
    "visual": "lander",
    "sources": [
      {
        "label": "NASA · 60 Years and Counting: Human Spaceflight (historical reference)",
        "url": "https://www3.nasa.gov/specials/60counting/spaceflight.html"
      }
    ],
    "year": 1969,
    "body": {
      "en": "Apollo 11 lands the first humans on the Moon (20 July); Apollo 12 follows with the second landing.",
      "ko": "아폴로 11호가 인류를 최초로 달에 착륙시키다(7월 20일); 아폴로 12호가 두 번째 착륙을 이어가다.",
      "ja": "アポロ11号が人類を初めて月に着陸させる(7月20日); アポロ12号が2度目の着陸を続ける。"
    }
  },
  {
    "id": "apollo13-luna16-lunokhod",
    "title": {
      "en": "Rescue, sample return and a rover",
      "ko": "구조·시료 귀환·달 로버",
      "ja": "救出・試料帰還・月面車"
    },
    "category": "mission",
    "visual": "moon",
    "sources": [
      {
        "label": "NASA NSSDC · Planetary Exploration Timeline (historical reference)",
        "url": "https://nssdc.gsfc.nasa.gov/planetary/chronology.html"
      },
      {
        "label": "NASA · 60 Moments in NASA History (historical reference)",
        "url": "https://www.nasa.gov/specials/timeline/"
      }
    ],
    "year": 1970,
    "body": {
      "en": "Apollo 13's Moon landing is aborted after an explosion, but the crew returns safely; Luna 16 makes the first robotic Moon-sample return; Lunokhod 1 is the first lunar rover.",
      "ko": "아폴로 13호가 폭발로 달 착륙을 포기하지만 승무원은 무사히 귀환하다; 루나 16호가 최초로 무인 달 시료를 회수하다; 루노호트 1호가 최초의 달 탐사차가 되다.",
      "ja": "アポロ13号は爆発で月着陸を断念するも乗員は無事帰還; ルナ16号が初の無人月サンプル回収を達成; ルノホート1号が初の月面ローバーとなる。"
    }
  },
  {
    "id": "salyut-mariner-apollo",
    "title": {
      "en": "Stations and planetary orbiters",
      "ko": "우주정거장과 행성 궤도선",
      "ja": "宇宙ステーションと惑星周回機"
    },
    "category": "mission",
    "visual": "station",
    "sources": [
      {
        "label": "NASA NSSDC · Planetary Exploration Timeline (historical reference)",
        "url": "https://nssdc.gsfc.nasa.gov/planetary/chronology.html"
      },
      {
        "label": "NASA · 60 Moments in NASA History (historical reference)",
        "url": "https://www.nasa.gov/specials/timeline/"
      }
    ],
    "year": 1971,
    "body": {
      "en": "Salyut 1 is the first space station; Mariner 9 is the first spacecraft to orbit another planet (Mars); Apollo 14 and 15 land on the Moon.",
      "ko": "살류트 1호가 최초의 우주정거장이 되다; 매리너 9호가 다른 행성(화성) 궤도를 돈 최초의 우주선이 되다; 아폴로 14호와 15호가 달에 착륙하다.",
      "ja": "サリュート1号が初の宇宙ステーションとなる; マリナー9号が他の惑星(火星)を周回した最初の宇宙機となる; アポロ14号と15号が月に着陸。"
    }
  },
  {
    "id": "last-apollo-landings-pioneer10",
    "title": {
      "en": "Apollo's final landings",
      "ko": "아폴로의 마지막 달 착륙",
      "ja": "アポロの最後の月着陸"
    },
    "category": "human",
    "visual": "moon",
    "sources": [
      {
        "label": "NASA · 60 Years and Counting: Human Spaceflight (historical reference)",
        "url": "https://www3.nasa.gov/specials/60counting/spaceflight.html"
      }
    ],
    "year": 1972,
    "body": {
      "en": "Apollo 16 and 17 make the final crewed Moon landings — the last humans on the Moon to date; Pioneer 10 launches toward Jupiter.",
      "ko": "아폴로 16호와 17호가 마지막 유인 달 착륙을 수행하다 — 지금까지 달에 간 마지막 인류; 파이오니어 10호가 목성을 향해 발사되다.",
      "ja": "アポロ16号と17号が最後の有人月着陸を実施 — 現在までで月に立った最後の人類; パイオニア10号が木星へ向けて打ち上げられる。"
    }
  },
  {
    "id": "pioneer10-skylab",
    "title": {
      "en": "Jupiter encounter and Skylab",
      "ko": "목성 접근과 스카이랩",
      "ja": "木星接近とスカイラブ"
    },
    "category": "mission",
    "visual": "station",
    "sources": [
      {
        "label": "NASA NSSDC · Planetary Exploration Timeline (historical reference)",
        "url": "https://nssdc.gsfc.nasa.gov/planetary/chronology.html"
      },
      {
        "label": "NASA · 60 Moments in NASA History (historical reference)",
        "url": "https://www.nasa.gov/specials/timeline/"
      }
    ],
    "year": 1973,
    "body": {
      "en": "Pioneer 10 makes the first flyby of Jupiter; Skylab, the first US space station, is launched.",
      "ko": "파이오니어 10호가 목성을 최초로 근접 통과하다; 미국 최초의 우주정거장 스카이랩이 발사되다.",
      "ja": "パイオニア10号が木星を初めて接近通過; 米国初の宇宙ステーション「スカイラブ」が打ち上げられる。"
    }
  },
  {
    "id": "mariner-10-mercury",
    "title": {
      "en": "Mariner 10 reaches Mercury",
      "ko": "매리너 10호의 수성 접근",
      "ja": "マリナー10号の水星接近"
    },
    "category": "mission",
    "visual": "orbit",
    "sources": [
      {
        "label": "NASA NSSDC · Planetary Exploration Timeline (historical reference)",
        "url": "https://nssdc.gsfc.nasa.gov/planetary/chronology.html"
      },
      {
        "label": "NASA · 60 Moments in NASA History (historical reference)",
        "url": "https://www.nasa.gov/specials/timeline/"
      }
    ],
    "year": 1974,
    "body": {
      "en": "Mariner 10 performs the first gravity-assist manoeuvre and the first flyby of Mercury.",
      "ko": "매리너 10호가 최초의 중력 보조(스윙바이) 기동과 최초의 수성 근접 통과를 수행하다.",
      "ja": "マリナー10号が初の重力アシスト(スイングバイ)と初の水星接近通過を実施。"
    }
  },
  {
    "id": "apollo-soyuz-venera9",
    "title": {
      "en": "Apollo–Soyuz and Venus' surface",
      "ko": "아폴로–소유스와 금성 표면",
      "ja": "アポロ・ソユーズと金星の地表"
    },
    "category": "mission",
    "visual": "lander",
    "sources": [
      {
        "label": "NASA NSSDC · Planetary Exploration Timeline (historical reference)",
        "url": "https://nssdc.gsfc.nasa.gov/planetary/chronology.html"
      },
      {
        "label": "NASA · 60 Moments in NASA History (historical reference)",
        "url": "https://www.nasa.gov/specials/timeline/"
      }
    ],
    "year": 1975,
    "body": {
      "en": "Apollo–Soyuz is the first joint US–Soviet crewed flight; Venera 9 returns the first photographs from the surface of Venus.",
      "ko": "아폴로-소유즈가 최초의 미·소 공동 유인 비행이 되다; 베네라 9호가 금성 표면을 처음으로 촬영해 보내오다.",
      "ja": "アポロ・ソユーズが初の米ソ共同有人飛行となる; ベネラ9号が金星表面を初めて撮影して送る。"
    }
  },
  {
    "id": "viking-mars-landings",
    "title": {
      "en": "Viking's Mars landings",
      "ko": "바이킹의 화성 착륙",
      "ja": "ヴァイキングの火星着陸"
    },
    "category": "mission",
    "visual": "lander",
    "sources": [
      {
        "label": "NASA NSSDC · Planetary Exploration Timeline (historical reference)",
        "url": "https://nssdc.gsfc.nasa.gov/planetary/chronology.html"
      },
      {
        "label": "NASA · 60 Moments in NASA History (historical reference)",
        "url": "https://www.nasa.gov/specials/timeline/"
      }
    ],
    "year": 1976,
    "body": {
      "en": "Viking 1 and 2 become the first successful Mars landers, returning the first images from the Martian surface.",
      "ko": "바이킹 1호와 2호가 최초로 화성 착륙에 성공하여 화성 표면의 첫 사진을 보내오다.",
      "ja": "バイキング1号と2号が初の火星着陸に成功し、火星表面からの最初の画像を送る。"
    }
  },
  {
    "id": "voyager-2-launch",
    "year": 1977,
    "title": {
      "en": "Voyager 2 launches",
      "ko": "보이저 2호 발사",
      "ja": "ボイジャー2号の打ち上げ"
    },
    "body": {
      "en": "Voyager 2 launches before Voyager 1. Carrying a Golden Record, it later visits Jupiter, Saturn, Uranus and Neptune.",
      "ko": "보이저 2호가 보이저 1호보다 먼저 발사된다. 골든 레코드를 싣고 이후 목성·토성·천왕성·해왕성에 접근한다.",
      "ja": "ボイジャー2号が1号より先に打ち上げられる。ゴールデンレコードを搭載し、後に木星・土星・天王星・海王星を訪れる。"
    },
    "category": "mission",
    "visual": "voyager",
    "sources": [
      {
        "label": "NASA Goddard · Voyager mission chronology",
        "url": "https://voyager.gsfc.nasa.gov/mission.html"
      }
    ],
    "date": "1977-08-20"
  },
  {
    "id": "voyager-1-launch",
    "year": 1977,
    "title": {
      "en": "Voyager 1 launches",
      "ko": "보이저 1호 발사",
      "ja": "ボイジャー1号の打ち上げ"
    },
    "body": {
      "en": "Voyager 1 launches to study Jupiter and Saturn. Its radio dish, scientific instruments and nuclear power generators support decades of exploration.",
      "ko": "보이저 1호가 목성과 토성 연구를 위해 발사된다. 통신 안테나·과학 기기·방사성동위원소 전원이 수십 년의 탐사를 뒷받침한다.",
      "ja": "ボイジャー1号が木星と土星の研究に向け打ち上げられる。通信アンテナ・科学機器・放射性同位体電源が数十年の探査を支える。"
    },
    "category": "mission",
    "visual": "voyager",
    "sources": [
      {
        "label": "NASA · Voyager 1 launch",
        "url": "https://www.nasa.gov/history/45-years-ago-voyager-1-begins-its-epic-journey-to-the-outer-planets-and-beyond/"
      }
    ],
    "date": "1977-09-05",
    "detail": {
      "en": "A 3.7 m high-gain antenna links the probe to the Deep Space Network. Three radioisotope thermoelectric generators supply electricity far from sunlight.",
      "ko": "지름 3.7 m 고이득 안테나가 심우주통신망으로 관측 자료를 보낸다. 세 대의 방사성동위원소 열전발전기가 햇빛이 희박한 먼 곳에서 전기를 공급한다.",
      "ja": "直径3.7 mの高利得アンテナが深宇宙通信網にデータを送る。三基の放射性同位体熱電発電機が太陽光の乏しい遠方で電力を供給する。"
    }
  },
  {
    "id": "voyager-jupiter-pioneer11-saturn",
    "title": {
      "en": "Jupiter and Saturn encounters",
      "ko": "목성과 토성 접근",
      "ja": "木星と土星への接近"
    },
    "category": "mission",
    "visual": "saturn",
    "sources": [
      {
        "label": "NASA Goddard · Voyager mission chronology",
        "url": "https://voyager.gsfc.nasa.gov/mission.html"
      }
    ],
    "year": 1979,
    "body": {
      "en": "Voyager 1 flies by Jupiter; Pioneer 11 makes the first flyby of Saturn.",
      "ko": "보이저 1호가 목성을 근접 통과하다; 파이오니어 11호가 토성을 최초로 근접 통과하다.",
      "ja": "ボイジャー1号が木星を接近通過; パイオニア11号が土星を初めて接近通過。"
    }
  },
  {
    "id": "voyager1-saturn",
    "title": {
      "en": "Voyager 1 at Saturn",
      "ko": "보이저 1호의 토성 접근",
      "ja": "ボイジャー1号の土星接近"
    },
    "category": "mission",
    "visual": "saturn",
    "sources": [
      {
        "label": "NASA · Voyager 1",
        "url": "https://science.nasa.gov/mission/voyager/voyager-1/"
      }
    ],
    "year": 1980,
    "body": {
      "en": "Voyager 1 flies by Saturn, sending back detailed views of its rings.",
      "ko": "보이저 1호가 토성을 근접 통과하며 고리의 상세한 모습을 보내오다.",
      "ja": "ボイジャー1号が土星を接近通過し、環の詳細な姿を送る。"
    }
  },
  {
    "id": "shuttle-columbia-sts1",
    "title": {
      "en": "Columbia and the shuttle era",
      "ko": "컬럼비아와 왕복선 시대",
      "ja": "コロンビアとシャトル時代"
    },
    "category": "human",
    "visual": "rocket",
    "sources": [
      {
        "label": "NASA · 60 Years and Counting: Human Spaceflight (historical reference)",
        "url": "https://www3.nasa.gov/specials/60counting/spaceflight.html"
      }
    ],
    "year": 1981,
    "body": {
      "en": "Space Shuttle Columbia makes the first flight of a reusable orbital spacecraft.",
      "ko": "우주왕복선 컬럼비아가 재사용 가능한 궤도 우주선의 첫 비행을 하다.",
      "ja": "スペースシャトル「コロンビア」が再使用可能な軌道宇宙船の初飛行を行う。"
    }
  },
  {
    "id": "pioneer10-neptune-orbit-challenger",
    "title": {
      "en": "Beyond Neptune's orbit",
      "ko": "해왕성 궤도 거리 너머로",
      "ja": "海王星の軌道距離の彼方へ"
    },
    "category": "mission",
    "visual": "voyager",
    "sources": [
      {
        "label": "NASA NSSDC · Planetary Exploration Timeline (historical reference)",
        "url": "https://nssdc.gsfc.nasa.gov/planetary/chronology.html"
      },
      {
        "label": "NASA · 60 Moments in NASA History (historical reference)",
        "url": "https://www.nasa.gov/specials/timeline/"
      }
    ],
    "year": 1983,
    "body": {
      "en": "Pioneer 10 becomes the first spacecraft to travel beyond Neptune's orbit; the Space Shuttle Challenger makes its maiden flight.",
      "ko": "파이오니어 10호가 해왕성 궤도 밖으로 나간 최초의 우주선이 되다; 우주왕복선 챌린저가 첫 비행을 하다.",
      "ja": "パイオニア10号が海王星の軌道の外へ出た最初の宇宙機となる; スペースシャトル「チャレンジャー」が初飛行。"
    }
  },
  {
    "id": "mccandless-untethered-spacewalk",
    "title": {
      "en": "An untethered spacewalk",
      "ko": "생명줄 없는 우주유영",
      "ja": "命綱なしの宇宙遊泳"
    },
    "category": "human",
    "visual": "earth",
    "sources": [
      {
        "label": "NASA · 60 Years and Counting: Human Spaceflight (historical reference)",
        "url": "https://www3.nasa.gov/specials/60counting/spaceflight.html"
      }
    ],
    "year": 1984,
    "body": {
      "en": "Bruce McCandless makes the first untethered spacewalk, flying free with a jet backpack.",
      "ko": "브루스 매캔들리스가 제트 배낭을 메고 줄 없이 비행하는 최초의 무선 우주유영을 하다.",
      "ja": "ブルース・マッカンドレスが、ジェット噴射式の装置を背負い命綱なしの初の船外活動を行う。"
    }
  },
  {
    "id": "uranus-challenger-mir",
    "title": {
      "en": "Uranus, Challenger and Mir",
      "ko": "천왕성·챌린저·미르",
      "ja": "天王星・チャレンジャー・ミール"
    },
    "category": "mission",
    "visual": "station",
    "sources": [
      {
        "label": "NASA Goddard · Voyager mission chronology",
        "url": "https://voyager.gsfc.nasa.gov/mission.html"
      }
    ],
    "year": 1986,
    "body": {
      "en": "Voyager 2 makes the first flyby of Uranus; the Challenger disaster kills seven astronauts; the first module of the Mir space station is launched.",
      "ko": "보이저 2호가 천왕성을 최초로 근접 통과하다; 챌린저 참사로 우주비행사 7명이 사망하다; 우주정거장 미르의 첫 모듈이 발사되다.",
      "ja": "ボイジャー2号が天王星を初めて接近通過; チャレンジャー号の事故で宇宙飛行士7名が死亡; 宇宙ステーション「ミール」の最初のモジュールが打ち上げられる。"
    }
  },
  {
    "id": "voyager2-neptune",
    "title": {
      "en": "Voyager 2 at Neptune",
      "ko": "보이저 2호의 해왕성 접근",
      "ja": "ボイジャー2号の海王星接近"
    },
    "category": "mission",
    "visual": "voyager",
    "sources": [
      {
        "label": "NASA Goddard · Voyager mission chronology",
        "url": "https://voyager.gsfc.nasa.gov/mission.html"
      }
    ],
    "year": 1989,
    "body": {
      "en": "Voyager 2 makes the first — and so far only — flyby of Neptune.",
      "ko": "보이저 2호가 처음이자 지금까지 유일한 해왕성 근접 통과를 하다.",
      "ja": "ボイジャー2号が初の、そして現在まで唯一の海王星接近通過を行う。"
    }
  },
  {
    "id": "pale-blue-dot",
    "year": 1990,
    "title": {
      "en": "Pale Blue Dot",
      "ko": "창백한 푸른 점",
      "ja": "ペイル・ブルー・ドット"
    },
    "body": {
      "en": "Voyager 1 looks back and photographs Earth from about six billion kilometres away, placing our home within a portrait of the Solar System.",
      "ko": "보이저 1호가 약 60억 km 떨어진 곳에서 지구를 돌아보며 촬영한다. 우리의 행성은 태양계 가족사진 속 작은 점으로 담긴다.",
      "ja": "ボイジャー1号が約60億 km先から地球を振り返って撮影する。私たちの惑星は太陽系の家族写真の小さな点として写る。"
    },
    "category": "observation",
    "visual": "earth",
    "sources": [
      {
        "label": "NASA · Pale Blue Dot",
        "url": "https://science.nasa.gov/mission/voyager/voyager-1s-pale-blue-dot/"
      }
    ],
    "date": "1990-02-14"
  },
  {
    "id": "hubble-launch",
    "year": 1990,
    "title": {
      "en": "The Hubble Space Telescope launches",
      "ko": "허블 우주망원경 발사",
      "ja": "ハッブル宇宙望遠鏡の打ち上げ"
    },
    "body": {
      "en": "Discovery launches Hubble on 24 April. Above the atmosphere, it observes the universe in ultraviolet, visible and near-infrared light.",
      "ko": "디스커버리가 4월 24일 허블을 발사한다. 대기권 위에서 허블은 자외선·가시광선·근적외선으로 우주를 관측한다.",
      "ja": "ディスカバリーが4月24日にハッブルを打ち上げる。大気の上で紫外線・可視光・近赤外線により宇宙を観測する。"
    },
    "category": "observation",
    "visual": "telescope",
    "sources": [
      {
        "label": "NASA · Hubble",
        "url": "https://science.nasa.gov/mission/hubble/"
      }
    ],
    "date": "1990-04-24"
  },
  {
    "id": "galileo-gaspra",
    "title": {
      "en": "Galileo encounters Gaspra",
      "ko": "갈릴레오가 가스프라에 접근하다",
      "ja": "ガリレオがガスプラに接近"
    },
    "category": "mission",
    "visual": "dish",
    "sources": [
      {
        "label": "NASA NSSDC · Planetary Exploration Timeline (historical reference)",
        "url": "https://nssdc.gsfc.nasa.gov/planetary/chronology.html"
      },
      {
        "label": "NASA · 60 Moments in NASA History (historical reference)",
        "url": "https://www.nasa.gov/specials/timeline/"
      }
    ],
    "year": 1991,
    "body": {
      "en": "The Galileo probe makes the first close flyby of an asteroid (951 Gaspra).",
      "ko": "갈릴레오 탐사선이 소행성(951 가스프라)을 최초로 근접 통과하다.",
      "ja": "ガリレオ探査機が小惑星(951 ガスプラ)を初めて接近通過。"
    }
  },
  {
    "id": "pulsar-exoplanets",
    "title": {
      "en": "The first confirmed exoplanets",
      "ko": "처음 확인된 외계행성",
      "ja": "初めて確認された系外惑星"
    },
    "category": "discovery",
    "visual": "orbit",
    "sources": [
      {
        "label": "NASA · Exoplanet discoveries",
        "url": "https://science.nasa.gov/exoplanets/discoveries/"
      }
    ],
    "year": 1992,
    "body": {
      "en": "Astronomers confirm the first exoplanets, orbiting the pulsar PSR B1257+12.",
      "ko": "천문학자들이 펄서 PSR B1257+12를 도는 최초의 외계행성을 확인하다.",
      "ja": "天文学者がパルサー PSR B1257+12 を回る最初の系外惑星を確認。"
    }
  },
  {
    "id": "hubble-first-servicing",
    "title": {
      "en": "Restoring Hubble's vision",
      "ko": "허블의 시력을 되찾다",
      "ja": "ハッブルの視力を取り戻す"
    },
    "category": "human",
    "visual": "telescope",
    "sources": [
      {
        "label": "NASA · Hubble",
        "url": "https://science.nasa.gov/mission/hubble/"
      }
    ],
    "year": 1993,
    "body": {
      "en": "Astronauts repair Hubble's flawed optics on the first servicing mission, restoring its vision.",
      "ko": "우주비행사들이 첫 정비 임무에서 허블의 결함 있는 광학계를 수리해 시야를 되찾아 주다.",
      "ja": "宇宙飛行士が初の補修ミッションでハッブルの欠陥のある光学系を修理し、視力を取り戻させる。"
    }
  },
  {
    "id": "shoemaker-levy9-jupiter",
    "title": {
      "en": "Shoemaker–Levy 9 hits Jupiter",
      "ko": "슈메이커–레비 9의 목성 충돌",
      "ja": "シューメーカー・レヴィ第9彗星の木星衝突"
    },
    "category": "observation",
    "visual": "orbit",
    "sources": [
      {
        "label": "NASA NSSDC · Planetary Exploration Timeline (historical reference)",
        "url": "https://nssdc.gsfc.nasa.gov/planetary/chronology.html"
      },
      {
        "label": "NASA · 60 Moments in NASA History (historical reference)",
        "url": "https://www.nasa.gov/specials/timeline/"
      }
    ],
    "year": 1994,
    "body": {
      "en": "Comet Shoemaker–Levy 9 collides with Jupiter — the first directly observed collision between two Solar System bodies.",
      "ko": "슈메이커-레비 9 혜성이 목성과 충돌하다 — 태양계 천체 간 충돌을 직접 관측한 최초의 사례.",
      "ja": "シューメーカー・レヴィ第9彗星が木星に衝突 — 太陽系の天体同士の衝突を直接観測した初の事例。"
    }
  },
  {
    "id": "polyakov-galileo-51pegasi",
    "title": {
      "en": "Long stays, Jupiter and exoplanets",
      "ko": "장기 체류·목성·외계행성",
      "ja": "長期滞在・木星・系外惑星"
    },
    "category": "discovery",
    "visual": "orbit",
    "sources": [
      {
        "label": "NASA · Exoplanet discoveries",
        "url": "https://science.nasa.gov/exoplanets/discoveries/"
      }
    ],
    "year": 1995,
    "body": {
      "en": "Cosmonaut Valeri Polyakov completes a record 437-day spaceflight; Galileo arrives at Jupiter; 51 Pegasi b is found — the first exoplanet around a Sun-like star.",
      "ko": "우주비행사 발레리 폴랴코프가 437일 우주 체류 기록을 세우다; 갈릴레오가 목성에 도착하다; 51 페가시 b가 발견되다 — 태양 같은 항성을 도는 최초의 외계행성.",
      "ja": "宇宙飛行士ワレリー・ポリャコフが437日間の宇宙滞在記録を達成; ガリレオが木星に到着; 51ペガスス座b が発見される — 太陽に似た恒星を回る初の系外惑星。"
    }
  },
  {
    "id": "mars-global-surveyor-near",
    "title": {
      "en": "Mars Global Surveyor and NEAR",
      "ko": "마스 글로벌 서베이어와 NEAR",
      "ja": "マーズ・グローバル・サーベイヤーとNEAR"
    },
    "category": "mission",
    "visual": "mars",
    "sources": [
      {
        "label": "NASA NSSDC · Planetary Exploration Timeline (historical reference)",
        "url": "https://nssdc.gsfc.nasa.gov/planetary/chronology.html"
      },
      {
        "label": "NASA · 60 Moments in NASA History (historical reference)",
        "url": "https://www.nasa.gov/specials/timeline/"
      }
    ],
    "year": 1996,
    "body": {
      "en": "Mars Global Surveyor and the NEAR mission launch toward Mars and a near-Earth asteroid.",
      "ko": "마스 글로벌 서베이어와 NEAR 탐사선이 각각 화성과 지구접근 소행성을 향해 발사되다.",
      "ja": "マーズ・グローバル・サーベイヤーと NEAR 探査機が、それぞれ火星と地球近傍小惑星へ向けて打ち上げられる。"
    }
  },
  {
    "id": "pathfinder-sojourner",
    "title": {
      "en": "Sojourner explores Mars",
      "ko": "소저너의 화성 탐사",
      "ja": "ソジャーナの火星探査"
    },
    "category": "mission",
    "visual": "lander",
    "sources": [
      {
        "label": "NASA NSSDC · Planetary Exploration Timeline (historical reference)",
        "url": "https://nssdc.gsfc.nasa.gov/planetary/chronology.html"
      },
      {
        "label": "NASA · 60 Moments in NASA History (historical reference)",
        "url": "https://www.nasa.gov/specials/timeline/"
      }
    ],
    "year": 1997,
    "body": {
      "en": "Mars Pathfinder delivers Sojourner, the first operational rover to explore Mars.",
      "ko": "마스 패스파인더가 화성을 탐사한 최초의 실용 로버 소저너를 내려놓다.",
      "ja": "マーズ・パスファインダーが、火星を探査した初の実用ローバー「ソジャーナ」を送り届ける。"
    }
  },
  {
    "id": "iss-zarya-launch",
    "title": {
      "en": "ISS construction begins",
      "ko": "ISS 건설의 시작",
      "ja": "ISS建設の始まり"
    },
    "category": "mission",
    "visual": "station",
    "sources": [
      {
        "label": "NASA · 60 Years and Counting: Human Spaceflight (historical reference)",
        "url": "https://www3.nasa.gov/specials/60counting/spaceflight.html"
      }
    ],
    "year": 1998,
    "body": {
      "en": "The first module of the International Space Station (Zarya) is launched, beginning ISS construction.",
      "ko": "국제우주정거장(ISS)의 첫 모듈 자랴가 발사되어 ISS 건설이 시작되다.",
      "ja": "国際宇宙ステーション(ISS)の最初のモジュール「ザーリャ」が打ち上げられ、ISS の建設が始まる。"
    }
  },
  {
    "id": "accelerating-universe",
    "year": 1998,
    "title": {
      "en": "Cosmic expansion is accelerating",
      "ko": "가속하는 우주 팽창",
      "ja": "加速する宇宙膨張"
    },
    "body": {
      "en": "Two independent supernova teams report evidence that cosmic expansion is accelerating, transforming the role of dark energy in cosmology.",
      "ko": "독립적인 두 초신성 연구팀이 우주 팽창이 가속한다는 증거를 보고하여 우주론에서 암흑에너지의 역할을 바꾼다.",
      "ja": "独立した二つの超新星研究チームが宇宙膨張の加速を示す証拠を報告し、宇宙論における暗黒エネルギーの役割を変える。"
    },
    "category": "discovery",
    "visual": "orbit",
    "sources": [
      {
        "label": "High-Z Supernova Team · Original discovery paper",
        "url": "https://arxiv.org/abs/astro-ph/9805201"
      }
    ]
  },
  {
    "id": "chandra-launch",
    "title": {
      "en": "Chandra's X-ray universe",
      "ko": "찬드라가 보는 X선 우주",
      "ja": "チャンドラが見るX線宇宙"
    },
    "category": "observation",
    "visual": "telescope",
    "sources": [
      {
        "label": "NASA · Chandra",
        "url": "https://science.nasa.gov/mission/chandra/"
      }
    ],
    "year": 1999,
    "body": {
      "en": "The Chandra X-ray Observatory is launched to study the high-energy universe.",
      "ko": "찬드라 X선 관측위성이 고에너지 우주를 연구하기 위해 발사되다.",
      "ja": "チャンドラX線観測衛星が、高エネルギーの宇宙を研究するために打ち上げられる。"
    }
  },
  {
    "id": "iss-permanent-crew",
    "title": {
      "en": "Continuous life in orbit",
      "ko": "궤도에서 이어지는 거주",
      "ja": "軌道上で続く居住"
    },
    "category": "human",
    "visual": "station",
    "sources": [
      {
        "label": "NASA · 60 Years and Counting: Human Spaceflight (historical reference)",
        "url": "https://www3.nasa.gov/specials/60counting/spaceflight.html"
      }
    ],
    "year": 2000,
    "body": {
      "en": "The ISS is permanently crewed for the first time, beginning an unbroken human presence in orbit.",
      "ko": "ISS에 처음으로 상주 승무원이 들어가 궤도에서 인류의 끊임없는 거주가 시작되다.",
      "ja": "ISS に初めて常駐クルーが入り、軌道上での途切れない有人滞在が始まる。"
    }
  },
  {
    "id": "tito-mars-odyssey",
    "title": {
      "en": "Space tourism and Mars Odyssey",
      "ko": "우주 관광과 마스 오디세이",
      "ja": "宇宙旅行とマーズ・オデッセイ"
    },
    "category": "mission",
    "visual": "mars",
    "sources": [
      {
        "label": "NASA NSSDC · Planetary Exploration Timeline (historical reference)",
        "url": "https://nssdc.gsfc.nasa.gov/planetary/chronology.html"
      },
      {
        "label": "NASA · 60 Moments in NASA History (historical reference)",
        "url": "https://www.nasa.gov/specials/timeline/"
      }
    ],
    "year": 2001,
    "body": {
      "en": "Dennis Tito becomes the first paying space tourist, visiting the ISS; Mars Odyssey launches.",
      "ko": "데니스 티토가 돈을 내고 우주를 여행한 최초의 관광객이 되어 ISS를 방문하다; 마스 오디세이가 발사되다.",
      "ja": "デニス・チトーが料金を支払った初の宇宙旅行者として ISS を訪れる; マーズ・オデッセイが打ち上げられる。"
    }
  },
  {
    "id": "columbia-shenzhou5",
    "title": {
      "en": "Columbia and Shenzhou 5",
      "ko": "컬럼비아와 선저우 5호",
      "ja": "コロンビアと神舟5号"
    },
    "category": "human",
    "visual": "rocket",
    "sources": [
      {
        "label": "NASA · 60 Years and Counting: Human Spaceflight (historical reference)",
        "url": "https://www3.nasa.gov/specials/60counting/spaceflight.html"
      }
    ],
    "year": 2003,
    "body": {
      "en": "The Space Shuttle Columbia disaster kills seven astronauts; China becomes the third nation to launch a human into orbit independently (Yang Liwei).",
      "ko": "우주왕복선 컬럼비아 참사로 우주비행사 7명이 사망하다; 중국이 독자적으로 인간을 궤도에 올린 세 번째 국가가 되다(양리웨이).",
      "ja": "スペースシャトル「コロンビア」の事故で宇宙飛行士7名が死亡; 中国が独自に人間を軌道へ送った3番目の国となる(楊利偉)。"
    }
  },
  {
    "id": "mars-rovers-cassini-spaceshipone",
    "title": {
      "en": "Rovers, Saturn and private flight",
      "ko": "화성 로버·토성·민간 비행",
      "ja": "火星探査車・土星・民間飛行"
    },
    "category": "mission",
    "visual": "saturn",
    "sources": [
      {
        "label": "NASA · Cassini",
        "url": "https://science.nasa.gov/mission/cassini/"
      }
    ],
    "year": 2004,
    "body": {
      "en": "The rovers Spirit and Opportunity land on Mars; Cassini arrives at Saturn; SpaceShipOne makes the first crewed private spaceflight.",
      "ko": "탐사 로버 스피릿과 오퍼튜니티가 화성에 착륙하다; 카시니가 토성에 도착하다; 스페이스십원이 최초의 민간 유인 우주비행을 하다.",
      "ja": "探査ローバーのスピリットとオポチュニティが火星に着陸; カッシーニが土星に到着; スペースシップワンが初の民間有人宇宙飛行を達成。"
    }
  },
  {
    "id": "huygens-titan-landing",
    "title": {
      "en": "Huygens lands on Titan",
      "ko": "하위헌스의 타이탄 착륙",
      "ja": "ホイヘンスのタイタン着陸"
    },
    "category": "mission",
    "visual": "lander",
    "sources": [
      {
        "label": "NASA · Cassini",
        "url": "https://science.nasa.gov/mission/cassini/"
      }
    ],
    "year": 2005,
    "body": {
      "en": "The Huygens probe lands on Saturn's moon Titan — the first landing in the outer Solar System.",
      "ko": "하위헌스 탐사선이 토성의 위성 타이탄에 착륙하다 — 외태양계에서의 최초 착륙.",
      "ja": "ホイヘンス・プローブが土星の衛星タイタンに着陸 — 外太陽系における初の着陸。"
    }
  },
  {
    "id": "new-horizons-pluto-definition",
    "title": {
      "en": "New Horizons and Pluto",
      "ko": "뉴호라이즌스와 명왕성",
      "ja": "ニューホライズンズと冥王星"
    },
    "category": "mission",
    "visual": "dish",
    "sources": [
      {
        "label": "NASA · New Horizons",
        "url": "https://science.nasa.gov/mission/new-horizons/"
      }
    ],
    "year": 2006,
    "body": {
      "en": "New Horizons launches toward Pluto; that same year, Pluto is reclassified as a dwarf planet.",
      "ko": "뉴호라이즌스가 명왕성을 향해 발사되다; 같은 해 명왕성이 왜소행성으로 재분류되다.",
      "ja": "ニューホライズンズが冥王星へ向けて打ち上げられる; 同年、冥王星が準惑星に再分類される。"
    }
  },
  {
    "id": "phoenix-falcon1",
    "title": {
      "en": "Martian ice and Falcon 1",
      "ko": "화성 얼음과 팰컨 1",
      "ja": "火星の氷とファルコン1"
    },
    "category": "discovery",
    "visual": "mars",
    "sources": [
      {
        "label": "NASA NSSDC · Planetary Exploration Timeline (historical reference)",
        "url": "https://nssdc.gsfc.nasa.gov/planetary/chronology.html"
      },
      {
        "label": "NASA · 60 Moments in NASA History (historical reference)",
        "url": "https://www.nasa.gov/specials/timeline/"
      }
    ],
    "year": 2008,
    "body": {
      "en": "Phoenix confirms water ice just beneath the surface of Mars; SpaceX's Falcon 1 becomes the first privately developed liquid-fuelled rocket to reach orbit.",
      "ko": "피닉스 착륙선이 화성 표면 바로 아래의 물 얼음을 확인하다; 스페이스X의 팰컨 1이 궤도에 도달한 최초의 민간 개발 액체연료 로켓이 되다.",
      "ja": "フェニックスが火星の地表直下の水の氷を確認; スペースXのファルコン1が、軌道に到達した初の民間開発の液体燃料ロケットとなる。"
    }
  },
  {
    "id": "kepler-hubble-servicing",
    "title": {
      "en": "Kepler and Hubble's final servicing",
      "ko": "케플러와 허블의 마지막 정비",
      "ja": "ケプラーとハッブルの最後の補修"
    },
    "category": "observation",
    "visual": "telescope",
    "sources": [
      {
        "label": "NASA · Hubble",
        "url": "https://science.nasa.gov/mission/hubble/"
      }
    ],
    "year": 2009,
    "body": {
      "en": "The Kepler Space Telescope launches to hunt for exoplanets; astronauts complete Hubble's final servicing mission.",
      "ko": "케플러 우주망원경이 외계행성을 찾기 위해 발사되다; 우주비행사들이 허블의 마지막 정비 임무를 완수하다.",
      "ja": "ケプラー宇宙望遠鏡が系外惑星を探すために打ち上げられる; 宇宙飛行士がハッブルの最後の補修ミッションを完了。"
    }
  },
  {
    "id": "hayabusa-dragon",
    "title": {
      "en": "Hayabusa and Dragon return",
      "ko": "하야부사와 드래건의 귀환",
      "ja": "はやぶさとドラゴンの帰還"
    },
    "category": "mission",
    "visual": "dish",
    "sources": [
      {
        "label": "NASA NSSDC · Planetary Exploration Timeline (historical reference)",
        "url": "https://nssdc.gsfc.nasa.gov/planetary/chronology.html"
      },
      {
        "label": "NASA · 60 Moments in NASA History (historical reference)",
        "url": "https://www.nasa.gov/specials/timeline/"
      }
    ],
    "year": 2010,
    "body": {
      "en": "Japan's Hayabusa returns the first samples from an asteroid (Itokawa); SpaceX's Dragon becomes the first commercial spacecraft recovered from orbit.",
      "ko": "일본의 하야부사가 소행성(이토카와)에서 최초로 시료를 채취해 귀환하다; 스페이스X의 드래건이 궤도에서 회수된 최초의 민간 우주선이 되다.",
      "ja": "日本の「はやぶさ」が小惑星(イトカワ)から初めて試料を持ち帰る; スペースXのドラゴンが軌道から回収された初の商業宇宙船となる。"
    }
  },
  {
    "id": "shuttle-messenger-juno",
    "title": {
      "en": "Shuttle farewell and new orbiters",
      "ko": "왕복선의 퇴장과 새 궤도선",
      "ja": "シャトルの退役と新たな周回機"
    },
    "category": "mission",
    "visual": "rocket",
    "sources": [
      {
        "label": "NASA · Juno",
        "url": "https://science.nasa.gov/mission/juno/"
      }
    ],
    "year": 2011,
    "body": {
      "en": "The Space Shuttle programme ends after 30 years; MESSENGER becomes the first spacecraft to orbit Mercury; Juno launches toward Jupiter.",
      "ko": "30년에 걸친 우주왕복선 계획이 종료되다; 메신저가 수성 궤도를 돈 최초의 우주선이 되다; 주노가 목성을 향해 발사되다.",
      "ja": "30年に及んだスペースシャトル計画が終了; メッセンジャーが水星を周回した最初の宇宙機となる; ジュノーが木星へ向けて打ち上げられる。"
    }
  },
  {
    "id": "curiosity-mars-landing",
    "year": 2012,
    "title": {
      "en": "Curiosity lands in Gale Crater",
      "ko": "큐리오시티의 게일 분화구 착륙",
      "ja": "キュリオシティのゲール・クレーター着陸"
    },
    "body": {
      "en": "Curiosity lands using a sky crane and investigates rocks and past habitable environments in Gale Crater.",
      "ko": "큐리오시티가 스카이 크레인으로 화성에 착륙하여 게일 분화구의 암석과 과거 생명체 서식 가능 환경을 조사한다.",
      "ja": "キュリオシティがスカイクレーンで火星に着陸し、ゲール・クレーターの岩石と過去の生命居住可能環境を調べる。"
    },
    "category": "mission",
    "visual": "lander",
    "sources": [
      {
        "label": "NASA · Curiosity",
        "url": "https://science.nasa.gov/mission/msl-curiosity/"
      }
    ],
    "date": "2012-08-06"
  },
  {
    "id": "voyager-1-heliopause",
    "year": 2012,
    "title": {
      "en": "Voyager 1 crosses the heliopause",
      "ko": "보이저 1호가 태양권계면을 넘다",
      "ja": "ボイジャー1号がヘリオポーズを越える"
    },
    "body": {
      "en": "Voyager 1 crosses the heliopause on 25 August, entering interstellar space beyond the solar-wind bubble. The Sun’s gravitational influence continues beyond this boundary.",
      "ko": "보이저 1호가 8월 25일 태양권계면을 넘어 태양풍 영역 바깥의 성간 공간으로 들어간다. 태양의 중력은 이 경계 너머에서도 작용한다.",
      "ja": "ボイジャー1号が8月25日にヘリオポーズを越え、太陽風の領域の外の星間空間へ入る。太陽の重力はこの境界を越えても作用する。"
    },
    "category": "mission",
    "visual": "voyager",
    "sources": [
      {
        "label": "NASA · Voyager 1",
        "url": "https://science.nasa.gov/mission/voyager/voyager-1/"
      }
    ],
    "date": "2012-08-25",
    "detail": {
      "en": "Particle and plasma measurements established the crossing; it was announced in 2013. Voyager 1 remains far inside the distant Oort Cloud.",
      "ko": "입자·플라스마 관측으로 경계 통과가 확인되어 2013년에 발표되었다. 보이저 1호는 여전히 먼 오르트 구름보다 훨씬 안쪽에 있다.",
      "ja": "粒子・プラズマ観測で通過が確認され、2013年に発表された。ボイジャー1号は今も遠いオールトの雲よりはるか内側にある。"
    }
  },
  {
    "id": "change3-yutu",
    "title": {
      "en": "Chang'e 3 and Yutu",
      "ko": "창어 3호와 위투",
      "ja": "嫦娥3号と玉兎"
    },
    "category": "mission",
    "visual": "lander",
    "sources": [
      {
        "label": "NASA NSSDC · Planetary Exploration Timeline (historical reference)",
        "url": "https://nssdc.gsfc.nasa.gov/planetary/chronology.html"
      },
      {
        "label": "NASA · 60 Moments in NASA History (historical reference)",
        "url": "https://www.nasa.gov/specials/timeline/"
      }
    ],
    "year": 2013,
    "body": {
      "en": "China's Chang'e 3 and its Yutu rover make the first soft landing on the Moon since 1976.",
      "ko": "중국의 창어 3호와 위투 로버가 1976년 이후 처음으로 달에 연착륙하다.",
      "ja": "中国の嫦娥3号と探査車「玉兎」が、1976年以来初となる月への軟着陸を達成。"
    }
  },
  {
    "id": "gaia-launch",
    "year": 2013,
    "title": {
      "en": "Gaia launches to map the Galaxy",
      "ko": "은하를 지도화할 가이아 발사",
      "ja": "銀河を地図化するガイアの打ち上げ"
    },
    "body": {
      "en": "ESA launches Gaia to measure stellar positions, distances and motions with high precision, creating a three-dimensional map of the Milky Way.",
      "ko": "ESA가 별의 위치·거리·운동을 정밀하게 측정할 가이아를 발사한다. 우리은하의 3차원 지도를 만드는 임무다.",
      "ja": "ESAが恒星の位置・距離・運動を精密に測るガイアを打ち上げる。天の川銀河の三次元地図を作るミッションである。"
    },
    "category": "observation",
    "visual": "telescope",
    "sources": [
      {
        "label": "ESA · Gaia mission",
        "url": "https://www.esa.int/Science_Exploration/Space_Science/Gaia"
      }
    ],
    "date": "2013-12-19"
  },
  {
    "id": "rosetta-philae",
    "title": {
      "en": "Rosetta and Philae at a comet",
      "ko": "로제타와 필레의 혜성 탐사",
      "ja": "ロゼッタとフィラエの彗星探査"
    },
    "category": "mission",
    "visual": "lander",
    "sources": [
      {
        "label": "ESA · Rosetta",
        "url": "https://www.esa.int/Science_Exploration/Space_Science/Rosetta"
      }
    ],
    "year": 2014,
    "body": {
      "en": "Rosetta becomes the first spacecraft to orbit a comet; its Philae lander makes the first landing on a comet.",
      "ko": "로제타가 혜성 궤도를 돈 최초의 우주선이 되다; 그 착륙선 필레가 최초로 혜성에 착륙하다.",
      "ja": "ロゼッタが彗星を周回した最初の宇宙機となる; その着陸機フィラエが初の彗星着陸を達成。"
    }
  },
  {
    "id": "pluto-falcon9",
    "title": {
      "en": "Pluto encounter and rocket recovery",
      "ko": "명왕성 접근과 로켓 회수",
      "ja": "冥王星接近とロケット回収"
    },
    "category": "mission",
    "visual": "rocket",
    "sources": [
      {
        "label": "NASA · New Horizons",
        "url": "https://science.nasa.gov/mission/new-horizons/"
      }
    ],
    "year": 2015,
    "body": {
      "en": "New Horizons makes the first flyby of Pluto; SpaceX lands a Falcon 9 booster for the first time — the first orbital-class rocket to return and land.",
      "ko": "뉴호라이즌스가 명왕성을 최초로 근접 통과하다; 스페이스X가 팰컨 9 부스터를 처음으로 착륙시키다 — 궤도급 로켓이 돌아와 착륙한 최초의 사례.",
      "ja": "ニューホライズンズが冥王星を初めて接近通過; スペースXがファルコン9のブースターを初めて着陸させる — 軌道級ロケットが帰還・着陸した初の事例。"
    }
  },
  {
    "id": "ligo-first-gravitational-waves",
    "year": 2015,
    "title": {
      "en": "Gravitational waves reach LIGO",
      "ko": "LIGO의 첫 중력파 검출",
      "ja": "LIGOの初の重力波検出"
    },
    "body": {
      "en": "LIGO detects GW150914 on 14 September: spacetime ripples from merging black holes. The discovery is announced in February 2016, opening gravitational-wave astronomy.",
      "ko": "LIGO가 9월 14일 블랙홀 병합으로 생긴 시공간의 파동 GW150914를 검출한다. 2016년 2월에 발표된 이 발견은 중력파 천문학을 연다.",
      "ja": "LIGOが9月14日にブラックホール合体による時空の波GW150914を検出。2016年2月に発表されたこの発見が重力波天文学を開く。"
    },
    "category": "observation",
    "visual": "blackhole",
    "sources": [
      {
        "label": "LIGO Caltech · First detection",
        "url": "https://www.ligo.caltech.edu/detection"
      }
    ],
    "date": "2015-09-14"
  },
  {
    "id": "juno-jupiter-arrival",
    "title": {
      "en": "Juno arrives at Jupiter",
      "ko": "주노의 목성 도착",
      "ja": "ジュノーの木星到着"
    },
    "category": "mission",
    "visual": "dish",
    "sources": [
      {
        "label": "NASA · Juno",
        "url": "https://science.nasa.gov/mission/juno/"
      }
    ],
    "year": 2016,
    "body": {
      "en": "Juno arrives at Jupiter, beginning a close study of the giant planet.",
      "ko": "주노가 목성에 도착하여 거대 행성에 대한 근접 연구를 시작하다.",
      "ja": "ジュノーが木星に到着し、巨大惑星の接近観測を開始。"
    }
  },
  {
    "id": "cassini-finale-oumuamua",
    "title": {
      "en": "Cassini's finale and 'Oumuamua",
      "ko": "카시니의 마지막과 오우무아무아",
      "ja": "カッシーニの最期とオウムアムア"
    },
    "category": "discovery",
    "visual": "saturn",
    "sources": [
      {
        "label": "NASA · Cassini",
        "url": "https://science.nasa.gov/mission/cassini/"
      }
    ],
    "year": 2017,
    "body": {
      "en": "The Cassini mission ends with a planned plunge into Saturn; 1I/'Oumuamua is detected — the first known interstellar object to pass through our Solar System.",
      "ko": "카시니 임무가 계획된 토성 진입으로 종료되다; 1I/오우무아무아가 발견되다 — 태양계를 지나간 것으로 확인된 최초의 성간 천체.",
      "ja": "カッシーニのミッションが計画的な土星突入で終了; 1I/オウムアムアが発見される — 太陽系を通過した、知られている初の恒星間天体。"
    }
  },
  {
    "id": "parker-falcon-heavy",
    "title": {
      "en": "Parker Solar Probe and Falcon Heavy",
      "ko": "파커 태양탐사선과 팰컨 헤비",
      "ja": "パーカー探査機とファルコン・ヘビー"
    },
    "category": "mission",
    "visual": "rocket",
    "sources": [
      {
        "label": "NASA · Parker Solar Probe",
        "url": "https://science.nasa.gov/mission/parker-solar-probe/"
      }
    ],
    "year": 2018,
    "body": {
      "en": "Parker Solar Probe launches to study the solar corona and solar wind; Falcon Heavy makes its first test flight.",
      "ko": "파커 태양탐사선이 태양 코로나와 태양풍 연구를 위해 발사된다. 팰컨 헤비가 첫 시험 비행을 수행한다.",
      "ja": "パーカー・ソーラー・プローブが太陽コロナと太陽風の研究に向けて打ち上げられる。ファルコン・ヘビーが初の試験飛行を行う。"
    }
  },
  {
    "id": "voyager-2-heliopause",
    "year": 2018,
    "title": {
      "en": "Voyager 2 enters interstellar space",
      "ko": "보이저 2호의 성간 공간 진입",
      "ja": "ボイジャー2号の星間空間進入"
    },
    "body": {
      "en": "Voyager 2 crosses the heliopause on 5 November. Its working plasma instrument measures the transition from solar-wind plasma to the interstellar environment.",
      "ko": "보이저 2호가 11월 5일 태양권계면을 넘는다. 작동 중인 플라스마 기기가 태양풍 플라스마에서 성간 환경으로의 변화를 측정한다.",
      "ja": "ボイジャー2号が11月5日にヘリオポーズを越える。稼働するプラズマ観測機器が太陽風プラズマから星間環境への移行を測定する。"
    },
    "category": "mission",
    "visual": "voyager",
    "sources": [
      {
        "label": "NASA · Voyager 2 enters interstellar space",
        "url": "https://www.nasa.gov/news-release/nasas-voyager-2-probe-enters-interstellar-space/"
      }
    ],
    "date": "2018-11-05"
  },
  {
    "id": "change-4-far-side-landing",
    "year": 2019,
    "title": {
      "en": "Chang’e 4 lands on the lunar far side",
      "ko": "창어 4호의 달 뒷면 착륙",
      "ja": "嫦娥4号の月裏側着陸"
    },
    "body": {
      "en": "Chang’e 4 and the Yutu-2 rover achieve the first soft landing on the lunar far side, using a relay satellite for communication.",
      "ko": "창어 4호와 위투 2호 로버가 달 뒷면에 처음으로 연착륙한다. 지구와의 통신에는 중계위성을 사용한다.",
      "ja": "嫦娥4号と玉兎2号探査車が月の裏側に初めて軟着陸する。地球との通信には中継衛星を使用する。"
    },
    "category": "mission",
    "visual": "lander",
    "sources": [
      {
        "label": "NASA · Moon missions",
        "url": "https://science.nasa.gov/moon/missions/"
      }
    ],
    "date": "2019-01-03"
  },
  {
    "id": "eht-m87-black-hole-image",
    "year": 2019,
    "title": {
      "en": "The first black-hole shadow image",
      "ko": "최초의 블랙홀 그림자 영상",
      "ja": "初のブラックホールの影の画像"
    },
    "body": {
      "en": "The Event Horizon Telescope releases an image of bright emission around M87* and its central shadow, using radio telescopes around the world.",
      "ko": "사건의 지평선 망원경이 세계 전파망원경들을 연결하여 M87* 주변의 밝은 방출 영역과 중심 그림자를 공개한다.",
      "ja": "イベント・ホライズン・テレスコープが世界の電波望遠鏡を結び、M87*周囲の明るい放射領域と中心の影を公開する。"
    },
    "category": "observation",
    "visual": "blackhole",
    "sources": [
      {
        "label": "ESO · The first black-hole image",
        "url": "https://www.eso.org/public/news/eso1907/"
      }
    ],
    "date": "2019-04-10"
  },
  {
    "id": "crew-dragon-demo2",
    "title": {
      "en": "Crew Dragon's first astronauts",
      "ko": "크루 드래건의 첫 우주비행사",
      "ja": "クルードラゴンの初の宇宙飛行士"
    },
    "category": "human",
    "visual": "rocket",
    "sources": [
      {
        "label": "NASA · 60 Years and Counting: Human Spaceflight (historical reference)",
        "url": "https://www3.nasa.gov/specials/60counting/spaceflight.html"
      }
    ],
    "year": 2020,
    "body": {
      "en": "SpaceX's Crew Dragon carries astronauts to the ISS — the first crewed orbital spaceflight by a private company.",
      "ko": "스페이스X의 크루 드래건이 우주비행사를 ISS로 보내다 — 민간 기업 최초의 유인 궤도 우주비행.",
      "ja": "スペースXのクルードラゴンが宇宙飛行士を ISS へ運ぶ — 民間企業による初の有人軌道飛行。"
    }
  },
  {
    "id": "suborbital-private-crews",
    "year": 2021,
    "title": {
      "en": "Private suborbital passenger flights",
      "ko": "민간 준궤도 승객 비행",
      "ja": "民間の弾道旅客飛行"
    },
    "body": {
      "en": "Virgin Galactic and Blue Origin fly passengers on short suborbital missions. These do not enter Earth orbit and use different definitions of the space boundary.",
      "ko": "버진 갤럭틱과 블루 오리진이 승객을 태워 짧은 준궤도 비행을 수행한다. 지구 궤도 비행은 아니며 우주의 경계를 서로 다른 기준으로 정의한다.",
      "ja": "ヴァージン・ギャラクティックとブルーオリジンが旅客を乗せ短い弾道飛行を行う。地球周回飛行ではなく、宇宙境界の定義も異なる。"
    },
    "category": "human",
    "visual": "rocket",
    "sources": [
      {
        "label": "Blue Origin · New Shepard",
        "url": "https://www.blueorigin.com/new-shepard"
      },
      {
        "label": "Virgin Galactic · Our story",
        "url": "https://www.virgingalactic.com/our-story"
      }
    ]
  },
  {
    "id": "inspiration4-orbit",
    "year": 2021,
    "title": {
      "en": "Inspiration4: an all-civilian orbital crew",
      "ko": "인스피레이션4: 민간인만의 궤도 비행",
      "ja": "インスピレーション4：民間人のみの軌道飛行"
    },
    "body": {
      "en": "Inspiration4 carries four private citizens into Earth orbit aboard Crew Dragon for a three-day mission.",
      "ko": "인스피레이션4가 크루 드래건에 네 민간인을 태워 약 3일간 지구 궤도를 비행한다.",
      "ja": "インスピレーション4がクルードラゴンに民間人四人を乗せ、約3日間の地球周回飛行を行う。"
    },
    "category": "human",
    "visual": "earth",
    "sources": [
      {
        "label": "SpaceX · Inspiration4",
        "url": "https://www.spacex.com/launches/mission/?missionId=inspiration4"
      }
    ]
  },
  {
    "id": "perseverance-mars-landing",
    "year": 2021,
    "title": {
      "en": "Perseverance lands in Jezero",
      "ko": "퍼서비어런스의 예제로 착륙",
      "ja": "パーサヴィアランスのジェゼロ着陸"
    },
    "body": {
      "en": "Perseverance lands in Jezero Crater to investigate ancient environments and collect rock samples for possible future return to Earth.",
      "ko": "퍼서비어런스가 예제로 분화구에 착륙한다. 고대 환경을 조사하고 향후 지구 귀환을 목표로 암석 시료를 수집한다.",
      "ja": "パーサヴィアランスがジェゼロ・クレーターに着陸。古代環境を調査し、将来の持ち帰りを目指して岩石試料を採取する。"
    },
    "category": "mission",
    "visual": "lander",
    "sources": [
      {
        "label": "NASA · Mars 2020 Perseverance",
        "url": "https://science.nasa.gov/mission/mars-2020-perseverance/"
      }
    ],
    "date": "2021-02-18"
  },
  {
    "id": "ingenuity-first-flight",
    "year": 2021,
    "title": {
      "en": "Ingenuity: powered flight on Mars",
      "ko": "인저뉴어티: 화성의 동력 비행",
      "ja": "インジェニュイティ：火星での動力飛行"
    },
    "body": {
      "en": "Ingenuity completes the first powered, controlled flight on another planet on 19 April, demonstrating flight in the thin Martian atmosphere.",
      "ko": "인저뉴어티가 4월 19일 다른 행성에서 최초의 동력·제어 비행을 완수한다. 희박한 화성 대기에서 항공 비행을 실증한다.",
      "ja": "インジェニュイティが4月19日に他の惑星で初の動力・制御飛行を実現。薄い火星大気での航空飛行を実証する。"
    },
    "category": "mission",
    "visual": "mars",
    "sources": [
      {
        "label": "NASA JPL · Ingenuity",
        "url": "https://www.jpl.nasa.gov/missions/ingenuity/"
      }
    ],
    "date": "2021-04-19"
  },
  {
    "id": "webb-launch",
    "year": 2021,
    "title": {
      "en": "The James Webb Space Telescope launches",
      "ko": "제임스 웹 우주망원경 발사",
      "ja": "ジェームズ・ウェッブ宇宙望遠鏡の打ち上げ"
    },
    "body": {
      "en": "Webb launches on 25 December. Its 6.5 m segmented mirror and multilayer sunshield enable infrared studies of early galaxies, stars and planetary systems.",
      "ko": "웹이 12월 25일 발사된다. 지름 6.5 m 분할 거울과 다층 차양막으로 초기 은하·별·행성계를 적외선으로 연구한다.",
      "ja": "ウェッブが12月25日に打ち上げられる。直径6.5 mの分割鏡と多層サンシールドで初期銀河・星・惑星系を赤外線で研究する。"
    },
    "category": "observation",
    "visual": "webb",
    "sources": [
      {
        "label": "NASA · Webb mission timeline",
        "url": "https://science.nasa.gov/mission/webb/webb-mission-timeline/"
      }
    ],
    "date": "2021-12-25"
  },
  {
    "id": "eht-sagittarius-a-image",
    "year": 2022,
    "title": {
      "en": "The Milky Way’s central black hole",
      "ko": "우리은하 중심 블랙홀 영상",
      "ja": "天の川銀河の中心ブラックホール画像"
    },
    "body": {
      "en": "The Event Horizon Telescope unveils its first image of Sagittarius A*, the black hole at the centre of the Milky Way, revealing a bright ring around a dark shadow.",
      "ko": "사건의 지평선 망원경이 우리은하 중심의 블랙홀 궁수자리 A*의 첫 영상을 공개한다. 어두운 그림자 주위의 밝은 고리가 드러난다.",
      "ja": "イベント・ホライズン・テレスコープが天の川銀河中心のブラックホール、いて座A*の初画像を公開。暗い影を囲む明るいリングが現れる。"
    },
    "category": "observation",
    "visual": "blackhole",
    "sources": [
      {
        "label": "ESO · First image of Sagittarius A*",
        "url": "https://www.eso.org/public/news/eso2208-eht-mw/"
      }
    ],
    "date": "2022-05-12"
  },
  {
    "id": "webb-first-images",
    "year": 2022,
    "title": {
      "en": "Webb’s first science images",
      "ko": "웹의 첫 과학 영상 공개",
      "ja": "ウェッブの初の科学画像公開"
    },
    "body": {
      "en": "The first full set of Webb science images and spectra is released on 12 July, showing deep fields, star-forming regions and an exoplanet atmosphere.",
      "ko": "웹의 첫 과학 영상·스펙트럼 세트가 7월 12일 공개된다. 심우주 영역과 별 탄생 지역, 외계행성 대기 관측 결과를 보여준다.",
      "ja": "ウェッブの初の科学画像・スペクトル一式が7月12日に公開。深宇宙領域、星形成領域、系外惑星大気の観測結果を示す。"
    },
    "category": "observation",
    "visual": "webb",
    "sources": [
      {
        "label": "NASA · Webb mission timeline",
        "url": "https://science.nasa.gov/mission/webb/webb-mission-timeline/"
      }
    ],
    "date": "2022-07-12"
  },
  {
    "id": "danuri-launch",
    "year": 2022,
    "title": {
      "en": "Danuri: Korea’s first lunar mission",
      "ko": "다누리: 한국의 첫 달 임무",
      "ja": "タヌリ：韓国初の月ミッション"
    },
    "body": {
      "en": "Korea’s Danuri lunar orbiter launches on 5 August (Korean time), taking a fuel-saving ballistic lunar transfer route toward the Moon.",
      "ko": "한국의 달 궤도선 다누리가 8월 5일(한국 시간) 발사된다. 연료를 절약하는 탄도형 달 전이 궤적으로 달을 향한다.",
      "ja": "韓国の月周回機タヌリが8月5日（韓国時間）に打ち上げられる。燃料を節約する弾道型月遷移軌道で月へ向かう。"
    },
    "category": "mission",
    "visual": "dish",
    "sources": [
      {
        "label": "KARI · Danuri’s lunar entry orbit",
        "url": "https://www.kari.re.kr/eng/contents/196"
      }
    ],
    "date": "2022-08-05",
    "detail": {
      "en": "The launch was 4 August in Florida and UTC, and 5 August in Korea. The first lunar capture burn was 17 December; the final mission-orbit confirmation followed on 27 December.",
      "ko": "발사는 플로리다·UTC 날짜로 8월 4일, 한국 날짜로 8월 5일이다. 첫 달 궤도 포획 기동은 12월 17일이었고, 최종 임무 궤도 진입 확인은 12월 27일이었다.",
      "ja": "打ち上げはフロリダ・UTC日付で8月4日、韓国日付で8月5日。初の月軌道捕獲機動は12月17日で、最終ミッション軌道到達の確認は12月27日だった。"
    }
  },
  {
    "id": "dart-asteroid-deflection",
    "year": 2022,
    "title": {
      "en": "DART changes an asteroid’s orbit",
      "ko": "DART가 소행성의 궤도를 바꾸다",
      "ja": "DARTが小惑星の軌道を変える"
    },
    "body": {
      "en": "DART impacts Dimorphos on 26 September. Observations confirm a shorter orbit around Didymos, demonstrating kinetic-impact planetary defence.",
      "ko": "DART가 9월 26일 디모르포스에 충돌한다. 관측은 디디모스 주위를 도는 공전 주기 단축을 확인하여 운동 충돌 방식의 행성 방어를 실증한다.",
      "ja": "DARTが9月26日にディモルフォスへ衝突。観測でディディモス周囲の公転周期短縮を確認し、運動衝突による惑星防衛を実証する。"
    },
    "category": "mission",
    "visual": "orbit",
    "sources": [
      {
        "label": "NASA · DART",
        "url": "https://science.nasa.gov/mission/dart/"
      }
    ],
    "date": "2022-09-26"
  },
  {
    "id": "artemis-1-launch",
    "year": 2022,
    "title": {
      "en": "Artemis I flies around the Moon",
      "ko": "아르테미스 1호의 무인 달 비행",
      "ja": "アルテミス1号の無人月飛行"
    },
    "body": {
      "en": "Artemis I launches an uncrewed Orion on 16 November and returns it safely on 11 December, testing SLS and Orion for human missions.",
      "ko": "아르테미스 1호가 11월 16일 무인 오리온을 발사하여 12월 11일 안전하게 귀환시킨다. 유인 임무를 위한 SLS와 오리온을 시험한다.",
      "ja": "アルテミス1号が11月16日に無人オリオンを打ち上げ、12月11日に無事帰還させる。有人ミッションのためSLSとオリオンを試験する。"
    },
    "category": "mission",
    "visual": "rocket",
    "sources": [
      {
        "label": "NASA · Artemis I mission timeline",
        "url": "https://www.nasa.gov/reference/artemis-i-mission-timeline/"
      }
    ],
    "date": "2022-11-16"
  },
  {
    "id": "danuri-mission-orbit-confirmed",
    "year": 2022,
    "title": {
      "en": "Danuri’s lunar mission orbit confirmed",
      "ko": "다누리의 달 임무 궤도 확인",
      "ja": "タヌリの月ミッション軌道確認"
    },
    "body": {
      "en": "Danuri’s target lunar mission orbit is confirmed on 27 December after orbit-insertion manoeuvres. It circles the Moon at roughly 100 km altitude for scientific observations.",
      "ko": "다누리가 궤도 진입 기동을 거친 뒤 12월 27일 목표 달 임무 궤도에 들어간 것으로 확인된다. 약 100 km 고도에서 달을 돌며 과학 관측을 수행한다.",
      "ja": "タヌリが軌道進入機動を経て12月27日に目標月ミッション軌道への到達を確認される。高度約100 kmで月を周回して科学観測を行う。"
    },
    "category": "mission",
    "visual": "moon",
    "sources": [
      {
        "label": "KARI · Danuri’s lunar entry orbit",
        "url": "https://www.kari.re.kr/eng/contents/196"
      }
    ],
    "date": "2022-12-27"
  },
  {
    "id": "chandrayaan3-landing",
    "title": {
      "en": "Chandrayaan-3 lands on the Moon",
      "ko": "찬드라얀 3호의 달 착륙",
      "ja": "チャンドラヤーン3号の月着陸"
    },
    "category": "mission",
    "visual": "lander",
    "sources": [
      {
        "label": "ISRO · Chandrayaan-3 science data release",
        "url": "https://www.isro.gov.in/Release_of_Chandrayaan-3_science_data_to_the_Scientific_Community.html"
      }
    ],
    "year": 2023,
    "body": {
      "en": "Chandrayaan-3 soft-lands at high southern lunar latitude on 23 August, making India the fourth nation to soft-land on the Moon. The site is about 69° south, rather than at the pole itself.",
      "ko": "찬드라얀 3호가 8월 23일 달의 남반구 고위도에 연착륙하여 인도는 달 연착륙에 성공한 네 번째 국가가 된다. 착륙지는 남위 약 69°이며 남극점 자체는 아니다.",
      "ja": "チャンドラヤーン3号が8月23日に月の南半球高緯度へ軟着陸し、インドは月に軟着陸した4番目の国となる。着陸地点は南緯約69°で、南極点そのものではない。"
    },
    "date": "2023-08-23"
  },
  {
    "id": "osiris-rex-bennu-samples",
    "year": 2023,
    "title": {
      "en": "OSIRIS-REx returns Bennu samples",
      "ko": "오시리스–렉스의 베누 시료 귀환",
      "ja": "オシリス・レックスのベンヌ試料帰還"
    },
    "body": {
      "en": "OSIRIS-REx’s capsule lands in Utah on 24 September with material from asteroid Bennu, NASA’s first asteroid sample return, enabling laboratory studies of early Solar System chemistry.",
      "ko": "오시리스–렉스의 캡슐이 9월 24일 소행성 베누의 물질을 싣고 유타에 착륙한다. NASA 최초의 소행성 시료 귀환으로 초기 태양계 화학을 실험실에서 연구할 수 있게 된다.",
      "ja": "オシリス・レックスのカプセルが9月24日に小惑星ベンヌの物質を載せてユタ州に着陸。NASA初の小惑星試料帰還により初期太陽系の化学を実験室で研究できる。"
    },
    "category": "mission",
    "visual": "dish",
    "sources": [
      {
        "label": "NASA · First asteroid sample has landed",
        "url": "https://www.nasa.gov/news-release/nasas-first-asteroid-sample-has-landed-now-secure-in-clean-room/"
      }
    ],
    "date": "2023-09-24"
  },
  {
    "id": "odysseus-lunar-landing",
    "year": 2024,
    "title": {
      "en": "Odysseus lands on the Moon",
      "ko": "오디세우스의 달 착륙",
      "ja": "オデュッセウスの月着陸"
    },
    "body": {
      "en": "Odysseus lands near Malapert A on 22 February, the first U.S. lunar landing since Apollo 17. It tips over but returns NASA payload data.",
      "ko": "오디세우스가 2월 22일 말라퍼트 A 부근에 착륙하여 아폴로 17호 이후 첫 미국 달 착륙을 이룬다. 기체가 기울어졌지만 NASA 탑재체의 자료를 전송한다.",
      "ja": "オデュッセウスが2月22日にマラパートA付近へ着陸し、アポロ17号以来の米国の月着陸を実現。機体は横転したがNASA機器のデータを送る。"
    },
    "category": "mission",
    "visual": "lander",
    "sources": [
      {
        "label": "NASA · Odysseus landing navigation report",
        "url": "https://ntrs.nasa.gov/api/citations/20250007036/downloads/aasimndl.pdf"
      }
    ],
    "date": "2024-02-22"
  },
  {
    "id": "change-6-sample-return",
    "year": 2024,
    "title": {
      "en": "Chang’e 6 returns far-side samples",
      "ko": "창어 6호의 달 뒷면 시료 귀환",
      "ja": "嫦娥6号の月裏側試料帰還"
    },
    "body": {
      "en": "Chang’e 6 returns the first samples collected on the lunar far side to Earth on 25 June, enabling laboratory studies of the South Pole–Aitken basin.",
      "ko": "창어 6호가 6월 25일 달 뒷면 시료를 처음 지구로 가져온다. 남극–에이트켄 분지의 물질을 실험실에서 연구할 수 있게 된다.",
      "ja": "嫦娥6号が6月25日に月の裏側の試料を初めて地球へ持ち帰り、南極・エイトケン盆地の物質の実験室研究を可能にする。"
    },
    "category": "mission",
    "visual": "moon",
    "sources": [
      {
        "label": "CNSA · Chang’e 6 sample return",
        "url": "https://www.cnsa.gov.cn/english/n6465652/n6465653/c10573149/content.html"
      }
    ],
    "date": "2024-06-25"
  },
  {
    "id": "super-heavy-first-catch",
    "year": 2024,
    "title": {
      "en": "The first Super Heavy tower catch",
      "ko": "슈퍼헤비의 첫 발사탑 포획",
      "ja": "スーパーヘビーの初の発射塔捕捉"
    },
    "body": {
      "en": "During Starship’s fifth test flight, the tower’s arms catch the returning Super Heavy booster, testing a new method of rocket recovery.",
      "ko": "스타십의 다섯 번째 시험 비행에서 발사탑의 팔이 귀환한 슈퍼헤비 부스터를 잡아 새로운 로켓 회수 방식을 시험한다.",
      "ja": "スターシップの第五回試験飛行で発射塔のアームが帰還したスーパーヘビーを捕捉し、新しいロケット回収方法を試験する。"
    },
    "category": "mission",
    "visual": "rocket",
    "sources": [
      {
        "label": "NASA OIG · Human Landing System flight-test chronology",
        "url": "https://oig.nasa.gov/wp-content/uploads/2026/03/final-report-ig-26-004-nasas-management-of-the-human-landing-system-contracts.pdf"
      }
    ],
    "date": "2024-10-13"
  },
  {
    "id": "europa-clipper-launch",
    "year": 2024,
    "title": {
      "en": "Europa Clipper launches",
      "ko": "유로파 클리퍼 발사",
      "ja": "エウロパ・クリッパーの打ち上げ"
    },
    "body": {
      "en": "Europa Clipper launches to study whether Jupiter’s icy moon Europa has environments that could support life. Arrival at Jupiter remains a future milestone.",
      "ko": "유로파 클리퍼가 발사된다. 목성의 얼음 위성 유로파에 생명체를 지탱할 환경이 있는지 조사하는 임무이며, 목성 도착은 향후 이정표다.",
      "ja": "エウロパ・クリッパーが打ち上げられる。木星の氷の衛星エウロパに生命を支えうる環境があるか調べる。木星到着は将来の節目である。"
    },
    "category": "mission",
    "visual": "dish",
    "sources": [
      {
        "label": "NASA · Europa Clipper",
        "url": "https://science.nasa.gov/mission/europa-clipper/"
      }
    ],
    "date": "2024-10-14"
  },
  {
    "id": "parker-record-solar-approach",
    "year": 2024,
    "title": {
      "en": "Parker’s closest solar approach",
      "ko": "파커의 태양 최근접 통과",
      "ja": "パーカーの太陽最接近"
    },
    "body": {
      "en": "Parker Solar Probe passes about 6.1 million km above the Sun’s surface at roughly 192 km/s on 24 December, setting a closest-approach record and later reporting healthy status.",
      "ko": "파커 태양탐사선이 12월 24일 태양 표면에서 약 610만 km 떨어진 곳을 초속 약 192 km로 통과한다. 최근접 기록을 세우고 이후 정상 상태를 보고한다.",
      "ja": "パーカー探査機が12月24日に太陽表面から約610万 kmの地点を秒速約192 kmで通過。最接近記録を更新し、後に正常な状態を報告する。"
    },
    "category": "mission",
    "visual": "orbit",
    "sources": [
      {
        "label": "NASA · Parker reports successful closest approach",
        "url": "https://science.nasa.gov/blogs/parker-solar-probe/2024/12/27/nasas-parker-solar-probe-reports-successful-closest-approach-to-sun/"
      }
    ],
    "date": "2024-12-24"
  },
  {
    "id": "gaia-science-observations-end",
    "year": 2025,
    "title": {
      "en": "Gaia completes science observations",
      "ko": "가이아 과학 관측 종료",
      "ja": "ガイアの科学観測終了"
    },
    "body": {
      "en": "Gaia ends science observations on 15 January after measuring the positions and motions of roughly two billion stars and other sources. Data analysis continues.",
      "ko": "가이아가 약 20억 개의 별과 다른 광원의 위치·운동을 측정한 뒤 1월 15일 과학 관측을 종료한다. 자료 분석은 계속된다.",
      "ja": "ガイアが約20億の星と他の光源の位置・運動を測定した後、1月15日に科学観測を終了。データ解析は続く。"
    },
    "category": "observation",
    "visual": "telescope",
    "sources": [
      {
        "label": "ESA · Gaia",
        "url": "https://www.esa.int/Science_Exploration/Space_Science/Gaia"
      }
    ],
    "date": "2025-01-15"
  },
  {
    "id": "new-glenn-first-orbit",
    "year": 2025,
    "title": {
      "en": "New Glenn reaches orbit on its debut",
      "ko": "뉴 글렌의 첫 궤도 진입",
      "ja": "ニュー・グレンの初の軌道進入"
    },
    "body": {
      "en": "New Glenn reaches its intended orbit on its first launch on 16 January. The first-stage recovery attempt is unsuccessful.",
      "ko": "뉴 글렌이 1월 16일 첫 발사에서 목표 궤도에 도달한다. 1단 부스터 회수 시도는 성공하지 못한다.",
      "ja": "ニュー・グレンが1月16日の初打ち上げで目標軌道に到達。第一段ブースターの回収試みは成功しなかった。"
    },
    "category": "mission",
    "visual": "rocket",
    "sources": [
      {
        "label": "Blue Origin · New Glenn reaches orbit",
        "url": "https://www.blueorigin.com/news/new-glenn-ng-1-mission"
      }
    ],
    "date": "2025-01-16"
  },
  {
    "id": "blue-ghost-lunar-landing",
    "year": 2025,
    "title": {
      "en": "Blue Ghost lands in Mare Crisium",
      "ko": "블루 고스트의 위난의 바다 착륙",
      "ja": "ブルーゴーストの危難の海着陸"
    },
    "body": {
      "en": "Firefly’s Blue Ghost Mission 1 lands upright on the Moon on 2 March, delivering ten NASA science and technology payloads to Mare Crisium.",
      "ko": "파이어플라이의 블루 고스트 1호가 3월 2일 달의 위난의 바다에 똑바로 착륙하여 NASA 과학·기술 탑재체 열 개를 전달한다.",
      "ja": "ファイアフライのブルーゴースト1号が3月2日に月の危難の海へ直立した状態で着陸し、NASAの科学・技術機器十個を届ける。"
    },
    "category": "mission",
    "visual": "lander",
    "sources": [
      {
        "label": "NASA · Blue Ghost touches down",
        "url": "https://www.nasa.gov/blogs/missions/2025/03/02/nasa-science-touches-down-on-moon-aboard-firefly-aerospace-lander/"
      }
    ],
    "date": "2025-03-02"
  },
  {
    "id": "spherex-punch-launch",
    "year": 2025,
    "title": {
      "en": "SPHEREx and PUNCH launch",
      "ko": "SPHEREx와 PUNCH 발사",
      "ja": "SPHERExとPUNCHの打ち上げ"
    },
    "body": {
      "en": "SPHEREx launches with four PUNCH spacecraft on 11 March (California time). It begins an all-sky infrared spectral survey of galaxies and interstellar ices.",
      "ko": "SPHEREx가 3월 11일(캘리포니아 현지) PUNCH 우주선 네 대와 함께 발사된다. 은하와 성간 얼음을 연구하는 적외선 전천 분광 탐사를 시작한다.",
      "ja": "SPHERExが3月11日（カリフォルニア現地）にPUNCH宇宙機四機と共に打ち上げられ、銀河と星間の氷を調べる赤外線全天分光サーベイを始める。"
    },
    "category": "observation",
    "visual": "telescope",
    "sources": [
      {
        "label": "NASA · SPHEREx",
        "url": "https://science.nasa.gov/mission/spherex/"
      }
    ],
    "date": "2025-03-11",
    "detail": {
      "en": "The launch occurred on 12 March in UTC/Korea. SPHEREx measures many wavelengths over the whole sky; PUNCH studies the corona and solar wind.",
      "ko": "발사는 UTC·한국 날짜로 3월 12일이다. SPHEREx는 하늘 전체를 여러 파장에서 측정하고 PUNCH는 코로나와 태양풍을 연구한다.",
      "ja": "打ち上げはUTC・韓国日付では3月12日。SPHERExは全天を多数の波長で測定し、PUNCHはコロナと太陽風を調べる。"
    }
  },
  {
    "id": "fram2-polar-orbit",
    "year": 2025,
    "title": {
      "en": "Fram2 flies over Earth’s poles",
      "ko": "프램2의 유인 극궤도 비행",
      "ja": "フラム2の有人極軌道飛行"
    },
    "body": {
      "en": "Fram2 sends four private astronauts into a polar orbit aboard Crew Dragon, the first human orbital mission to pass over both Earth’s poles.",
      "ko": "프램2가 크루 드래건에 네 민간 우주비행사를 태워 극궤도에 올린다. 지구의 두 극점 위를 통과한 최초의 유인 궤도 임무다.",
      "ja": "フラム2がクルードラゴンに民間宇宙飛行士四人を乗せて極軌道へ送る。地球の両極点の上を通過した初の有人軌道ミッションである。"
    },
    "category": "human",
    "visual": "earth",
    "sources": [
      {
        "label": "SpaceX · Fram2 splashdown broadcast",
        "url": "https://x.com/i/broadcasts/1DXxyqMBLekxM"
      },
      {
        "label": "Fram2 · Mission",
        "url": "https://f2.com/"
      }
    ],
    "date": "2025-04-01",
    "detail": {
      "en": "Launch was 31 March in Florida and 1 April in UTC/Korea. The crew returned on 4 April after nearly four days in orbit.",
      "ko": "발사는 플로리다 현지 3월 31일, UTC·한국 날짜로 4월 1일이다. 승무원은 약 나흘의 궤도 비행 뒤 4월 4일 귀환했다.",
      "ja": "打ち上げはフロリダ現地で3月31日、UTC・韓国日付では4月1日。乗組員は約4日間の軌道飛行後、4月4日に帰還した。"
    }
  },
  {
    "id": "rubin-first-look",
    "year": 2025,
    "title": {
      "en": "Rubin Observatory’s first images",
      "ko": "루빈 천문대의 첫 영상",
      "ja": "ルービン天文台の初画像"
    },
    "body": {
      "en": "Vera C. Rubin Observatory unveils its first images on 23 June, demonstrating a wide-field telescope and a 3.2-gigapixel camera for surveying the changing sky.",
      "ko": "베라 C. 루빈 천문대가 6월 23일 첫 영상을 공개한다. 변화하는 하늘을 탐사할 광시야 망원경과 32억 화소 카메라의 능력을 보여준다.",
      "ja": "ヴェラ・C・ルービン天文台が6月23日に初画像を公開。変化する空を調べる広視野望遠鏡と32億画素カメラの性能を示す。"
    },
    "category": "observation",
    "visual": "telescope",
    "sources": [
      {
        "label": "NSF NOIRLab · Rubin First Look",
        "url": "https://noirlab.edu/public/news/noirlab2521/"
      }
    ],
    "date": "2025-06-23"
  },
  {
    "id": "3i-atlas-discovery",
    "year": 2025,
    "title": {
      "en": "3I/ATLAS: a third interstellar visitor",
      "ko": "3I/ATLAS: 세 번째 성간 방문자",
      "ja": "3I/ATLAS：第三の恒星間訪問天体"
    },
    "body": {
      "en": "The ATLAS survey reports comet 3I/ATLAS on 1 July, the third known interstellar object detected passing through the Solar System.",
      "ko": "ATLAS 탐사가 7월 1일 혜성 3I/ATLAS를 보고한다. 태양계를 통과하는 것으로 발견된 세 번째 성간 천체다.",
      "ja": "ATLASサーベイが7月1日に彗星3I/ATLASを報告。太陽系を通過する天体として検出された第三の恒星間天体である。"
    },
    "category": "discovery",
    "visual": "orbit",
    "sources": [
      {
        "label": "NASA · 3I/ATLAS facts and FAQs",
        "url": "https://science.nasa.gov/solar-system/comets/3i-atlas/3i-atlas-facts-and-faqs/"
      }
    ],
    "date": "2025-07-01"
  },
  {
    "id": "nisar-launch",
    "year": 2025,
    "title": {
      "en": "NASA–ISRO’s NISAR launches",
      "ko": "NASA–ISRO의 NISAR 발사",
      "ja": "NASA–ISROのNISAR打ち上げ"
    },
    "body": {
      "en": "NISAR launches from India on 30 July. Its L-band and S-band radars measure changes in Earth’s land and ice.",
      "ko": "NISAR가 7월 30일 인도에서 발사된다. L대역·S대역 레이더로 지구의 육지와 얼음 변화를 측정한다.",
      "ja": "NISARが7月30日にインドから打ち上げられる。L帯・S帯レーダーで地球の陸地と氷の変化を測定する。"
    },
    "category": "observation",
    "visual": "earth",
    "sources": [
      {
        "label": "NASA · NISAR launch",
        "url": "https://science.nasa.gov/blogs/nisar/2025/07/30/nasa-isros-nisar-spacecraft-separates-from-rockets-third-stage/"
      }
    ],
    "date": "2025-07-30"
  },
  {
    "id": "iss-25-years-occupation",
    "year": 2025,
    "title": {
      "en": "ISS: 25 years of continuous habitation",
      "ko": "ISS: 연속 유인 거주 25년",
      "ja": "ISS：連続有人滞在25年"
    },
    "body": {
      "en": "On 2 November, the ISS marks 25 years of continuous human presence since Expedition 1 arrived in 2000, sustaining long-term microgravity research.",
      "ko": "11월 2일 ISS가 2000년 첫 상주 승무원 도착 이후 연속 유인 거주 25년을 맞는다. 미세중력에서의 장기 연구를 이어 간다.",
      "ja": "11月2日、ISSが2000年の最初の常駐クルー到着以来の連続有人滞在25年を迎え、微小重力環境での長期研究を続ける。"
    },
    "category": "human",
    "visual": "station",
    "sources": [
      {
        "label": "NASA · International Space Station: 25 Years",
        "url": "https://www.nasa.gov/international-space-station/iss25/"
      }
    ],
    "date": "2025-11-02"
  },
  {
    "id": "artemis2-lunar-flyby",
    "title": {
      "en": "Artemis II: humans return to lunar space",
      "ko": "아르테미스 2호: 유인 달 공간 비행",
      "ja": "アルテミス2号：有人月近傍飛行"
    },
    "category": "human",
    "visual": "moon",
    "sources": [
      {
        "label": "NASA · Artemis II mission milestones",
        "url": "https://www.nasa.gov/general/artemis-ii-mission-milestones-an-image-and-video-recap/"
      }
    ],
    "year": 2026,
    "body": {
      "en": "Artemis II carries Reid Wiseman, Victor Glover, Christina Koch and Jeremy Hansen around the Moon and safely back to Earth on 1–10 April (U.S. local dates), the first crewed lunar voyage since 1972.",
      "ko": "아르테미스 2호가 리드 와이즈먼, 빅터 글로버, 크리스티나 코크, 제러미 핸슨을 태우고 4월 1–10일(미국 현지 날짜) 달을 돌아 지구로 안전하게 귀환한다. 1972년 이후 첫 유인 달 항해다.",
      "ja": "アルテミス2号がリード・ワイズマン、ビクター・グローバー、クリスティーナ・コック、ジェレミー・ハンセンを乗せ、4月1〜10日（米国現地日付）に月を回り地球へ無事帰還。1972年以来初の有人月航行となる。"
    },
    "date": "2026-04-01",
    "detail": {
      "en": "The crew reached 252,756 miles (about 406,771 km) from Earth, surpassing Apollo 13. Splashdown was 10 April in California and 11 April in UTC/Korea; this was a flyby, not a lunar landing.",
      "ko": "승무원은 지구에서 252,756마일(약 406,771 km)까지 도달해 아폴로 13호의 기록을 넘었다. 착수 날짜는 캘리포니아 현지 4월 10일, UTC·한국 기준 4월 11일이다. 달 착륙이 아닌 근접 비행이었다.",
      "ja": "乗組員は地球から252,756マイル（約406,771 km）に達し、アポロ13号の記録を超えた。着水はカリフォルニア現地で4月10日、UTC・韓国では4月11日。月面着陸ではなく接近飛行だった。"
    }
  }
]

export const markers = [
  {
    "year": 1944,
    "label": {
      "en": "Kármán line · 100 km — the edge of space",
      "ko": "카르만 선 · 100 km — 우주의 경계",
      "ja": "カーマン・ライン · 100 km — 宇宙の境界"
    }
  },
  {
    "year": 1957,
    "label": {
      "en": "Low Earth orbit · humanity's first satellites circle the planet",
      "ko": "지구 저궤도 · 인류 최초의 위성들이 지구를 돌다",
      "ja": "地球低軌道 · 人類初の人工衛星が地球を巡る"
    }
  },
  {
    "year": 1969,
    "label": {
      "en": "Cislunar space · 384,400 km to the Moon",
      "ko": "지구–달 공간 · 달까지 384,400 km",
      "ja": "地球–月の空間 · 月まで 384,400 km"
    }
  },
  {
    "year": 2012,
    "label": {
      "en": "Interstellar space · across the heliopause",
      "ko": "성간 공간 · 태양권계면을 넘다",
      "ja": "星間空間 · ヘリオポーズを越える"
    }
  }
]
