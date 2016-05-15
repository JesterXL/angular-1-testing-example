var chai = require('chai');
chai.should();
var expect = chai.expect;

module.exports = function()
{

	this.When(/^I select view usage report$/, function ()
	{
		return browser.get('http://localhost:8553/#/usage');
	});

	this.Then(/^I can see my usage details on the report view$/, function ()
	{
		return new Promise((success, failure)=>
		{
			var result = element(by.tagName('nvd3')).$('svg');
			result.getTagName()
			.then(function(tagName)
			{
				if(tagName === 'svg')
				{
					success();
				}
				else
				{
					failure();
				}
			});
		});
	});

};