$(document).ready(function() {
	// console.log("Script all ready!");

	// $('.process-image').dblclick(function() { 
	// 	$('.process-image').hide('slow'); 
	// });

	$('#hide-images').click(function() {
		$('.process-image').toggleClass("hidden");
		$('#intro-image').toggle('slow');
		$('.ingredient-image').toggle('slow');
		$('.ingredient-item').toggleClass('ingredient-image-hidden');
		$('#hide-images').html($('#hide-images').text() == 'Show Images' ? 'Hide Images' : 'Show Images');
	});

	$('.ingredient-list-item').click(function() {
		$(this).toggleClass('ingredient-list-click');
	});

// 	$('.purchased').click(function() {
// 		$(this).toggleClass('is-purchased');
// 	});
});