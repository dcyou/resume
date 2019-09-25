<template>
  <el-container>
    <!-- <el-header id='header'></el-header> -->
    <el-main id="main" class="main-container">
      <Header />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Hobbies />
    </el-main>
    <div class="corner-ribbon top-right sticky no-print" @click="print()">
      Print me
    </div>
    <el-footer>
      <gh-btns-star slug="dcyou/resume" />
    </el-footer>
  </el-container>
  <!-- @sproogen thanks for inspiration -->
</template>

<script>
import Header from "~/components/Header.vue"
import About from "~/components/About.vue"
import Projects from "~/components/Projects.vue"
import Experience from "~/components/Experience.vue"
import Education from "~/components/Education.vue"
import Hobbies from "~/components/Hobbies.vue"

export default {
  components: {
    Header,
    About,
    Projects,
    Experience,
    Education,
    Hobbies
  },
  data() {
    return {}
  },
  methods: {
    print: function() {
      window.print()
    }
  }
}
</script>
