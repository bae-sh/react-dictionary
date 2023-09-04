# `react-dictionary`

This package facilitates the parsing and subsequent highlighting of words found within a designated dictionary. Upon clicking a highlighted word, an accompanying image is presented alongside a corresponding description.

<p>
  <img width='400' src="https://github.com/bae-sh/react-dictionary/assets/37887690/52a8bfd2-9f11-4ee4-a5c0-2bff85301b40" alt="react-dictionary" />
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
    word: 'hello',
    description:
      '"Hello" is a common greeting in the English language. Its a way to say "hi" or to initiate a friendly conversation with someone. When you say "hello" to someone, you are typically expressing a friendly and polite acknowledgment of their presence or initiating a conversation with them.',
    imgUrl:
      'https://img.freepik.com/free-vector/v813-aew-05_53876-166405.jpg?w=2000&t=st=1693808537~exp=1693809137~hmac=5da4c630c2d9098fc7c4d8df88fb7fa1e83e56555e441e8708e10772cf588396',
  },
  {
    word: 'foo',
    description:
      'In computer programming and related fields, "foo" is often used as a placeholder or a generic name when referring to variables, functions, or code snippets. It is a part of a set of placeholder names that also includes "bar" and "baz."',
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
  children?: string | null;
  language?: 'en' | 'ko';
};
```

## Design Credits

**Designed by:**

- 박제민 (jemin9852@gmail.com)
- 조아연 (ayeonee26@gmail.com)
