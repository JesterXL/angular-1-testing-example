(function() {
    'use strict';
    describe('#exercise directive', function() {
        var scope;

        beforeEach(function() {
            module('demo', 'workouts/exercise/exercise.directive.html');
        });

        it('is a directive that exists where compile works', function()
        {
            inject(function($rootScope, $compile, $httpBackend, serviceLocator)
            {
                var newScope = $rootScope.$new();
                var element = '<jxl-exercise></jxl-exercise>';
                element = $compile(element)(newScope);
                angular.element(document.body).append(element);
                newScope.$digest();
                expect(element.find('button').length).to.equal(1);
            });
        });

    });

}());
