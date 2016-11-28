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

/* global hexo */

// Usage: {% btn (alt) [link] [style] [size] %}
// style default | primary | success | info | warning | danger
// size xs sm lg

module.exports = (args, content) => {
  return `<a class="bootcss btn btn-${args[2] || 'default'} btn-${args[3] || 'sm'}" href="${args[1] || 'javascript: void(0)'}">${args[0] || 'link'}</a>`;
};

