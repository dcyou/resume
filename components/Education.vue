<template>
    <div class="container">
        <h3>{{educations.educations_title ? educations.education_title : "Education"}}</h3>
        <el-timeline>
            <el-timeline-item
            v-for="(education, index) in educations"
            :key="index"
            :timestamp="education.dates"
            placement="top">
            <el-card>
                <h4>
                    {{education.name}}
                    <el-divider direction="vertical"></el-divider>
                    <span class="fas fa-map-marker-alt"> {{education.place}}</span> 
                </h4> 
                <p>{{education.qualification}}</p>
            </el-card>
            </el-timeline-item>              
        </el-timeline>
      </div>
</template>

<script>
import educations from '~/assets/yaml/educations.yml';
export default {
    props: [],
    data() {
        return { 
            educations: null              
        }
    },
    created: function() {
        this.getContent();
    },
    methods: {
        getContent() {
            this.educations = educations;
        }
    }
}
</script>