/* jshint -W117, -W030 */
(function() {
    'use strict';
    describe('#login directive', function() {
        var scope;

        beforeEach(function() {
            module('demo', 'login/login.directive.html');
        });

        it('is a directive that exists where compile works', function()
        {
            inject(function($rootScope, $compile, $httpBackend, serviceLocator)
            {
                var newScope = $rootScope.$new();
                var element = '<jxl-login></jxl-login>';
                element = $compile(element)(newScope);
                angular.element(document.body).append(element);
                newScope.$digest();
                expect(element.find('input').length).to.equal(2);
            });
        });

    });

}());
