// import faker from "faker"
import { testHelper } from "./helpers"
import Experience from "~/components/Experience.vue"
jest.mock(`~/assets/yaml/experiences.yml`)

describe("Experience", () => {
  testHelper(Experience)
})
