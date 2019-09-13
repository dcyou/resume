export { default as elementFactory } from "./element"

export function createFactory(fn) {
  return function(options = {}) {
    const defaults = {
      props: {},
      options: {}
    }
    const params = Object.assign({}, defaults, options)
    return fn(params)
  }
}
