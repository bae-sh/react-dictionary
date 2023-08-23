import { IDictionary } from '../type';
import descriptionModal from './descriptionModal';

interface IProps {
  children: string | null;
  dictionary: IDictionary[];
  clickedWord: string;
}
function replaceHighlitingWord({ children, dictionary, clickedWord }: IProps) {
  if (!children) return children;
  const keyArr = dictionary.map((item: IDictionary) => item.word);
  let highlightedContent = children;

  keyArr.forEach((word: string, index: number) => {
    highlightedContent = highlightedContent.replace(word, match =>
      clickedWord === word
        ? `${descriptionModal({ index, dictionary, match })}`
        : `<span class="highlight">${match}</span>`,
    );
  });
  return highlightedContent;
}

export default replaceHighlitingWord;
