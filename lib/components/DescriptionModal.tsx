import React from 'react';

import BookIcon from '../icons/BookIcon';
import LineIcon from '../icons/LineIcon';
import { IDictionary } from '../type';
import hasJongSeong from '../utils/hasJongSeong';

interface IProps {
  dictionary: IDictionary[];
  clickedWord: string;
  language: 'en' | 'ko';
}
const buttonName = {
  ko: '이해했어요 !',
  en: 'Got it !',
};
function DescriptionModal({ dictionary, clickedWord, language }: IProps) {
  if (clickedWord === '') return null;

  const { word, description, imgUrl } = dictionary.filter(
    (item: IDictionary) => item.word === clickedWord,
  )[0];

  const title = getTitle({ word, language });

  return (
    <div className="wrapper">
      <div className="description">
        <div className="title">
          <div>
            <BookIcon />
            <span>{title}</span>
          </div>
          <button className="close">{buttonName[language]}</button>
        </div>
        <LineIcon />
        {imgUrl && <img src={imgUrl} alt="image" className="description-img" />}

        <p className="content">{description}</p>
      </div>
    </div>
  );
}

function getTitle({ word, language }: { word: string; language: 'en' | 'ko' }) {
  if (language === 'ko') {
    return `${word}${hasJongSeong(word) ? '이' : '가'} 뭔가요?`;
  }
  return `What is ${word}?`;
}

export default DescriptionModal;
