var getPalette = require('../lib/getPalette');
var assert = require('chai').assert;
var should = require('chai').should();
var fs = require('fs');

var configFile = process.cwd()+"/config.json";

function writeConfig(config, callback) {
    fs.writeFile(configFile, JSON.stringify(config), callback)
}

describe('getPalette', function () {
    var config = {};
    
    before(function (done) {
        fs.readFile(configFile, function (err, contents) {
            config = JSON.parse(contents.toString());
            done();
        });
    });
    
    afterEach(function (done) {
        writeConfig(config, done);
    });
    
    it("Should throw an error if the result is not an array",function (done) {
        writeConfig({palette: "string"}, function (err) {
            assert.throws(getPalette, /is not an array/);
            done();
        });
    });
    
    it("Should return an array with 3 items bt default", function () {
        var palette = getPalette();
        
        palette.should.be.an('array').with.length(3)
        
        // assert.isArray(palette,"did not return an array");
        // assert.lengthOf(palette, 3, 'did not returned 3 items');
    });
});
