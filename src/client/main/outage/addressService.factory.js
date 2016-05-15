(function() {
'use strict';
	// 
	angular
		.module("main.outage")
		.factory("addressService", function ($q, $timeout, $http, $log)
		{

			function getAddress()
			{
				$log.log('addressService::getAddress...');
				var deferred = $q.defer();
				navigator.geolocation.getCurrentPosition(function(position)
				{
					$log.log("got lat and lon, getting address...");
					$http({
						url: 'http://nominatim.openstreetmap.org/reverse',
						method: 'GET',
						params: {
							format: 'json',
							lat: position.coords.latitude,
							lon: position.coords.longitude,
							zoom: 18
						}
					})
					.then(function(result)
					{
						var address = result.data.address;
						$log.log("Got address:", address);
						deferred.resolve(
							{
								street: address.house_number + " " + address.road,
								city: address.locality,
								state: address.state,
								zipcode: address.postcode
							}
						);
					},
					function(error)
					{
						deferred.reject();
					});
				},
				function(positionError)
				{
					deferred.reject();
				});
				return deferred.promise;
			}

			return {
				getAddress: getAddress
			};
		});

})();