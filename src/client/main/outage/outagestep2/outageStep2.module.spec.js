'use strict';

describe('#outagestep2 module', function()
{
  it('should exist', function() {
     module('main.outage.outagestep2');
     var scope;
     inject(function($rootScope) {
         scope = $rootScope.$new();
     });
     expect(scope).to.be.ok;
  });
});