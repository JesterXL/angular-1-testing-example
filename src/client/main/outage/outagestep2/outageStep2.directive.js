(function() {
'use strict';
  angular
      .module('main.outage.outagestep2')
      .directive('ucOutageStep2', ucOutageStep2);

  function ucOutageStep2() {
    return {
      restrict: 'E',
      scope: {},
      transclude: false,
      templateUrl: 'main/outage/outagestep2/outageStep2.directive.html',
      controller: 'outageStep2Controller',
      controllerAs: 'vm'
    };
  }

})();
