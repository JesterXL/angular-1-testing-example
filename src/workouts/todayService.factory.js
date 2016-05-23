(function() {
'use strict';
	angular
		.module("demo.workouts")
		.factory("workoutTodayService", function (serviceLocator, $http, $q)
		{
			function load()
			{
				var deferred = $q.defer();
				$http.get(serviceLocator.WORKOUTS_TODAY)
				.then(function(response)
				{
					// console.log("response.data:", response.data);
					// console.log("response.data.result:", response.data.result);
					// console.log("response.data.workouts:", response.data.workouts);
					if(response.data.result === true)
					{
						deferred.resolve(response.data.workouts);
					}
					else
					{
						deferred.reject("No workouts found.");
					}
				},
				function(error)
				{
					if(error.data)
					{
						deferred.reject(error.data);
					}
					else
					{
						deferred.reject("Unknown error.");
					}
				});
				return deferred.promise;
			}

			return {
				load: load
			}
		});

})();