'use strict';

describe('#exercise controller', function()
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
			controller = _$controller_('ExerciseController', {
				$scope: scope
			});

			httpBackend = _$httpBackend_;
		});
	});

	it('should be created successfully', function()
	{
		expect(controller).to.be.defined;
	});

	it('currentExercise is undefined by default', function()
	{
		expect(controller.currentExercise).to.equal(undefined);
	});

	it('onAddSet does not throw an error', function()
	{
		var callback = function()
		{
			controller.onAddSet();
		};
		callback.should.not.throw(Error);
	});

	it('onAddSet can add a set', function()
	{
		controller.currentExercise = {sets: []};
		var callback = function()
		{
			controller.onAddSet();
		};
		callback.should.not.throw(Error);
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