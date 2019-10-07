import { createFactory, elementFactory } from "../factories"
import { mount } from "@vue/test-utils"

/**
 * Mount Vue.js Component helper by using createFactory
 *
 * @param {Function} Component the default Vue.js Component to mount
 * @example
 * // return About Component mounted
 * mountHelper(About)
 * @returns {object} the Vue.js instance mounted
 */
export function mountHelper(Component) {
  return createFactory(({ props = {}, options = {}, values = {} }) => {
    return mount(Component, {
      propsData: { ...props },
      data() {
        return {
          ...values
        }
      },
      ...elementFactory(),
      ...options
    })
  })
}

/**
 * Test helper who called basic test on a Vue.js instance (isVueInstance and toMatchSnapshot)
 *
 * @param {Function} Component the default Vue.js Component to mount
 * @example
 * // make basic tests on About Component
 * testHelper(About)
 * @returns {Promise} Promise who will make the tests
 */
export async function testHelper(Component) {
  const factory = mountHelper(Component)

  afterEach(() => {
    jest.resetModules()
  })

  test("is a Vue instance", done => {
    const wrapper = factory()
    expect(wrapper.isVueInstance()).toBeTruthy()
    done()
  })

  test("Default Template", () => {
    const wrapper = factory()
    expect(wrapper).toMatchSnapshot()
  })
}
