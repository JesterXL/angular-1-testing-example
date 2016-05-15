(function() {
'use strict';
  angular
      .module('main.register.registerstep1')
      .directive('ucRegisterStep1', ucRegisterStep1);

  function ucRegisterStep1() {
    return {
      restrict: 'E',
      scope: {},
      transclude: false,
      templateUrl: 'main/register/registerstep1/registerStep1.directive.html',
      controller: 'registerStep1Controller',
      controllerAs: 'vm'
    };
  }

})();
