(function() {
'use strict';
	angular
	.module('main.register')
	.config(configureRoutes);

function configureRoutes($stateProvider)
{
	$stateProvider
	.state('register.step1', {
		url: '/:email/:account/:address/:city/:state/:zip',
		template: '<uc-register-step-1></uc-register-step-1>',
		data: {title: 'register Step 1'}
	})
	.state('register.loading', {
		template: '<uc-register-loading></uc-register-loading>'
	})
	.state('register.success', {
		template: '<uc-register-success></uc-register-success>',
		data: {title: 'register success'}
	})
	.state('register.error',
	{
		template: '<uc-register-step-error></uc-register-step-error>'
	});
}
})();
