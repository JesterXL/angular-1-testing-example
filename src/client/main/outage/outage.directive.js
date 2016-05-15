(function() {
'use strict';
  angular
      .module('main.outage')
      .directive('ucOutage', ucOutage);

  function ucOutage() {
    return {
      restrict: 'E',
      scope: {},
      transclude: false,
      templateUrl: 'main/outage/outage.directive.html',
      controller: 'outageController',
      controllerAs: 'vm'
    };
  }

})();
