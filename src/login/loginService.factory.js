(function() {
'use strict';
	angular
		.module("demo.login")
		.factory("loginService", function (serviceLocator, $http, $q)
		{
			function login(username, password)
			{
				var deferred = $q.defer();
				$http.post(serviceLocator.LOGIN,
				{
					username: username,
					password: password
				})
				.then(function(response)
				{
					// console.log("LoginService::result, response:", response);
					if(response && response.data && response.data.result === true)
					{
						deferred.resolve();
					}
					else
					{
						deferred.reject();
					}
				},
				function(error)
				{
					// console.log("LoginService::error, error:", response);
					if(error && error.data)
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
				login: login
			}
		});

})();