(function() {
'use strict';

    angular.module("main.register")
    .factory("RegisterService", RegisterService);

    // serviceLocator: What are the Endpoint URL's?
    function RegisterService($http, serviceLocator, $q, $timeout)
    {
        
        // $http returns a Promise, however, sometimes you want to parse stuff
        // yourself so we use a deferred so we can resolve the Promise
        // when we have the data the way we want it.
        function sendRegisterData()
        {
            console.log("registerService::sendRegisterData...");
            var deferred = $q.defer();
            deferred.reject();
            return deferred.promise;
            // for mock, don't use an $http, use:
            // https://fagxykptnb.execute-api.us-west-2.amazonaws.com/dev/registration
            var domain = window.location.domain;
            $http.post(domain + '/dev/registration',
            {
                data: {"email": "email@email.com", "password": "password"}
            })
            .then(function(result)
            {
                deferred.resolve(result);
                console.log("data", result);
            },
            function(error)
            {
                deferred.reject(error);
            });
            return deferred.promise;
        }

        return {
            sendRegisterData: sendRegisterData
        }
    }

})();

