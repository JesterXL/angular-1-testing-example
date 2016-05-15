'use strict';

describe('#main controller', function()
{
	var controller, scope, state, timeout, httpBackend, serviceLocator, statesModel;

	beforeEach(function()
	{
		module('fireStarter');
		module('main');
	});

	beforeEach(function()
	{
		inject(function(_$rootScope_, _$controller_, _$state_, _$timeout_, _$httpBackend_, _serviceLocator_)
		{
			scope = _$rootScope_.$new();
			state = _$state_;
			timeout = _$timeout_;
			controller = _$controller_('fsMainController', {
				$scope: scope
			});

			httpBackend = _$httpBackend_;
			serviceLocator = _serviceLocator_;
		});
	});

	it('should be created successfully', function()
	{
		expect(controller).to.be.defined;
	});

	it('state injection worked', function()
	{
		expect(state).to.be.defined;
	});

	it('onGoToDebugInfo works', function()
	{
		var callback = function()
		{
			controller.onGoToDebugInfo();
		};
		callback.should.not.throw(Error);
	});

	it('onStateChange works', function()
	{
		var callback = function()
		{
			controller.onStateChange(event, 'test');
		};
		callback.should.not.throw(Error);
	});

	it('getSelectedIndiceBasedOnStateName works', function()
	{
		var callback = function()
		{
			controller.getSelectedIndiceBasedOnStateName();
		};
		callback.should.not.throw(Error);
	});

	it('should return -1 for nothing', function()
	{
		controller.getSelectedIndiceBasedOnStateName().should.equal(-1);
	});

	it('should return 3 for outage', function()
	{
		controller.getSelectedIndiceBasedOnStateName('outage').should.equal(3);
	});

	it('should return 2 for usage', function()
	{
		controller.getSelectedIndiceBasedOnStateName('usage').should.equal(2);
	});

	it('should return 1 for bill', function()
	{
		controller.getSelectedIndiceBasedOnStateName('bill').should.equal(1);
	});

	it('should return 0 for home', function()
	{
		controller.getSelectedIndiceBasedOnStateName('home').should.equal(0);
	});

	/*
	function getSelectedIndiceBasedOnStateName(stateName)
		{
			switch(stateName)
			{
				case statesModel.HOME: return 0;
				case statesModel.BILL: return 1;
				case statesModel.USAGE: return 2;
				case statesModel.OUTAGE: return 3;
			}
			Iif(stateName.indexOf(statesModel.OUTAGE) > -1)
			{
				return 3;
			}
			return -1;
		}
		*/

});