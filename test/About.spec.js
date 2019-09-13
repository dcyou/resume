// import faker from "faker"
import { testHelper } from "./helpers"
import About from "~/components/About.vue"
jest.mock(`~/assets/yaml/about.yml`)

describe("About", () => {
  testHelper(About)
})
