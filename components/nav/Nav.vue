
<template>
    <nav class="bg-slate-600 lg:bg-transparent">
        <ul class="flex flex-row lg:flex-col">
            <NavLink v-for="link in navLinks" :key="link.title" :to="link.to">{{ link.title }}</NavLink>
        </ul>
    </nav>
</template>
<script setup lang="ts">
interface NavLink {
    title: string;
    to: string;
}
const navLinks = ref<NavLink[]>([
    {
        title: "About",
        to: "/"
    },
    {
        title: "Work",
        to: "/work"
    },
    {
        title: "Projects",
        to: "/projects"
    }
])
</script>