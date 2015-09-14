/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	proxyquire = require( 'proxyquire' ),
	isWindows = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'check-if-windows', function tests() {

	it( 'should export a boolean', function test() {
		expect( isWindows ).to.be.a( 'boolean' );
	});

	it( 'should return `true` if the current process is running on Windows', function test() {
		var isWindows;

		isWindows = proxyquire( './../lib', {
			'utils-platform': 'win32'
		});
		assert.isTrue( isWindows );
	});

	it( 'should return `false` if the current process is not running on Windows', function test() {
		var isWindows;

		isWindows = proxyquire( './../lib', {
			'utils-platform': 'darwin'
		});
		assert.isFalse( isWindows );
	});

});
