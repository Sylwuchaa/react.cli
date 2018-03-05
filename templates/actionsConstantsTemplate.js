const toCapitalize = require('../helper.js').toCapitalize;
const toNotCapitalize = require('../helper.js').toNotCapitalize;
/**
 * @param  {String} name
 */

 module.exports = function (name) {
   const capitalizedName = toCapitalize(name);
   const notCaptializedName = toNotCapitalize(name);
   return `
   import keyMirror from 'fbjs/lib/keyMirror';

   export const ${capitalizedName}ActionTypes = keyMirror({
     NEW_ACTION: undefined,
   });
   
   `;
 }