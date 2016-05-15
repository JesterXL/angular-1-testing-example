(function() {
'use strict';
  angular
      .module('main.register.registerError')
      .directive('ucRegisterError', ucRegisterError);

  function ucRegisterError() {
    return {
      restrict: 'E',
      scope: {},
      transclude: false,
      templateUrl: 'main/register/registerError/registerError.directive.html'
    };
  }

})();
