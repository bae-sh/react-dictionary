import React, { useState } from 'react';
import { useEffect } from 'react';
import InnerComponent from './InnerComponent';
import DescriptionModal from './DescriptionModal';
function Highlighter({ dictionary, children = '', isActivate = false, language = 'en' }) {
    const [clickedWord, setClickedWord] = useState('');
    const onClickHandler = (event) => {
        const target = event.target;
        event.stopPropagation();
        if (target.className.includes('highlight')) {
            const nextWord = clickedWord === target.innerHTML ? '' : target.innerHTML;
            setClickedWord(nextWord);
        }
    };
    const closeDictionary = () => {
        setClickedWord('');
    };
    useEffect(() => {
        var _a;
        if (!document.querySelector('.close'))
            return;
        (_a = document.querySelector('.close')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', closeDictionary);
    }, [clickedWord]);
    return (React.createElement(React.Fragment, null,
        React.createElement(InnerComponent, { onClick: onClickHandler, dictionary: dictionary, clickedWord: clickedWord, isActivate: isActivate }, children),
        React.createElement(DescriptionModal, { clickedWord: clickedWord, dictionary: dictionary, language: language })));
}
export default Highlighter;
