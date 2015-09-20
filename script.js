$(document).ready(function() {

  $('#hide-images').click(function() {

// toggleClass with .hidden doesn't create the display error
//    $('.process-image').toggleClass("hidden");

    $('.process-image').toggle('slow');
    $('#intro-image').toggle('slow');
    $('#hide-images').html($('#hide-images').text() == 'Show Images' ? 'Hide Images' : 'Show Images');
  });

  $('.ingredient-list-item').click(function() {
    $(this).toggleClass('ingredient-list-click');
  });

});