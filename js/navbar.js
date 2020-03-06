$(function(){
	$('.navbar').on('click', '.nav-item' , function(){
		$('.nav-item').removeClass('active');
		$(this).addClass('active');
	});
});