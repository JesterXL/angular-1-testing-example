(function() {
'use strict';
	
	angular.module('main.registration.registrationstep1')
	.controller('registrationStep1Controller', registrationStep1Controller);

	function registrationStep1Controller(serviceLocator, $http, $rootScope, registrationModel)
	{		
		var vm = this;
		vm.model = registrationModel;
	}

})();
