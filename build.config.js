
var packageJSON = require('./package.json');
var APP_NAME = 'fireStarter'

var config = {

	buildFilesAndDirectoriesToClean: ['build', 'build-prod', 'coverage', 'reports', '.tmp'],


	complexity: {
		cyclomatic: 10,
		halstead: 10.8,
		maintainability: 80,
		breakOnErrors: false,
		verbose: false
	},
	complexityExcludedFiles: [
		'src/client/main/outage/outagestep1/statesList.value.js'
	],

	client: {
		baseDirectory: 'src/client',
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
		'!**/client/features/**'],
		sourceFiles:     ['*.module.js',
		'*.js', 
		'**/*.module.js',
		'**/*.js', 
		'*.css',
		'*.svg',
		'**/*.svg',
		'!*.spec.js', 
		'!**/*.spec.js', 
		'!gulpfile.js',
		'!**/*.steps.js',
		'!**/world.js',
		'!**/*.protractor.js', 
		'!*.protractor.js', 
		'!**/client/features/**'],
		templateFiles: ['*.directive.html', '**/*.directive.html'],
		testFiles:       ['*.spec.js', '**/*.spec.js'],
		protractorFiles: ['*.steps.js', '**/*.steps.js', '*.protractor.js', '**/*.protractor.js'],
		globals: ['angular'],
		buildDirectory:  'build',
		buildProdDirectory: 'build',
		coverageDirectory: 'coverage',
		sourceIndexFile: 'src/client/index.html',
		buildIndexFile: 'build/index.html',
		injectorFiles: {
			'build/index.html': ['src/client/*.js',
			'src/client/**/*.module.js',
			'src/client/**/*.js',
			'src/client/**/*.css',
			'src/client/*.css',
			'!src/client/*.spec.js', 
			'!src/client/**/*.spec.js', 
			'!gulpfile.js']
		}
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
		moduleName: 'fireStarter'
	},

	bdd: {
		sourceDirectory: 'src/client/features/',
		featureFiles: ['src/client/features/.change-accommodation-status.feature'],
		configFile: './protractor.conf.js'
	},

	api: {
		port: 2146,
		timeout: 10 * 1000,
		baseDirectory: 'src/api',
		mocha: {
			reporter: 'nyan',
		},
		sourceFiles: [
			'src/api/*.js',
			'src/api/**/*.js',
			'!src/*.spec.js',
			'!src/api/**/polar.js'
		],
		testFiles: [
			'src/api/*.spec.js',
			'src/api/**/*.spec.js'
		],
		mongoURL: 'mongodb://localhost:27017/mydb'
	},

	staticServer: {
		file: './src/static/app.js',
		nodemonWatchFiles: ['src/api/**/*.js', 'src/static/**/*.js'],
		port: 8553
	},

	socket: {
		socketIO: {
			runtimePort: 8080,
			testPort: 8081
		},
		webSocket: {
			runtimePort: 9000,
			testPort: 9090,
			runtimeURL: null,
			testURL: null
		}
	},

	injectWebSocketURLs: function()
	{
		var base = config.socket.webSocket;
		var remoteIP = 'ws://52.86.2.164:';
		var localIP = 'ws://localhost:'
		var USE_REMOTE = config.serverMode === 'remote';
		var URL = USE_REMOTE ? remoteIP : localIP;
		base.runtimeURL = URL + base.runtimePort + '/accommodation/status/socket/connect';
		base.testURL = URL + base.testPort + '/accommodation/status/socket/connect';
	},

	// local or remote
	serverMode: 'remote'

};

config.normalizeSourceFiles();
config.injectWebSocketURLs();


module.exports = config;
