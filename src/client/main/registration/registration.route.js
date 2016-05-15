(function() {
'use strict';
	angular
	.module('main.registration')
	.config(configureRoutes);

function configureRoutes($stateProvider)
{
	$stateProvider
	.state('registration.step1', {
		template: '<uc-registration-step-1></uc-registration-step-1>',
		data: {title: 'registration Step 1'}
	})
	.state('registration.step2', {
		template: '<uc-registration-step-2></uc-registration-step-2>',
		data: {title: 'registration Step 2'}
	})
	.state('registration.step3', {
		template: '<uc-registration-step-3></uc-registration-step-3>',
		data: {title: 'registration Step 3'},
		resolve: {
			submitUser: function(registrationModel, MockRegistrationService)
			{
				console.log("submitUser:", registrationModel);
				return MockRegistrationService.sendRegistrationData(registrationModel);
			}
		}
	})
	.state('registration.error', {
		template: '<uc-registration-error></uc-registration-error>',
		data: {title: 'registration error'}
	})

}
})();
