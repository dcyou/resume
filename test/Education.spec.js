// import faker from "faker"
import { testHelper } from "./helpers"
import Education from "~/components/Education.vue"
jest.mock(`~/assets/yaml/educations.yml`)

describe("Education", () => {
  testHelper(Education)
})
