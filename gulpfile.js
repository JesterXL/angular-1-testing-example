"use strict";

var gulp                = require('gulp');
var browserSync         = require('browser-sync').create();
var del                 = require('del');
var concat              = require('gulp-concat');
var wiredep             = require('wiredep').stream;
var inject              = require('gulp-inject');
var complexity          = require('gulp-complexity');
var karma               = require('karma').server;
//var mochaLcovReporter   = require('mocha-lcov-reporter');
//var coverage            = require('gulp-coverage');
var open                = require('gulp-open');
//var istanbul            = require('gulp-istanbul');
var gutil               = require('gulp-util');
var uglify              = require('gulp-uglify');
var ngAnnotate          = require('gulp-ng-annotate');
//var size                = require('gulp-size');
var ngTemplates         = require('gulp-ng-templates');
var htmlmin             = require('gulp-htmlmin');
var exec                = require('child_process').exec;
var spawn               = require('child_process').spawn;
var protractor          = require("gulp-protractor").protractor;
var eslint              = require('gulp-eslint');
var argv                = require('yargs').argv;
var _                   = require('lodash');
var es 					= require('event-stream');
var runSequence 		= require('run-sequence');

var CONFIG              = require('./build.config');

var wiredepOptions = {
	ignorePath: "../../",
	exclude : [
		"bower_components/stackframe/stackframe.js",
		"bower_components/error-stack-parser/error-stack-parser.js",
		"bower_components/stack-generator/stack-generator.js",
		"bower_components/stacktrace-gps/dist/stacktrace-gps.js",
		"bower_components/source-map/source-map.js"
	]
};

function onBuildError(reason)
{
	console.error("onBuildError:", reason);
	process.exit(1);
}

function onBuildWarning(reason)
{
	console.warn("onBuildWarning:", reason);
}

// tells you everything wrong with your code, quickly. Format, styling, and complexity.
gulp.task('analyze', ['analyzeClient', 'complexityClient']);

gulp.task('complexityClient', () =>
{
	var files = _.remove(CONFIG.client.jsFiles, (filepath)=>
	{
		return _.includes(CONFIG.complexityExcludedFiles, (excludeFile)=>
		{
			return filepath === excludeFile;
		});
	});
	return gulp.src(files)
	.pipe(complexity(CONFIG.complexity));
});

