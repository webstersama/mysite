$(function(){
	$('#accordion').on('click', '.card-header' , function(){
		var card_text = $(this).next();
		if (card_text.is(':visible')) {
			$('.card-header i').removeClass('fas fa-caret-up');
			$('.card-header i').addClass('fas fa-caret-down');
			$('.card-header').css({
				'background-color': '#00000000',
				'color': 'black'
			});
		}
		else {
			$('.card-header i').removeClass('fas fa-caret-up');
			$('.card-header i').addClass('fas fa-caret-down');
			$(this).find('i').addClass('fas fa-caret-up');
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