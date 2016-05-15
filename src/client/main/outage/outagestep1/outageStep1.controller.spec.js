'use strict';

describe('#outageStep1 controller', function()
{
	var controller, scope, rootScope, timeout;

	beforeEach(function()
	{
		module('main.outage');
	});

	beforeEach(function()
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

        	return {getAddress: getAddress};
        });
	});

	beforeEach(function()
    {
    	module("addressServiceMock");
    });

	beforeEach(function()
	{
		inject(function(_$rootScope_, _$controller_, _$timeout_)
		{
			rootScope = _$rootScope_;
			scope = _$rootScope_.$new();
			timeout = _$timeout_;
			
			_$rootScope_.$apply();

			controller = _$controller_('outageStep1Controller', {
				$scope: scope
			});
		});
	});



	it('should be created successfully', function()
	{
		expect(controller).to.be.defined;
	});

	it('init works', function(done)
	{
		controller.init()
		.then(function()
		{
			done();
		}, done);
		rootScope.$apply();
		timeout.flush();
	});

	it('onSubmit fires', function()
	{
		var called = false;
		scope.$on('submitOutageReport', function()
		{
			called = true;
		});
		controller.onSubmit();
		rootScope.$apply();
		called.should.be.true;
	});

});