<template>
    <div>
        <h3 class="text-2xl mb-4 ">Projects</h3>
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
            <Project v-for="project in projects" :key="project.name" :project="project" :fixed-height="false" />
        </div>
    </div>
</template>
<script setup lang="ts">
import type { Project } from '~/types/project';
useHead({
    title: "Nick Mallory | Projects"
})
const projects = ref<Project[]>([
    {
        name: "nextFitness",
        imageName: "fitness-next.webp",
        href: "https://fitness-next.vercel.app",
        dateRange: "2024",
        description: `Developed a full-stack application to log your workouts using Next.js 14, Typescript, Tailwind, Prisma, and PostgreSQL`,
        bgColor: "#0A0A0A"
    },
    {
        name: "Exterminate Zombies: Get Paid",
        imageName: "ezgp.webp",
        href: "https://www.youtube.com/watch?v=aig9W-bKIvI",
        dateRange: "2022",
        description: `Created a four player co-op zombie shooter in Unity, sold on Steam. I was the solo developer, however I worked with a talented musician to create a soundtrack that blends perfectly with the gameplay.`,
        bgColor: "#0A0A0A"
    },
    {
        name: "Recession",
        imageName: "recession.webp",
        href: "https://www.youtube.com/watch?v=3rYr_Drt5Go",
        dateRange: "2017 - 2018",
        description: `Developed an indie multiplayer FPS game that I consider finished as of May 2018. I employed the help of two 3D modelers and a sound designer.`,
        bgColor: "#0A0A0A"
    },
])

</script>