'use strict';

describe('#login controller', function()
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
			controller = _$controller_('LoginController', {
				$scope: scope
			});

			httpBackend = _$httpBackend_;
		});
	});

	it('should be created successfully', function()
	{
		expect(controller).to.be.defined;
	});

	it('username and password are blank by default', function()
	{
		controller.username.should.be.empty;
		controller.password.should.be.empty;
	});

	it('login works and does not blow up g00d', function(done)
	{
		httpBackend.whenPOST('http://localhost:9037/login')
		.respond({});
		var callback = function()
		{
			controller.login()
			.then(function()
			{
				done();
			});
		};
		callback.should.not.throw(Error);
		httpBackend.flush();
	});


});