<template>
    <li class="flex items-center">
        <NuxtLink :to="to" class="w-full p-3 hover:bg-slate-400 hover:text-slate-900"
            activeClass="bg-slate-400 text-slate-900 lg:text-white lg:bg-slate-600">
            <slot />
        </NuxtLink>
    </li>
</template>
<script setup lang="ts">
defineProps<{
    to: string
}>()
</script>
