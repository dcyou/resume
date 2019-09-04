<template>
  <el-container>
    <!-- <el-header id='header'></el-header> -->
    <el-main id='main' class="main-container">
      
      <div class="container">
        <el-row>
          <el-col :span="12">
            <div class="header-left">
              <h1>David Turbert</h1>
              <h2>Senior Web or Lead Developer / Junior Data Scientist</h2>
            </div>
          </el-col>
          <el-col :span="12">
            <div style="header-right">
              <ul class="no-print icons"><li>
                    <a target="_blank" href="https://www.github.com/dcyou">
                      <i class="fab fa-github" title="Github link"></i>
                    </a>
                  </li><li>
                    <a target="_blank" href="https://www.linkedin.com/in/dcyou">
                      <i class="fab fa-linkedin" title="Linkedin link"></i>
                    </a> 
                  </li><li>
                    <a target="_blank" href="https://twitter.com/david_turbert">
                      <i class="fab fa-twitter" title="Twitter link"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="mailto:david@dcyou.fr">
                      <i class="fas fa-paper-plane" title="Email link"></i>
                    </a>
                  </li>
              </ul>
            </div>
          </el-col>
        </el-row>
      </div>

      <div class="container">
        <h3>Who Am I

        </h3>
        <el-row>
          <el-col :span="6">
            <div style="no-print">
              <el-avatar :size="100" :fit="fill" src="me.jpg"></el-avatar>
            </div>
          </el-col>
          <el-col :span="18">
            <div style="col-print-12">
              <p>
               {{description}}
              </p>
              <p>Skills: <mark :key="skill" v-for="skill in skills">{{skill}}</mark></p>
            </div>
          </el-col>
        </el-row>
      </div>

      <div class="container">
          <h3>Projects</h3>
          <el-card class="box-card">
            <div slot="header">
              <el-link href="https://github.com/dcyou/dcyou.github.io">
              <i class="fab fa-github"></i>   
              dcyou.github.io
              </el-link> 
            </div>
            <div>
              <p>I started this project as a way of learning <mark>NuxtJS</mark> and <mark>Element</mark> component library. I have learned many skills through this and been I’m very proud of having this in my portfolio. If you don’t have a project as awesome as this I would advise you make one.</p>
            </div>
          </el-card>
      </div>

      <div class="container">
          <h3>Experience</h3>
          <div class="block">
            <Content 
              v-for="(activity, index) in activities"
              v-bind:data="activity"
              v-bind:index="index"
              :key="index">
            </Content>
          </div>
      </div>

      <div class="container">
          <h3>Education</h3>
          <div class="block">
            <Content 
              v-for="(education, index) in educations"
              v-bind:data="education"
              v-bind:index="index"
              :key="index">
            </Content>
          </div>          
      </div>

      <div class="container">
          <h3>About Me</h3>
          <div class="block">
            <Content :data="aboutMe"></Content>
          </div>
      </div>
    </el-main>
    <!-- @sproogen thanks for inspiration -->
  </el-container>
</template>

<script>
    import Content from '~/components/Content.vue'

export default {
  components: { Content },
   data() {
      return {
        description: "Hi, my name’s David. I'm Web Developer. My experience has allowed me to acquire solid knowledge in development, but not only. Whatever programming language is used, my knowledge of software engineering allows me to put into practice, with rigor, the best development practices. Curious by nature and self-taught I like to follow the  new technologies news. Continuous learning is an indispensable thing for me, both professionally and personally.",
        skills: ["NodeJS", "PHP", "VueJS", "React"],
        me: 'me.jpg',

        aboutMe: `<p>My experience has allowed me to acquire solid knowledge in development, especially the PHP and NodeJS
                technologies, but not only. Whatever programming language is used, my knowledge of software engineering allows
                me to put into practice, with rigor, the best development practices. Curious by nature and self-taught I like to follow the
                news related to new technologies. Continuous learning is an indispensable thing for me, both professionally and
                personally.</p>
                <ul>
                  <li>Sports (cycling, running, triathlon etc.)</li>
                  <li>High Tech actualities (IOT, CTF etc.)</li>
                  <li>epicurean</li>
                  <li>earth and environment</li>
                  <li>‘Mens sana in corpore sano’</li>
                </ul>`,
        educations:[
          {
            header: `#### [EPSI](http://www.epsi.fr/campus/campus-de-lyon/ "EPSI") - Lyon
##### Master Degree
2010 - 2012`,
            description: `The <q>École privée des sciences informatiques</q> (EPSI) is a French private school specialized in information technology. EPSI was founded by professionals. The first school was based in Paris. Later on, with the rise of the computer science industry, the school built branches in Bordeaux, Montpellier, Arras then in October 2002 in Nantes and then later in Lyon.`
          }
        ],

        activities: [
          {
            header: `#### [Firmenich](https://www.firmenich.com "Firmenich") - Geneva
##### Lead developer / DevOps / Junior data scientist
2014 - 2018`,

            description: `<details>
<summary>As lead developer</summary>

- By combine different technology, web applications for proof of concept
- Elasticsearch with Meteor to build an intelligent search engine tailored
- PHP with MySQL for an global application of user management and application management
- NodeJS, create some packages for the applications (authentication with JWT, databases connections etc.) usage of some Design Pattern
- NodeJS, Matlab, MySQL and MongoDB to build a complex app to improve business performance

- Code review
- Team training for Git best practices and development best practices
 Languages: NodeJS, React, PHP, Matlab Databases: MySQL, Elasticsearch, MongoDB, Oracle, GraphQL 
</details> 
<details>
<summary>As DevOps</summary>

- From scratch, creation and support of a software factory. Environments of development, qualification and production for Matlab models (Windows moved to Linux Redhat) and another one for web applications (implementation from scratch Linux Redhat)
- Management of Ubuntu server with Docker. Creation of image and scripting to simplify the usage of containers
 Skills: Docker, GIT, Gitlab, Gitlab CI, Capistrano, LAMP, NGINX, Matlab Production Server
</details> 
<details>
<summary>As junior data scientist</summary>

- Scripting SQL and PL/SQL to aggregate, clean and calculate data.
- Analyze, organize and structured data to help principal scientists
- Implementation of Matlab Unit testing
- Official training by Mathworks:
  - MATLAB Fundamentals
  - MATLAB Programming Techniques
  - Building Interactive Applications in MATLAB
  - Machine Learning with MATLAB
</details>



`,
          }, 
        ]
      }
    },
    mounted: function() {
      this.$nextTick(function() {
        this.betaMessage();
      });
    },
    methods: {
      betaMessage: function() {
        this.$message({
          showClose: true,
          duration: 10000,
          message: 'Beta version, work in progress',
          type: 'warning'
        });
      }
    }
}
</script>