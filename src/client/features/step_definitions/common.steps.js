var chai = require('chai');
chai.should();
var expect = chai.expect;

module.exports = function()
{
	this.Given(/^I am a new user$/, function (callback)
	{
		callback();
	});


	this.When(/^I go to the homepage$/, function ()
	{
		return browser.get('http://localhost:8553/');
	});

};