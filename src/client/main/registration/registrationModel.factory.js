(function() {

	'use strict';

    angular.module("main.registration")
    .factory("registrationModel", registrationModel);

    function registrationModel()
    {
        return {
            email: null,
			password: null,
			password2: null,
			zipcode: null,
			phone: null,
			textme: false,
			terms: false
        };
    }

})();

