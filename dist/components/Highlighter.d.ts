import React from 'react';
import { IDictionary } from '../type';
interface IProps extends React.HTMLAttributes<HTMLDivElement> {
    dictionary: IDictionary[];
    isActivate?: boolean;
    children?: string | null;
    language?: 'en' | 'ko';
}
declare function Highlighter({ dictionary, children, isActivate, language }: IProps): React.JSX.Element;
export default Highlighter;
