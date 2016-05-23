(function() {
    'use strict';
    describe('#setRep directive', function() {
        var scope;

        beforeEach(function() {
            module('demo', 'workouts/exercise/setRep/setRep.directive.html');
        });

        it('is a directive that exists where compile works', function()
        {
            inject(function($rootScope, $compile, $httpBackend, serviceLocator)
            {
                var newScope = $rootScope.$new();
                var element = '<jxl-set-rep></jxl-set-rep>';
                element = $compile(element)(newScope);
                angular.element(document.body).append(element);
                newScope.$digest();
                expect(element.find('input').length).to.equal(3);
            });
        });

    });

}());
