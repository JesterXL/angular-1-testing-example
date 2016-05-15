(function() {
'use strict';

  angular
      .module('main.register', [
          'ui.router',
          'main.register.registerstep1',
          'main.register.registerSuccess',
          'main.register.registerLoading',
          'main.register.registerError',
          'main.service.locator'
          ]);

})();
