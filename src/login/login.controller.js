(function() {
'use strict';
angular
	.module('demo.login')
	.controller('LoginController', LoginController)

function LoginController($scope, $state, $rootScope, $http, loginService)
{
	// console.log("LoginController::constructor");
	var vm = this;
	vm.username = "";
	vm.password = "";
	vm.login = login;
	vm.hasError = false;
	vm.lastError = null;

	function login()
	{
		vm.hasError = false;
		return loginService.login(vm.username, vm.password)
		.then(function()
		{
			console.log("Login success.");
			vm.hasError = false;
			$state.go('workouts');
		}, function(errorResponse)
		{
			// console.log("errorResponse:", errorResponse);
			vm.hasError = true;
			if(errorResponse && errorResponse.error)
			{
				vm.lastError = errorResponse.error;
			}
			else
			{
				vm.lastError = errorResponse;
			}

		});
	}
	
}

})();