(function() {
'use strict';

  angular
      .module('main.register')
      .directive('ucRegister', ucRegister);

  function ucRegister() {
    return {
      restrict: 'E',
      scope: {},
      transclude: false,
      templateUrl: 'main/register/register.directive.html',
      controller: 'registerController',
      controllerAs: 'vm'
    };
  }

})();
