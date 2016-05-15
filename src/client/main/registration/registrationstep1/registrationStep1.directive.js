(function() {
'use strict';

  angular
      .module('main.registration.registrationstep1')
      .directive('ucRegistrationStep1', ucRegistrationStep1);

  function ucRegistrationStep1() {
    return {
      restrict: 'E',
      scope: {},
      transclude: false,
      templateUrl: 'main/registration/registrationstep1/registrationStep1.directive.html',
      controller: 'registrationStep1Controller',
      controllerAs: 'vm'
    };
  }

})();
