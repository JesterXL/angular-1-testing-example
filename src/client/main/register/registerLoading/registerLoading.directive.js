(function() {
'use strict';
  angular
      .module('main.register.registerLoading')
      .directive('ucRegisterLoading', ucRegisterLoading);

  function ucRegisterLoading() {
    return {
      restrict: 'E',
      scope: {},
      transclude: false,
      templateUrl: 'main/register/registerLoading/registerLoading.directive.html'
    };
  }

})();
