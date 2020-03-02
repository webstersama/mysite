$(function(){
	var $window = $(window);

	function checkWidth() {
		var windowsize = $window.width();
		if (windowsize > 1200) {
			$('.header_decor span:nth-child(1)').css({
				'opacity': '1',
				'left': '20px',
				'top': '140px',
				'transition': '2s'
			});
			$('.header_decor span:nth-child(2)').css({
				'opacity': '1',
				'left': '-150px',
				'top': '390px',
				'transition': '2s'
			});
			$('.header_decor span:nth-child(3)').css({
				'opacity': '1',
				'left': '410px',
				'top': '170px',
				'transition': '3s'
			});
			$('.header_decor span:nth-child(4)').css({
				'opacity': '1',
				'left': '-20px',
				'top': '620px',
				'transition': '4s'
			});
			$('.header_decor span:nth-child(5)').css({
				'opacity': '1',
				'left': '350px',
				'top': '510px',
				'transition': '3s'
			});
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
			$('.header_decor span:nth-child(1)').css({
				'opacity': '1',
				'left': '-110px',
				'top': '250px',
				'transition': '3s'
			});
			$('.header_decor span:nth-child(2)').css({
				'opacity': '1',
				'left': '10px',
				'top': '200px',
				'transition': '3s'
			});
			$('.header_decor span:nth-child(3)').css({
				'opacity': '1',
				'left': '120px',
				'top': '230px',
				'transition': '3s'
			});
			$('.header_decor span:nth-child(4)').css({
				'opacity': '1',
				'left': '-45px',
				'top': '465px',
				'transition': '2s'
			});
			$('.header_decor span:nth-child(5)').css({
				'opacity': '1',
				'left': '80px',
				'top': '485px',
				'transition': '2s'
			});
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
			$('.header_decor span:nth-child(1)').css({
				'opacity': '1',
				'left': '125px',
				'top': '170px',
				'transition': '3s'
			});
			$('.header_decor span:nth-child(2)').css({
				'opacity': '1',
				'left': '55px',
				'top': '230px',
				'transition': '3s'
			});
			$('.header_decor span:nth-child(3)').css({
				'opacity': '1',
				'left': '-10px',
				'top': '330px',
				'transition': '3s'
			});
			$('.header_decor span:nth-child(4)').css({
				'opacity': '1',
				'left': '-50px',
				'top': '415px',
				'transition': '2s'
			});
			$('.header_decor span:nth-child(5)').css({
				'opacity': '1',
				'left': '-125px',
				'top': '485px',
				'transition': '2s'
			});
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
				$('.header_decor span:nth-child(1)').css({
				'opacity': '1',
				'left': '20%',
				'top': '155px',
				'transition': '3s'
			});
			$('.header_decor span:nth-child(2)').css({
				'opacity': '1',
				'left': '-5px',
				'top': '165px',
				'transition': '3s'
			});
			$('.header_decor span:nth-child(3)').css({
				'opacity': '1',
				'left': '-120px',
				'top': '220px',
				'transform': 'rotate(-40deg)',
				'transition': '3s'
			});
			$('.header_decor span:nth-child(4)').css({
				'opacity': '1',
				'left': '-90px',
				'top': '355px',
				'transition': '2s'
			});
			$('.header_decor span:nth-child(5)').css({
				'opacity': '1',
				'left': '-105px',
				'top': '485px',
				'transition': '2s'
			});
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
	checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
});

