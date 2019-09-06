<template>
    <div class="container">
        <h3>{{projectsDataprojects_title ? projectsDataprojects_title : "Projects"}}</h3>
        <el-card v-for="(project, index) in projectsData.projects"
              v-bind:data="project"
              v-bind:index="index"
              :key="index"
        >
            <div style="text-align: center;" slot="header">
                <el-link :href="project.link">
                <i class="fab fa-github"></i>   
                {{project.name}}
                </el-link> 
            </div>
            <div v-html="project.description">
            </div>
        </el-card>
    </div>
</template>

<script>
import projectsData from '~/assets/yaml/projects.yml';
export default {
    props: [],
    data() {
        return { 
            projectsData: {}              
        }
    },
    created: function() {
        this.getContent();
    },
    methods: {
        getContent() {
            this.projectsData = projectsData;
        }
    }
}
</script>