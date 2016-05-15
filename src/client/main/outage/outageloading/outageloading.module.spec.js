'use strict';

describe('#outageloading module', function()
{
  it('should exist', function() {
     module('main.outage.outageloading');
     var scope;
     inject(function($rootScope) {
         scope = $rootScope.$new();
     });
     expect(scope).to.be.ok;
  });
});