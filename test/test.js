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
        var result = await index.validateTx({txHash:'0xc852028aa1064bc3e15b8c5f2a71fc376398d98a8edf8166cdd1d646fe7054f4',recipient:'0x2FaDA5F33728761648dAB4BE25BF0fE831B9dD34',amount:500,invoiceId:'receipt-id-3938383',category:'Digital Services',data:'bleh'});
        console.log(result);
    });
});
// from: '0x1251ea725C8cB898BB3C0Ca08B8945185a78828f',
// to: '0x2FaDA5F33728761648dAB4BE25BF0fE831B9dD34',
// amount: [BigNumber],
// data: '0x7b2263616c6c6261636b55726c223a2268747470733a2f2f736f6d6576656e646f722e636f6d2f6170692f6d7963616c6c6261636b656e64706f696e74222c2022696e766f6963654964223a22726563656970742d69642d33393338333833222c0a2277656273697465223a2268747470733a2f2f736f6d6576656e646f722e636f6d222c0a2276656e646f724e616d65223a2022536f6d652056656e646f72220a7d'