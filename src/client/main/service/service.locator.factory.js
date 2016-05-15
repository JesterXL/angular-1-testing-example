(function() {
'use strict';
    angular
        .module("main.service.locator")
        .factory("serviceLocator", function () {
            var apiPort = 2146;
            var URL = window.location.protocol + '//' + window.location.hostname + ':' + apiPort;

            return {
                API_PORT: apiPort,
                GET_ACCOMMODATIONS_LIST: URL + "/api/accommodations/list",
                GET_LOAD_POLAR: URL + "/api/polar/load",
                GET_DELETE_REDIS_CACHE: URL + "/api/accommodations/delete-all",
                GET_STATUS_LIST: URL + "/api/accommodations/status/all",
                GET_ACTIVE_STATUS_LIST: URL + "/api/accommodations/status/all/active",
                POST_ADD_STATUS: URL + "/api/accommodations/status/add",
                POST_ERROR_LOG : URL + "/api/errorlog",
                POST_UPDATE_STATUS: URL + "/api/accommodations/status/update",
                POST_DEACTIVATE_STATUS: URL + "/api/accommodations/status/deactivate",
                GET_MUSTER_STATION_LIST: URL + "/api/accommodations/muster/all",
                GET_CURRENT_DATE: URL + "/api/accommodations/night-audit/current-date",
                TRIGGER_NIGHT_AUDIT: URL + "/api/accommodations/night-audit/trigger",
                GET_DEBUG_INFO:  URL + '/api/debug'
            };
        });

})();