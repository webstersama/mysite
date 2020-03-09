$(function(){
	$('.navbar').on('click', '.nav-item:nth-child(1)' , function(){
		window.scrollTo({
		    top: 600,
		    behavior: "smooth"
		});
	});
	$('.navbar').on('click', '.nav-item:nth-child(2)' , function(){
		window.scrollTo({
		    top: 1200,
		    behavior: "smooth"
		});
	});
	$('.navbar').on('click', '.nav-item:nth-child(3)' , function(){
		window.scrollTo({
		    top: 1600,
		    behavior: "smooth"
		});
	});
});