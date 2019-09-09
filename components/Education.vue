<template>
  <div class="container">
    <h3>
      {{
        educationsData.educations_title
          ? educationsData.education_title
          : "Education"
      }}
    </h3>
    <el-timeline>
      <el-timeline-item
        v-for="(education, index) in educationsData.educations"
        :key="index"
        :timestamp="education.dates"
        placement="top"
      >
        <el-card>
          <h4>
            {{ education.name }}
            <el-divider direction="vertical" />
            <span>
              <i class="fas fa-map-marker-alt" />
              {{ education.place }}
            </span>
          </h4>
          <p>{{ education.qualification }}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
import educationsData from "~/assets/yaml/educations.yml"
export default {
  props: [],
  data() {
    return {
      educationsData: {}
    }
  },
  created: function() {
    this.getContent()
  },
  methods: {
    getContent() {
      this.educationsData = educationsData
    }
  }
}
</script>
