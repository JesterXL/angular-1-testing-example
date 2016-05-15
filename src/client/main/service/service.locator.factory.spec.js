'use strict';

describe("Service Locator ", function (service) {

    beforeEach(function () {
        module("main.service.locator");
    });


    it("should return url for accommodations", inject(function(serviceLocator){
        expect(serviceLocator).to.have.property("GET_ACCOMMODATIONS_LIST");
    }));

    it("should return url for active statuses", inject(function(serviceLocator){
        expect(serviceLocator).to.have.property("GET_ACTIVE_STATUS_LIST");
    }));

});