import { BookIcon, LineIcon } from '../icons';
import { IDictionary } from '../type';

interface IProps {
  index: number;
  dictionary: IDictionary[];
  match: string;
}
function descriptionModal({ index, dictionary, match }: IProps) {
  return `<div class='wrapper'>
            <span class="highlight active">${match}</span>
            
            <div class="description">
              <div class="title">
                <div>
                  ${BookIcon}
                  <span>${match}이 뭔가요?</span>
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
