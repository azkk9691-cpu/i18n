export const products = ['red', 'ivory', 'midnight'].map((id) => ({
  id, image: import.meta.env.BASE_URL + 'images/' + id + '.png', price: 120, oldPrice: 185
}))
export function formatPrice(amount, language) {
  return new Intl.NumberFormat(language, { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol', maximumFractionDigits: 0 }).format(amount)
}