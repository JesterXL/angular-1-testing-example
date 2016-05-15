'use strict';

describe('#outage controller', function()
{
	var controller, scope, state, timeout, httpBackend, serviceLocator, statesModel, rootScope;

	beforeEach(function()
	{
		module("fireStarter");
		module('main.outage');
	});

	beforeEach(function()
	{
		inject(function(_$rootScope_, _$controller_, _$state_, _$timeout_, _$httpBackend_, _serviceLocator_)
		{
			rootScope = _$rootScope_;
			scope = _$rootScope_.$new();
			state = _$state_;
			timeout = _$timeout_;
			state.go("outage");
			
			httpBackend = _$httpBackend_;
			serviceLocator = _serviceLocator_;

			controller = _$controller_('outageController', {
				$scope: scope
			});
		});

		httpBackend.when('GET', 'main/home/home.directive.html')
                    .respond({userId: 'userX'}, {'A-Token': 'xxx'});
	});

	it('should be created successfully', function()
	{
		expect(controller).to.be.defined;
	});

	it('init works', function()
	{
		controller.init();
		rootScope.$apply();
		expect(state.current.name).to.equal("outage.step1");
	});

	it('onSubmitOutageReport works', function(done)
	{
		controller.onSubmitOutageReport(null, {});
		rootScope.$apply();
		expect(state.current.name).to.equal("outage.loading");
		timeout.flush();
		setTimeout(function()
		{
			expect(state.current.name).to.equal("outage.step2");
			done();
		}, 1000);
	});

});