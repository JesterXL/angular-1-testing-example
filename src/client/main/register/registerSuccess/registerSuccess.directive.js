(function() {
'use strict';
  angular
      .module('main.register.registerSuccess')
      .directive('ucRegisterSuccess', ucRegisterSuccess);

  function ucRegisterSuccess() {
    return {
      restrict: 'E',
      scope: {},
      transclude: false,
      templateUrl: 'main/register/registerSuccess/registerSuccess.directive.html',
      controller: 'registerSuccessController',
      controllerAs: 'vm'
    };
  }

})();
