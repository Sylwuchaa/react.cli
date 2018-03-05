/**
 * @param  {String} name
 */
module.exports = function (name) {
    const capitalizedName = toCapitalize(name);
    return 
    `
    import React from 'react';

    class ${capitalizedName} extends React.Component<s> {
    
      render() {
        return (
            <div />
        );
      }
    }
    `;
}