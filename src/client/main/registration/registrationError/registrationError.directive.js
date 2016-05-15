(function() {
'use strict';
  angular
      .module('main.registration.registrationError')
      .directive('ucRegistrationError', ucRegistrationError);

  function ucRegistrationError() {
    return {
      restrict: 'E',
      scope: {},
      transclude: false,
      templateUrl: 'main/registration/registrationError/registrationError.directive.html',
      controller: 'registrationStep3Controller',
      controllerAs: 'vm'
    };
  }

})();
