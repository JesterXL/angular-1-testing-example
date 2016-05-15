(function() {
'use strict';
	angular
		.module("main.outage")
		.factory("outageService", function ($q, $http)
		{
			function reportOutage(address)
			{
				var deferred = $q.defer();
				$http.post('https://jh3b3z0o2a.execute-api.us-west-2.amazonaws.com/prod/report-outage',
				{
					data: {"zipcode":12345, "accountNumber": 987654321}
				})
				.then(function(result)
				{
					deferred.resolve(result);
				},
				function(error)
				{
					deferred.reject(error);
				});
				return deferred.promise;
			}

			return {
				reportOutage: reportOutage
			};
	});
})();
 