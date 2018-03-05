const toCapitalize = require('../helper.js').toCapitalize;
const toNotCapitalize = require('../helper.js').toNotCapitalize;

/**
 * @param  {String} name
 */
module.exports = function (name) {
    const capitalizedName = toCapitalize(name);
    const notCaptializedName = toNotCapitalize(name);

    return 
    `
    import React from 'react';
    import { connect } from 'react-redux';
    
    type ${notCaptializedName}Props = {
      dispatch: Function,
    };
    
    class ${capitalizedName} extends React.Component<${notCaptializedName}Props> {
    
      render() {
        return (
            </div>
        );
      }
    }
    
    function mapStateToProps(appState: appState) {
      return {
          smth: state,
      };
    }
    
    export default connect(mapStateToProps)(${capitalizedName});
    
    `;
}