const sel = require('../../data/selectors.json');
const data = require('../../data/testData.json');
const exp = require('../../data/expected.json');
const inputValues4 = require('../../helpers/inputValues4');

describe('Inputs', function () {
    it('TC - 022 input field name shows an error when put 71 symbols', function () {
        browser.url('');
        const symbolLimit = $(sel.name).setValue('Mental wounds not healing Life\'s a bitter shame I\'m goin\' off the rails');
        $(sel.name).getValue();
        const showVal = $('.ant-form-item-explain').isDisplayed();
        browser.pause(1000);
        expect(showVal).toEqual(true);
    });
    it('TC - 021 input field name does not accept spaces', function () {
        browser.url('');
        const symbolLimit = $(sel.name).setValue('          ');
        $(sel.name).getValue();
        const showVal = $('.ant-form-item-explain').isDisplayed();
        browser.pause(1000);
        expect(showVal).toEqual(true);
    });
    it('TC-023 skip gender and create button is not clickable', function () {
        browser.url('');
        const inputName = $(sel.name).setValue(data.name2);
        const inputAge = $(sel.age).setValue(data.age2);
        const click = $(sel.storyClick).click();
        const inputStory = $$(sel.storyType)[data.storyType2].click();
        const create = $(sel.create).isClickable();
        browser.pause(2000);
        expect(create).toEqual(false);
    });
    it('TC-024 skip age and button create is not clickable', function () {
        browser.url('');
        const inputName = $(sel.name).setValue(data.name);
        const inputGender = $(sel.gender)[data.gender.he].click();
        const click = $(sel.storyClick).click();
        const inputStory = $$(sel.storyType)[data.storyType].click();
        const create = $(sel.create).isEnabled();
        expect(create).toEqual(false);
    });
    it('TC - 050 input field age does not accepts letters', function () {
        browser.url('');
        const letters = $(sel.age).setValue('12345qwerty');
        const value = $(sel.age).getValue();
        const showEr = $('.ant-form-item-explain').isDisplayed();
        browser.pause(1000);
        expect(showEr).toEqual(true);
    });
    it('TC - 051 input field age does not accepts more than 13 numbers', function () {
        browser.url('');
        const letters = $(sel.age).setValue('1234567891234');
        const value = $(sel.age).getValue();
        const showEr = $('.ant-form-item-explain').isDisplayed();
        browser.pause(1000);
        expect(showEr).toEqual(true);
    });
    it('TC-084 Create button is not clickable after 1 input field are filled in', function () {
        browser.url('');
        const inputName = $(sel.name).setValue(data.name);
        const create = $(sel.create).isEnabled();
        browser.pause(1000);
        expect(create).toEqual(false);
    });
    it('TC-085 Create button is not clickable after 1 amd 2 are filled in', function () {
        browser.url('');
        const inputName = $(sel.name).setValue(data.name);
        const inputGender = $(sel.genderHe)[1].click();
        const create = $(sel.create).isEnabled();
        browser.pause(1000);
        expect(create).toEqual(false);
    });
    it('TC-086 Create button is clickable after 1-3 are filled in', function () {
        browser.url('');
        const inputName = $(sel.name).setValue(data.name);
        const inputGender = $(sel.genderHe)[0].click();
        const inputAge = $(sel.age).setValue(data.age2);
        const create = $(sel.create).isEnabled();
        browser.pause(1000);
        expect(create).toEqual(false);
    });
    it('TC - 042 input field age does not accepts munber 0', function () {
        browser.url('');
        const letters = $(sel.age).setValue('0');
        const value = $(sel.age).getValue();
        browser.pause(1000);
        expect(value).toEqual(false);
    });
    it('TC - 043 input field age does not accepts first munber 0', function () {
        browser.url('');
        const letters = $(sel.age).setValue('012345');
        const value = $(sel.age).getValue();
        browser.pause(1000);
        expect(value).toEqual(false);
    });
    it('TC - 044 input field age does not accepts negative numbers', function () {
        browser.url('');
        const negNumb = $(sel.age).setValue('-45682');
        const value = $(sel.age).getValue();
        const showEr = $('.ant-form-item-explain').isDisplayed();
        browser.pause(1000);
        expect(showEr).toEqual(true);
    });
    it('TC - 045 input field age does not accepts symbols', function () {
        browser.url('');
        const letters = $(sel.age).setValue('~!@#$%^&*()_+{}[]\\|;\':",./<>?-;');
        const value = $(sel.age).getValue();
        browser.pause(1000);
        expect(value).toEqual(false);
    });
    it('TC - 047 input field age does not accepts combination integer numbers with space', function () {
        browser.url('');
        const letters = $(sel.age).setValue('0 1 2 3 4 5');
        const value = $(sel.age).getValue();
        browser.pause(1000);
        expect(value).toEqual(false);
    });
    it('TC - 048 input field age does not accepts decimals', function () {
        browser.url('');
        const letters = $(sel.age).setValue('134.00');
        const value = $(sel.age).getValue();
        browser.pause(1000);
        expect(value).toEqual(false);
    });
});