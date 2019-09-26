<template>
  <div v-if="projectsData.projects" class="container">
    <h3 id="project-title">
      {{
        projectsData.projects_title ? projectsData.projects_title : "Projects"
      }}
    </h3>
    <el-card
      v-for="(project, index) in projectsData.projects"
      :key="index"
      :data="project"
      :index="index"
    >
      <div slot="header" style="text-align: center;">
        <el-link :href="project.link">
          <i class="fab fa-github" />
          {{ project.name }}
        </el-link>
      </div>
      <!-- eslint-disable-next-line -->
      <div v-html="project.description" />
    </el-card>
  </div>
</template>

<script>
import projectsData from "~/assets/yaml/projects.yml"
import { safeLoad } from "js-yaml"

export default {
  props: [],
  data() {
    return {
      projectsData: {}
    }
  },
  created: function() {
    this.getContent()
  },
  methods: {
    getContent() {
      this.projectsData = safeLoad(projectsData)
    }
  }
}
</script>
