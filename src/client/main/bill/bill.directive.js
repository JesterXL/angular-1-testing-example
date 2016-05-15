(function() {
'use strict';
  angular
      .module('main.bill')
      .directive('bill', bill);

  function bill() {
    return {
      restrict: 'E',
      scope: {},
      transclude: false,
      templateUrl: 'main/bill/bill.directive.html',
      controller: 'billController'
      //controllerAs: 'vm'
    };
  }

})();
