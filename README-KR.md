# Space Exploration Timeline

> **지상에서 심우주까지, 위로 스크롤하며 우주 탐사의 역사를 거슬러 오르는 타임라인**

🌍 **라이브 사이트**: https://jtech-co.github.io/space-exploration-timeline/
📖 **English README**: [README.md](README.md)

## 1. 소개 (Introduction)

이 프로젝트는 우주 탐사의 역사를 직접 *올라가며* 읽도록 만든 웹 애플리케이션입니다.
페이지는 맨 아래에서 시작합니다 — 지상에 선 인류, 가장 이른 시기의 로켓과 천문학자들에서
출발해, 위쪽으로 스크롤(마우스 휠 또는 ↑ 방향키)할수록 대기권을 지나 심우주로 올라가며,
약 7세기에 걸쳐 위를 향해 온 여정을 따라 2026년 아르테미스 II까지 이어집니다.

**시간을 고도에 대응**시킴으로써, 각 시점에 인류가 어디까지 도달했는지를 체감하게 하고,
클릭이 아니라 스크롤로 읽는 교육적 경험을 제공합니다.

**주요 기능**
- **시간=고도 상승 연출**: 스크롤에 따라 배경 그라데이션과 별, 지구의 가장자리가
  지상의 따뜻한 새벽빛에서 대기권을 지나 심우주까지 떠오릅니다. 화면 좌하단 고도 표시기는
  통과 중인 층(대류권 → 카르만 선 → 궤도 → 달 → 심우주)과 현재 보는 연도를 알려 줍니다.
- **3개 언어, 사실 검증 콘텐츠**: 영어·한국어·일본어로 된 96개의 사건을 담았으며,
  상단 버튼으로 보던 위치를 유지한 채 전환됩니다. 각 항목은 여러 출처와 대조해 검증·수정했습니다.

## 2. 기술 스택 (Tech Stack)

- **Frontend**: 바닐라 자바스크립트(ES 모듈), HTML, CSS — UI 프레임워크 없음
- **Build Tool**: Vite
- **렌더링**: DOM 생성 + Canvas 2D 별 배경, `requestAnimationFrame` 기반 갱신
- **Backend**: 없음 (완전한 정적 사이트, 서버리스)
- **Deployment**: GitHub Pages (GitHub Actions 워크플로)

## 3. 설치 및 실행 (Quick Start)

**요구 사항**: Node.js 18 이상

1. **설치 (Install)**
   ```bash
   git clone https://github.com/JTech-CO/space-exploration-timeline.git
   cd space-exploration-timeline
   npm install
   ```

2. **환경 변수 (Environment)**
   별도의 환경 변수가 필요하지 않습니다. 완전한 정적 사이트로, API 키나 백엔드가 없습니다.

3. **실행 (Run)**
   ```bash
   npm run dev      # 로컬 개발 서버 (http://localhost:5173)
   npm run build    # ./dist 에 정적 파일 빌드
   npm run preview  # 프로덕션 빌드 미리보기
   ```

## 4. 폴더 구조 (Structure)

```text
.
├── index.html              # 앱 셸
├── vite.config.js          # Vite 설정 (프로젝트 페이지용 상대 경로)
├── public/
│   └── favicon.svg
├── src/
│   ├── main.js             # 렌더링, 스크롤 연동 연출, 언어 전환
│   ├── style.css           # 절제된 모노톤 스타일
│   ├── data/
│   │   └── timeline.js     # 연표 콘텐츠 (en / ko / ja) — 내용 수정은 여기
│   └── i18n/
│       └── ui.js           # UI 문구 + 고도 층 정의
├── scripts/
│   ├── validate.mjs        # 의존성 없는 콘텐츠 무결성 검사
│   └── e2e.mjs             # 헤드리스 e2e 검사 (Playwright 필요, 선택)
└── .github/workflows/
    └── deploy.yml          # main 푸시 시 GitHub Pages 빌드·배포
```

**콘텐츠 수정** — 모든 연표 항목은
[`src/data/timeline.js`](src/data/timeline.js)에 있습니다. 각 항목은 연도와
`en` / `ko` / `ja` 짧은 설명으로 구성됩니다. 사건이 있는 해만 작성하면 되며,
사이 빈 해들은 자동으로 눈금으로 그려집니다. UI 문구와 고도 층 정의는
[`src/i18n/ui.js`](src/i18n/ui.js)에 있습니다.

**정확성에 관하여** — 원본 리스트를 기초로 삼되 여러 출처와 대조해 검증·수정했습니다.
예를 들어 V-2 로켓은 1942년 10월 우주의 *가장자리*(약 85km)에 처음 닿았지만,
100km 카르만 선을 넘은 것은 1944년 6월 20일 **MW 18014** 비행이므로 둘을 별개의
사건으로 구분했습니다. 또 '2025년 스타십 상용 비행 시작'은 당시 여전히 시험비행
단계였기에 제거했습니다.

## 5. 정보 (Info)

- **License**: MIT
- **배포**: `main` 푸시 시 GitHub Actions로 자동 배포되며, GitHub Pages 소스는
  **GitHub Actions**로 설정되어 있습니다. 상대 경로(`base: './'`) 덕분에 추가 설정
  없이 프로젝트 페이지에서 동작합니다.
- **Contact**: [JTech-CO on GitHub](https://github.com/JTech-CO)
