function hasJongSeong(hangeul: string) {
  const unicode = hangeul.charCodeAt(hangeul.length - 1);

  const hangeulStart = 0xac00;
  const hangeulEnd = 0xd7a3;

  if (unicode < hangeulStart || unicode > hangeulEnd) {
    return false;
  }

  return (unicode - hangeulStart) % 28 > 0;
}

export default hasJongSeong;
