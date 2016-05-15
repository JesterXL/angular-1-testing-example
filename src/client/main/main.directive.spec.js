/* jshint -W117, -W030 */
(function() {
    'use strict';
    describe('#main directive', function() {
        var scope;

        beforeEach(function() {
        	module("fireStarter");
            module('main', 'main/main.directive.html');
        });

        it('is a directive that exists where compile works', function()
        {
            inject(function($rootScope, $compile, $httpBackend, serviceLocator)
            {
            	
            	$httpBackend.when('GET', 'main/home/home.directive.html')
                            .respond({userId: 'userX'}, {'A-Token': 'xxx'});

                $httpBackend.when('GET', './svg/ic_beach_access_black_24px.svg')
                    .respond({userId: 'userX'}, {'A-Token': 'xxx'});

                $httpBackend.when('GET', './svg/ic_brightness_3_white_24px.svg')
                    .respond({userId: 'userX'}, {'A-Token': 'xxx'});

                $httpBackend.when('GET', './svg/ic_more_vert_black_24px.svg')
                    .respond({userId: 'userX'}, {'A-Token': 'xxx'});

                    $httpBackend.when('GET', './svg/logo.svg')
                    .respond({userId: 'userX'}, {'A-Token': 'xxx'});

                $httpBackend.when('GET',serviceLocator.GET_CURRENT_DATE)
                    .respond(function(method, url, data, headers, params) {
                        var date = new Date();
                        return [200, {result: true, data: {currentDate: date}}];
                    });
                $httpBackend.when('GET',serviceLocator.TRIGGER_NIGHT_AUDIT)
                    .respond(function(method, url, data, headers, params) {
                        var date = new Date();
                        date.setDate(date.getDate() + 1);
                        return [200, {result: true, data: {result: true, currentDate: date}}];
                    });


                $httpBackend.expectGET(serviceLocator.GET_CURRENT_DATE);
                $httpBackend.expectGET('./svg/ic_brightness_3_white_24px.svg');
                $httpBackend.expectGET('./svg/ic_more_vert_black_24px.svg');
                $httpBackend.expectGET('./svg/ic_beach_access_black_24px.svg');
            	$httpBackend.expectGET('main/accommodations/accommodations.checkbox.directive.html');
                $httpBackend.expectGET('main/main.directive.html');

                 $httpBackend.when('GET',serviceLocator.GET_ACCOMMODATIONS_LIST)
                 .respond(function(method, url, data, headers, params) {
 
                     console.log("sup");
                    return [200, {result: true, data: []}];
                  });

                var newScope = $rootScope.$new();
                var element = '<fs-main></fs-main>';
                element = $compile(element)(newScope);
                angular.element(document.body).append(element);
                newScope.$digest();
                expect(element.find('md-toolbar').length).to.equal(1);
                // $httpBackend.flush();
            });
        });

    });

}());
