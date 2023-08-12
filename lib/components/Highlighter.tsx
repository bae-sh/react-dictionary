import React, { useState } from 'react';
import replaceHighlitingWord from '../utils/replaceHighlitingWord';
import { useEffect } from 'react';
import { IDictionary } from '../type';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  dictionary: IDictionary[];
  isActivate?: boolean;
  children?: string;
}
function Highlighter({ dictionary, children = '', isActivate = false }: IProps) {
  const [clickedWord, setClickedWord] = useState('');

  const onClickHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = event.target as HTMLDivElement;

    if (target.tagName === 'SPAN') {
      const nextWord = clickedWord === target.innerHTML ? '' : target.innerHTML;
      setClickedWord(nextWord);
    }
  };
  const closeDictionary = () => {
    setClickedWord('');
  };

  const innerHTML = isActivate
    ? replaceHighlitingWord({
        children,
        dictionary,
        clickedWord,
      })
    : children;

  useEffect(() => {
    if (!document.querySelector('.close')) return;
    document.querySelector('.close')?.addEventListener('click', closeDictionary);
  }, [clickedWord]);

  return <div dangerouslySetInnerHTML={{ __html: innerHTML }} onClick={onClickHandler} />;
}

export default Highlighter;
