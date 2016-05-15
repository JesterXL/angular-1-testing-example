(function() {
'use strict';
  angular
      .module('main.usage')
      .directive('usage', usage);

  function usage() {
    return {
      restrict: 'E',
      scope: {},
      transclude: false,
      templateUrl: 'main/usage/usage.directive.html',
      controller: 'usageController'
      //controllerAs: 'vm'
    };
  }

})();
