const reducer = (accumulator, currentValue) => accumulator + currentValue;

export function atm(value: number) {
  const moneyCut = [500, 200, 100, 50, 20, 10];

  if (value > moneyCut.reduce(reducer)) {
    return "Not enough money";
  }

  let globalRemainder = value;

  interface Accumulator {
    globalRemainder: number;
    result: Array<number>;
  }

  return moneyCut.reduce((accumulateur: Accumulator, moneyCut) => {
        if (accumulateur.globalRemainder >= moneyCut) {
          const remainder = globalRemainder % moneyCut;
          const result = (globalRemainder - remainder) / moneyCut
          return { globalRemainder: remainder, result: [...accumulateur.result, result] }
        }
        return { globalRemainder: accumulateur.globalRemainder, result: [...accumulateur.result, 0] }
  }, { globalRemainder: value, result: [] }).result;
}
