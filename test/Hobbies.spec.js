// import faker from "faker"
import { testHelper } from "./helpers"
import Hobbies from "~/components/Hobbies.vue"
jest.mock(`~/assets/yaml/hobbies.yml`)

describe("Hobbies", () => {
  testHelper(Hobbies)
})
