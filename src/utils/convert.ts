export const uahConvert = (rate: number | undefined) => {
  if (!rate) return;
  const result = 1 / rate;
  return Math.round(result * 100) / 100;
};
