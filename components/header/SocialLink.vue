<template>
  <a class="relative group" :href="href" target="_blank">
    <Icon :name="iconName" size="1.5em" class="hover:text-slate-400" />
    <span
      class="scale-0 lg:group-hover:scale-100 transition-transform top-0 left-1/2 -translate-x-1/2 text-xs text-center absolute rounded-lg w-20 p-2 bg-white text-slate-950">
      {{ name }}
    </span>
  </a>
</template>
<script setup lang="ts">
defineProps<{
  href: string;
  iconName: string;
  name: string;
}>()
</script>