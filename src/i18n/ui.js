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
    heroTitle: 'Space Exploration Timeline',
    heroTagline: 'From the first rockets and stargazers to a crewed return around the Moon.',
    heroHint: 'Scroll up to rise through time',
    rocketAge: 'The age of rockets begins',
    closingLead: '…and the journey continues.',
    closingNote:
      'You have climbed from the ground, through the atmosphere, to deep space — following roughly seven centuries of humanity reaching upward.',
    backToStart: 'Return to the ground',
    readoutAria: 'Current altitude and era',
  },
  ko: {
    brand: '우주 탐사 연표',
    heroTitle: '우주 탐사 연표',
    heroTagline: '최초의 로켓과 별을 올려다본 사람들로부터, 달을 다시 돈 유인 비행까지.',
    heroHint: '위로 스크롤하여 시간을 거슬러 오르세요',
    rocketAge: '로켓의 시대가 열리다',
    closingLead: '…그리고 여정은 계속됩니다.',
    closingNote:
      '지상에서 출발해 대기권을 지나 심우주까지 올라왔습니다 — 위를 향해 손을 뻗어 온 인류의 약 700년을 따라서.',
    backToStart: '지상으로 돌아가기',
    readoutAria: '현재 고도와 시대',
  },
  ja: {
    brand: '宇宙探査の年表',
    heroTitle: '宇宙探査の年表',
    heroTagline: '最初のロケットと星を見上げた人々から、月を再び周回した有人飛行まで。',
    heroHint: '上へスクロールして時をのぼる',
    rocketAge: 'ロケットの時代が幕を開ける',
    closingLead: '…そして旅は続く。',
    closingNote:
      '地上から出発し、大気圏を抜け、深宇宙まで昇ってきました — 上を目指してきた人類の約700年をたどって。',
    backToStart: '地上へ戻る',
    readoutAria: '現在の高度と時代',
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
