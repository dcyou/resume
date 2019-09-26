<template>
  <div v-if="experiencesData.experiences" class="container">
    <h3 id="experience-title">
      {{
        experiencesData.experiences_title
          ? experiencesData.experiences_title
          : "Work experience"
      }}
    </h3>
    <el-card
      v-for="(experience, index) in experiencesData.experiences"
      :key="index"
      :data="experience"
      :index="index"
    >
      <div slot="header" style="text-align:center;">
        <p>
          <el-link :href="experience.link">
            <i class="far fa-building" />
            {{ experience.company }}
          </el-link>
          <el-divider direction="vertical" />
          <i class="fas fa-map-marker-alt" /> {{ experience.place }}
        </p>
        <p>{{ experience.dates }}</p>
        <p>{{ experience.job_title }}</p>
      </div>
      <!-- eslint-disable-next-line -->
      <div v-html="experience.description" />
    </el-card>
  </div>
</template>

<script>
import experiencesData from "~/assets/yaml/experiences.yml"
import { safeLoad } from "js-yaml"

export default {
  props: [],
  data() {
    return {
      experiencesData: {}
    }
  },
  created: function() {
    this.getContent()
  },
  methods: {
    getContent() {
      this.experiencesData = safeLoad(experiencesData)
    }
  }
}
</script>
