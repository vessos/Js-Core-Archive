/**
 * Created by MARK-Max on 10.11.2016 г..
 */
let SortedList = require('../sortedList').SortedList;
let expect = require('chai').expect;


describe('Test', function () {
    let myList;
    beforeEach(function(){
        myList = new SortedList();
    });


    it("should have a construkctor", function () {
        expect(typeof SortedList).to.be.equal('function');

        expect(SortedList.prototype.hasOwnProperty('add')).to.be.equal(true);
        expect(SortedList.prototype.hasOwnProperty('remove')).to.be.equal(true);
        expect(SortedList.prototype.hasOwnProperty('get')).to.be.equal(true);
        expect(SortedList.prototype.hasOwnProperty('size')).to.be.equal(true);
    })
    it("should have a construkctor", function () {
        expect(typeof SortedList).to.be.equal('function');
    })

    it('testing everythink', function () {
        expect(myList.size).to.equal(0);
    });
    it('testing everythink', function () {
        myList.add(1);
        expect(myList.size).to.equal(1);
        expect(myList.get(0)).to.equal(1)
    });
    it('testing everythink', function () {
        myList.add(1);
        myList.add(2);
        expect(myList.size).to.equal(2);
    });
    it('testing everythink', function () {
        myList.add(1);
        myList.add(2);
        myList.remove(1);
        expect(myList.size).to.equal(1);
    });
    it('testing everythink', function () {
        myList.add(1);
        myList.add(100);
        myList.add(0);
        expect(myList.get(0)).to.equal(0);
        expect(myList.get(2)).to.equal(100);
    });
    it('test error',function (){
        myList.add(1);
        expect(()=>myList.get(-1)).to.throw(Error)

    })
    it('test error',function (){
        myList.add(1);
        expect(()=>myList.get(5)).to.throw(Error)

    })
    it('test error',function (){
        expect(()=>myList.get(0)).to.throw(Error)

    })

})