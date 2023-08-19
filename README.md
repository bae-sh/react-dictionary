# `react-dictionary`

This package facilitates the parsing and subsequent highlighting of words found within a designated dictionary. Upon clicking a highlighted word, an accompanying image is presented alongside a corresponding description.

<p>
  <img width='400' src="https://github.com/bae-sh/react-dictionary/assets/37887690/7449bea3-a8bb-4b41-9a0e-7809b199d2d8" alt="react-dictionary" />
</p>

## Installation

You can install react-dictionary using npm:

```bash
$ npm install react-dictionary
```

## Usage

```javascript
// App.tsx
import { Highlighter } from 'react-dictionary';

const dictionary = [
  {
    word: '트림',
    description:
      '트림(trim)이란, 자동차 한 모델 안에서의 등급을 말해요. 자동차 트림에 따라 선택할 수 있는 편의사양과 옵션등이 정해져요.',
  },
  {
    word: '클러스터',
    description:
      '클러스터란, 자동차에 적용된 편의, 안전 시스템의 상태 정보를 확인할 수 있는 장치로, 주행 관련 정보를 상황에 맞게 제공해줘요.',
    imgUrl: '/src/img.png',
  },
];

function App() {
  return (
    <Highlighter dictionary={dictionary} isActivate={true}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui quis quibusdam delectus
      perspiciatis amet 트림 ab obcaecati cum, autem libero. Dolore voluptatum voluptate similique
      officia. Distinctio excepturi클러스터 id vitae inventore quisquam.
    </Highlighter>
  );
}

export default App;
```

### Type

```typescript
type Dictionary = {
  word: string;
  description: string;
  imgUrl?: string | null;
};

type HighlighterProps = {
  dictionary: Dictionary[];
  isActivate: boolean;
  children: React.ReactNode;
};
```

## Design Credits

**Designed by:**

- 박제민 (jemin9852@gmail.com)
- 조아연 (ayeonee26@gmail.com)
