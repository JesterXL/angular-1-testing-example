'use strict';

describe('#outage module', function()
{
  it('should exist', function() {
     module('main.outage');
     var scope;
     inject(function($rootScope) {
         scope = $rootScope.$new();
     });
     expect(scope).to.be.ok;
  });
});