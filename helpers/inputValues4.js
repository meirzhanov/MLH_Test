const sel = require('../data/selectors.json');

function inputValue4 (name, gender, age, storyType, picture = ''){
    $(sel.name).setValue(name);
    $$(sel.gender)[gender].click();
    $(sel.age).setValue(age);
    $(sel.story).click();
    $$(sel.storyType)[storyType].click();

}

module.exports = inputValue4;