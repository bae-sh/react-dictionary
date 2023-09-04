import React from 'react';

import { IDictionary } from '../type';

interface InnerComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: string | null;
  dictionary: IDictionary[];
  clickedWord: string;
  isActivate?: boolean;
}

function InnerComponent({
  children,
  dictionary,
  clickedWord,
  isActivate = false,
  onClick,
}: InnerComponentProps) {
  if (!children) return null;
  if (!isActivate) return <>{children}</>;

  const keyArr = dictionary.map((item: IDictionary) => item.word);
  let highlightedContent = children;

  keyArr.forEach((word: string) => {
    highlightedContent = highlightedContent.replace(word, match =>
      clickedWord === word
        ? `<span class="highlight active">${match}</span>`
        : `<span class="highlight">${match}</span>`,
    );
  });
  return <div dangerouslySetInnerHTML={{ __html: highlightedContent }} onClick={onClick} />;
}

export default InnerComponent;
