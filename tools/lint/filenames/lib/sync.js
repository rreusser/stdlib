'use strict';

// MODULES //

var glob = require( 'glob' ).sync;
var resolve = require( 'path' ).resolve;
var cwd = require( '@stdlib/utils/cwd' );
var copy = require( '@stdlib/utils/copy' );
var DEFAULTS = require( './defaults.json' );
var validate = require( './validate.js' );
var linter = require( './lint.js' );
var IGNORE = require( './ignore_patterns.json' );


// MAIN //

/**
* Synchronously lints filenames.
*
* @param {Options} options - function options
* @param {string} [options.dir] - root directory from which to search for files
* @param {string} [options.pattern='**\/*'] - filename pattern
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {(ObjectArray|EmptyArray)} list of failing filenames
*
* @example
* var filenames = lint();
* // returns [...]
*/
function lint( options ) {
	var pattern;
	var names;
	var opts;
	var err;
	var dir;

	opts = copy( DEFAULTS );
	if ( arguments.length ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	if ( opts.dir ) {
		dir = resolve( cwd(), opts.dir );
	} else {
		dir = cwd();
	}
	pattern = opts.pattern;

	opts = {
		'cwd': dir,
		'ignore': IGNORE,
		'nodir': true // do not match directories
	};
	names = glob( pattern, opts );
	return linter( names );
} // end FUNCTION lint()


// EXPORTS //

module.exports = lint;
