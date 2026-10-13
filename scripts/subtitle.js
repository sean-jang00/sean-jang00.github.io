// 글 머리말의 subtitle을 제목 바로 아래(본문 맨 앞)에 표시한다.
// 제목은 짧게, 글의 종류와 대상은 subtitle에 쓴다. 예) title: 무작위 바이트에서 생겨난 복제자 / subtitle: Computational Life 리뷰와 재현
hexo.extend.filter.register('before_post_render', data => {
  if (data.layout === 'post' && data.subtitle) {
    const esc = String(data.subtitle).replace(/&/g, '&amp;').replace(/</g, '&lt;');
    data.content = `<p class="post-subtitle">${esc}</p>\n\n` + data.content;
  }
  return data;
});

hexo.extend.injector.register('head_end', `<style>
.post-subtitle { margin-top: -.5rem !important; margin-bottom: 1.5rem !important; font-size: 1.15em; color: #6b7280; }
</style>`);
