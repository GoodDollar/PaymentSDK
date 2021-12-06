'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');

describe('generatePaymentLink function test', () => {
    it('should return a string which is a url', () => {
        var result = index.generatePaymentLink({recipient:'3dPB4qR3AeJ2cKsjRgajwtMaRk7N24hULg6',amount:'22200',reason:'afds',category:'Digital Services',vendorData:{callbackUrl:'www.google.com',invoiceId:'abcd'}});
        console.log(result);
        expect(result).to.be.a('string')
    });
    it('should return a string which is a url', () => {
        var result = index.generatePaymentQR({recipient:'3dPB4qR3AeJ2cKsjRgajwtMaRk7N24hULg6',amount:'22200',reason:'afds',category:'Digital Services',vendorData:{callbackUrl:'www.google.com',invoiceId:'abcd'}});
        console.log(result);
        expect(result).to.be.a('string')
    });
});