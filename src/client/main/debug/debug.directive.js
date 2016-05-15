(function() {
'use strict';
  angular
      .module('main.debug')
      .directive('eeDebug', eeDebug);

  function eeDebug() {
    return {
      restrict: 'E',
      scope: {},
      transclude: false,
      templateUrl: 'main/debug/debug.directive.html',
      controller: 'eeDebugController',
      controllerAs: 'vm'
    };
  }

})();
