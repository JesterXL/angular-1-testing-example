(function() {
'use strict';
angular.module('demo.workouts')
	.directive('jxlWorkouts', jxlWorkouts)

function jxlWorkouts($window)
{
	// console.log("jxlWorkouts::constructor");
	function link(scope, element, attrs)
	{
		_.forEach(document.querySelectorAll('.mdl-layout'), function(txt)
		{
			if($window.componentHandler && $window.componentHandler.upgradeElement)
			{
				$window.componentHandler.upgradeElement(txt);
			}
		});
		
	}

	return {
		restrict: 'E',
		scope: {},
		link: link,
		transclude: false,
		templateUrl: "workouts/workouts.directive.html",
		controller: 'WorkoutsController',
		controllerAs: 'vm'
	};
}

})();