(function() {
'use strict';
  angular
      .module('main.outage.outageloading')
      .directive('ucOutageLoading', ucOutageLoading);

  function ucOutageLoading() {
    return {
      restrict: 'E',
      scope: {},
      transclude: false,
      templateUrl: 'main/outage/outageloading/outageloading.directive.html'
    };
  }

})();
