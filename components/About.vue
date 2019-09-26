<template>
  <div v-if="about.about_content" class="container">
    <h3 id="about-title">
      {{ about.about_title ? about.about_title : "About Me" }}
    </h3>
    <el-row v-if="about.about_profile_image">
      <el-col :span="8">
        <p>
          <el-avatar
            id="about-profile-image"
            shape="circle"
            fit="fill"
            :src="about.about_profile_image"
          />
        </p>
      </el-col>
      <el-col :span="16">
        <!-- eslint-disable-next-line -->
        <p id="about-content" v-html="about.about_content" />
      </el-col>
    </el-row>
    <el-row v-else>
      <el-col :span="24">
        <!-- eslint-disable-next-line -->
        <p id="about-content" v-html="about.about_content" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import about from "~/assets/yaml/about.yml"
import { safeLoad } from "js-yaml"

export default {
  props: [],
  data() {
    return {
      about: null
    }
  },
  created: function() {
    this.getContent()
  },
  methods: {
    getContent() {
      this.about = safeLoad(about)
    }
  }
}
</script>
