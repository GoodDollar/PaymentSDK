'use strict';
import { expect } from 'chai';
import { generatePaymentLink,generatePaymentQR,validateTx } from '../dist/index.js';

describe('generatePaymentLink function test', () => {
    it('should return a string which is a url', () => {
        var result = generatePaymentLink({address:'0x00521965e7bd230323c423d96c657db5b79d099f',recipient:'3dPB4qR3AeJ2cKsjRgajwtMaRk7N24hULg6',amount:'22200',reason:'afds',category:'Digital Services',vendorData:{callbackUrl:'www.google.com',invoiceId:'abcd'}});
        console.log(result);
        expect(result).to.be.a('string')
    });
});
describe('generatePaymentQR function test', () => {
    it('should return a string which is a url', async function() {
        var result = await generatePaymentQR({address:'0x00521965e7bd230323c423d96c657db5b79d099f',recipient:'3dPB4qR3AeJ2cKsjRgajwtMaRk7N24hULg6',amount:'22200',reason:'afds',category:'Digital Services',vendorData:{callbackUrl:'www.google.com',invoiceId:'abcd'}});
        console.log(result);
        expect(result).to.be.a('string')
    });
});
describe('validateTx function test', () => {
    it('should return a boolean answer', async function() {
        var result = await validateTx({txHash:"0x16d3c01a2786ce2022ef036ed122c5ff38b1809bf14302c3b89de73cbcbcac8d",recipient:"0x2FaDA5F33728761648dAB4BE25BF0fE831B9dD34",amount:500,invoiceId:"receipt-id-3938383"});
        console.log(result);
        expect(result).to.be.a('boolean')
    });
});