import faker from "faker"
import { testHelper, mountHelper } from "./helpers"
import Hobbies from "~/components/Hobbies.vue"
jest.mock(`~/assets/yaml/hobbies.yml`)

describe("Hobbies", () => {
  testHelper(Hobbies)

  describe("Matches randoms values", () => {
    const values = {
      hobbies: {
        hobbies_title: faker.hacker.adjective(),
        hobbies_content: faker.lorem.paragraph()
      }
    }
    const mockFn = jest.fn()
    const options = {
      methods: {
        getContent: mockFn
      }
    }
    const factory = mountHelper(Hobbies)

    it("Should call the mocked function", () => {
      factory({ options, values })
      expect(mockFn).toHaveBeenCalled() //we use correctly the mock function
    })

    //hobbies_title
    it("Should contain the hobbies_title", () => {
      const wrapper = factory({ options, values })
      expect(wrapper.find("#hobbies-title").text()).toEqual(
        expect.stringContaining(values.hobbies.hobbies_title)
      )
    })
    it("Should contain the default hobbies_title", () => {
      let localValues = {
        hobbies: { ...values.hobbies, hobbies_title: undefined }
      }
      const wrapper = factory({ options, values: localValues })
      expect(wrapper.find("#hobbies-title").text()).toEqual(
        expect.stringContaining("Activities and interests")
      )
    })

    //hobbies_content
    it("Should contain the hobbies_content", () => {
      const wrapper = factory({ options, values })
      expect(wrapper.find("#hobbies-content").text()).toEqual(
        expect.stringContaining(values.hobbies.hobbies_content)
      )
    })
    it("Should NOT contain the hobbies section", () => {
      let localValues = {
        hobbies: { ...values.hobbies, hobbies_content: undefined }
      }
      const wrapper = factory({ options, values: localValues })
      expect(wrapper.isEmpty()).toBe(true)
    })
  })
})
