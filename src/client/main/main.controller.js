(function() {
'use strict';
	angular.module("main")
	.controller("fsMainController", fsMainController);

	/* @ngInject */
	function fsMainController($state, $rootScope, statesModel)
	{
		var vm = this;
		vm.title = "Utility Company";
		vm.selectedIndex = 0;
		vm.init = init;
		vm.onStateChange = onStateChange;
		vm.getSelectedIndiceBasedOnStateName = getSelectedIndiceBasedOnStateName;

		vm.onGoToDebugInfo = function()
		{
			$state.go(statesModel.DEBUG);
		};

		function init()
		{
			vm.selectedIndex = getSelectedIndiceBasedOnStateName($state.current.name);
			$rootScope.$on('$stateChangeSuccess', onStateChange);
		}

		function onStateChange(event, toState, toParams, fromState, fromParams)
		{
			vm.selectedIndex = getSelectedIndiceBasedOnStateName(toState.name);
		}

		function getSelectedIndiceBasedOnStateName(stateName)
		{
			switch(stateName)
			{
				case statesModel.HOME: return 0;
				case statesModel.BILL: return 1;
				case statesModel.USAGE: return 2;
				case statesModel.OUTAGE: return 3;
			}
			if(stateName && stateName.indexOf(statesModel.OUTAGE) > -1)
			{
				return 3;
			}
			return -1;
		}

		vm.init();
			
	}

})();
