import React from 'react';
function InnerComponent({ children, dictionary, clickedWord, isActivate = false, onClick, }) {
    if (!children)
        return null;
    if (!isActivate)
        return React.createElement(React.Fragment, null, children);
    const keyArr = dictionary.map((item) => item.word);
    let highlightedContent = children;
    keyArr.forEach((word) => {
        highlightedContent = highlightedContent.replace(word, match => clickedWord === word
            ? `<span class="highlight active">${match}</span>`
            : `<span class="highlight">${match}</span>`);
    });
    return React.createElement("div", { dangerouslySetInnerHTML: { __html: highlightedContent }, onClick: onClick });
}
export default InnerComponent;
