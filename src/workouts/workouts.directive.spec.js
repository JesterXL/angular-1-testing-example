/* jshint -W117, -W030 */
(function() {
    'use strict';
    describe('#workouts directive', function() {
        var scope;

        beforeEach(function() {
            module('demo', 'workouts/workouts.directive.html');
        });

        it('is a directive that exists where compile works', function()
        {
            inject(function($rootScope, $compile, $httpBackend, serviceLocator)
            {
                var newScope = $rootScope.$new();
                var element = '<jxl-workouts></jxl-workouts>';
                element = $compile(element)(newScope);
                angular.element(document.body).append(element);
                newScope.$digest();
                expect(document.querySelectorAll('.mdl-grid').length).to.equal(5);
            });
        });

    });

}());
