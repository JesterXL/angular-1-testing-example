'use strict';

describe('#registerSuccess module', function()
{
  it('should exist', function() {
     module('main.register.registerSuccess');
     var scope;
     inject(function($rootScope) {
         scope = $rootScope.$new();
     });
     expect(scope).to.be.ok;
  });
});