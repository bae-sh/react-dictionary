import React from 'react';
import { IDictionary } from '../type';
interface InnerComponentProps extends React.HTMLAttributes<HTMLDivElement> {
    children: string | null;
    dictionary: IDictionary[];
    clickedWord: string;
    isActivate?: boolean;
}
declare function InnerComponent({ children, dictionary, clickedWord, isActivate, onClick, }: InnerComponentProps): React.JSX.Element | null;
export default InnerComponent;
