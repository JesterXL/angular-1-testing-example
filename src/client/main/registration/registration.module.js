(function() {
'use strict';

  angular
      .module('main.registration', [
          'ui.router',
          'main.registration.registrationstep1',
          'main.registration.registrationstep2',
          'main.registration.registrationstep3',
          'main.service.locator'
          ]);

})();
