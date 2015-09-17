$(document).ready(function() {
  // console.log("Script all ready!");

  // $('.process-image').dblclick(function() { 
  //  $('.process-image').hide('slow'); 
  // });

  $('#hide-images').click(function() {

// toggleClass with .hidden doesn't create the display error
//    $('.process-image').toggleClass("hidden");

// but toggle does cause the <b> elements to disappear once in a while, with a fast or slow setting.
// also, when these elements disappear, the text either before or after sometimes bolds somewhat or even
// doubles, like 2 words laid over each other
// not every <b> element disappears, just some of them, and not always the same ones
    $('.process-image').toggle('slow');

    $('#intro-image').toggle('slow');
//    $('.ingredient-image').toggle('slow');
    $('#hide-images').html($('#hide-images').text() == 'Show Images' ? 'Hide Images' : 'Show Images');
  });

  $('.ingredient-list-item').click(function() {
    $(this).toggleClass('ingredient-list-click');
  });

});