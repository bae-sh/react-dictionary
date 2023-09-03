interface HighlightedWordProps {
  word: string;
  isActivate: boolean;
  children: string;
}
function HighlightedWord({ isActivate, children }: HighlightedWordProps) {
  return <div className={`highlight ${isActivate ? 'active' : ''}`}>{children}</div>;
}

export default HighlightedWord;
