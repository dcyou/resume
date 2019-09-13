// import faker from "faker"
import { testHelper } from "./helpers"
import Header from "~/components/Header.vue"
jest.mock(`~/assets/yaml/header.yml`)

describe("Header", () => {
  testHelper(Header)
})
