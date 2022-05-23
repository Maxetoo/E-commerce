export const standardNumber = (number) => {
  return new Intl.NumberFormat().format(number.toFixed(2))
}

export const setArray = (arr) => {
  return ['All', ...new Set(arr)]
}

export const ratesData = [
  {
    id: 1,
    code: 'NGN',
    icon: 'N',
    name: 'Naira',
  },
  {
    id: 2,
    code: 'GHS',
    icon: '¢',
    name: 'Cedis',
  },
  {
    id: 3,
    code: 'ZAR',
    icon: 'R',
    name: 'Rand',
  },
  {
    id: 4,
    code: 'USD',
    icon: '$',
    name: 'Dollar',
  },
  {
    id: 5,
    code: 'GBP',
    icon: '£',
    name: 'UK Pound',
  },
]
