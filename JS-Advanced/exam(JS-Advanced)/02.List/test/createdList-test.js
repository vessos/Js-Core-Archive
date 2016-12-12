/**
 * Created by MARK-Max on 13.11.2016 г..
 */
let createList = require("../createdList").createList;
let expect = require('chai').expect;

describe("testing",function(){
    let list;
    beforeEach(function(){
        list = createList();
    });
    it('test to be function',function(){
        expect(typeof createList).to.be.equal('function');

        expect(createList.prototype.hasOwnProperty('add')).to.be.equal(true);
        expect(createList.prototype.hasOwnProperty('shiftLeft')).to.be.equal(true);
        expect(createList.prototype.hasOwnProperty('shiftRight')).to.be.equal(true);
        expect(createList.prototype.hasOwnProperty('swap')).to.be.equal(true);
        expect(createList.prototype.hasOwnProperty('toString')).to.be.equal(true);
    })
    it('test to be function',function(){
        expect(list.toString()).to.be.equal('');
    })
    it('test add',function(){
        list.add(5);
        list.add("pesho");
        list.add(4);
        list.add({gosho:5})
        expect(list.toString()).to.be.equal('5, pesho, 4, [object Object]')
    })
    it('test shiftLeft',function(){
        list.add(-5);
        list.add("pesho");
        list.add(4);
        list.shiftLeft();
        expect(list.toString()).to.equal("pesho, 4, -5")
    });
    it('test shiftleft,0',function(){
        list.shiftLeft();
        expect(list.toString()).to.equal('')
    })
    it('test shiftRight,0',function(){
        list.shiftRight();
        expect(list.toString()).to.equal('')
    })
    it('test shiftleft,0',function(){
        expect(list.shiftLeft()).to.equal(undefined)
    })
    it('test shiftRight,0',function(){
        expect(list.shiftRight()).to.equal(undefined)
    })
    it('test shiftRight,0',function(){
        list.add('pesho')
        expect(list.shiftRight()).to.equal(undefined)
    })
    it('test shiftRight,0',function(){
        expect(list.add('')).to.equal(undefined)
    })

    it('test shiftRight',function(){
        list.add(5);
        list.add("pesho");
        list.add(4);
        list.add(5);
        list.shiftRight();
        expect(list.toString()).to.equal("5, 5, pesho, 4")
    })
    it('test swap',function(){
        list.add(5);
        list.add("pesho");
        list.add(4);
        list.add(10);
        list.swap(0,3);
        expect(list.toString()).to.equal("10, pesho, 4, 5")
    })
    it('test swap wrong',function(){
        list.add(5);
        list.add("pesho");
        list.add(4);
        list.add(5);
        list.swap(1,1);
        expect(list.toString()).to.equal("5, pesho, 4, 5")
    })

    it('test swap wrong',function(){
        list.add(5);
        list.add("pesho");
        list.add(4);
        list.add(5);
        list.swap('pesho',1);
        expect(list.toString()).to.equal("5, pesho, 4, 5")
    })
    it('test swap wrong',function(){
        list.add(5);
        list.add("pesho");
        list.add(4);
        list.add(5);
        list.swap(5,0);
        expect(list.toString()).to.equal("5, pesho, 4, 5")
    })
    it('test swap wrong',function(){
        list.add(5);
        list.add("pesho");
        list.add(4);
        list.add(5);
        list.swap(-1,3);
        expect(list.toString()).to.equal("5, pesho, 4, 5")
    })
    it('test swap return false',function(){
        list.add(5);
        list.add("pesho");
        list.add(4);
        list.add(5);
        expect( list.swap('pesho',1)).to.equal(false)
    })
    it('test swap wrong',function(){
        list.add(5);
        list.add("pesho");
        list.add(4);
        list.add(5);
        list.swap(0,5);
        expect(list.toString()).to.equal("5, pesho, 4, 5")
    })
    it('test swap wrong',function(){
        list.add(5);
        list.add("pesho");
        list.add(4);
        list.add(5);
        list.swap(3,-1);
        expect(list.toString()).to.equal("5, pesho, 4, 5")
    })
    it('test swap return false',function(){
        list.add(5);
        list.add("pesho");
        list.add(4);
        list.add(5);
        expect( list.swap(1,'pesho')).to.equal(false)
    })
    it('test swap return false',function(){
        list.add(5);
        list.add("pesho");
        list.add(4);
        list.add(5);
        expect( list.swap(0,5)).to.equal(false)
    })
    it('test swap return false',function(){
        list.add(5);
        list.add("pesho");
        list.add(4);
        list.add(5);
        expect( list.swap(1,-1)).to.equal(false)
    })
    it('test swap return false',function(){
        list.add(5);
        list.add("pesho");
        list.add(4);
        list.add(5);
        expect( list.swap('pesho', 1)).to.equal(false)
    })
    it('test swap return false',function(){
        list.add(5);
        list.add("pesho");
        list.add(4);
        list.add(5);
        expect( list.swap(5,0)).to.equal(false)
    })
    it('test swap return false',function(){
        list.add(5);
        list.add("pesho");
        list.add(4);
        list.add(5);
        expect( list.swap(-1,1)).to.equal(false)
    })
    it('test swap return false',function(){
        list.add(5);
        list.add("pesho");
        list.add(4);
        list.add(5);
        expect( list.swap(1,1)).to.equal(false)
    })
    it('test swap return true',function(){
        list.add(5);
        list.add("pesho");
        list.add(4);
        list.add(5);
        expect( list.swap(0,3)).to.equal(true)
    })
    it('test swap return true',function(){
        list.add(5);
        list.add("pesho");
        list.add(4);
        list.add(5);
        expect( list.swap(0,1)).to.equal(true)
    })
})