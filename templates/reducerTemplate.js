const toCapitalize = require('../helper.js').toCapitalize;
const toNotCapitalize = require('../helper.js').toNotCapitalize;
/**
 * @param  {String} name
 */

 module.exports = function (name) {
   const capitalizedName = toCapitalize(name);
   const notCaptializedName = toNotCapitalize(name);
   return `
    import { createReducer } from '__common/utils/helpers';
    import { ${capitalizedName}ActionTypes } from 'actionsConstants';

    export const ${notCaptializedName}State = {
    };

    export default {
      ${notCaptializedName}: createReducer(${notCaptializedName}State, {
        [${capitalizedName}ActionTypes.NEW_ACTION]() {
          // TODO
        },
      }),
    };
   `;
 }