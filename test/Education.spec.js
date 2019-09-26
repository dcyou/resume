import faker from "faker"
import { testHelper, mountHelper } from "./helpers"
import Education from "~/components/Education.vue"
jest.mock(`~/assets/yaml/educations.yml`)

describe("Education", () => {
  testHelper(Education)

  describe("Matches randoms values", () => {
    const values = {
      educationsData: {
        educations_title: faker.company.bsAdjective(),
        educations: Array.from(
          { length: faker.random.number({ min: 1, max: 3 }) },
          () => {
            return {
              dates:
                faker.random.number({ min: 1990, max: 2020 }).toString() +
                "-" +
                faker.random.number({ min: 1990, max: 2020 }).toString(),
              name: faker.company.companySuffix(),
              place: faker.address.city(),
              qualification: faker.name.jobTitle()
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
    const factory = mountHelper(Education)

    it("Should call the mocked function", () => {
      factory({ options, values })
      expect(mockFn).toHaveBeenCalled() //we use correctly the mock function
    })

    //educations.length
    it("Should have the same length of timeline and randoms values", () => {
      const wrapper = factory({ options, values })
      const timelineArray = wrapper.findAll(".el-timeline-item__wrapper")
      expect(timelineArray.length).toStrictEqual(
        values.educationsData.educations.length
      )
    })
    it("Should NOT contain the education section", () => {
      let localValues = {
        educationsData: { ...values.about, educations: undefined }
      }
      const wrapper = factory({ options, values: localValues })
      expect(wrapper.isEmpty()).toBe(true)
    })

    //educations_title
    it("Should contain the educations_title", () => {
      const wrapper = factory({ options, values })
      expect(wrapper.find("#education-title").text()).toEqual(
        expect.stringContaining(values.educationsData.educations_title)
      )
    })
    it("Should contain the default educations_title", () => {
      let localValues = {
        educationsData: {
          ...values.educationsData,
          educations_title: undefined
        }
      }
      const wrapper = factory({ options, values: localValues })
      expect(wrapper.find("#education-title").text()).toEqual(
        expect.stringContaining("Education")
      )
    })

    //educations.length
    it("Should contain the random values at correct position", () => {
      const wrapper = factory({ options, values })
      const timelineArray = wrapper.findAll(".el-timeline-item__wrapper")
      // check if the values are correctly printed
      for (let index = 0; index < timelineArray.length; index++) {
        const education = values.educationsData.educations[index]
        const wrapperText = timelineArray
          .at(index)
          .find(".el-timeline-item__wrapper")
          .text()
        expect(wrapperText).toEqual(expect.stringContaining(education.dates))
        expect(wrapperText).toEqual(expect.stringContaining(education.name))
        expect(wrapperText).toEqual(expect.stringContaining(education.place))
        expect(wrapperText).toEqual(
          expect.stringContaining(education.qualification)
        )
      }
    })
  })
})
