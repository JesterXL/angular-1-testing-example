(function() {
'use strict';
angular
	.module('demo.workouts.workoutCard')
	.controller('WorkoutCardController', WorkoutCardController)

function WorkoutCardController($scope, $state, $rootScope, $http, loginService)
{
	// console.log("WorkoutCardController::constructor");
	var vm = this;
	vm.getExerciseIcon = getExerciseIcon;
	if(vm.exercise && vm.exercise.name)
	{
		vm.imageURL = getExerciseIcon(vm.exercise.name);
	}

	function getExerciseIcon(exerciseName)
	{
		// console.log("exerciseName:", exerciseName.toLowerCase());
		var image = "";
		if(exerciseName)
		{
			switch(exerciseName.toLowerCase())
			{
				case 'squat':
					image = 'images/squat.jpg';
					break;

				case 'deadlift':
					image = 'images/deadlift.jpg';
					break;

				case 'bench press':
					image = 'images/bench-press.png';
					break;	
			}
		}
		// console.log("image:", image);
		return image;
	}
	
}

})();