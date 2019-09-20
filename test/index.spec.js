// import faker from "faker"
import { testHelper, mountHelper } from "./helpers"
import Index from "~/pages/index.vue"
jest.mock(`~/assets/yaml/about.yml`)
jest.mock(`~/assets/yaml/educations.yml`)
jest.mock(`~/assets/yaml/experiences.yml`)
jest.mock(`~/assets/yaml/header.yml`)
jest.mock(`~/assets/yaml/hobbies.yml`)
jest.mock(`~/assets/yaml/projects.yml`)

describe("Index", () => {
  testHelper(Index)

  it("print the page", () => {
    const factory = mountHelper(Index)
    const wrapper = factory()
    global.print = jest.fn()
    const btn = wrapper.find("div.corner-ribbon.top-right")
    btn.trigger("click")
    expect(global.print).toBeCalled()
  })
})
