<template>
    <div class="container">
        <h3>{{about.about_title ? about.about_title : "About Me"}}</h3>
        <el-row v-if="about.about_profile_image">
            <el-col :span="8"><p><el-avatar shape="circle" :size="100" fit="fill" :src="about.about_profile_image"></el-avatar></p></el-col>
            <el-col :span="16"><p v-html="about.about_content"></p></el-col>
        </el-row>   
        <el-row v-else>
            <el-col :span="24"><p v-html="about.about_content"></p></el-col>
        </el-row>
      </div>
</template>

<script>
import about from '~/assets/yaml/about.yml';
export default {
    props: [],
    data() {
        return { 
            about: null              
        }
    },
    created: function() {
        this.getContent();
    },
    methods: {
        getContent() {
            this.about = about;
        }
    }
}
</script>