gulp.task('analyzeClient', () =>
{
	var files = CONFIG.client.jsFiles;
	files = files.concat(CONFIG.client.testFiles);
	files = files.concat(CONFIG.client.protractorFiles);
	files.push('!*.css', '!**/*.css', '!*.svg', '!**/*.svg');
	return gulp.src(files)
    .pipe(eslint({
        extends: 'eslint:recommended',
        ecmaFeatures: {
            'modules': true,
            'arrowFunctions': false
        },
        rules: {
            'strict': 2,
            'quotes': 0,
            'no-console': 0,
            'comma-spacing': 0,
            'no-multi-spaces': 0,
            'no-trailing-spaces': 0,
            'no-use-before-define': [2, 'nofunc'],
            'no-unused-vars': [2, { "args": "none" }],
            'no-underscore-dangle': 0
        },
        globals: {
            'jQuery':false,
            '$':true,
            'angular': true,
            'FastClick': true,
            '_': true,
            'moment': true,
            'io': true,
            'google': true
        },
        envs: [
            'browser'
        ]
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

// runs full unit tests on your browser code and 
// outputs code coverage reports
gulp.task('test', function(done)
{
	karma.start({
		configFile: __dirname + '/' + CONFIG.karma.configFile
	}, function(result)
	{
		//done();
		console.log("Exiting process with result:", result);
		process.exit(result);
	});
});

gulp.task('showClientCoverage', function()
{
	gulp.src('./coverage/html/index.html')
        .pipe(open());
});

// shows your code coverage in HTML report form for Client and Node
gulp.task('showCoverage', ['showClientCoverage']);

// runs Karma in CI mode, and re-runs unit tests while you code. Made for uber-fast unit testing
// or hardercore refactoring runs.
gulp.task('testWhileICode', function()
{
    karma.start({
		configFile: __dirname + '/' + CONFIG.karma.configFile,
		singleRun: false,
		continious: true,
		client: {
			captureConsole: true,
			mocha: {
				ui: 'bdd'
			}
		},
	});
});

// runs e2e tests
function runWebdriver(callback)
{
    spawn('webdriver-manager', ['start'], {
        stdio: 'inherit'
    })
    .once('close', function()
    {
    	console.error("close:", arguments);
    	callback();
    })
    .once('disconnect', function()
    {
    	console.error("disconnect:", arguments);
    })
    .once('error', function()
    {
    	console.error("error:", arguments);
    })
    .once('exit', function()
    {
    	console.error("exit:", arguments);
    })
    .once('message', function()
    {
    	console.error("message:", arguments);
    });

}

gulp.task('startSelenium', ()=>
{
	runWebdriver(()=>{});
});

gulp.task('endtoend', ()=>
{
	var featureFiles = CONFIG.bdd.featureFiles;
	if(_.isUndefined(argv.f) === false && _.isString(argv.f))
	{
		featureFiles = [CONFIG.bdd.sourceDirectory + argv.f + '.feature'];	
	}

	var specs = featureFiles.join(',');
	var argsArray = [
		"--specs", specs
	];
	console.log("argsArray:", argsArray);

	// cat tests/features/cucumber_report.json | ./node_modules/.bin/cucumber-junit > tests/features/cucumber_report.xml
	return gulp.src(featureFiles)
        .pipe(protractor({
        	configFile: CONFIG.bdd.configFile
    
        }))
        .on('end', function(e)
        {
        	console.log("Cucumber end to end is completed.");
        })
        .on('error', function (e) {
            console.error("Cucumber Task Error:", e);
        });
});

// cleans the build directories
gulp.task('clean', function(done)
{
	console.log("clean...");
	console.log("CONFIG.buildFilesAndDirectoriesToClean:", CONFIG.buildFilesAndDirectoriesToClean);
    del(CONFIG.buildFilesAndDirectoriesToClean)
    .then(function()
    {
        console.log("clean done");
        done();
    });
});

function getBowerComponents()
{
	return require('wiredep')(wiredepOptions);
}

gulp.task('showWiredepComponents', () =>
{
	console.log(getBowerComponents());
});

// copies all the files you need for a dev build. Missing prod for now.
gulp.task('copy', ['clean'], function()
{
    // NOTE: doesn't work, task never completes, I give up.
    // All streams above work fine if you return individually,
    // so it's something wrong with merge.
    // return merge(htmlStream, jsStream, templateStream);
    
    return new Promise(function(resolve, reject)
    {
        gulp.src('src/client/index.html')
        .pipe(wiredep(wiredepOptions))
        .pipe(gulp.dest('./build'))
        .on('end', resolve)
        .on('error', reject);
    })
    .then(function()
    {
        return new Promise(function(resolve, reject)
        {
             gulp.src(CONFIG.client.sourceFiles)
            .pipe(gulp.dest('./build'))
            .on('end', resolve)
            .on('error', reject);
        });
    })
    .then(function()
    {
        return new Promise(function(resolve, reject)
        {
             gulp.src(CONFIG.client.templateFiles)
            .pipe(gulp.dest('./build'))
            .on('end', resolve)
            .on('error', reject);
        });
    });
});

function getInjectStream()
{
	try
	{
		var wiredepSources = require('wiredep')();
		var sourceFiles = CONFIG.client.sourceFiles;
		sourceFiles = _.filter(sourceFiles, (item)=>
		{
			return item.indexOf('css') === -1;
		});
		console.log(sourceFiles);
		var both = sourceFiles.concat(wiredepSources.css);
		var sources = gulp.src(both, {read: false});
		return gulp.src('./build/index.html')
		.pipe(inject(sources, {ignorePath: '/src/client/'}))
		.pipe(gulp.dest('./build'));
	}
	catch(err)
	{
		console.error("getInjectStream error:", err);
		process.exit(1);
	}
}

// injects all your files into index.html
gulp.task('inject', ['copy'], function()
{
	return getInjectStream();
});

gulp.task('pause', function(done)
{
	setTimeout(function()
    {
    	done();
    }, 2000);
});

gulp.task('injectBrowserSync', ['copy'], function()
{
	console.log("gulp task::injectBrowserSync");
	return getInjectStream()
	.pipe(browserSync.stream());
});

function createNGTemplatesFile()
{
	console.log("createNGTemplatesFile::starting...");
	return gulp.src(CONFIG.client.templateFiles)
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(ngTemplates({
		filename: 'templates.js',
		module: CONFIG.karma.moduleName,
		standalone: false,
		path: function (path, base) {
		    return path.replace(base, '').replace('/templates', '');
			}
		}))
		.pipe(gulp.dest(CONFIG.client.tempDirectory))
		.on('end', ()=>
		{
			console.log("createNGTemplatesFile::done");
		});
}

function concatCode()
{
	console.log("concatCode::starting...");
	var wiredepSources = require('wiredep')();
	//var templates = gulp.src(CONFIG.client.tempDirectory + '/templates.js');
	var both = wiredepSources.js.concat(CONFIG.client.jsFiles);
	both.push(CONFIG.client.tempDirectory + '/templates.js')
	//both.push(templates);
	return gulp.src(both)
	//.pipe(ngAnnotate())
	.pipe(concat('js/application.js'))
	//.pipe(uglify())
	.pipe(gulp.dest(CONFIG.client.buildProdDirectory))
	.on('end', ()=>
	{
		console.log("concatCode::done");
	});
}

function copyBowerCSS()
{
	console.log("copyBowerCSS::starting...");
	var wiredepSources = require('wiredep')();
	return gulp.src(wiredepSources.css)
		.pipe(gulp.dest(CONFIG.client.buildProdDirectory))
		.on('end', ()=>
		{
			console.log("copyIndex::done");
		});
}

function copyIndex()
{
	console.log("copyIndex::starting...");
	return gulp.src(['src/client/index.html', 'src/client/fireStarter.css', 'src/static/favicon.ico'])
		.pipe(gulp.dest(CONFIG.client.buildProdDirectory))
		.on('end', ()=>
		{
			console.log("copyIndex::done");
		});
}

function injectProductionCode()
{
	console.log("injectProductionCode::starting...");
	var sources = [CONFIG.client.buildProdDirectory + '/js/application.js'];
	var wiredepSources = require('wiredep')();
	var bowerCSSFiles = _.map(wiredepSources.css, (path)=>
	{
		var chunks = path.split('/');
		return CONFIG.client.buildProdDirectory + '/' + chunks[chunks.length - 1];
	});
	sources = sources.concat(bowerCSSFiles);
	var combinedCode = gulp.src(sources, {read: false});
	return gulp.src(CONFIG.client.buildProdDirectory + '/index.html')
		.pipe(inject(combinedCode, {
										ignorePath: ['/src/client/', '/build/'],
										addRootSlash: false
									}))
		.pipe(gulp.dest(CONFIG.client.buildProdDirectory))
		.on('end', ()=>
		{
			console.log("injectProductionCode::done");
		});
}

gulp.task('ngtemplates', ()=>
{
	return createNGTemplatesFile();
});

gulp.task('copyBowerCSS', ()=>
{
	return copyBowerCSS();
});

gulp.task('concat', ()=>
{
	return concatCode();
});

gulp.task('index', ()=>
{
	return copyIndex();
});

gulp.task('injectprod', ()=>
{
	return injectProductionCode();
});

gulp.task('build', ['clean'], (done) =>
{
	runSequence(
    'ngtemplates',
    'copyBowerCSS',
    'concat',
    'index',
    'injectprod',
    done);
});

gulp.task('browserSync', ['inject'], function()
{	
	browserSync.init({
        proxy: "http://localhost:" + CONFIG.staticServer.port
    });
    gulp.watch(["src/client/*.js",
    			"src/client/*.html",
    			"src/client/*.css",
    			"src/client/**/*.js",
    			"src/client/**/*.html"], ['injectBrowserSync'])
   .on("change", function()
   	{
   		console.log("gulp task::browserSync, reloading...");
   		//browserSync.reload();
   	});
});

gulp.task('open', function(done)
{
	gulp.src('./build/index.html')
        .pipe(open());

    setTimeout(function()
    {
    	done();
    }, 2000);
});

function runCommand(command) {
  return function (cb) {
    exec(command, function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      cb(err);
    });
  }
}

gulp.task('start-static-server', runCommand('node src/static/app'));
gulp.task('start-webdriver', runCommand('webdriver-manager start'));

// git-r-done
gulp.task('default', ['browserSync']);
