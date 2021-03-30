export const formattedPrice = item => {
  Number(item).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};
