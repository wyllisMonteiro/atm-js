const reducer = (accumulator, currentValue) => accumulator + currentValue;

export function atm(value: number) {
  const moneyCut = [500, 200, 100, 50, 20, 10];

  if (value > moneyCut.reduce(reducer)) {
    return "Not enough money";
  }

  let moneyCutState = [0, 0, 0, 0, 0, 0];

  let counter = 0;
  while (counter < moneyCut.length) {
    if (value >= moneyCut[counter]) {
      const remainder = value % moneyCut[counter];
      const quotient = (value - remainder) / moneyCut[counter];
      moneyCutState[counter] = quotient;
    }
    counter++;
  }

  return moneyCutState;
}
