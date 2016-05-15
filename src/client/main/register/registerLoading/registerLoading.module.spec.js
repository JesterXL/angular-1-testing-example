'use strict';

describe('#RegisterLoading module', function()
{
  it('should exist', function() {
     module('main.register.registerLoading');
     var scope;
     inject(function($rootScope) {
         scope = $rootScope.$new();
     });
     expect(scope).to.be.ok;
  });
});