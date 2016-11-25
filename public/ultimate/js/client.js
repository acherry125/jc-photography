function loadSlick() {
	$('.slick-carousel').slick({
		dots: true,
		infinite: true,
		centerMode: true,
		adaptiveHeight: true
	});
}

function initHome() {
	initPage('combined-home', 'combined');
}

// TRUDGE

function initTrudgeHome() {
	initPage('trudge-home', 'trudge');
}

function initTrudgeGames() {
	initPage('trudge-records', 'trudge');
}

function initTrudgeTournament() {
	initPage('trudge-tournament', 'trudge');
}

// STRUT

function initStrutHome() {
	initPage('strut-home', 'strut');
}

function initStrutRules() {
	initPage('strut-rules', 'strut');
}


function initPage(viewName, team) {
	imgTag = '<img src="images/' + team + '-logo.png">';
	$('#top-logo').html(imgTag);
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

function initCurrentPage() {
	var view = location.hash.substring(2);
	var viewParts = view.split('/');
	if(viewParts[0] === 'trudge') {
		switch(viewParts[1]) {
			case 'home': 
				initTrudgeHome();
				break;
			case 'games':
				initTrudgeGames();
				break;
			case 'tournament':
				initTrudgeTournament();
				break;
			default:
				initTrudgeHome();
				break;
		}
	} else if (viewParts[0] === 'strut') {
		switch(viewParts[1]) {
			case 'home': 
				initStrutHome();
				break;
			case 'rules': 
				initStrutRules();
				break;
			default:
				initStrutHome();
				break;
		}
	} else {
		initHome();
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