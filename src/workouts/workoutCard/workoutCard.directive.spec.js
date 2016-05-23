(function() {
    'use strict';
    describe('#workoutCard directive', function() {
        var scope;

        beforeEach(function() {
            module('demo', 'workouts/workoutCard/workoutCard.directive.html');
        });

        it('is a directive that exists where compile works', function()
        {
            inject(function($rootScope, $compile, $httpBackend, serviceLocator)
            {
                var newScope = $rootScope.$new();
                var element = '<jxl-workout-card></jxl-workout-card>';
                element = $compile(element)(newScope);
                angular.element(document.body).append(element);
                newScope.$digest();
                expect(document.querySelectorAll('.demo-card-wide').length).to.equal(1);
            });
        });

    });

}());
