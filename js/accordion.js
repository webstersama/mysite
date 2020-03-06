$(function(){
	$('#accordion').on('click', '.card-header' , function(){
		var card_text = $(this).next();
		if (card_text.is(':visible')) {
			$('.card-header').css({
				'background-color': '#00000000',
				'color': 'black'
			});
		}
		else {
			$('.card-header').css({
				'background-color': '#00000000',
				'color': 'black'
			});
			$(this).css({
				'background-color': '#FF8800',
				'color': 'white'
			});
		};
	});
});