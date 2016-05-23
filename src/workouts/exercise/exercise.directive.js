(function() {
'use strict';
angular.module('demo.workouts.exercise')
	.directive('jxlExercise', jxlExercise)

function jxlExercise($window)
{
	// console.log("jxlExercise::constructor");
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
		templateUrl: "workouts/exercise/exercise.directive.html",
		controller: 'ExerciseController',
		controllerAs: 'vm'
	};
}

})();