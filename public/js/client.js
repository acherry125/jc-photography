function loadSlick() {
	$('.slick-carousel').slick({
		dots: true,
		infinite: true,
		centerMode: true,
		adaptiveHeight: true
	});
}

function initHome() {
	initGallery('home', 19);
}

function initMisc() {
	initGallery('misc', 9);
}
 
function initGallery(galleryName, numPhotos) {
	$('main').load('views/gallery.view.html', function() {
		/*$.getJSON( "json/" + galleryName + ".json", function( data ) {
		  console.log(data)
		});*/
		for(var i = 0; i < 50; i++) {
			var path = 'https://s3.amazonaws.com/jc-website-photos/' + galleryName + '/',
				fileName = 'img(' + (i % numPhotos) + ').jpg',
				bigFileName = 'img(' + (i % numPhotos) + ')-big.jpg'
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
			padding: [5, 5, 5, 5],
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
	} else if(view === 'life'){
		initMisc();
	} else {
		initHome();
	}
}

$(document).foundation();
initCurrentPage();

$(window).on('hashchange', function() {
	initCurrentPage();
})