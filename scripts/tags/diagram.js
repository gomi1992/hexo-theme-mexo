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

function exprInOnLine(content) {
  return content.trim().replace(new RegExp("[\r\n]", "gm"), "\\n");
}

// Usage: {% flowchart %} flowchart-diagram-expression goes here {% endflowchart %}

const flowcharthtml = `<div class="diagram" id="<%= id %>"><span>Flowchart Diagram will be placed here</span></div>
<script type="text/x-diagram-config">
  (function($){
    flowchart.parse('<%= expr %>').drawSVG('<%= id %>');
  })(jQuery);
</script>`;

function flowchart(args, content) {
  if (!content.length) {
    hexo.log.warn('[flowchart diagram] content can NOT be empty');
    return 'Content can NOT be empty.';
  }

  let option = {
    id: 'flowchart_' + ((Math.random() * 9999) | 0),
    expr: exprInOnLine(content)
  };

  return _.template(flowcharthtml)(option);
}

hexo.extend.tag.register('flowchart', flowchart, {ends: true});

// Usage: {% sequence %} sequence-diagram-expression goes here {% endsequence %}

const sequencehtml = `<div class="diagram" id="<%= id %>"><span>Sequence Diagram will be placed here</span></div>
<script type="text/x-diagram-config">
  (function($){
    Diagram.parse('<%= expr %>').drawSVG('<%= id %>', {theme: 'simple'/*hand NOT SUPPORT chinese*/});
  })(jQuery);
</script>`;

function sequence(args, content) {
  if (!content.length) {
    hexo.log.warn('[sequence diagram] content can NOT be empty');
    return 'Content can NOT be empty.';
  }

  let option = {
    id: 'sequence_' + ((Math.random() * 9999) | 0),
    expr: exprInOnLine(content)
  };

  return _.template(sequencehtml)(option);
}

hexo.extend.tag.register('sequence', sequence, {ends: true});

// Usage: {% enablediagram %}

const enablehtml = `<script type="text/javascript" src="<%= cdn_raphael %>"></script>
    <script type="text/javascript" src="<%= cdn_sequence %>"></script>
    <script type="text/javascript" src="<%= cdn_flowchart %>"></script>
    <script type="text/javascript">
      $('script[type="text/x-diagram-config"]').each(function() {
          var code = $(this).text();
          eval.call(window, code);
      });
    </script>`;

function enableDiagram(args, content) {
  return _.template(enablehtml)({
    cdn_raphael: hexo.theme.config.diagram.cdn_raphael,
    cdn_sequence: hexo.theme.config.diagram.cdn_sequence,
    cdn_flowchart: hexo.theme.config.diagram.cdn_flowchart
  });
}

hexo.extend.tag.register('enablediagram', enableDiagram, {ends: false});
