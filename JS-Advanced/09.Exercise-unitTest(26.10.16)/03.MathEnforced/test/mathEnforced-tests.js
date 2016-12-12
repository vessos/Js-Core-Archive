/**
 * Created by MARK-Max on 26.10.2016 г..
 */
let mathEnforcer = require("../mathEnforced").mathEnforcer;
let expect = require('chai').expect

describe("mathenforced",function(){
    describe("addFive",function(){
        it("whit a none number parameter",function(){
           let result = mathEnforcer.addFive("gosho");
            expect(result).equal(undefined);
        });
        it("whit a none number parameter",function(){
            let result = mathEnforcer.addFive();
            expect(result).equal(undefined);
        });
        it("whit a none number parameter",function(){
            let result = mathEnforcer.addFive(10);
            expect(result).equal(15);
        });
        it("whit a none number parameter",function(){
            let result = mathEnforcer.addFive(-10);
            expect(result).equal(-5);
        });
        it("whit a none number parameter",function(){
            let result = mathEnforcer.addFive(-10.5);
            expect(result).equal(-5.5);
        });
    });
    describe("substractTen",function(){
        it("whit a none number parameter",function(){
            let result = mathEnforcer.subtractTen("gosho");
            expect(result).equal(undefined);
        });
        it("whit a none number parameter",function(){
            let result = mathEnforcer.subtractTen(10);
            expect(result).equal(0);
        });
        it("whit a none number parameter",function(){
            let result = mathEnforcer.subtractTen(-10);
            expect(result).equal(-20);
        });
        it("whit a none number parameter",function(){
            let result = mathEnforcer.subtractTen(0);
            expect(result).equal(-10);
        });
        it("whit a none number parameter",function(){
            let result = mathEnforcer.subtractTen(5.5);
            expect(result).equal(-4.5);
        });
        it("whit a none number parameter",function(){
            let result = mathEnforcer.subtractTen();
            expect(result).equal(undefined);
        });
    });
    describe("sum",function(){
        it("whit a none number parameter",function(){
            let result = mathEnforcer.sum("gosho",10);
            expect(result).equal(undefined);
        });
        it("whit a none number parameter",function(){
            let result = mathEnforcer.sum(10,'gosho');
            expect(result).equal(undefined);
        });
        it("whit a none number parameter",function(){
            let result = mathEnforcer.sum(10,18);
            expect(result).equal(28);
        });
        it("whit a none number parameter",function(){
            let result = mathEnforcer.sum("gosho","evlogi");
            expect(result).equal(undefined);
        });
        it("whit a none number parameter",function(){
            let result = mathEnforcer.sum(-10,-18);
            expect(result).equal(-28);
        });
        it("whit a none number parameter",function(){
            let result = mathEnforcer.sum();
            expect(result).equal(undefined);
        });
        it("whit a none number parameter",function(){
            let result = mathEnforcer.sum(6.5,12.3);
            expect(result).equal(18.8);
        });
    });
});