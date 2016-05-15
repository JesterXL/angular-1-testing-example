(function() {
'use strict';

    angular.module("main.register")
    .factory("MockRegisterService", MockRegisterService);

    // serviceLocator: What are the Endpoint URL's?
    function MockRegisterService($http, serviceLocator, $q, $timeout)
    {
        // $http returns a Promise, however, sometimes you want to parse stuff
        // yourself so we use a deferred so we can resolve the Promise
        // when we have the data the way we want it.
        function sendRegisterData()
        {
            console.log("registerService::sendRegisterData...");
            var deferred = $q.defer();

            // for mock, don't use an $http, use:
            $timeout(function()
            {
                // here is where you'd, in the Mock, return hardcoded
                // JSON that Louis gave us. In the real one, you'd parse whatever Robbie
                // gives you from the real AWS Lamda call.
                var registerData = {
                  "email": "default@server.com",
                  "password": "password123",
                  "account": 987123654,
                  "zipcode": 95699,
                  "phone": "1-555-123-6789",
                  "enroll_paperless": true,
                  "accepted_terms": true
                }
                console.log("reg data", registerData);
                deferred.resolve(registerData);
            }, 1000);
            return deferred.promise;
        }

        return {
            sendRegisterData: sendRegisterData
        }
    }

})();

