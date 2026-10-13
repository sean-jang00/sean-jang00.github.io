# Evolvable Labs blog

Hexo 7 + Icarus 6 블로그. `main`에 푸시하면 GitHub Actions가 빌드해 GitHub Pages에 배포한다.

- 새 글: `npx hexo new "제목"` → `source/_posts/제목.md`와 같은 이름의 그림 폴더가 생긴다.
- 미리보기(글 수정하면서): `npx hexo server` → http://localhost:4000. 이 서버는 스타일시트를 느리게 보내서(요청마다 약 1초) 페이지 이동 때 화면이 깜빡인다. 실제 사이트에서는 생기지 않는다.
- 미리보기(실제 사이트와 같게): `npx hexo generate` 후 `py -3 -m http.server 4001 -d public` → http://localhost:4001
- 시뮬레이터 같은 독립 HTML은 `source/sims/<이름>/index.html`에 둔다(렌더링하지 않고 그대로 복사됨).

## 제목 규칙

- `title`: 짧은 제목. 한국어 20자 안팎. 글이 다루는 현상이나 질문을 쓴다.
- `subtitle`: 글의 종류와 대상. 예) `Computational Life 리뷰와 재현`, `실험 리포트: Bejjani 2025 작은 세계 재현`, `독서 노트: 지능의 기원`.
- subtitle은 `scripts/subtitle.js`가 제목 아래에 표시한다.
- 부제에 콜론(:)이 들어가면 작은따옴표로 감싼다. 예) `subtitle: '실험 리포트: Bejjani 2025 작은 세계 재현'`

## 공개 상태

- 사이트는 https://sean-jang00.github.io 에 배포되지만 검색 엔진 색인은 막아 두었다(`scripts/noindex.js`). 알릴 준비가 되면 그 파일을 지우고 푸시한다.
