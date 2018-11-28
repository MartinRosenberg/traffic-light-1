import { lights } from './constants'

export const fetchLight = () => {
  return new Promise((resolve, reject) => {
    const light = lights[Math.floor(Math.random() * 3)]
    light
      ? resolve(light)
      : reject(Error("Impossible condition"))
  })
}
