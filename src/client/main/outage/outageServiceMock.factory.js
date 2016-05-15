(function() {
'use strict';
	angular
		.module("main.outage")
		.factory("outageServiceMock", function ($q, $timeout)
		{
			function reportOutage(address)
			{
				var deferred = $q.defer();
				$timeout(function()
				{
					deferred.resolve();
				}, 2000);
				return deferred.promise;
			}
			
			return {
				reportOutage: reportOutage
			};
		});
})();
