$(function(){
	var $window = $(window);
	var windowsize = $window.width();
	var target = $('#price');
	var targetPos = target.offset().top;
	var winHeight = $(window).height();
	var scrollToElem = targetPos - winHeight;
	function checkWidth() {
			if (windowsize > 1200) {
	//----------------------------------------------------------//
				$('.jumbotron_decor span:nth-child(1)').css({
					'opacity': '1',
					'left': '170px',
					'top': '10px',
					'transition': '2s'
				});
				$('.jumbotron_decor span:nth-child(2)').css({
					'opacity': '1',
					'right': '180px',
					'top': '0px',
					'transition': '2s'
				});
				$('.jumbotron_decor span:nth-child(3)').css({
					'opacity': '1',
					'right': '280px',
					'top': '140px',
					'transition': '3s'
				});
				$('.jumbotron_decor span:nth-child(4)').css({
					'opacity': '1',
					'left': '170px',
					'top': '190px',
					'transition': '4s'
				});
				$('.jumbotron_decor span:nth-child(5)').css({
					'opacity': '1',
					'left': '70px',
					'top': '110px',
					'transition': '3s'
				});
			}
			else if (windowsize < 1200 & windowsize > 770) {
	//----------------------------------------------------------//
				$('.jumbotron_decor').css({
					'height':'310px'
				});
				$('.jumbotron_decor span:nth-child(1)').css({
					'opacity': '1',
					'left': '120px',
					'top': '-5px',
					'transition': '2s'
				});
				$('.jumbotron_decor span:nth-child(2)').css({
					'opacity': '1',
					'right': '80px',
					'top': '0px',
					'transform': 'rotate(30deg)',
					'transition': '2s'
				});
				$('.jumbotron_decor span:nth-child(3)').css({
					'opacity': '1',
					'right': '80px',
					'top': 'unset',
					'bottom': '5px',
					'transition': '3s'
				});
				$('.jumbotron_decor span:nth-child(4)').css({
					'opacity': '0',
					'left': '170px',
					'top': '170px',
					'transition': '4s'
				});
				$('.jumbotron_decor span:nth-child(5)').css({
					'opacity': '1',
					'left': '60px',
					'top': 'unset',
					'bottom': '15px',
					'transition': '3s'
				});			
			}
			else if (windowsize < 770 & windowsize > 560) {
	//----------------------------------------------------------//
				$('.jumbotron_decor').css({
					'height':'310px'
				});
				$('.jumbotron_decor span:nth-child(1)').css({
					'opacity': '1',
					'left': '40px',
					'top': '-5px',
					'transition': '2s'
				});
				$('.jumbotron_decor span:nth-child(2)').css({
					'opacity': '1',
					'right': '80px',
					'top': '0px',
					'transform': 'rotate(30deg)',
					'transition': '2s'
				});
				$('.jumbotron_decor span:nth-child(3)').css({
					'opacity': '1',
					'right': '80px',
					'top': 'unset',
					'bottom': '60px',
					'transition': '3s'
				});
				$('.jumbotron_decor span:nth-child(4)').css({
					'opacity': '0',
					'left': '170px',
					'top': '170px',
					'transition': '4s'
				});
				$('.jumbotron_decor span:nth-child(5)').css({
					'opacity': '1',
					'left': '60px',
					'top': 'unset',
					'bottom': '70px',
					'transition': '3s'
				});					
			}
			else if (windowsize < 560) {
	//----------------------------------------------------------//
				$('.jumbotron_decor').css({
					'height':'350px'
				});
				$('.jumbotron_decor span:nth-child(1)').css({
					'opacity': '1',
					'left': '40px',
					'top': '-5px',
					'transition': '2s'
				});
				$('.jumbotron_decor span:nth-child(2)').css({
					'opacity': '1',
					'right': '10px',
					'top': '0px',
					'transform': 'rotate(30deg)',
					'transition': '2s'
				});
				$('.jumbotron_decor span:nth-child(3)').css({
					'opacity': '1',
					'right': '20px',
					'top': 'unset',
					'bottom': '25%',
					'transition': '3s'
				});
				$('.jumbotron_decor span:nth-child(4)').css({
					'opacity': '0',
					'left': '170px',
					'top': '170px',
					'transition': '4s'
				});
				$('.jumbotron_decor span:nth-child(5)').css({
					'opacity': '1',
					'left': '10px',
					'top': 'unset',
					'bottom': '20%',
					'transition': '3s'
				});			
			};
		};

	$(window).scroll(function(){
	  var winScrollTop = $(this).scrollTop();
	  if(winScrollTop > scrollToElem){
		checkWidth();
	  }
	});
	// checkWidth();
	// $(window).resize(checkWidth);
});
