{% if theme.echarts.enable %}
    <script type="text/javascript" src="{{ theme.echarts.cdn }}"></script>
    <script type="text/javascript">
      $('script[type="text/x-echarts-config"]').each(function() {
          var code = $(this).text();
          eval.call(window, code);
      });
    </script>
{% endif %}
