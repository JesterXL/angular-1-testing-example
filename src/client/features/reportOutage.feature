Feature: As a user I awant to report a power outage in my area so that I can can let the company know my power is out

	Scenario: report power outage
		Given I am am existing user
		When I go to the power outage page
		Then I see my location on a map
		When I choose to be notified about future power outages 
		Then I am given a confirmation that I will recieve alerts about future power outages