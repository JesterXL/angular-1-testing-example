(function() {
'use strict';
  angular
      .module('main.home')
      .directive('home', home);

  function home() {
    return {
      restrict: 'E',
      scope: {},
      transclude: false,
      templateUrl: 'main/home/home.directive.html',
      controller: 'homeController'
      //controllerAs: 'vm'
    };
  }

})();
