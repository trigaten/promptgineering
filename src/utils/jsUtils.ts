// Inspired by https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_difference
export function difference<T>(...arrays: T[][]): T[] {
  return arrays.reduce((a, b) => a.filter(c => !b.includes(c)))
}

// Inspired by https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_sortby-and-_orderby
export function sortBy<T>(array: T[], getter: (item: T) => string | number | boolean): T[] {
  const sortedArray = [...array]
  sortedArray.sort((a, b) => (getter(a) > getter(b) ? 1 : getter(b) > getter(a) ? -1 : 0))
  return sortedArray
}

export function toggleListItem<T>(list: T[], item: T): T[] {
  const itemIndex = list.indexOf(item)
  if (itemIndex === -1) {
    return list.concat(item)
  } else {
    const newList = [...list]
    newList.splice(itemIndex, 1)
    return newList
  }
}

export function shuffle(arr) {
  let i = arr.length

  while (i) {
    const j = Math.floor(Math.random() * i--)

    ;[arr[j], arr[i]] = [arr[i], arr[j]]
  }

  return arr
}

export function upperFirst(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return ''
  }
  return str.charAt(0).toUpperCase() + str.slice(1)
}
