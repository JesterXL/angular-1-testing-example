
var packageJSON = require('./package.json');
var APP_NAME = 'demo'

var config = {

	buildFilesAndDirectoriesToClean: ['build', 'build-prod', 'coverage', 'reports', '.tmp'],

	complexity: {
		cyclomatic: 10,
		halstead: 14.6,
		maintainability: 80,
		breakOnErrors: true,
		verbose: true
	},

	client: {
		baseDirectory: 'src',
		tempDirectory: '.tmp',
		jsFiles:     ['*.module.js',
			'*.js', 
			'**/*.module.js',
			'**/*.js',
			'!*.spec.js', 
			'!**/*.spec.js', 
			'!gulpfile.js',
			'!**/*.steps.js',
			'!**/world.js',
			'!**/*.protractor.js', 
			'!*.protractor.js',
			'!**/protractor.config.js', 
			'!**/features/**',
			'!**/api.js',
			'!**/*.page*.js'],

		sourceFiles:     ['*.module.js',
			'*.js', 
			'**/*.module.js',
			'**/*.js', 
			'*.css',
			'*.svg',
			'**/*.svg',
			'*.jpg',
			'**/*.jpg',
			'*.png',
			'**/*.png',
			'!*.spec.js', 
			'!**/*.spec.js', 
			'!gulpfile.js',
			'!**/*.steps.js',
			'!**/world.js',
			'!**/*.protractor.js', 
			'!*.protractor.js', 
			'!protractor.config.js',
			'!**/protractor.config.js', 
			'!**/features/**',
			'!api.js',
			'!**/api.js',
			'!**/*.page*.js',
			'!**/*.steps.js'],
		mediaFiles: ['!*.css', '!**/*.css', '!*.svg', '!**/*.svg', '!*.jpg', '!**/*.jpg', '!*.png', '!**/*.png'],
		templateFiles: ['*.directive.html', '**/*.directive.html'],
		testFiles:       ['*.spec.js', '**/*.spec.js'],
		protractorFiles: ['*.steps.js', '**/*.steps.js', '*.protractor.js', '**/*.protractor.js'],
		buildProdDirectory: 'build'
	},

	prefixPath: function(listOfFiles, prefix)
	{
		return listOfFiles.map(function(item)
		{

			if(item.charAt(0) != '!' && item.indexOf('http://') === -1)
			{
				return config.client.baseDirectory + '/' + item;
			}
			else
			{
				return item;
			}
		});
	},

	normalizeSourceFiles: function()
	{
		var base = config.client;
		base.jsFiles = config.prefixPath(base.jsFiles, base.baseDirectory);
		base.sourceFiles = config.prefixPath(base.sourceFiles, base.baseDirectory);
		base.testFiles = config.prefixPath(base.testFiles, base.baseDirectory);
		base.templateFiles = config.prefixPath(base.templateFiles, base.baseDirectory);
	},

	karma: {
		configFile: 'karma.config.js',
		moduleName: APP_NAME
	},

	bdd: {
		sourceDirectory: 'src/features/',
		featureFiles: ['src/features/*.feature'],
		configFile: './protractor.conf.js'
	},

	staticServer: {
		file: './src/static/app.js',
		nodemonWatchFiles: ['src/api/**/*.js', 'src/static/**/*.js'],
		port: 8553
	}

};

config.normalizeSourceFiles();


module.exports = config;