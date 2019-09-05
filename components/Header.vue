<template>
    <div class="container">
        <el-row>
            <el-col :span="12">
                <div class="header-left">
                    <h1>{{header.name ? header.name : "Anonymous"}}</h1>
                    <h2>{{header.title ? header.title : "Hacker"}}</h2>
                </div>
            </el-col>
            <el-col :span="12">
                <div style="header-right">
                    <ul class="no-print icons">
                        <li v-if="header.github_username">
                            <a target="_blank" :href="'https://www.github.com/' + header.github_username">
                                <i class="fab fa-github" title="Github link"></i>
                            </a>
                        </li>
                        <li v-if="header.linkedin_username">
                            <a target="_blank" :href="'https://www.linkedin.com/in/' + header.linkedin_username">
                                <i class="fab fa-linkedin" title="Linkedin link"></i>
                            </a> 
                        </li>
                        <li v-if="header.twitter_username">
                            <a target="_blank" :href="'https://twitter.com/' + header.twitter_username">
                                <i class="fab fa-twitter" title="Twitter link"></i>
                            </a>
                        </li>
                        <li v-if="header.email">
                            <a target="_blank" :href="'mailto:' + header.email">
                                <i class="fas fa-paper-plane" title="Email link"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import header from '~/assets/yaml/header.yml';
export default {
    props: [],
    data() {
        return { 
            header: null              
        }
    },
    created: function() {
        this.getContent();
    },
    methods: {
        getContent() {
            this.header = header;
        }
    }
}
</script>