// 본문 가독성 조정. Icarus 기본값은 글자 15.4px, 두 열 레이아웃의 폭 1152px이다.
// 넓은 화면에서 두 열 폭을 1280px로 늘려 본문 줄 길이를 약 800px로 맞추고, 글자를 키운다.
// 화면이 좁으면(769px 미만) Bulma가 열을 한 줄로 쌓으므로 휴대폰에서는 본문이 화면 폭을 쓴다.
hexo.extend.injector.register('head_end', `<style>
article.article .content { font-size: 17px; line-height: 1.85; }
article.article .content p, article.article .content li { word-break: keep-all; }
article.article .content table { font-size: 15px; }
@media screen and (min-width: 1472px) { .is-2-column .container { max-width: 1280px; width: 1280px; } }
@media screen and (min-width: 1280px) and (max-width: 1471px) { .is-2-column .container { max-width: 1152px; width: 1152px; } }
</style>`);
