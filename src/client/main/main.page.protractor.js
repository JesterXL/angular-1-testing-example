'use strict';
var chai     = require('chai');
var promised = require('chai-as-promised');
chai.use(promised);
var expect   = chai.expect;
var BUILD_CONFIG = require('../../../build.config');

function getActiveNavigation()
{
	return element.all(by.tagName('md-tab-item'))
		.filter(function(elem, index)
		{
			return elem.getAttribute('aria-selected')
			.then(function(value)
			{
				// console.log("value:", value);
				// console.log("index:", index);
				return value === 'true';
			});
		})
		.getText();
}

function MainPage()
{
	// let reservationsButton = element(by.bottomNavigationNav('Reservations'));
	// let eventsButton = element(by.bottomNavigationNav('Events'));

	this.goToReservations = function()
	{
		return browser.get('http://localhost:' + BUILD_CONFIG.staticServer.port + '/#/reservations');
	};

	this.goToEvents = function()
	{
		return browser.get('http://localhost:' + BUILD_CONFIG.staticServer.port + '/#/events/list');
	};

	this.reservationsSelected = function()
	{
		return new Promise(function(success, failure)
		{
			getActiveNavigation()
			.then(function(o)
			{
				success(o[0].toLowerCase() === 'reservations');
			});
		});
	};

	this.eventsSelected = function()
	{
		return new Promise(function(success, failure)
		{
			getActiveNavigation()
			.then(function(o)
			{
				//console.log("o is:", o);
				success(o[0].toLowerCase() === 'events');
			});
		});
	};
}

module.exports = MainPage;