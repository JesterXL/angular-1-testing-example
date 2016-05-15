/* jshint -W117, -W030 */
'use strict';

describe('Main app module:', function() {
    describe('fireStarter', function() {
        var scope, mockMDThemingProvider, mockMDIconProvider, themeSpy, iconSpy;

         beforeEach(function () {
		    module('ngMaterial', function ($mdThemingProvider, $mdIconProvider)
		    {
		      mockMDThemingProvider = $mdThemingProvider;
		      mockMDIconProvider = $mdIconProvider;
		      themeSpy = sinon.spy(mockMDThemingProvider, 'theme');
		      iconSpy = sinon.spy(mockMDIconProvider, 'defaultIconSet');
		    });
		    module('fireStarter');
		    inject();
		  });

         beforeEach(function()
         {
         	inject();
         })
		 
		  it('should have default theme', function()
		  {
		  	expect(mockMDThemingProvider).to.exist;
		  	expect(mockMDThemingProvider.theme).to.exist;
		    expect(mockMDThemingProvider.theme.calledOnce).to.be.true;
		  });

		  it('should have default defaultIconSet', function()
		  {
		    expect(mockMDIconProvider.defaultIconSet.calledOnce).to.be.true;
		  });
    });
});