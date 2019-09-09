<template>
  <div class="container">
    <h3>
      {{
        hobbies.hobbies_title
          ? hobbies.hobbies_title
          : "Activities and interests"
      }}
    </h3>
    <el-card>
      {{ hobbies.hobbies_content }}
    </el-card>
  </div>
</template>

<script>
import hobbies from "~/assets/yaml/hobbies.yml"
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
      this.hobbies = hobbies
    }
  }
}
</script>
