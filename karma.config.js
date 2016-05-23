var fs = require('fs');
var path = require('path');
var wiredep = require('wiredep');
var BUILD_CONFIG = require('./build.config.js');
var _ = require('lodash');

var files = [];

var bowerComponents = wiredep({
    devDependencies: true,
    exclude : [
        "bower_components/stackframe/stackframe.js",
        "bower_components/error-stack-parser/error-stack-parser.js",
        "bower_components/stack-generator/stack-generator.js",
        "bower_components/stacktrace-gps/dist/stacktrace-gps.js",
        "bower_components/source-map/source-map.js"
    ]
});

if (bowerComponents) {
    files = files.concat(bowerComponents.js);
}
files = files.concat(BUILD_CONFIG.client.sourceFiles);
files = files.concat(BUILD_CONFIG.client.templateFiles);
var excludedFiles = _.filter(files, function(item)
{
	return item.indexOf("!") > -1 && item.indexOf('spec') === -1;
});
excludedFiles = excludedFiles.concat(BUILD_CONFIG.client.mediaFiles);
excludedFiles = _.map(excludedFiles, function(file)
{
	file = file.split("!").join("");
	return file;
});

// console.log("files:", files);
module.exports = function(config) {
    'use strict';

    config.set({
        autoWatch: true,
        basePath: './',
        frameworks: [
            'mocha',
            'chai',
            'sinon',
            'es6-shim'
        ],
        files: files,
        client: {
            captureConsole: true,
            mocha: {
                ui: 'bdd'
            }
        },
        exclude: excludedFiles,
        port: 8180,
        browsers: ['PhantomJS'],
        singleRun: true,
        continous: false,
        colors: true,
        logLevel: config.LOG_ERROR,
        // reporters: ['nyan', 'coverage', 'threshold'],
        reporters: ['mocha', 'coverage', 'threshold'],
        // reporters: ['dots', 'coverage', 'threshold'],
        // reporters: ['nyan'],
        // reporters: ['mocha'],
        // reporters: ['dots'],
        plugins: [
            'karma-chai',
            'karma-mocha',
            'karma-chrome-launcher',
            'karma-junit-reporter',
            'karma-sinon',
            'karma-coverage',
            'karma-threshold-reporter',
            'karma-phantomjs-launcher',
            'karma-ng-html2js-preprocessor',
            'karma-mocha-reporter',
            'karma-nyan-reporter',
            'karma-es6-shim'
        ],
        preprocessors: {
            'src/**/*.directive.html': ['ng-html2js'],
            'src/!(coverage)/**/!(*.spec).js': ['coverage']
        },
        // configure the reporter
        coverageReporter: {
            dir: 'coverage',
            reporters: [
                {type: 'html', subdir: 'html'},
                {type: 'text', subdir: 'html'},
                {type: 'lcovonly', subdir: 'html'},
                {type: 'json', subdir: 'html'},
                {type: 'cobertura', subdir: 'html'}
            ],
            check: {
            	global: {
			      statements: 50,
			      branches: 50,
			      functions: 50,
			      lines: 50
			    }
            },
            watermarks: {
				statements: [ 50, 60 ],
				functions: [ 50, 60 ],
				branches: [ 50, 60 ],
				lines: [ 50, 60 ]
			}
        },

        thresholdReporter: {
            statements: 50,
            branches: 50,
            functions: 50,
            lines: 50
        },

        ngHtml2JsPreprocessor: {
            moduleName: BUILD_CONFIG.client.moduleName,
            stripPrefix: 'src/'
        }
    });
};
