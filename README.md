# dcyou.github.io
[![Build Status](https://travis-ci.org/dcyou/resume.svg?branch=master)](https://travis-ci.org/dcyou/resume)
[![Known Vulnerabilities](https://snyk.io//test/github/dcyou/resume/badge.svg?targetFile=package.json)](https://snyk.io//test/github/dcyou/resume?targetFile=package.json)
[![Coverage Status](https://coveralls.io/repos/github/dcyou/resume/badge.svg?branch=master)](https://coveralls.io/github/dcyou/resume?branch=master)
[![GitHub version](https://badge.fury.io/gh/dcyou%2Fresume.svg)](https://badge.fury.io/gh/dcyou%2Fresume)

> My resume by using NuxtJS (VueJS), Element and some useful tools

## Demo
https://dcyou.github.io/resume/

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Usage
All the data files are written with YAML format
https://yaml.org/

Those files are located in `assets/yaml` folder

#### about.yml
Contain the detail for the `About Me` section as follow
```
# About Section
# about_title: About Me (Use this to override)
about_profile_image: Image name for avatar under static folder (eg. me.jpg)
about_content: > # this will include new lines to allow paragraphs
  Short description about you
```

#### educations.yml
Contain the detail for the `Education` section as follow
```
# Education Template
# educations_title: Education #(Use this to override)
educations:
- name: School name
  place: place
  dates: Date range
  qualification: Degree name
```

#### experiences.yml
Contain the detail for the `Work experience` section as follow
```
# Experience template
# experiences_title: Work experience #(Use this to override)
experiences:
- company: the company name
  link: Link for the company website
  place: place of your experience
  job_title: job title
  dates: date range
  description: | # this will include new lines to allow paragraphs
    Short description of the company  
```

#### header.yml
Contain the main information about you as follow
```
# Personal info
name: your name
title: your current title
email: email
phone: phone number
website: 

# Social links
twitter_username: Twitter username (find it in url)
github_username:  Github username (find it in url)
linkedin_username: Linkedin username (find it in url)
```

#### hobbies.yml
Contain the detail for the `Activities and interests` section as follow
```
# Hobbies Section
# hobbies_title: Activities and interests #(Use this to override)
hobbies_content: > # this will include new lines to allow paragraphs
  Short description of what you do except working
```

#### projects.yml
Contain the detail for the `Projects` section as follow
```
# Project template
# projects_title: Projects #(Use this to override)
projects:
- name: Project name
  link: Project link
  description: > # this will include new lines to allow paragraphs
    Short description of the project
```


## Dependencies
For detailed explanation on how things work, check out

[Nuxt.js docs](https://nuxtjs.org)

[Element](https://element.eleme.io
)

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).


---

*Special thanks to sproogen for inspiration*
