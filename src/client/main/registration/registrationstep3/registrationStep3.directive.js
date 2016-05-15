(function() {
'use strict';
  angular
      .module('main.registration.registrationstep3')
      .directive('ucRegistrationStep3', ucRegistrationStep3);

  function ucRegistrationStep3() {
    return {
      restrict: 'E',
      scope: {},
      transclude: false,
      templateUrl: 'main/registration/registrationstep3/registrationStep3.directive.html',
      controller: 'registrationStep3Controller',
      controllerAs: 'vm'
    };
  }

})();
