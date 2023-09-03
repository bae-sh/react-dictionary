import React, { useState } from 'react';
import { useEffect } from 'react';
import { IDictionary } from '../type';
import InnerComponent from './InnerComponent';
import DescriptionModal from './DescriptionModal';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  dictionary: IDictionary[];
  isActivate?: boolean;
  children?: string | null;
  language?: 'en' | 'ko';
}

function Highlighter({ dictionary, children = '', isActivate = false, language = 'en' }: IProps) {
  const [clickedWord, setClickedWord] = useState('');
  const onClickHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = event.target as HTMLDivElement;
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
    if (!document.querySelector('.close')) return;
    document.querySelector('.close')?.addEventListener('click', closeDictionary);
  }, [clickedWord]);
  return (
    <>
      <InnerComponent
        onClick={onClickHandler}
        dictionary={dictionary}
        clickedWord={clickedWord}
        isActivate={isActivate}
      >
        {children}
      </InnerComponent>
      <DescriptionModal clickedWord={clickedWord} dictionary={dictionary} language={language} />
    </>
  );
}

export default Highlighter;
