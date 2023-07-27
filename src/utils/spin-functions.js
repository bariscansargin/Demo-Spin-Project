export function setList(prizes) {
  const prizeList = prizes.reduce((list, prize) => {
    list = [...list, [prize.title, prize.color]];
    return list;
  }, []);
  return prizeList;
}
