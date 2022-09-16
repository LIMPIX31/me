import seedrandom from 'seedrandom'

const random = seedrandom('limpix31')

export const map = (value: number, fromMin: number, fromMax: number, toMin = 0, toMax = 100) => {
  return ((value - fromMin) * (toMax - toMin)) / (fromMax - fromMin) + toMin
}

export const factory = <T>(length: number, factoryFunction: (index: number) => T) => {
  return Array.from({ length }, (_, i) => factoryFunction(i))
}

export const randomItem = <T>(array: ArrayLike<T>, customRandom?: () => number) => {
  return array[Math.floor((customRandom?.() ?? random()) * array.length)]
}

export const chance = (value: number) => random() <= value

export const increment = (value: number) => value + 1
