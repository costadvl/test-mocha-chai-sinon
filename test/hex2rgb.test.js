var hex2rgb = require('../lib/hex2rgb');
var assert = require('assert');
var expect = require('chai').expect;

describe('hex2rgb', function () {
    it("shold return error if the value is not a hex code",function (done) {
        hex2rgb('blue',function (error, result) {
            expect(error).to.exist;
            // assert(error);
            done();
        });
    });
    it('should return a valid rgb converted color from hex',function (done) {
        hex2rgb('#fff', function (error, result) {
            
            expect(error).to.not.exist;
            // assert.strictEqual(error, null);
            expect(result).to.deep.equal([255,255,255]);
            // assert.deepEqual(result, [255,255,255]);
            done();
        });
        
    });
});
