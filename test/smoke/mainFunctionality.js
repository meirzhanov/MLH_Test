const sel = require ('../../data/selectors.json');
const data = require('../../data/testData.json');
const inputValues4 = require ('../../helpers/inputValues4.js')

describe('Checking the main functionality', function () {

    describe('Happy path', function () {

        it('TC-021 Create button is clickable after 1-4 are filled with function', function () {
            browser.url('');
            inputValues4(data.name, data.gender.he, data.age, data.storyType);
            const create = $(sel.create).isEnabled();
            expect(create).toEqual(true);
        });
    });

    describe('Other path', function () {

        it('TC-021 Create button is clickable after 1-4 are filled with function', function () {
            browser.url('');
            inputValues4(data.name, data.gender.he, data.age, data.storyType);
            $(sel.create).click();
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);

        });
    });

});