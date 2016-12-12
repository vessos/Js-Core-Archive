/**
 * Created by MARK-Max on 7.11.2016 г..
 */
let produce = require('../addDelete.js').produce;
let expect = require('chai').expect;

describe('Test',function(){
    //let list={};
    //beforeEach (function(){
    //    list= produce()});
    it("tested",function(){
        expect(typeof(list.add)).to.equal('function');
        expect(typeof(list.delete)).to.equal('function');
        expect(typeof(list.toString)).to.equal('function');
    });
    it("tested",function(){
        expect(list.toString()).to.equal('');
    });
    describe('add',function(){
        it("tested",function() {
            list.add(5);
            expect(list.toString()).equal('5');
        });
        it("tested",function() {
            list.add('pesho');
            list.add('gosho');
            list.add('stamat');
            expect(list.toString()).equal('pesho, gosho, stamat');
        });
    })
    describe('delete',function(){
        it("tested",function() {
            expect(list.delete('pesho')).equal(undefined);
        });
        it("tested",function() {
            expect(list.delete(3.14)).equal(undefined);
        });
        it("tested",function() {
            list.add(15);
            list.delete(3.14)
            expect(list.toString()).equal('15');
        });
        it("tested",function() {
            expect(list.delete(0)).equal(undefined);
        });
        it("tested",function() {
            list.add(5);
            list.add('two');
            expect(list.delete(2)).equal(undefined);
            expect(list.toString()).equal('5, two');
        });
        it("tested",function() {
            list.add(5)
            expect(list.delete(0)).equal(5);
        });
    })

});