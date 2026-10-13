// 검색 엔진 색인 차단. 운영자의 결정(2026-10-13): 사이트는 공개 배포하되 알리지 않는다.
// 알릴 준비가 되면 이 파일을 지우면 된다. 검색 엔진이 이미 본 페이지를 색인에서 빼려면
// 크롤링은 허용해야 하므로 robots.txt로 막지 않고 meta 태그만 넣는다.
hexo.extend.injector.register('head_begin', '<meta name="robots" content="noindex, nofollow">');
