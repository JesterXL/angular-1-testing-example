'use strict';

describe('#outageStepError module', function()
{
  it('should exist', function() {
     module('main.outage.outageStepError');
     var scope;
     inject(function($rootScope) {
         scope = $rootScope.$new();
     });
     expect(scope).to.be.ok;
  });
});