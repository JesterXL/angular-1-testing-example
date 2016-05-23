'use strict';

describe('#workouts controller', function()
{
	var controller, scope, httpBackend;

	beforeEach(function()
	{
		module('demo');
	});

	beforeEach(function()
	{
		inject(function(_$rootScope_, _$controller_, _$httpBackend_)
		{
			scope = _$rootScope_.$new();
			controller = _$controller_('WorkoutsController', {
				$scope: scope
			});

			httpBackend = _$httpBackend_;
		});
	});

	it('should be created successfully', function()
	{
		expect(controller).to.be.defined;
	});

	it('exercises are null default', function()
	{
		expect(controller.exercises).to.equal(null);
	});

	it('onClick is fine being called', function()
	{
		var callback = function()
		{
			controller.onClick({id: 'moo'});
		};
		callback.should.not.throw(Error);
	});


});