'use strict';

const fs = require('fs');
const toCapitalize = require('../helper.js').toCapitalize;
const toNotCapitalize = require('../helper.js').toNotCapitalize;
const logger = require('../helper.js').logger;
const reducerTemplate = require('../templates/reducerTemplate.js');
const actionsTemplate = require('../templates/actionsTemplate.js');
const actionsConstantsTemplate = require('../templates/actionsConstantsTemplate.js');
const functionalTemplate = require('../templates/functionalTemplate');
const componentTemplate = require('../templates/componentTemplate.js');

/**
 * @param  {String} name
 */
module.exports = function (name, options) {
    const capitalizedName = toCapitalize(name);
    const notCaptializedName = toNotCapitalize(name);

    if (options.view) {
        fs.writeFileSync(`${capitalizedName}.tsx`, componentTemplate(name), 'utf8');
    }

    if (options.functional) {
        fs.writeFileSync(`${notCaptializedName}.ts`, functionalTemplate(), 'utf8');
    }

    fs.writeFileSync(`${notCaptializedName}Reducer.ts`, reducerTemplate(name), 'utf8');
    fs.writeFileSync(`${notCaptializedName}Actions.ts`, actionsTemplate(name), 'utf8');
    fs.writeFileSync(`${notCaptializedName}ActionsConstants.ts`, actionsConstantsTemplate(name), 'utf8');

    // Success message
    logger('success', `Module <${name}> generated successfuly.`);
}