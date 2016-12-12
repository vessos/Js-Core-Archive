/**
 * Created by MARK-Max on 26.10.2016 г..
 */
let sum =require("../sum-aray").sum;
let expect = require("chai").expect;

describe("Sum(arr)-sum array of numbers",function(){
    it("should return 3 for [1,2]",function(){
        let expectedSum = 3;
        let actualSum = sum([1,2]);
        expect(actualSum).to.be.equal(expectedSum);
    });
    it("should return 5 for [5]",function(){
        let expectedSum = 5;
        let actualSum = sum([5]);
        expect(actualSum).to.be.equal(expectedSum);
    });
    it("should return 0 for []",function(){
        let expectedSum = 0;
        let actualSum = sum([]);
        expect(actualSum).to.be.equal(expectedSum);
    });
    it("should return 3 for [1.5,2.5,-1]",function(){
        let expectedSum = 3;
        let actualSum = sum([1.5,2.5,-1]);
        expect(actualSum).to.be.equal(expectedSum);
    });
    it("should return NaN for ['invalid data']",function(){
        let expectedSum = NaN;
        let actualSum = sum(['invalid data']);
        expect(actualSum).to.be.NaN;
    });
});
//console.log(sum([2,3,4]));