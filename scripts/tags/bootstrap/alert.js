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

// Usage: {% alert [style] %} alert string {% endalert %}
// style success | info | warning | danger

module.exports = (args, content) => {
  let text = `<p class="alert alert-${args[0] || 'danger'}" role="alert">${content}</p>`;
  return hexo.render.renderSync({
    text: text,
    engine: 'markdown'
  });
};

