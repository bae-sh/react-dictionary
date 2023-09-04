import React from 'react';
import { IDictionary } from '../type';
interface IProps {
    dictionary: IDictionary[];
    clickedWord: string;
    language: 'en' | 'ko';
}
declare function DescriptionModal({ dictionary, clickedWord, language }: IProps): React.JSX.Element | null;
export default DescriptionModal;
