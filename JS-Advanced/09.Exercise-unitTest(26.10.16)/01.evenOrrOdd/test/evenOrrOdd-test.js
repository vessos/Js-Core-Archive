/**
 * Created by MARK-Max on 26.10.2016 г..
 */
let isOddOrEven = require("../evenOrrOdd.js").isOddOrEven;
let expect = require("chai").expect;

describe("isoddEven", function () {
    it('oddeven test even(18) ', function () {
        let oddEven = isOddOrEven(18);
        expect(oddEven).equal(undefined);
    });
    it('oddeven test even("pesho") ', function () {
        let oddEven = isOddOrEven("pesho");
        expect(oddEven).equal("odd");
    });
    it('oddeven test even("gogo") ', function () {
        let oddEven = isOddOrEven("gogo");
        expect(oddEven).equal("even");
    });
    it('oddeven test even() ', function () {
        let oddEven = isOddOrEven({name:'pesho'});
        expect(oddEven).equal(undefined);
    });
    it('oddeven test even(\'it is even\') ', function () {
        let oddEven = isOddOrEven("it is even");
        expect(oddEven).equal("even");
    });
});