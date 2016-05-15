(function() {
	'use strict';
  angular
      .module('main.registration.registrationstep2')
      .directive('ucRegistrationStep2', ucRegistrationStep2);

  function ucRegistrationStep2() {
    return {
      restrict: 'E',
      scope: {},
      transclude: false,
      templateUrl: 'main/registration/registrationstep2/registrationStep2.directive.html',
      controller: 'registrationStep2Controller',
      controllerAs: 'vm'
    };
  }

})();
