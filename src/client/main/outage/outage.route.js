(function() {
'use strict';
	angular
	.module('main.outage')
	.config(configureRoutes);

function configureRoutes($stateProvider)
{
	$stateProvider
	.state('outage.step1', {
		template: '<uc-outage-step-1></uc-outage-step-1>',
		data: {title: 'Outage Step 1'}
	})
	.state('outage.loading', {
		template: '<uc-outage-loading></uc-outage-loading>'
	})
	.state('outage.step2', {
		template: '<uc-outage-step-2></uc-outage-step-2>',
		data: {title: 'Outage Step 2'}
	})
	.state('outage.stepError',
	{
		template: '<uc-outage-step-error></uc-outage-step-error>'
	});
}
})();
