(function() {
'use strict';
  angular
      .module('main.outage.outageStepError')
      .directive('ucOutageStepError', ucOutageStepError);

  function ucOutageStepError() {
    return {
      restrict: 'E',
      scope: {},
      transclude: false,
      templateUrl: 'main/outage/outageStepError/outageStepError.directive.html'
    };
  }

})();
