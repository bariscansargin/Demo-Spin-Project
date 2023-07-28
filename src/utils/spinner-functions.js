import {shuffleArray} from"./array-functions"

export function setList(prizes) {
  const prizeList = prizes.reduce((list, prize) => {
    list = [...list, [prize.title, prize.color]];
    return list;
  }, []);
  return prizeList;
}

export function drawPrize(prizes) {
  const totalPossibility = prizes.reduce((total, prize) => {
    total += prize.possibility;
    return total;
  }, 0);
  const randomNumber = Math.random();
  let accumulatedPossibility = 0;
  const shuffledArray = shuffleArray(prizes)
  for (const prize of shuffledArray) {
    accumulatedPossibility += prize.possibility / totalPossibility;
    if (randomNumber < accumulatedPossibility) {
      return prize;
    }
  }
}

