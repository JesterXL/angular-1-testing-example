(function() {
'use strict';
	angular
	.module('fireStarter')
	.config(configureRoutes)
	.run(defaultRoute);

// [jwarden 12.18.2015] TODO/FIXME: Fix emtpy route for events. Not sure what to put.
/* @ngInject */
function configureRoutes($stateProvider, statesModel)
{
	$stateProvider
	.state(statesModel.HOME, {
		url: '/',
		templateUrl: 'main/home/home.directive.html',
		data: {title: 'Home'}
	})
	.state(statesModel.LOADING, {
		url: '/loading',
		template: '<h2>Loading...</h2>',
		data: {title: 'Loading'}
	})
	.state(statesModel.REGISTER, {
		url: '/register',
		template: '<uc-register></uc-register>',
		data: {title: 'Register 2'}
	})
	.state(statesModel.REGISTRATION, {
		url: '/registration',
		template: '<uc-registration></uc-registration>',
		data: {title: 'Registration'}
	})
	.state(statesModel.BILL, {
		url: '/bill',
		templateUrl: 'main/bill/bill.directive.html',
		data: {title: 'Bill'}
	})
	.state(statesModel.OUTAGE, {
		url: '/outage',
		template: '<uc-outage></uc-outage>',
		data: {title: 'Report Outage'}
	})
	.state(statesModel.USAGE, {
		url: '/usage',
		templateUrl: 'main/usage/usage.directive.html',
		data: {title: 'Billing and Usage'}
	})
	.state(statesModel.DEBUG, {
		url: '/debug',
		template: '<ee-debug></ee-debug>',
		data: {title: 'Debug'}
	});
}

function defaultRoute($state)
{
	if($state.current.name === '')
	{
		$state.go('home');
	}
}

})();
