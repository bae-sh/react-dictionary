import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import tslib from 'tslib';

export default [
  {
    input: 'lib/index.ts',
    output: [
      {
        dir: './dist',
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [
      typescript({
        tslib,
      }),
      postcss({
        minimize: true, // CSS 파일을 압축합니다 (선택 사항).
        sourceMap: true, // 소스 맵을 생성합니다 (선택 사항).
      }),
    ],
  },
  {
    input: 'lib/index.ts',
    output: [
      {
        dir: './esm',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      typescript({
        outDir: './esm',
        declaration: false,
        tslib,
      }),
      postcss({
        minimize: true, // CSS 파일을 압축합니다 (선택 사항).
        sourceMap: true, // 소스 맵을 생성합니다 (선택 사항).
      }),
    ],
  },
];
