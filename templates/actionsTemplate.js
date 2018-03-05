const toCapitalize = require('../helper.js').toCapitalize;
const toNotCapitalize = require('../helper.js').toNotCapitalize;
/**
 * @param  {String} name
 */

 module.exports = function (name) {
   const capitalizedName = toCapitalize(name);
   const notCaptializedName = toNotCapitalize(name);
   return `
import { ${capitalizedName}ActionTypes } from 'actionsConstants';

export function NEW_ACTION() {
    return {
    type: ${capitalizedName}ActionTypes.NEW_ACTION,
    };
}
   `;
 }