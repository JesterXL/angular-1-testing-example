// conf.js
exports.config = {
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: [
    			'src/features/step_definitions/*.steps.js'
    		],
    format: 'json:featurereport/cucumber_report.json'
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
  			'src/features/*.feature'
  		]
}