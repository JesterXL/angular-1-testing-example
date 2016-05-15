(function() {
'use strict';	
	angular.module('main.register')
	.controller('registerController', registerController);

	function registerController(RegisterService, serviceLocator, $state, $rootScope)
	{		
		console.log("registerController::constructor");
		var vm = this;
		vm.init = init;
		vm.onSubmitRegister = onSubmitRegister;


		function init()
		{
			$state.go('register.step1');
		}

		function onSubmitRegister(event, user)
		{
			$state.go('register.loading');
			return RegisterService.sendRegisterData()
			.then(function(result)
			{
				console.log('success!');
				$state.go('register.success');
			},
			function(error)
			{
				console.log('error');
				$state.go('register.error');
			});

			// $state.go('register.loading');
			// console.log("on submit register");
			// console.log("here.");
   //          // var deferred = $q.defer();
   //          var domain = window.location.domain;
            
   //          RegisterService.sendRegisterData(user)
   //          .then(function(result)
   //          {
   //              $state.go('register.success');
   //              // deferred.resolve(result);
   //              // console.log("data", result);
   //          },
   //          function(error)
   //          {
   //              deferred.reject(error);
   //              $state.go('register.error');
   //          });
   //          return deferred.promise;
		
		}

		init();

		
	}

})();
