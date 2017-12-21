$(function() {
  
  hljs.initHighlighting();

  var layout = $('#layout');

  $('#menu-toggle').click(function() {
    layout.toggleClass('no-menu');
  });

});
