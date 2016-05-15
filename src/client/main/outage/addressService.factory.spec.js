'use strict';

describe("#addressService ", function (service) {

    beforeEach(function ()
    {
        angular.module("addressServiceMock", [])
        .factory("addressService", function($q, $timeout)
        {
        	function getAddress()
        	{
        		var deferred = $q.defer();
        		$timeout(function()
        		{
        			deferred.resolve({});
        		}, 500);
        		return deferred.promise;
        	}

        	return {getAddress: getAddress}
        });
    });

    beforeEach(function()
    {
    	module("main.outage");
    });

    beforeEach(function()
    {
    	module("addressServiceMock");
    });

    var addressService, rootScope, timeout;
    beforeEach(inject(function(_addressService_, _$rootScope_, _$timeout_)
    {
    	addressService = _addressService_;
    	rootScope = _$rootScope_;
    	timeout = _$timeout_;
    }));

    it("getAddress works", function(done)
	{
		addressService.getAddress()
		.then(function()
		{
			done();
		}, done);
		rootScope.$apply();
		timeout.flush();
	});

});
