'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');

describe('generatePaymentLink function test', () => {
    it('should return a string which is a url', () => {
        var result = index.generatePaymentLink({recipient:'3dPB4qR3AeJ2cKsjRgajwtMaRk7N24hULg6',amount:'22200',reason:'afds',category:'Digital Services',vendorData:{callbackUrl:'www.google.com',invoiceId:'abcd'}});
        console.log(result);
        expect(result).to.be.a('string')
    });
});
describe('generatePaymentQR function test', () => {
    it('should return a string which is a url', async function() {
        var result = await index.generatePaymentQR({recipient:'3dPB4qR3AeJ2cKsjRgajwtMaRk7N24hULg6',amount:'22200',reason:'afds',category:'Digital Services',vendorData:{callbackUrl:'www.google.com',invoiceId:'abcd'}});
        console.log(result);
    });
});
describe('validateTx function test', () => {
    it('should return an object', async function() {
        var result = await index.validateTx({txHash:'0xc18c3f2f0f3d0916f23bb083224930202d6271929e729fcbf0004f4d85b59650',recipient:'0xee724540706296ebad65aea2515efe0949f97ae6',amount:'22200',invoiceId:'afds',category:'Digital Services',data:'bleh'});
        console.log(result);
    });
});