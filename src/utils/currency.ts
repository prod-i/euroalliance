/**
 * Money Filter
 * Форматирование числа в валюту
 * Добавляется знак рубля и пробелы между цифрами
 */
export default function currencyFilter (value: number | string): string {
  if (typeof value !== 'number') {
    return value
  }
  const formatter = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    maximumFractionDigits: 3
  })
  return formatter.format(value)
}
