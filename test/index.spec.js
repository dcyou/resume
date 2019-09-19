// import faker from "faker"
import { testHelper } from "./helpers"
import Index from "~/pages/index.vue"
jest.mock(`~/assets/yaml/about.yml`)
jest.mock(`~/assets/yaml/educations.yml`)
jest.mock(`~/assets/yaml/experiences.yml`)
jest.mock(`~/assets/yaml/header.yml`)
jest.mock(`~/assets/yaml/hobbies.yml`)
jest.mock(`~/assets/yaml/projects.yml`)

describe("Index", () => {
  testHelper(Index)
})
