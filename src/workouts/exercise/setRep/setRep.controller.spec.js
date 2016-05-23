'use strict';

describe('#setRep controller', function()
{
	var controller, scope, httpBackend;

	beforeEach(function()
	{
		module('demo.workouts.exercise.setRep');
	});

	beforeEach(function()
	{
		inject(function(_$rootScope_, _$controller_, _$httpBackend_)
		{
			scope = _$rootScope_.$new();
			controller = _$controller_('SetRepController', {
				$scope: scope
			});

			httpBackend = _$httpBackend_;
		});
	});

	it('should be created successfully', function()
	{
		expect(controller).to.be.defined;
	});

	it('set is undefined by default', function()
	{
		expect(controller.set).to.equal(undefined);
	});

	it('onDeleteSet does not throw an error', function()
	{
		var callback = function()
		{
			controller.onDeleteSet();
		};
		callback.should.not.throw(Error);
	});


});