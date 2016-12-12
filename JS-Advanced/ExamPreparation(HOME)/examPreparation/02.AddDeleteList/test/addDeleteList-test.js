/**
 * Created by MARK-Max on 8.11.2016 г..
 */
let list = require('../addDeleteList').list;
let expect = require('chai').expect;

describe('Test addDelete Itmes', function () {
    it('add,delete,toString',function(){
        expect(list.toString()).to.equal('')
        list.add('pesho');
        expect(list.toString()).equal('pesho')
        list.add(5);
        expect(list.delete(1)).to.equal(5);
        list.add(3.14)
        expect(list.toString()).equal('pesho, 3.14')
        expect(list.delete(-1)).to.equal(undefined);
        expect(list.delete(3.14)).to.equal(undefined);
        expect(list.delete(4)).to.equal(undefined);
        expect(list.delete('pesho')).to.equal(undefined);
    })
})