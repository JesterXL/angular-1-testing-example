(function() {
	'use strict';
	angular.module('main.registration')
	.controller('registrationController', registrationController);

	function registrationController(serviceLocator, $state, MockRegistrationService)
	{
		console.log("registrationController::constructor");
		var vm = this;
		vm.init = init;

		function init()
		{
			$state.go('registration.step1');
		}

		init();
		
	}

})();
