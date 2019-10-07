/**
 * export the element.ui factory
 *
 * @exports factories/element
 */
export { default as elementFactory } from "./element"

/**
 * Factory Component creation for unit test.
 *
 * @param {Function} fn function callback
 * @example
 * // returns a function to called with the options needed
 * createFactory(( factory ) => {factory({})})
 * @returns {Function} the factory function
 */
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
