$(function() {

  $('.circle-p-wrapper').click(function() {
      var wrapper = $(this).parent();
      $(this).fadeOut(1000);
      $(wrapper.children('.info-pane')).fadeIn(1000);
  });

});
