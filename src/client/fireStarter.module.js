(function() {
'use strict';

	angular
	.module('fireStarter', [
		'ui.router',
		'main',
		'ngMaterial'
		])
	.config(configure);
	
	function configure($mdThemingProvider, $mdIconProvider, $compileProvider)
	{
		$mdIconProvider
		.defaultIconSet("./svg/avatars.svg", 128)
		.icon("calendar"       , "./svg/ic_date_range_black_24px.svg"        , 24)
		.icon("beach"      , "./svg/ic_beach_access_black_24px.svg"       , 24)
		.icon("room"      , "./svg/ic_shopping_room_black_24px.svg"       , 24)
		.icon("night"      , "./svg/ic_brightness_3_white_24px.svg"       , 24)
		.icon("map"      , "./svg/ic_map_black_24px.svg"       , 24)
		.icon("logo"      , "./svg/logo.svg"       , 128)
		.icon("leftarrow", "./svg/ic_keyboard_arrow_left_black_24px.svg", 24)
		.icon("rightarrow", "./svg/ic_keyboard_arrow_right_black_24px.svg", 24)
		.icon("threedots", "./svg/ic_more_vert_black_24px.svg", 24);
		$mdThemingProvider.theme('default')
		.primaryPalette('teal')
		.accentPalette('light-green')
		.warnPalette('red');

		// Uncomment when ready to deploy to prod.
		// $compileProvider.debugInfoEnabled(false);
	}

})();
