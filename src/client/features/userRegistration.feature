Feature: As a user, I want to register for an account, so that I can pay my bill electronically and be made aware of power outages.

	Scenario: New user signup
		Given I am a new user
		When I go to the homepage
		Then I select account registration
			Then I am taken to the account registration view
			Then I can fill out my account information
		When I submit
			Then I am told to check my email address for account registration confirmation

	# Scenario: Existing User registration
	#	Given I am an existing user
	#	And I am not currently logged in
	# 	When I go to the homepage
	# 	Then I select account registration
	# 	And attempt to register
	# 	Then I am told I am already a registered user

	# Scenario: Logged In user registration
	# 	Given I am an existing user
	# 	And I am currently logged in
	# 	When I go to the homepage
	# 	Then I do not see account registration