/* global hexo */
// Usage: {% centertext %} Something {% endcentercentertext %}

function centerText(args, content) {
  return hexo.render.renderSync({text: `<p style="text-align: center;">${content}</p>`, engine: 'markdown'});
}

hexo.extend.tag.register('centertext', centerText, {ends: true});
