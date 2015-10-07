$(document).ready(function() {

  $('#hide-images').click(function() {

   // $('.process-image-large').toggleClass("hidden");

    $('.process-image-large').toggle(300);
    $('#intro-image').toggle(300);
    $('#hide-images').html($('#hide-images').text() == 'Show Images' ? 'Hide Images' : 'Show Images');
  });

  // $('.ingredient-image').hover(function() {
  //   $('.ingredient-list').toggleClass("expanded-menu");
  // });

  $('.ingredient-image').hover(function() {
    $(this).next().toggleClass("ingredient-text");
    $(this).next().toggleClass("show-ingredient-text");
  });

});