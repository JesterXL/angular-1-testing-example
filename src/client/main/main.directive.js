(function(){
'use strict';
    angular
        .module('main')
        .directive('fsMain', fsMain);

    function fsMain()
    {
        return {
            restrict: 'E',
            scope: {},
            transclude: true,
            templateUrl: 'main/main.directive.html',
            controller: 'fsMainController',
            controllerAs: 'vm'
        };
    }
})();