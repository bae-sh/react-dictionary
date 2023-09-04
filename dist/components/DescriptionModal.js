import React from 'react';
import BookIcon from '../icons/BookIcon';
import LineIcon from '../icons/LineIcon';
import hasJongSeong from '../utils/hasJongSeong';
const buttonName = {
    ko: '이해했어요 !',
    en: 'Got it !',
};
function DescriptionModal({ dictionary, clickedWord, language }) {
    if (clickedWord === '')
        return null;
    const { word, description, imgUrl } = dictionary.filter((item) => item.word === clickedWord)[0];
    const title = getTitle({ word, language });
    return (React.createElement("div", { className: "wrapper" },
        React.createElement("div", { className: "description" },
            React.createElement("div", { className: "title" },
                React.createElement("div", null,
                    React.createElement(BookIcon, null),
                    React.createElement("span", null, title)),
                React.createElement("button", { className: "close" }, buttonName[language])),
            React.createElement(LineIcon, null),
            imgUrl && React.createElement("img", { src: imgUrl, alt: "image", className: "description-img" }),
            React.createElement("p", { className: "content" }, description))));
}
function getTitle({ word, language }) {
    if (language === 'ko') {
        return `${word}${hasJongSeong(word) ? '이' : '가'} 뭔가요?`;
    }
    return `What is ${word}?`;
}
export default DescriptionModal;
