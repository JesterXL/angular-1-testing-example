(function() {
'use strict';
  angular
      .module('main', [
          'ui.router',
          'main.outage',
          'main.service.locator',
          'main.debug',
          'main.usage',
          'main.registration',
          'main.register',
          'LocalStorageModule']);
})();
