import faker from "faker"
import { testHelper, mountHelper } from "./helpers"
import Header from "~/components/Header.vue"
jest.mock(`~/assets/yaml/header.yml`)

describe("Header", () => {
  testHelper(Header)

  describe("Matches randoms values", () => {
    const values = {
      header: {
        name: faker.name.firstName() + " " + faker.name.lastName(),
        title: faker.name.jobTitle(),
        github_username: faker.internet.userName(),
        linkedin_username: faker.internet.userName(),
        twitter_username: faker.internet.userName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumberFormat(),
        skype_username: faker.internet.userName()
      }
    }
    const mockFn = jest.fn()
    const options = {
      methods: {
        getContent: mockFn
      }
    }
    const factory = mountHelper(Header)

    it("Should call the mocked function", () => {
      factory({ options, values })
      expect(mockFn).toHaveBeenCalled() //we use correctly the mock function
    })

    //name
    it("Should contain the name", () => {
      const wrapper = factory({ options, values })
      expect(wrapper.find("div.header-left #name").text()).toEqual(
        expect.stringContaining(values.header.name)
      )
    })
    it("Should contain the default name", () => {
      let localValues = { header: { ...values.header, name: undefined } }
      const wrapper = factory({ options, values: localValues })
      expect(wrapper.find("div.header-left #name").text()).toEqual(
        expect.stringContaining("Anonymous")
      )
    })

    //title
    it("Should contain the title", () => {
      const wrapper = factory({ options, values })
      expect(wrapper.find("div.header-left #title").text()).toEqual(
        expect.stringContaining(values.header.title)
      )
    })
    it("Should contain the default title", () => {
      let localValues = { header: { ...values.header, title: undefined } }
      const wrapper = factory({ options, values: localValues })
      expect(wrapper.find("div.header-left #title").text()).toEqual(
        expect.stringContaining("Hacker")
      )
    })

    //github_username
    it("Should contain the github_username", () => {
      const wrapper = factory({ options, values })
      expect(
        wrapper.find("ul.icons li#icons-github a").attributes("href")
      ).toEqual(expect.stringContaining(values.header.github_username))
    })
    it("Should NOT contain the github_username", () => {
      let localValues = {
        header: { ...values.header, github_username: undefined }
      }
      const wrapper = factory({ options, values: localValues })
      expect(wrapper.find("ul.icons li#icons-github").exists()).toBe(false)
    })

    //linkedin_username
    it("Should contain the linkedin_username", () => {
      const wrapper = factory({ options, values })
      expect(
        wrapper.find("ul.icons li#icons-linkedin a").attributes("href")
      ).toEqual(expect.stringContaining(values.header.linkedin_username))
    })
    it("Should NOT contain the linkedin_username", () => {
      let localValues = {
        header: { ...values.header, linkedin_username: undefined }
      }
      const wrapper = factory({ options, values: localValues })
      expect(wrapper.find("ul.icons li#icons-linkedin").exists()).toBe(false)
    })

    //twitter_username
    it("Should contain the twitter_username", () => {
      const wrapper = factory({ options, values })
      expect(
        wrapper.find("ul.icons li#icons-twitter a").attributes("href")
      ).toEqual(expect.stringContaining(values.header.twitter_username))
    })
    it("Should NOT contain the twitter_username", () => {
      let localValues = {
        header: { ...values.header, twitter_username: undefined }
      }
      const wrapper = factory({ options, values: localValues })
      expect(wrapper.find("ul.icons li#icons-twitter").exists()).toBe(false)
    })

    //email
    it("Should contain the email", () => {
      const wrapper = factory({ options, values })
      expect(
        wrapper.find("ul.icons li#icons-email a").attributes("href")
      ).toEqual(expect.stringContaining(values.header.email))
    })
    it("Should NOT contain the email", () => {
      let localValues = { header: { ...values.header, email: undefined } }
      const wrapper = factory({ options, values: localValues })
      expect(wrapper.find("ul.icons li#icons-email").exists()).toBe(false)
    })

    //phone
    it("Should contain the phone", () => {
      const wrapper = factory({ options, values })
      expect(
        wrapper.find("ul.icons li#icons-phone a").attributes("href")
      ).toEqual(expect.stringContaining(values.header.phone))
    })
    it("Should NOT contain the phone", () => {
      let localValues = { header: { ...values.header, phone: undefined } }
      const wrapper = factory({ options, values: localValues })
      expect(wrapper.find("ul.icons li#icons-phone").exists()).toBe(false)
    })

    //skype_username
    it("Should contain the skype_username", () => {
      const wrapper = factory({ options, values })
      expect(
        wrapper.find("ul.icons li#icons-skype a").attributes("href")
      ).toEqual(expect.stringContaining(values.header.skype_username))
    })
    it("Should NOT contain the skype_username", () => {
      let localValues = {
        header: { ...values.header, skype_username: undefined }
      }
      const wrapper = factory({ options, values: localValues })
      expect(wrapper.find("ul.icons li#icons-skype").exists()).toBe(false)
    })
  })
})
