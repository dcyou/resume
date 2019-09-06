<template>
    <div class="container">
        <h3>{{experiencesDataexperiences_title ? experiencesDataexperience_title : "Work experience"}}</h3>
        <el-card v-for="(experience, index) in experiencesData.experiences"
            v-bind:data="experience"
            v-bind:index="index"
            :key="index">
            <div style="text-align:center;" slot="header">
                <p>
                    <el-link :href="experience.link">
                    <i class="far fa-building"></i>   
                    {{experience.company}}
                    </el-link> 
                    <el-divider direction="vertical"></el-divider>
                    <i class="fas fa-map-marker-alt"></i> {{experience.place}}
                </p>
                <p>{{experience.dates}}</p>
                <p>{{experience.job_title}}</p>
            </div>
            <div v-html="experience.description"></div>
        </el-card>  
      </div>
</template>

<script>
import experiencesData from '~/assets/yaml/experiences.yml';
export default {
    props: [],
    data() {
        return { 
            experiencesData: {}              
        }
    },
    created: function() {
        this.getContent();
    },
    methods: {
        getContent() {
            this.experiencesData = experiencesData;
        }
    }
}
</script>