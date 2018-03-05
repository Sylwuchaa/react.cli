'use strict';

const fs = require('fs');
const toCapitalize = require('../helper.js').toCapitalize;
const logger = require('../helper.js').logger;
const removeDirectory = require('../helper.js').removeDirectory;
const componentTemplate = require('../templates/componentTemplate.js')
const componentStatelessTemplate = require('../templates/componentStatelessTemplate.js')

/**
 * @param  {String} name
 * @param  {Boolan} stateless=false
 */
module.exports = function (name, stateless = false) {
    name = toCapitalize(name);

    fs.writeFileSync(`${name}.tsx`, (stateless) ? componentStatelessTemplate(name) : componentTemplate(name), 'utf8');
    // Success message
    logger('success', `Component <${name}> generated successfuly.`);
}