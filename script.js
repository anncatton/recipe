$(document).ready(function() {

  $('#hide-images').click(function() {

   // $('.process-image-large').toggleClass("hidden");

    $('.process-image-large').toggle(300);
    $('#intro-image').toggle(300);

    $('.ingredient-image').toggle(100);
    $('.ingredient-list span').toggleClass('ingredient-text-only-display');
    $('#hide-images').html($('#hide-images').text() == 'Show Images' ? 'Hide Images' : 'Show Images');
  });
  
  $('.ingredient-image').hover(function() {
    $(this).next().toggleClass("ingredient-text");
    $(this).next().toggleClass("ingredient-text-popup");
  });
  
  $('.slide-button').click(function() {
    $(this).next().slideToggle(500);
    $(this).html($(this).text() == 'Done this step' ? 'Review this step' : 'Done this step');
  });
  
});