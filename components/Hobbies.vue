<template>
  <div v-if="hobbies.hobbies_content" class="container">
    <h3 id="hobbies-title">
      {{
        hobbies.hobbies_title
          ? hobbies.hobbies_title
          : "Activities and interests"
      }}
    </h3>
    <el-card id="hobbies-content">
      {{ hobbies.hobbies_content }}
    </el-card>
  </div>
</template>

<script>
import hobbies from "~/assets/yaml/hobbies.yml"
import { safeLoad } from "js-yaml"

export default {
  props: [],
  data() {
    return {
      hobbies: {}
    }
  },
  created: function() {
    this.getContent()
  },
  methods: {
    getContent() {
      this.hobbies = safeLoad(hobbies)
    }
  }
}
</script>
