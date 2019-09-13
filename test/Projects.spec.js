// import faker from "faker"
import { testHelper } from "./helpers"
import Projects from "~/components/Projects.vue"
jest.mock(`~/assets/yaml/projects.yml`)

describe("Projects", () => {
  testHelper(Projects)
})
