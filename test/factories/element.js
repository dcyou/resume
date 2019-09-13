import { createLocalVue } from "@vue/test-utils"
import Element from "element-ui"
import locale from "element-ui/lib/locale/lang/en"

export default function elementFactory() {
  const localVue = createLocalVue()
  localVue.use(Element, { locale })
  return { localVue }
}
