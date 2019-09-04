<template>
    <el-row v-if="data.header">
        <el-col :span="8"><p v-html="markdownFormat(data.header)"></p></el-col>
        <el-col :span="16"><p v-html="markdownFormat(data.description)"></p></el-col>
    </el-row>   
    <el-row v-else>
        <el-col :span="24"><p v-html="markdownFormat(data)"></p></el-col>
    </el-row>
</template>

<script>
    let MarkdownIt = require('markdown-it');
    export default {
        props: ['data'],
        data() {
            return {               
            }
        },
        methods: {
            markdownFormat(text){
                let md = new MarkdownIt({
                    html: true,
                    linkify: true,
                    typographer: true
                });
                return md.render(text);
            }
        }
    }
</script>