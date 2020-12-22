export const formatCurrency = (price) => {
  const currency = new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' })
  return currency.format(price)
}
