export const calculateNextSpin = () => {
  const today = new Date();
  const fiveDaysAhead = new Date(today.getTime() + 5 * 24 * 60 * 60 * 1000);

  const year = fiveDaysAhead.getFullYear();
  const month = String(fiveDaysAhead.getMonth() + 1).padStart(2, "0");
  const day = String(fiveDaysAhead.getDate()).padStart(2, "0");

  const formattedDate = `${day}.${month}.${year}`;
  return formattedDate;
};
