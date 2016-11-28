/*
 * ManerFan(http://manerfan.com). All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Created by ManerFan on 2016/11/27.
 */

var Hexo = require('hexo');
var hexo = new Hexo(process.cwd(), {});

// Usage: {% textcolor (text) [style] %}
// style muted | primary | success | info | warning | danger

exports.textColor = args => {
  return `<span class="text-${args[1] || 'info'}">${args[0] || ''}</span>`;
};

// Usage: {% pcolor [style] %} text string {% endpcolor %}
// style muted | primary | success | info | warning | danger

exports.pColor = (args, content) => {
  let text = `<p class="text-${args[0] || 'info'}">${content}</p>`;
  return hexo.render.renderSync({
    text: text,
    engine: 'markdown'
  });
};
