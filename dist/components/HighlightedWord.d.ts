import React from 'react';
interface HighlightedWordProps {
    word: string;
    isActivate: boolean;
    children: string;
}
declare function HighlightedWord({ isActivate, children }: HighlightedWordProps): React.JSX.Element;
export default HighlightedWord;
