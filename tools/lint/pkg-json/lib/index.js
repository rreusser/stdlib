'use strict';

/**
* Lint `package.json` files.
*
* @module @stdlib/tools/lint/pkg-json
*
* @example
* var lint = require( '@stdlib/tools/lint/pkg-json' );
*
* lint( clbk );
*
* function clbk( error, errs ) {
*     if ( error ) {
*         throw error;
*     }
*     if ( errs ) {
*         console.dir( errs );
*     } else {
*         console.log( 'Success!' );
*     }
* }
*
* @example
* var lint = require( '@stdlib/tools/lint/pkg-json' );
*
* var errs = lint.sync();
* if ( errs ) {
*     console.dir( errs );
* } else {
*     console.log( 'Success!' );
* }
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );
var lint = require( './async.js' );
var sync = require( './sync.js' );


// MAIN //

setReadOnly( lint, 'sync', sync );


// EXPORTS //

module.exports = lint;
