/**
 * Created by MARK-Max on 26.10.2016 г..
 */
let sharedObject = require('../sharedObject').sharedObject;
let expect = require('chai').expect;
let jsdom=require('jsdom-global')();
let $ = require('jquery');

document.body.innerHTML=`<div id="wrapper">
    <input type="text" id="name">
    <input type="text" id="income">
</div>`;

describe("sharedObj",function(){
    it("name property ,should start az null",function(){
        expect(sharedObject.name).to.equal(null,"Name did not start whith value null");
    });
    it("income property ,should start az null",function(){
        expect(sharedObject.income).to.equal(null,"Name did not start whith value null");
    });
    describe("changeName",function(){
        it("with invalid parameters ",function(){
            sharedObject.changeName('');
            expect(sharedObject.name).to.equal(null,"Name changed incorrectly");
        });
        it("with invalid parameters and preexisting value",function(){
            sharedObject.name="pesho";
            sharedObject.changeName('');
            expect(sharedObject.name).to.equal("pesho","Name changed incorrectly");
        });
        it("with valid parameters ",function(){
            let nameTextbox = $('#name');
            nameTextbox.val("Ivan");
            sharedObject.changeName('');
            expect(nameTextbox.val()).to.equal("Ivan","Name did't change");
        });
        it("with invalid parameters and preexisting value",function(){
            sharedObject.changeName('Joro');
            expect(sharedObject.name).to.equal('Joro',"Name changed incorrectly");
        });
        it("with valid parameters ",function(){
            sharedObject.changeName("Stamat");
            let nameTextbox = $('#name');
            expect(nameTextbox.val()).to.equal("Stamat","Name did't change");
        });
    });
    describe("changeIncome",function(){
        it("with invalid parameters ",function(){
            sharedObject.income = 130;
            sharedObject.changeIncome({name:'pesho'});
            expect(sharedObject.income).to.equal(130,"Name changed incorrectly");
        });
        it("with a floating point number",function(){
            sharedObject.income = 13;
            sharedObject.changeIncome(245.24);
            expect(sharedObject.income).to.equal(13,"Name changed incorrectly");
        });
        it("with a negative integer",function(){
            sharedObject.income = 13;
            sharedObject.changeIncome(-10);
            expect(sharedObject.income).to.equal(13,"Name changed incorrectly");
        });
        it("with a zero",function(){
            sharedObject.income = 13;
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.equal(13,"Name changed incorrectly");
        });
        it("with a valide integer",function(){
            sharedObject.changeIncome(55);
            expect(sharedObject.income).to.equal(55,"income did not change");
        });


        it("with invalid parameters ",function(){
            let incomeTextbox = $('#income');
            incomeTextbox.val('5')
            sharedObject.changeIncome({name:'pesho'});
            expect(incomeTextbox.val()).to.equal('5',"Name changed incorrectly");
        });
        it("with a floating point number",function(){
            let incomeTextbox = $('#income');
            incomeTextbox.val('5')
            sharedObject.changeIncome(25.55);
            expect(incomeTextbox.val()).to.equal('5',"Name changed incorrectly");
        });
        it("with a negative integer",function(){
            let incomeTextbox = $('#income');
            incomeTextbox.val('5')
            sharedObject.changeIncome(-15);
            expect(incomeTextbox.val()).to.equal('5',"Name changed incorrectly");
        });
        it("with a zero",function(){
            let incomeTextbox = $('#income');
            incomeTextbox.val('5')
            sharedObject.changeIncome(0);
            expect(incomeTextbox.val()).to.equal('5',"Name changed incorrectly");
        });
        it("with a valide integer",function(){
            sharedObject.changeIncome(55);
            let incomeTextbox = $('#income');
            expect(incomeTextbox.val()).to.equal('55',"income did not change");
        });
    });
    describe("updeteName",function(){
        it('with invalid parameter should not change name property',function(){
            sharedObject.name="test";
            let nameTextbox = $('#name');
            nameTextbox.val("");
            sharedObject.updateName();
            expect(sharedObject.name).to.equal('test');
        });
        it('with ivalid name should not change name property',function(){
            let nameTextbox = $('#name');
            nameTextbox.val("testing");
            sharedObject.updateName();
            expect(sharedObject.name).to.equal('testing');
        })
    });
    describe("updateIncome",function(){
        it('with invalid parameter should not change name property',function(){
            sharedObject.income=55;
            let incomeTextbox = $('#income');
            incomeTextbox.val("pesho");
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(55);
        });
        it('with floating point should not change name property',function(){
            sharedObject.income=55;
            let incomeTextbox = $('#income');
            incomeTextbox.val(23.17);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(55);
        });
        it('with negative number should not change name property',function(){
            sharedObject.income=55;
            let incomeTextbox = $('#income');
            incomeTextbox.val(-20);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(55);
        });
        it('with empty string should not change name property',function(){
            sharedObject.income=55;
            let incomeTextbox = $('#income');
            incomeTextbox.val("");
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(55);
        });
        it('with valid number should not change name property',function(){
            let incomeTextbox = $('#income');
            incomeTextbox.val(30);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(30);
        });
    });
});