$(document).ready(function() {

  $('#hide-images').click(function() {

   // $('.process-image-large').toggleClass("hidden");

    $('.process-image-large').toggle(300);
    $('#intro-image').toggle(300);

    $('.ingredient-image').toggle(100);
    $('span.ingredient-text').toggleClass('ingredient-text-only-display');
    $('#hide-images').html($('#hide-images').text() == 'Show Images' ? 'Hide Images' : 'Show Images');
  });
  
  $('.ingredient-image').hover(function() {
    $(this).next().toggleClass("ingredient-text");
    $(this).next().toggleClass("ingredient-text-popup");
  });

  $('.ingredient-image').click(function() {
    $(this).toggleClass('purchased');
    $(this).next().toggleClass('text-purchased');
  });

  $('span.ingredient-text').click(function() {
    $(this).toggleClass('text-purchased');
    $(this).prev().toggleClass('purchased');

  });
  
  $('.slide-button').click(function() {
    $(this).html($(this).text() == 'Done this step' ? 'Review this step' : 'Done this step');
    $(this).prev().slideToggle(200);
  });
});