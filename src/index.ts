const reducer = (accumulator, currentValue) => accumulator + currentValue;

export function atm(value: number) {
  const moneyCut = [500, 200, 100, 50, 20, 10];

  if (value > moneyCut.reduce(reducer)) {
    return "Not enough money";
  }

  interface Accumulator {
    globalRemainder: number;
    result: Array<number>;
  }

  return moneyCut.reduce((accumulateur: Accumulator, moneyCut: number) => {
        if (accumulateur.globalRemainder >= moneyCut) {
          const remainder = accumulateur.globalRemainder % moneyCut;
          const result = (accumulateur.globalRemainder - remainder) / moneyCut
          return { globalRemainder: remainder, result: [...accumulateur.result, result] }
        }
        return { globalRemainder: accumulateur.globalRemainder, result: [...accumulateur.result, 0] }
  }, { globalRemainder: value, result: [] }).result;
}
