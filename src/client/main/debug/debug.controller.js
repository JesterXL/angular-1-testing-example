(function() {
'use strict';	
	angular.module('main.debug')
	.controller('eeDebugController', eeDebugController);

	function eeDebugController(serviceLocator, $http)
	{		
		var vm = this;
		vm.services = [];
		_.forEach(serviceLocator, function(value, prop)
		{
			console.log("prop: " + prop + ", value: " + value);
			vm.services.push({name: prop, value: value});
		});

		$http.get(serviceLocator.GET_DEBUG_INFO)
		.then(function(results)
		{
			vm.nodeDebug = results.data.data;
			console.log(vm.nodeDebug);
		});
	}

})();
