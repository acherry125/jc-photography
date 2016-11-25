function loadSlick() {
	$('.slick-carousel').slick({
		dots: true,
		infinite: true,
		centerMode: true,
		adaptiveHeight: true
	});
}

function initTrudgeHome() {
	initPage('trudge-home');
}

function initTrudgeGames() {
	initPage('trudge-records');
}

function initTrudgeTournament() {
	initPage('trudge-tournament');
}


function initPage(viewName) {
	$('main').load('views/' + viewName + '.view.html', function() {
		if (viewName == 'trudge-records') {
			$('.records-table').DataTable({
				"paging":   false,
        		"ordering": false,
        		"info":     false
			});
			$(document).foundation('accordion', 'reflow');
			$(document).foundation({
  				accordion: {
				    // allow multiple accordion panels to be active at the same time
				    multi_expand: true,
				    // allow accordion panels to be closed by clicking on their headers
				    // setting to false only closes accordion panels when another is opened
				    toggleable: true
				}
			});
		}
	});
	return false;
}
/*
function initAbout() {
	$('main').load('views/about.view.html', function () {
		$('.slick-carousel').imagesLoaded().always( function() {
				loadSlick();
		});
	});
	return false;
}
*/
function initCurrentPage() {
	view = location.hash.substring(2);
	if(view === 'trudge/home') {
		initTrudgeHome();
	} else if(view === 'trudge/games') {
		initTrudgeGames();
	} else if(view === 'trudge/tournament') {
		initTrudgeTournament();
	} else {
		initTrudgeHome();
	}
}

$(document).foundation();
initCurrentPage();

$(window).on('hashchange', function() {
	initCurrentPage();
})

$(document).on('click', '.js-offcanvas-close', function(e) {
	$('.off-canvas-wrap').foundation('offcanvas', 'hide', 'move-right');
})

