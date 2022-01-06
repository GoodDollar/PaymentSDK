'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');


describe('generatePaymentLink function test', () => {
    it('should return a string which is a url', () => {
        var result = index.generatePaymentLink({address:'0x00521965e7bd230323c423d96c657db5b79d099f',recipient:'3dPB4qR3AeJ2cKsjRgajwtMaRk7N24hULg6',amount:'22200',reason:'afds',category:'Digital Services',vendorData:{callbackUrl:'www.google.com',invoiceId:'abcd'}});
        console.log(result);
        expect(result).to.be.a('string')
    });
});
describe('generatePaymentQR function test', () => {
    it('should return a string which is a url', async function() {
        var result = await index.generatePaymentQR({address:'0x00521965e7bd230323c423d96c657db5b79d099f',recipient:'3dPB4qR3AeJ2cKsjRgajwtMaRk7N24hULg6',amount:'22200',reason:'afds',category:'Digital Services',vendorData:{callbackUrl:'www.google.com',invoiceId:'abcd'}});
        console.log(result);
    });
});
describe('validateTx function test', () => {
    it('should return an object', async function() {
        var result = await index.validateTx({txHash:'0xc852028aa1064bc3e15b8c5f2a71fc376398d98a8edf8166cdd1d646fe7054f4',recipient:'0xee724540706296ebad65aea2515efe0949f97ae6',amount:'22200',invoiceId:'receipt-id-3938383',category:'Digital Services',data:'bleh'});
        console.log(result);
    });
});