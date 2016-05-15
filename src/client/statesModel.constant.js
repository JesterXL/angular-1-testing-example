(function() {
'use strict';
    angular
        .module("fireStarter")
        .constant("statesModel", {
                HOME: "home",
                LOADING: "loading",
                REGISTER: "register",
                REGISTRATION: "registration",
                BILL: "bill",
                OUTAGE: "outage",
                USAGE: "usage",
                DEBUG: "debug"
            });

})();
