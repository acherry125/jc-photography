function loadSlick() {
	$('.slick-carousel').slick({
		dots: true,
		infinite: true,
		centerMode: true,
		adaptiveHeight: true
	});
}

function initHome() {
	$('main').load('views/home.view.html', function() {
		for(var i = 0; i < 50; i++) {
			var path = 'demo_images/',
				fileName = 'img (' + (i % 19) + ').JPG',
				bigFileName = 'img (' + (i % 19) + ')-big.JPG'
				gridItem = '<li class="grid-item"><div class="grid-item-padding"><a rel="group1" href="' 
				+ path + bigFileName + '"><img src="' + path + fileName + '"></a></li></div>';
			$('.grid').append(gridItem);
		}
		$(".grid-item a").fancybox({
			helpers: {
				title	: {
					type: 'outside'
				},
				thumbs	: {
					width: 100,
					height: 100
				}
			},
			padding: [2, 2, 2, 2],
			margin: [20, 20, 0, 5],
			autoResize: true,
			aspectRatio: true,
			minWidth: 280
		});
		var $grid = $('.grid').masonry({
  			// options
  			itemSelector: '.grid-item',
  			columnWidth: '.grid-item',
  			percentPosition: true,
  			transitionDuration: '0.3s'
		});		
		$grid.imagesLoaded().always( function() {
  			$grid.masonry('layout');
		});
	});
	return false;
}

function initAbout() {
	$('main').load('views/about.view.html', function () {
		$('.slick-carousel').imagesLoaded().always( function() {
				loadSlick();
		});
	});
	return false;
}

function initCurrentPage() {
	view = location.hash.substring(2);
	if(view === 'about') {
		initAbout();
	} else {
		initHome();
	}
	return false;
}

$(document).foundation();
initCurrentPage();

$(window).on('hashchange', function() {
	initCurrentPage();
})