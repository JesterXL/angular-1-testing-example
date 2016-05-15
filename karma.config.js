var fs = require('fs');
var path = require('path');
var wiredep = require('wiredep');
var BUILD_CONFIG = require('./build.config.js');

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
        exclude: ['**/*.protractor.js', '**/client/features/**', '**/*.svg'],
        port: 8180,
        browsers: ['PhantomJS'],
        singleRun: true,
        continous: false,
        colors: true,
        logLevel: config.LOG_ERROR,
        // reporters: ['nyan', 'coverage', 'threshold'],
        // reporters: ['dots', 'coverage', 'threshold'],
        // reporters: ['nyan'],
        reporters: ['mocha'],
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
			      statements: 60,
			      branches: 60,
			      functions: 60,
			      lines: 60
			    }
            },
            watermarks: {
				statements: [ 60, 70 ],
				functions: [ 60, 70 ],
				branches: [ 60, 70 ],
				lines: [ 60, 70 ]
			}
        },

        thresholdReporter: {
            statements: 60,
            branches: 60,
            functions: 60,
            lines: 60
        },

        ngHtml2JsPreprocessor: {
            moduleName: BUILD_CONFIG.client.moduleName,
            stripPrefix: 'src/client/'
        }
    });
};
