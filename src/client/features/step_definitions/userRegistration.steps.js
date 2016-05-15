var chai = require('chai');
chai.should();
var expect = chai.expect;

module.exports = function()
{


	this.Then(/^I select account registration$/, function (callback)
	{
		// find the tab
		element.all(by.css('.md-tab'))
		.filter((element, index)=>
		{
			return index === 0;
		})
		// click it
		.click()
		.then(()=>
		{
			// find the button
			return element.all(by.css('.md-button'))
			.filter((element, index)=>
			{
				return index === 1;
			})
			// click it
			.click();
		})
		.then(()=>
		{
			// we're done here
			callback();
		});
	});

	this.Then(/^I am taken to the account registration view$/, function (callback)
	{
		element.all(by.css('.md-flex'))
		.filter((element, index)=>
		{
			return element.getText()
			.then((text)=>
			{
				console.log("text:", text);
				return text === 'Step 1 of 3';
			});
		})
		.then((result)=>
		{
			callback();
		});
	});

	this.Then(/^I can fill out my account information$/, function (callback)
	{
		element.all(by.css('.input'))
		.filter((element, index)=>
		{
			return index === 1;
		})
		.sendKeys("email@email.com")
		.then(function(result)
		{
			console.log("email done");
		});

		element.all(by.css('.input'))
		.filter((element, index)=>
		{
			return index === 2;
		})
		.sendKeys("password")
		.then(function(result)
		{
			console.log("password done");
		});

		element.all(by.css('.input'))
		.filter((element, index)=>
		{
			return index === 3;
		})
		.sendKeys("password")
		.then(function(result)
		{
			console.log("password2 done");
		})

		.then((result)=>
		{
			callback();
		});
	});

	this.When(/^I submit$/, function (callback) {
		// find the tab
		element.all(by.buttonText('Go to Step 2'))
		.filter((element, index)=>
		{
			return index === 0;
		})
		// click it
		.click()
		.then(()=>
		{
			// we're done here
			callback();
		});
	});

	this.Then(/^I am told to check my email address for account registration confirmation$/, function (callback) {
		element.all(by.css('.p'))
		.filter((element, index)=>
		{
			return element.getText()
			.then((text)=>
			{
				console.log("text:", text);
				return text === 'Successfully registered! Thank you for registering. Please check your e-mail for confirmation.';
			});
		})
		.then((result)=>
		{
			callback();
		});
	});

	this.Given(/^I am an existing user$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.Given(/^I am not currently logged in$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.Then(/^attempt to register$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.Then(/^I am told I am already a registered user$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.Given(/^I am currently logged in$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.Then(/^I do not see account registration$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

};
