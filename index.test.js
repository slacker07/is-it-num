const mocha = require('mocha');
const assert = require('assert');

const isItNum = require('./index');

describe('Test for isItNum', () => {
    it('should return true if the number is odd:', function () {
        assert(isItNum(0));
        assert(isItNum(10));
        assert(isItNum(0.4));
        assert(!isItNum("Fail"));
        assert(!isItNum("Str"));
        assert(!isItNum("False"));
    });
})