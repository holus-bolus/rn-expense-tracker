export const getFormattedDate = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

export const getFormattedAmount = (amount) => {
  return `$${amount.toFixed(2)}`;
};
