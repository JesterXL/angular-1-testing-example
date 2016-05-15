(function() {
'use strict';
  angular
      .module('main.outage.outagestep1')
      .directive('ucOutageStep1', ucOutageStep1);

  function ucOutageStep1() {
    return {
      restrict: 'E',
      scope: {},
      transclude: false,
      templateUrl: 'main/outage/outagestep1/outageStep1.directive.html',
      controller: 'outageStep1Controller',
      controllerAs: 'vm'
    };
  }

})();
