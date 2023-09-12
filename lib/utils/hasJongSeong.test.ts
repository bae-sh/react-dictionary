import { describe, expect, test } from '@jest/globals';
import hasJongSeong from './hasJongSeong';

describe('종성여부 테스팅', () => {
  test('트림은 종성이 true', () => {
    expect(hasJongSeong('트림')).toBeTruthy();
  });
  test('컴파일러는 종성이 false', () => {
    expect(hasJongSeong('컴파일러')).toBeFalsy();
  });
  test('*은 종성이 false', () => {
    expect(hasJongSeong('*')).toBeFalsy();
  });
  test('apple는 종성이 false', () => {
    expect(hasJongSeong('apple')).toBeFalsy();
  });
  test('#은 종성이 false', () => {
    expect(hasJongSeong('#')).toBeFalsy();
  });
  test('ㅏ는 종성이 false', () => {
    expect(hasJongSeong('ㅏ')).toBeFalsy();
  });
  test('1는 종성이 false', () => {
    expect(hasJongSeong('1')).toBeFalsy();
  });
});
