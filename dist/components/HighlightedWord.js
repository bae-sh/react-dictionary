import React from 'react';
function HighlightedWord({ isActivate, children }) {
    return React.createElement("div", { className: `highlight ${isActivate ? 'active' : ''}` }, children);
}
export default HighlightedWord;
