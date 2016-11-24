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
 * Created by ManerFan on 2016/11/22.
 */

/* global hexo */

const _ = require('underscore');

// Usage: {% echarts [style-height] [style-width] %} echarts-option goes here {% endecharts %}

const echartshtml = `<div id="<%= id %>" style="width:<%= width %>;height:<%= height %>;margin: 0 auto"></div>
<script type="text/x-echarts-config">
  (function($){
    var instance_<%= id %> = echarts.init(document.getElementById('<%= id %>'));
    instance_<%= id %>.setOption(<%= option %>);
    $(window).resize(function() {instance_<%= id %>.resize();});
  })(jQuery);
</script>`;

function echarts(args, content) {
  if (!content.length) {
    hexo.log.warn('[echarts] content can NOT be empty');
    return '';
  }

  let opt = '{}';
  try {
    opt = eval(`(${content})`);
  } catch (ex) {
    hexo.log.error(`JSON is invalid\n${content}\n${ex}`);
    return '';
  }

  let option = {
    id: 'echarts_' + ((Math.random() * 9999) | 0),
    option: JSON.stringify(opt),
    height: args[0] || '400px',
    width: args[1] || '85%'
  };

  return _.template(echartshtml)(option);
}

hexo.extend.tag.register('echarts', echarts, {ends: true});

// Usage: {% enableecharts %}

const enablehtml = `<script type="text/javascript" src="<%= cdn %>"></script>
<script type="text/javascript">
  $('script[type="text/x-echarts-config"]').each(function() {
      var code = $(this).text();
      eval.call(window, code);
  });
</script>`;

function enableEcharts(args, content) {
  return _.template(enablehtml)({cdn: hexo.theme.config.echarts.cdn});
}

hexo.extend.tag.register('enableecharts', enableEcharts, {ends: false});
