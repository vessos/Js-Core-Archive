/**
 * Created by MARK-Max on 26.10.2016 г..
 */
let lookupChar = require("../charLookup.js").lookupChar;
let expect = require('chai').expect;

describe("lookupChar",function(){
    describe("Inccorect parameters",function() {
        it("get lookup char(pesho,gosho)", function () {
            let looker = lookupChar("pesho","gosho");
            expect(looker).equal(undefined)
        });
        it("get lookup char(pesho,5.4)", function () {
            let looker = lookupChar("pesho",5.4);
            expect(looker).equal(undefined)
        });
        it("get lookup char(3,3)", function () {
            let looker = lookupChar(3,3);
            expect(looker).equal(undefined)
        });
        it("get lookup char(3,\"gosho\")", function () {
            let looker = lookupChar(3,"gosho");
            expect(looker).equal(undefined)
        });
        it("get lookup char({name:gosho},3)", function () {
            let looker = lookupChar({name:"gosho"},3);
            expect(looker).equal(undefined)
        });
        it("get lookup char()", function () {
            let looker = lookupChar();
            expect(looker).equal(undefined)
        })
    });
    describe("Correct strings -incorect integer",function() {
        it("get lookup char(\"gosho\",15)", function () {
            let looker = lookupChar("gosho",15);
            expect(looker).equal("Incorrect index" )
        });
        it("get lookup char(\"gosho\",-10)", function () {
            let looker = lookupChar("gosho",-10);
            expect(looker).equal("Incorrect index" )
        });

    });
    describe("correct parameters",function() {
        it("get lookup char(\"gosho\",0)", function () {
            let looker = lookupChar("gosho",0);
            expect(looker).equal("g")
        });
        it("get lookup char(\"moni\",3)", function () {
            let looker = lookupChar("moni",3);
            expect(looker).equal("i")
        })
    })
});