(function() {
'use strict';
    angular.module("main.usage")
    .factory("MockUsageService", MockUsageService);

    // serviceLocator: What are the Endpoint URL's?
    function MockUsageService($http, serviceLocator, $q, $timeout)
    {
        // $http returns a Promise, however, sometimes you want to parse stuff
        // yourself so we use a deferred so we can resolve the Promise
        // when we have the data the way we want it.
        function getUsageData()
        {
            console.log("usageService::getUsageData...");
            var deferred = $q.defer();

            $http.get('https://s3-us-west-2.amazonaws.com/demo-usage/usage.json')
            .then(function(result)
            {
              var usageData = result.data;
                console.log("usageService::getUsageData results:", usageData);
                deferred.resolve(usageData);
                
            }, function(error)
            {
                deferred.reject(error);
            });
            return deferred.promise;

            // for mock, don't use an $http, use:
            /* $timeout(function()
            {
                // deferred.resolve(getUsageData);
                // here is where you'd, in the Mock, return hardcoded
                // JSON that Louis gave us. In the real one, you'd parse whatever Robbie
                // gives you from the real AWS Lamda call.
                var usageData =
                {
                      "bill-period": {
                        "start": "03-13-2016",
                        "end": "04-12-2016"
                      },
                      "bill-cost": 87.92,
                      "total-usage": 376,
                      "average-daily-usage": 12.53,
                      "data": [
                        {
                          "date": "03-13-2016",
                          "usage": 12.00,
                          "temperature": 70
                        },
                        {
                          "date": "03-14-2016",
                          "usage": 14.00,
                          "temperature": 70
                        },
                        {
                          "date": "03-15-2016",
                          "usage": 19.00,
                          "temperature": 70
                        },
                        {
                          "date": "03-16-2016",
                          "usage": 11.00,
                          "temperature": 70
                        },
                        {
                          "date": "03-17-2016",
                          "usage": 9.00,
                          "temperature": 70
                        },
                        {
                          "date": "03-18-2016",
                          "usage": 15.00,
                          "temperature": 70
                        },
                        {
                          "date": "03-19-2016",
                          "usage": 12.00,
                          "temperature": 70
                        },
                        {
                          "date": "03-20-2016",
                          "usage": 12.00,
                          "temperature": 70
                        },
                        {
                          "date": "03-21-2016",
                          "usage": 19.00,
                          "temperature": 70
                        },
                        {
                          "date": "03-22-2016",
                          "usage": 23.00,
                          "temperature": 70
                        },
                        {
                          "date": "03-23-2016",
                          "usage": 8.00,
                          "temperature": 70
                        },
                        {
                          "date": "03-24-2016",
                          "usage": 12.00,
                          "temperature": 70
                        },
                        {
                          "date": "03-25-2016",
                          "usage": 16.00,
                          "temperature": 70
                        },
                        {
                          "date": "03-26-2016",
                          "usage": 12.00,
                          "temperature": 70
                        },
                        {
                          "date": "03-27-2016",
                          "usage": 18.00,
                          "temperature": 70
                        },
                        {
                          "date": "03-28-2016",
                          "usage": 12.00,
                          "temperature": 70
                        },
                        {
                          "date": "03-29-2016",
                          "usage": 18.00,
                          "temperature": 70
                        },
                        {
                          "date": "03-30-2016",
                          "usage": 11.00,
                          "temperature": 70
                        },
                        {
                          "date": "03-31-2016",
                          "usage": 12.00,
                          "temperature": 70
                        },
                        {
                          "date": "04-01-2016",
                          "usage": 12.00,
                          "temperature": 70
                        },
                        {
                          "date": "04-02-2016",
                          "usage": 19.00,
                          "temperature": 70
                        },
                        {
                          "date": "04-03-2016",
                          "usage": 22.00,
                          "temperature": 70
                        },
                        {
                          "date": "04-04-2016",
                          "usage": 21.00,
                          "temperature": 70
                        },
                        {
                          "date": "04-05-2016",
                          "usage": 12.00,
                          "temperature": 70
                        },
                        {
                          "date": "04-06-2016",
                          "usage": 12.00,
                          "temperature": 70
                        },
                        {
                          "date": "04-07-2016",
                          "usage": 29.00,
                          "temperature": 70
                        },
                        {
                          "date": "04-08-2016",
                          "usage": 12.00,
                          "temperature": 70
                        },
                        {
                          "date": "04-09-2016",
                          "usage": 11.00,
                          "temperature": 70
                        },
                        {
                          "date": "04-10-2016",
                          "usage": 12.00,
                          "temperature": 70
                        },
                        {
                          "date": "04-11-2016",
                          "usage": 24.00,
                          "temperature": 70
                        },
                        {
                          "date": "04-12-2016",
                          "usage": 12.00,
                          "temperature": 70
                        }
                      ]
                    };
                deferred.resolve(usageData);
            }, 1000);
            return deferred.promise;*/
        }

        return {
            getUsageData: getUsageData
        }
    }

})();

