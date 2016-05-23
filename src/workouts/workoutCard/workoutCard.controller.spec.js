'use strict';

describe('#workoutCard controller', function()
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
			scope.exercise = {id: 'cow'};
			controller = _$controller_('WorkoutCardController', {
				$scope: scope
			});

			httpBackend = _$httpBackend_;
		});
	});

	it('should be created successfully', function()
	{
		expect(controller).to.be.defined;
	});

	it('imageURL are undefined default', function()
	{
		expect(controller.imageURL).to.equal(undefined);
	});

	it('imageURL as squat gives us an image', function()
	{
		controller.getExerciseIcon('squat').should.not.be.empty;
	});

	it('getExerciseIcon is empty with no params', function()
	{
		var callback = function()
		{
			controller.getExerciseIcon().should.be.empty;
		};
		callback.should.not.throw(Error);
	});


});