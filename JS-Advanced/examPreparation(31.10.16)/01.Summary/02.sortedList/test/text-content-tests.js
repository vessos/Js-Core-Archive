/**
 * Created by MARK-Max on 31.10.2016 г..
 */
let SortedList = require('../sorted-list').SortedList;
let expect = require('chai').expect;

describe('sortedList',function(){
    let myList={};
    beforeEach(function(){
        myList=new SortedList();
    });
    it("should have a construkctor",function () {
        expect(typeof SortedList).to.be.equal('function');

        expect(SortedList.prototype.hasOwnProperty('add')).to.be.equal(true);
        expect(SortedList.prototype.hasOwnProperty('remove')).to.be.equal(true);
        expect(SortedList.prototype.hasOwnProperty('get')).to.be.equal(true);
        expect(SortedList.prototype.hasOwnProperty('size')).to.be.equal(true);
})
it("should have a construkctor",function () {
    myList.add(5)
    expect(myList.get(0)).to.be.equal(5);
})
});