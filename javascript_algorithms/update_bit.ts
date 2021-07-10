export function updateBit(num: number, bitPosition: number, bitValue: 0 | 1) {
  const bitValueNormalized = bitValue ? 1 : 0;

  const clearMask = ~(1 << bitPosition);

  return (num & clearMask) | (bitValueNormalized << bitPosition);
}
