(function() {
'use strict';
	angular.module('main.outage.outagestep1')
	.controller('outageStep1Controller', outageStep1Controller);

	function outageStep1Controller($rootScope, addressService, statesList)
	{
		var vm = this;
		vm.accountNumber = null;
		vm.firstName = null;
		vm.lastName = null;
		vm.streetAddress = null;
		vm.city = null;
		vm.state = null;
		vm.zipcode = null;
		vm.onSubmit = onSubmit;
		vm.init = init;
		vm.states = _.map(statesList, function(item)
		{
			return item.name;
		});
		vm.initMap = initMap;

		vm.init();
		// vm.initMap();

		function onSubmit()
		{
			var address = {
				firstName: vm.firstName,
				lastName: vm.lastName,
				streetAddress: vm.streetAddress,
				city: vm.city,
				state: vm.state,
				zipcode: vm.zipcode,
				accountNumber: vm.accountNumber
			};
			$rootScope.$broadcast('submitOutageReport', address);
		}

		function init()
		{
			return addressService.getAddress()
			.then(function(address)
			{
				vm.streetAddress = address.street;
				vm.city = address.city;
				vm.state = address.state;
				vm.zipcode = address.zipcode;
			});
		}

		// key AIzaSyDjqdHgOLTF0qGxymEC5iFpx9SlnhAfgMQ
		function initMap(){
			$rootScope.map = {center: {latitude: 51, longitude: 4.40}, zoom: 14};
		}

	}

})();
