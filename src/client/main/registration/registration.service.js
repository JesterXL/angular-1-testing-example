(function() {
'use strict';

    angular.module("main.registration")
    .factory("MockRegistrationService", MockRegistrationService);

    // serviceLocator: What are the Endpoint URL's?
    function MockRegistrationService($http, serviceLocator, $q, $timeout)
    {
        // $http returns a Promise, however, sometimes you want to parse stuff
        // yourself so we use a deferred so we can resolve the Promise
        // when we have the data the way we want it.
        function sendRegistrationData()
        {
            console.log("registrationService::sendRegistrationData...");
            var deferred = $q.defer();

            // for mock, don't use an $http, use:
            $timeout(function()
            {
                // here is where you'd, in the Mock, return hardcoded
                // JSON that Louis gave us. In the real one, you'd parse whatever Robbie
                // gives you from the real AWS Lamda call.
                var registrationData = {
                  "email": "default@server.com",
                  "password": "password123",
                  "account": 987123654,
                  "zipcode": 95699,
                  "phone": "1-555-123-6789",
                  "enroll_paperless": true,
                  "accepted_terms": true
                }
                console.log("reg data", registrationData);
                deferred.resolve(registrationData);
            }, 1000);
            return deferred.promise;

            // $http.post('/someUrl', data, config).then(successCallback, errorCallback);

            // $http.post('https://s3-us-west-2.amazonaws.com/demo-usage/usage.json')
            // .then(function(result)
            // {
            //     var usageData = result.data;
            //     console.log("usageService::getUsageData results:", usageData);
            //     deferred.resolve(usageData);
            // }, function(error)
            // {
            //     deferred.reject(error);
            // });
            // return deferred.promise; 
        }

        return {
            sendRegistrationData: sendRegistrationData
        }
    }

})();

