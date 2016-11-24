{% if theme.diagram.enable %}
    <script type="text/javascript" src="{{ theme.diagram.cdn_raphael }}"></script>
    <script type="text/javascript" src="{{ theme.diagram.cdn_sequence }}"></script>
    <script type="text/javascript" src="{{ theme.diagram.cdn_flowchart }}"></script>
    <script type="text/javascript">
      $('script[type="text/x-diagram-config"]').each(function() {
          var code = $(this).text();
          eval.call(window, code);
      });
    </script>
{% endif %}
