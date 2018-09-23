
var twister = new MersenneTwister();

var app = new Framework7({
	root: '#app',
    routes: routes,
	pushState: true,
    panel: {
        swipe: "left"
    }
});
var mainView = app.views.create('.view-main');
var $$ = Dom7;
var openedDialog = null;
var isFromIntent = false;

app.router.navigate("/first/", {"animate":false, "pushState":false, "history":false});
InitLanguage(save_data.settings.language);

$$(document).on('page:init', function (e, page) {
	
});
