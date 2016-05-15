(function() {
'use strict';
	angular.module('main.outage')

	.controller('outageController', outageController);
	function outageController($rootScope, $state, outageServiceMock, $log)
	{
		var vm = this;
		vm.init = init;
		vm.onSubmitOutageReport = onSubmitOutageReport;

		function init()
		{
			$rootScope.$on('submitOutageReport', onSubmitOutageReport);
			return $state.go('outage.step1');
		}

		function onSubmitOutageReport(event, address)
		{
			$state.go('outage.loading');
			return outageServiceMock.reportOutage(address)
			.then(function()
			{
				$state.go('outage.step2');
			},
			function()
			{
				$state.go('outage.stepError');
			});
		}

		vm.init();
	}

})();
