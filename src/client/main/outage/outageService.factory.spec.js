'use strict';

describe("#outageService ", function (service) {

	var httpBackend, outageService;

    beforeEach(function () {
        module("main.outage");
    });

    beforeEach(inject(function(_outageService_, _$httpBackend_)
    {
    	httpBackend = _$httpBackend_;
    	outageService = _outageService_;
    }));

    it("reportOutage works", function(done)
    {
    	httpBackend.whenPOST('https://jh3b3z0o2a.execute-api.us-west-2.amazonaws.com/prod/report-outage')
        	.respond(200, {
						    "data": {
						        "id": "4f38a610-16f5-11e6-a600-e1ac8bb34e7e"
						    }
						});
        outageService.reportOutage()
        .then(function(result)
        {
        	done();
        });
        httpBackend.flush();
    });

});