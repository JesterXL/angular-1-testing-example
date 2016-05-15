(function() {
'use strict';	
	angular.module('main.registration.registrationstep2')
	.controller('registrationStep2Controller', registrationStep2Controller);

	function registrationStep2Controller(serviceLocator, $http, registrationModel)
	{		
		var vm = this;
		vm.model = registrationModel;
	}

})();
