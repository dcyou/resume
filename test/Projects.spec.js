import faker from "faker"
import { testHelper, mountHelper } from "./helpers"
import Projects from "~/components/Projects.vue"
jest.mock(`~/assets/yaml/projects.yml`)

describe("Project", () => {
  testHelper(Projects)

  describe("Matches randoms values", () => {
    const values = {
      projectsData: {
        projects_title: faker.company.bsAdjective(),
        projects: Array.from(
          { length: faker.random.number({ min: 1, max: 3 }) },
          () => {
            return {
              name: faker.company.companySuffix(),
              link: faker.internet.url(),
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
    const factory = mountHelper(Projects)

    it("Should call the mocked function", () => {
      factory({ options, values })
      expect(mockFn).toHaveBeenCalled() //we use correctly the mock function
    })

    //projects.length
    it("Should have the same length of timeline and randoms values", () => {
      const wrapper = factory({ options, values })
      const timelineArray = wrapper.findAll("div.el-card")
      expect(timelineArray.length).toStrictEqual(
        values.projectsData.projects.length
      )
    })
    it("Should NOT contain the project section", () => {
      let localValues = {
        projectsData: { ...values.about, projects: undefined }
      }
      const wrapper = factory({ options, values: localValues })
      expect(wrapper.isEmpty()).toBe(true)
    })

    //projects_title
    it("Should contain the projects_title", () => {
      const wrapper = factory({ options, values })
      expect(wrapper.find("#project-title").text()).toEqual(
        expect.stringContaining(values.projectsData.projects_title)
      )
    })
    it("Should contain the default projects_title", () => {
      let localValues = {
        projectsData: {
          ...values.projectsData,
          projects_title: undefined
        }
      }
      const wrapper = factory({ options, values: localValues })
      expect(wrapper.find("#project-title").text()).toEqual(
        expect.stringContaining("Projects")
      )
    })

    //projects.length
    it("Should contain the random values at correct position", () => {
      const wrapper = factory({ options, values })
      const cardArray = wrapper.findAll("div.el-card")
      // check if the values are correctly printed
      for (let index = 0; index < cardArray.length; index++) {
        const project = values.projectsData.projects[index]
        const cardWrapper = cardArray.at(index).find("div.el-card__header")
        const wrapperText = cardWrapper.text()
        expect(wrapperText).toEqual(expect.stringContaining(project.name))
        expect(cardWrapper.find("a").attributes("href")).toEqual(
          expect.stringContaining(project.link)
        )
        const wrapperDescriptionText = cardArray
          .at(index)
          .find("div.el-card__body")
          .text()
        expect(wrapperDescriptionText).toEqual(
          expect.stringContaining(project.description)
        )
      }
    })
  })
})
