/**
 * Money Round
 * Округление до целого числа
 */

const roundFilter = function (value: number | string) {
  if (typeof value !== 'number') {
    return value
  }
  return Math.round(value)
}

export default roundFilter
