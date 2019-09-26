import { createFactory, elementFactory } from "../factories"
import { mount } from "@vue/test-utils"

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
