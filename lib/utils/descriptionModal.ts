import { BookIcon, LineIcon } from '../icons';
import { IDictionary } from '../type';
import hasJongSeong from './hasJongSeong';

interface IProps {
  index: number;
  dictionary: IDictionary[];
  match: string;
}
function descriptionModal({ index, dictionary, match }: IProps) {
  const title = `${match}${hasJongSeong(match) ? '이' : '가'} 뭔가요?`;

  return `<div class='wrapper'>
            <span class="highlight active">${match}</span>
            
            <div class="description">
              <div class="title">
                <div>
                  ${BookIcon}
                  <span>${title}</span>
                </div>
                <button class="close">이해했어요!</button>
              </div>
              ${LineIcon}
              ${
                dictionary[index].imgUrl
                  ? `<img src=${dictionary[index].imgUrl} alt="image" width="337px" height="145px" />`
                  : ''
              }
              <p class="content">${dictionary[index].description}</p>
            </div>
          </div>`;
}

export default descriptionModal;
