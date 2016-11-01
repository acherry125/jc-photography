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
		$(document).foundation('clearing', 'reflow');		
	});
	return false;
}

function initAbout() {
	$('main').load('views/about.view.html', function () {
		loadSlick();
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