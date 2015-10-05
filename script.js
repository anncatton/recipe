$(document).ready(function() {

  $('#hide-images').click(function() {

// toggleClass with .hidden doesn't create the display error
//    $('.process-image').toggleClass("hidden");

    // $('.ingredient-image').toggle(300);
    // $('.ingredient-text').toggle(300);
    $('.process-image').toggle(400);
    $('#intro-image').toggle(400);
    $('#hide-images').html($('#hide-images').text() == 'Show Images' ? 'Hide Images' : 'Show Images');
  });

  // $('ingredient-image').click(function() {
  //   $('ingredient-text').toggleClass('hidden');
  // });

  // $('.ingredient-image').click(function() {
  //   $(this).toggleClass('ingredient-list-click');
  // });

});