// User-interface strings, separate from the timeline content itself.
// Three languages: English (default), Korean, Japanese.

export const LANGS = ['en', 'ko', 'ja']

export const langLabels = {
  en: 'EN',
  ko: '한국어',
  ja: '日本語',
}

export const ui = {
  en: {
    brand: 'Space Exploration Timeline',
    heroTitle: 'We looked up.\nThen we went.',
    heroTagline: 'An illustrated history of how we came to understand, and explore, the universe.',
    heroHint: 'Scroll up to rise through time',
    rocketAge: 'The age of rockets begins',
    closingLead: '…and the journey continues.',
    closingNote:
      'From the first observations to interstellar exploration, each discovery makes the universe a little less unknown.',
    backToStart: 'Return to the ground',
    readoutAria: 'Current altitude and era',
    eyebrow: 'AN ATLAS OF HUMAN CURIOSITY',
    edition: 'RESEARCH EDITION · 2026',
    begin: 'Begin the ascent',
    latest: 'Latest discoveries',
    events: 'historical records',
    models: 'object studies',
    languages: 'languages',
    sourceSummary: 'Context & sources',
    source: 'Primary source',
    updated: 'Content reviewed',
    figure: 'FIG.',
    object: 'Object study',
    reconstruction: 'Educational reconstruction · not to scale',
    eraNav: 'Navigate the timeline',
    jump: 'Jump to a year',
    overview: 'EXPLORE THE ERAS',
    narrative: 'The altitude indicator is a narrative device; time and distance are not to scale.',
    methodology: 'Selected milestones have been reviewed against the linked institutional sources. Models depict characteristic forms rather than exact flight hardware. Historical dates and priorities can depend on the definition used.',
    onward: 'THE NEXT CHAPTER IS STILL BEING WRITTEN',
    past: 'PAST',
    future: 'FUTURE',
    bce: 'BCE',
    earthCoordinate: '23.4° AXIAL TILT · 1 AU FROM THE SUN',
  },
  ko: {
    brand: '우주 탐사 연표',
    heroTitle: '우리는 올려다봤고,\n마침내 나아갔다.',
    heroTagline: '우주를 이해하고 탐사해 온 인류의 여정. 관측과 발견, 그리고 새로운 세계를 향한 기록.',
    heroHint: '위로 스크롤하며 역사를 따라 올라가세요',
    rocketAge: '로켓의 시대가 열리다',
    closingLead: '…그리고 여정은 계속됩니다.',
    closingNote:
      '최초의 관측에서 성간 탐사까지, 하나의 발견이 우주에 대한 새로운 이해로 이어집니다.',
    backToStart: '지상으로 돌아가기',
    readoutAria: '현재 고도와 시대',
    eyebrow: '인류의 호기심을 기록한 아틀라스',
    edition: '학술 에디션 · 2026',
    begin: '여정 시작하기',
    latest: '최신 기록 보기',
    events: '역사적 기록',
    models: '객체 시각화',
    languages: '지원 언어',
    sourceSummary: '배경 설명과 출처',
    source: '1차 출처',
    updated: '콘텐츠 검토일',
    figure: '도판',
    object: '객체 연구',
    reconstruction: '교육용 재구성 · 축척 비례 아님',
    eraNav: '연표 탐색',
    jump: '연도 바로가기',
    overview: '시대별 탐색',
    narrative: '고도 표시는 서사적 장치이며, 시간과 거리는 실제 축척을 따르지 않습니다.',
    methodology: '주요 사건은 연결된 기관 자료와 대조하여 검토했습니다. 모형은 특징적인 형태를 재구성한 것으로 실제 비행체의 정밀 설계와 다릅니다. 역사적 날짜와 최초 기록은 정의에 따라 달라질 수 있습니다.',
    onward: '다음 장은 지금도 쓰이고 있습니다',
    past: '과거',
    future: '미래',
    bce: '기원전',
    earthCoordinate: '자전축 기울기 23.4° · 태양에서 1 AU',
  },
  ja: {
    brand: '宇宙探査の年表',
    heroTitle: '空を見上げ、\nそして旅立った。',
    heroTagline: '宇宙を理解し、探査してきた人類の旅。観測と発見、そして新しい世界への記録。',
    heroHint: '上へスクロールして時をのぼる',
    rocketAge: 'ロケットの時代が幕を開ける',
    closingLead: '…そして旅は続く。',
    closingNote:
      '最初の観測から星間探査まで、一つの発見が宇宙への新しい理解につながります。',
    backToStart: '地上へ戻る',
    readoutAria: '現在の高度と時代',
    eyebrow: '人類の好奇心を記録したアトラス',
    edition: '研究エディション · 2026',
    begin: '旅を始める',
    latest: '最新の記録',
    events: '歴史の記録',
    models: 'オブジェクト図版',
    languages: '対応言語',
    sourceSummary: '背景と出典',
    source: '一次資料',
    updated: '内容の確認日',
    figure: '図版',
    object: 'オブジェクト研究',
    reconstruction: '教育用の再構成 · 縮尺は異なります',
    eraNav: '年表を移動',
    jump: '年へ移動',
    overview: '時代を探索',
    narrative: '高度表示は物語上の演出であり、時間と距離は実際の縮尺ではありません。',
    methodology: '主要な出来事はリンク先の機関資料と照合しました。模型は特徴的な形を再構成したもので、実機の精密設計ではありません。歴史的な日付と「最初」の記録は定義によって異なる場合があります。',
    onward: '次の章は今も書かれています',
    past: '過去',
    future: '未来',
    bce: '紀元前',
    earthCoordinate: '自転軸の傾き 23.4° · 太陽から 1 AU',
  },
}

// Atmospheric / orbital layers, shown in the fixed altitude read-out.
// `alt` is a numeric altitude reused across languages; an empty string hides it.
export const layers = {
  ground: {
    alt: '',
    name: { en: 'Ground level', ko: '지상', ja: '地上' },
  },
  troposphere: {
    alt: '0–12 km',
    name: { en: 'Troposphere', ko: '대류권', ja: '対流圏' },
  },
  stratosphere: {
    alt: '12–50 km',
    name: { en: 'Stratosphere', ko: '성층권', ja: '成層圏' },
  },
  mesosphere: {
    alt: '50–85 km',
    name: { en: 'Mesosphere', ko: '중간권', ja: '中間圏' },
  },
  karman: {
    alt: '100 km',
    name: { en: 'Kármán line', ko: '카르만 선', ja: 'カーマン・ライン' },
  },
  leo: {
    alt: '160–2,000 km',
    name: { en: 'Low Earth orbit', ko: '지구 저궤도', ja: '地球低軌道' },
  },
  cislunar: {
    alt: '384,400 km',
    name: { en: 'Toward the Moon', ko: '달을 향하여', ja: '月へ向かって' },
  },
  deep: {
    alt: '',
    name: { en: 'Deep space', ko: '심우주', ja: '深宇宙' },
  },
}

// Maps a year to a layer key. A monotonic "frontier" model: the read-out tracks
// the furthest humanity had reached by that point in time, so it never descends.
export function layerForYear(year) {
  if (year < 1903) return 'ground'
  if (year <= 1925) return 'troposphere'
  if (year <= 1938) return 'stratosphere'
  if (year <= 1941) return 'mesosphere'
  if (year <= 1956) return 'karman'
  if (year <= 1967) return 'leo'
  if (year <= 1972) return 'cislunar'
  return 'deep'
}
