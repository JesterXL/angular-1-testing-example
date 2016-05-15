'use strict';

describe("#outageServiceMock ", function (service) {

    beforeEach(function () {
        module("main.outage");
    });

    it("reportOutage works", inject(function(outageServiceMock)
    {
    	return outageServiceMock.reportOutage();
    }));

});