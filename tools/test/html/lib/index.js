'use strict';

/**
* Generate an HTML file for running tests.
*
* @module @stdlib/tools/test/html
*
* @example
* var build = require( '@stdlib/tools/test/html' );
*
* var bundle = '/foo/bar/bundle.js';
* var opts = {
*     'out': '/foo/bar/tests.html'
* };
*
* build( bundle, opts, clbk );
*
* function clbk( error ) {
*     if ( error ) {
*         throw error;
*     }
* }
*
* @example
* var build = require( '@stdlib/tools/test/html' );
*
* var bundle = '/foo/bar/bundle.js';
*
* build( bundle, clbk );
*
* function clbk( error, html ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( html );
* }
*/

// MODULES //

var build = require( './build.js' );


// EXPORTS //

module.exports = build;
