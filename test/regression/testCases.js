const sel = require ('../../data/selectors.json');
const data = require('../../data/testData.json');
const inputValues4 = require ('../../helpers/inputValues4.js')

describe('Checking the functionality', function () {

    describe('Story to read. Comedy', function () {

        it('TC-150 Story context corresponds to the type of story chosen', function () {
            browser.url('');
            inputValues4(data.name, data.gender.he, data.age, data.storyType);
            const create = $(sel.create).isEnabled();
            expect(create).toEqual(true);
        });
    });
});