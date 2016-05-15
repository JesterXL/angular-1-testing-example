// conf.js
exports.config = {
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: [
    			'src/client/features/step_definitions/*.steps.js'
    		],
    format: 'json:featurereport/cucumber_report.json'
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
  			'src/client/features/*.feature'
  		]
}