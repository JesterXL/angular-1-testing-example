(function() {
'use strict';
angular.module('demo.login')
	.directive('jxlLogin', jxlLogin)

function jxlLogin($window)
{
	console.log("jxlLogin::constructor");
	function link(scope, element, attrs)
	{
		console.log("link function");
		console.log("$window.componentHandler:", $window.componentHandler);
		console.log("window.componentHandler:", window.componentHandler);
		_.forEach(document.querySelectorAll('.mdl-textfield'), function(txt)
		{
			console.log("looping through fields");
			if($window.componentHandler && $window.componentHandler.upgradeElement)
			{
				console.log("and upgrading");
				$window.componentHandler.upgradeElement(txt);
			}
		});
		
	}

	return {
		restrict: 'E',
		scope: {},
		link: link,
		transclude: false,
		templateUrl: "login/login.directive.html",
		controller: 'LoginController',
		controllerAs: 'vm'
	};
}

})();