(function() {
'use strict';	
	angular.module('main.register.registerstep1')
	.controller('registerStep1Controller', registerStep1Controller);

	function registerStep1Controller(RegisterService, $stateParams, $scope, $rootScope, addressService, statesList)
	{		
        var vm = this;
        vm.email = $stateParams.email;
        vm.account = $stateParams.account;
        vm.address = $stateParams.address;
        vm.city = $stateParams.city;
        vm.state = $stateParams.state;
        vm.zip = $stateParams.zip;
        vm.onSubmit = onSubmit;
        vm.loading=false;

        var user = {
           email: vm.email,
           account: vm.account,
           address: vm.address,
           city: vm.city,
           state: vm.state,
           zip: vm.zip
        };

        function onSubmit()
        {
            var user = {
               email: vm.email,
               account: vm.account,
               address: vm.address,
               city: vm.city,
               state: vm.state,
               zip: vm.zip
            };
            RegisterService.sendRegisterData()
            .then(function(result)
            {
                console.log('sendRes', result);
            },
            function(error)
            {
                console.log('error', error);
            });
            
        }

        

  //     email: 'ipsum@lorem.com',
  //     firstName: '',
  //     lastName: '',
  //     account: '123456789',
  //     address: '1700 Seaport Blvd',
  //     city: 'Redwood City',
  //     state: 'CA',
  //     zip: '94043'

	}

})();
