import { createLocalVue } from "@vue/test-utils"
import Element from "element-ui"
import locale from "element-ui/lib/locale/lang/en"

/**
 * Factory who mount the element-ui package by using test-utils/createLocalVue
 *
 * @example
 * // returns a local vue by using test-utils/createLocalVue
 * elementFactory()
 * @returns {object} the local Vue with element-ui package associated
 */
export default function elementFactory() {
  const localVue = createLocalVue()
  localVue.use(Element, { locale })
  return { localVue }
}
