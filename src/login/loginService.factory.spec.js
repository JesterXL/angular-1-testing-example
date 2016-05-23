'use strict';

describe('#loginService', function()
{
	var loginService, scope, httpBackend;

	beforeEach(function()
	{
		module('demo');
	});

	beforeEach(function()
	{
		inject(function(_$rootScope_, _$httpBackend_, _loginService_)
		{
			scope = _$rootScope_.$new();
			httpBackend = _$httpBackend_;
			loginService = _loginService_;
		});
	});

	it('should be created successfully', function()
	{
		expect(loginService).to.be.defined;
	});

	it('calling login with test and test is ok', function(done)
	{
		httpBackend.whenPOST('http://localhost:9037/login')
		.respond({data: "SUP"});
		var callback = function()
		{
			loginService.login('test', 'test')
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

	it('calling login with failure reports failure', function(done)
	{
		httpBackend.whenPOST('http://localhost:9037/login')
		.respond({result: false});
		var callback = function()
		{
			loginService.login('test', 'test')
			.then(function()
			{
				done(new Error("Should of failed."));
			}, function(err)
			{
				done();
			});
		};
		callback.should.not.throw(Error);
		httpBackend.flush();
	});


});