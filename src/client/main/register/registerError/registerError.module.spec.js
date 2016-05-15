'use strict';

describe('#registerError module', function()
{
  it('should exist', function() {
     module('main.register.registerError');
     var scope;
     inject(function($rootScope) {
         scope = $rootScope.$new();
     });
     expect(scope).to.be.ok;
  });
});