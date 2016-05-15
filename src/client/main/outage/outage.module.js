(function() {
'use strict';
  angular
      .module('main.outage', [
          'ui.router',
          'main.outage.outagestep1',
          'main.outage.outagestep2',
          'main.outage.outageloading',
          'main.outage.outageStepError',
          'main.service.locator'
          ]);

})();
