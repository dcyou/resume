import faker from "faker"
import { testHelper, mountHelper } from "./helpers"
import Experience from "~/components/Experience.vue"
jest.mock(`~/assets/yaml/experiences.yml`)

describe("Experience", () => {
  testHelper(Experience)

  describe("Matches randoms values", () => {
    const values = {
      experiencesData: {
        experiences_title: faker.company.bsAdjective(),
        experiences: Array.from(
          { length: faker.random.number({ min: 1, max: 3 }) },
          () => {
            return {
              dates:
                faker.random.number({ min: 1990, max: 2020 }).toString() +
                "-" +
                faker.random.number({ min: 1990, max: 2020 }).toString(),
              company: faker.company.companySuffix(),
              link: faker.internet.url(),
              place: faker.address.city(),
              job_title: faker.name.jobTitle(),
              description: faker.lorem.paragraph()
            }
          }
        )
      }
    }
    const mockFn = jest.fn()
    const options = {
      methods: {
        getContent: mockFn
      }
    }
    const factory = mountHelper(Experience)

    it("Should call the mocked function", () => {
      factory({ options, values })
      expect(mockFn).toHaveBeenCalled() //we use correctly the mock function
    })

    //experiences.length
    it("Should have the same length of timeline and randoms values", () => {
      const wrapper = factory({ options, values })
      const timelineArray = wrapper.findAll("div.el-card")
      expect(timelineArray.length).toStrictEqual(
        values.experiencesData.experiences.length
      )
    })
    it("Should NOT contain the experience section", () => {
      let localValues = {
        experiencesData: { ...values.about, experiences: undefined }
      }
      const wrapper = factory({ options, values: localValues })
      expect(wrapper.isEmpty()).toBe(true)
    })

    //experiences_title
    it("Should contain the experiences_title", () => {
      const wrapper = factory({ options, values })
      expect(wrapper.find("#experience-title").text()).toEqual(
        expect.stringContaining(values.experiencesData.experiences_title)
      )
    })
    it("Should contain the default experiences_title", () => {
      let localValues = {
        experiencesData: {
          ...values.experiencesData,
          experiences_title: undefined
        }
      }
      const wrapper = factory({ options, values: localValues })
      expect(wrapper.find("#experience-title").text()).toEqual(
        expect.stringContaining("Work experience")
      )
    })

    //experiences.length
    it("Should contain the random values at correct position", () => {
      const wrapper = factory({ options, values })
      const cardArray = wrapper.findAll("div.el-card")
      // check if the values are correctly printed
      for (let index = 0; index < cardArray.length; index++) {
        const experience = values.experiencesData.experiences[index]
        const cardWrapper = cardArray.at(index).find("div.el-card__header")
        const wrapperText = cardWrapper.text()
        expect(wrapperText).toEqual(expect.stringContaining(experience.dates))
        expect(wrapperText).toEqual(expect.stringContaining(experience.company))
        expect(wrapperText).toEqual(expect.stringContaining(experience.place))
        expect(wrapperText).toEqual(
          expect.stringContaining(experience.job_title)
        )
        expect(cardWrapper.find("a").attributes("href")).toEqual(
          expect.stringContaining(experience.link)
        )
        const wrapperDescriptionText = cardArray
          .at(index)
          .find("div.el-card__body")
          .text()
        expect(wrapperDescriptionText).toEqual(
          expect.stringContaining(experience.description)
        )
      }
    })
  })
})
