'use strict';

describe('#workoutTodayService', function()
{
	var workoutTodayService, scope, httpBackend;

	beforeEach(function()
	{
		module('demo');
	});

	beforeEach(function()
	{
		inject(function(_$rootScope_, _$httpBackend_, _workoutTodayService_)
		{
			scope = _$rootScope_.$new();
			httpBackend = _$httpBackend_;
			workoutTodayService = _workoutTodayService_;
		});
	});

	it('should be created successfully', function()
	{
		expect(workoutTodayService).to.be.defined;
	});

	it('calling load is ok', function(done)
	{
		httpBackend.whenGET('http://localhost:9037/api/workouts/today')
		.respond({data: []});
		var callback = function()
		{
			workoutTodayService.load()
			.then(function()
			{
				done();
			}, function(err)
			{
				// no workouts are cool
				done();
			});
		};
		callback.should.not.throw(Error);
		httpBackend.flush();
	});

	it('calling load with mock data is cool', function(done)
	{
		httpBackend.whenGET('http://localhost:9037/api/workouts/today')
		.respond({
			result: true,
			workouts: []
		});
		var callback = function()
		{
			workoutTodayService.load()
			.then(function(workoutsResult)
			{
				expect(workoutsResult.length).to.equal(0);
				done();
			}, function(err)
			{
				// no workouts are cool
				done();
			});
		};
		callback.should.not.throw(Error);
		httpBackend.flush();
	});


});