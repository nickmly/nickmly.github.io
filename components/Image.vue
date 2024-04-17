<template>
    <NuxtPicture :src="src" :imgAttrs="{ class: className, alt }" :class="wrapperClass" />
</template>
<script setup lang="ts">
defineProps<{
    src: string;
    alt?: string;
    className?: string;
    wrapperClass?: string;
}>();
</script>