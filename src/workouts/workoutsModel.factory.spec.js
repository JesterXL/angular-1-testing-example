'use strict';

describe('#workoutsModel', function()
{
	var workoutsModel, scope, httpBackend;

	beforeEach(function()
	{
		module('demo');
	});

	beforeEach(function()
	{
		inject(function(_$rootScope_, _$httpBackend_, _workoutsModel_)
		{
			scope = _$rootScope_.$new();
			httpBackend = _$httpBackend_;
			workoutsModel = _workoutsModel_;
		});
	});

	it('should be created successfully', function()
	{
		expect(workoutsModel).to.be.defined;
	});

	it('calling getWorkouts is ok', function(done)
	{
		httpBackend.whenGET('http://localhost:9037/api/workouts/today')
		.respond({data: []});
		var callback = function()
		{
			workoutsModel.getWorkouts()
			.then(function()
			{
				done();
			}, function(err)
			{
				done(err);
			});
		};
		callback.should.not.throw(Error);
		httpBackend.flush();
	});


});