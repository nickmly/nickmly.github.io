<template>
    <div>
        <h3 class="text-2xl mb-4 ">Work</h3>
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
            <Project v-for="project in projects" :key="project.name" :project="project" :fixed-height="true" />
        </div>
    </div>
</template>
<script setup lang="ts">
import type { Project } from '~/types/project';
useHead({
    title: "Nick Mallory | Work"
})
const projects = ref<Project[]>([
    {
        name: "Paramount Commerce",
        imageName: "paramount-commerce.webp",
        href: "https://www.paramountcommerce.com/",
        dateRange: "2024 - Present",
        description: `Currently working at Paramount Commerce building PayDirectNow, an Interac e-Transfer payment solution for iGaming companies. Using React, React Router, and TypeScript. Deployed to Cloudflare Workers.`,
        bgColor: "#FFFFFF"
    },
    {
        name: "Rivalry.com",
        imageName: "rivalry-esports-300x200-1.webp",
        href: "https://www.rivalry.com",
        dateRange: "2022 - 2024",
        description: `I worked at Rivalry as a Senior Developer. Used Nuxt 3 and TypeScript to create Rivalry.com: 
            a sportsbook and casino web app.`,
        bgColor: "#0A0A0A"
    },
    {
        name: "ThrivePOS",
        imageName: "thrivepos.webp",
        href: "https://www.thrivepos.com/",
        dateRange: "2021 - 2022",
        description: `I worked on the front-end for various restaurant based apps using Vue.js, with Jest and Cypress for testing. These are a part of Granbury Solutions' ThrivePOS suite of applications.`,
        bgColor: "#FFFFFF"
    },
    {
        name: "Canada COVID Alert App",
        imageName: "covidalert.webp",
        href: "https://github.com/cds-snc/covid-alert-app",
        dateRange: "2020",
        description: `I worked on the React Native front-end for the COVID-19 exposure notification app.`,
        bgColor: "#FFFFFF"
    },
    {
        name: "Ontario Public Service",
        imageName: "ontario.webp",
        href: "https://www.ontario.ca/",
        dateRange: "2018 - 2021",
        description: `I worked as a web developer at the Ontario Digital Service, helping develop and maintain Ontario.ca. Our stack was Drupal 8 and PHP for the back-end and Vue.js and AngularJS for the front-end.`,
        bgColor: "#FFFFFF"
    },
])

</script>