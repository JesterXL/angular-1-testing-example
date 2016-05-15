Feature: As a registered user, I want to see my power usage, so that I can be aware of how much money I am spending and how.

	Scenario: view report
		When I go to the usage page
			And I select view usage report
		Then I can see my usage details on the report view