<template>
    <div class="container">
        <h3>{{projects.projects_title ? projects.projects_title : "Projects"}}</h3>
        <el-card v-for="(project, index) in projects"
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
import projects from '~/assets/yaml/projects.yml';
export default {
    props: [],
    data() {
        return { 
            projects: []              
        }
    },
    created: function() {
        this.getContent();
    },
    methods: {
        getContent() {
            this.projects = projects;
        }
    }
}
</script>