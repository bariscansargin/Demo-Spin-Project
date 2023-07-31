import { shuffleArray } from "./array-functions";

export function setList(prizes) {
  const prizeList = prizes.reduce((list, prize) => {
    list = [...list, [prize.title, prize.color]];
    return list;
  }, []);
  return prizeList;
}

export function drawPrize(prizes) {
  const totalPossibility = prizes.reduce((total, prize) => {
    return (total += prize.possibility);
  }, 0);

  if (totalPossibility !== 100) {
    console.log("Total Possibility = " + totalPossibility);
    throw new Error("Total possibility must be equal to 100.");
  }

  const chanceArr = [];
  for (const prize of prizes) {
    const numItemsToAdd = prize.possibility;
    for (let i = 0; i < numItemsToAdd; i++) {
      chanceArr.push(prize);
    }
  }
  const chanceNumber = Math.floor(Math.random() * 100);
  const shuffledArr = shuffleArray(chanceArr);
  return shuffledArr[chanceNumber];
}
