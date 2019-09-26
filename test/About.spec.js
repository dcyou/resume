import faker from "faker"
import { testHelper, mountHelper } from "./helpers"
import About from "~/components/About.vue"
jest.mock(`~/assets/yaml/about.yml`)

describe("About", () => {
  testHelper(About)

  describe("Matches randoms values", () => {
    const values = {
      about: {
        about_title: faker.hacker.adjective(),
        about_content: faker.lorem.paragraph(),
        about_profile_image: faker.image.avatar()
      }
    }
    const mockFn = jest.fn()
    const options = {
      methods: {
        getContent: mockFn
      }
    }

    const factory = mountHelper(About)

    it("Should call the mocked function", () => {
      factory({ options, values })
      expect(mockFn).toHaveBeenCalled() //we use correctly the mock function
    })

    //about_title
    it("Should contain the about_title", () => {
      const wrapper = factory({ options, values })
      expect(wrapper.find("#about-title").text()).toEqual(
        expect.stringContaining(values.about.about_title)
      )
    })
    it("Should contain the default about_title", () => {
      let localValues = { about: { ...values.about, about_title: undefined } }
      const wrapper = factory({ options, values: localValues })
      expect(wrapper.find("#about-title").text()).toEqual(
        expect.stringContaining("About Me")
      )
    })

    //about_content
    it("Should contain the about_content", () => {
      const wrapper = factory({ options, values })
      expect(wrapper.find("#about-content").text()).toEqual(
        expect.stringContaining(values.about.about_content)
      )
    })
    it("Should NOT contain the about section", () => {
      let localValues = { about: { ...values.about, about_content: undefined } }
      const wrapper = factory({ options, values: localValues })
      expect(wrapper.isEmpty()).toBe(true)
    })

    //about_profile_image
    it("Should contain the about_profile_image", () => {
      const wrapper = factory({ options, values })
      expect(
        wrapper.find("#about-profile-image img").attributes("src")
      ).toEqual(expect.stringContaining(values.about.about_profile_image))
    })
    it("Should NOT contain the about_profile_image", () => {
      let localValues = {
        about: { ...values.about, about_profile_image: undefined }
      }
      const wrapper = factory({ options, values: localValues })
      expect(wrapper.find("#about-profile-image").exists()).toBe(false)
    })
  })
})
