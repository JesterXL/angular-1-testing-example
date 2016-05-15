(function() {
'use strict';

  angular
      .module('main.registration')
      .directive('ucRegistration', ucRegistration);

  function ucRegistration() {
    return {
      restrict: 'E',
      scope: {},
      transclude: false,
      templateUrl: 'main/registration/registration.directive.html',
      controller: 'registrationController',
      controllerAs: 'vm'
    };
  }

})();
