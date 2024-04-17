<template>
  <NuxtLink ref="card" :to="project.href" external target="_blank"
    class="card bg-slate-900 rounded-md w-full" :style="cardStyle">
    <div class="flex flex-col">
      <div>
        <div class="w-full flex justify-center rounded-t-md" :class="{ 'h-40': fixedHeight }"
          :style="{ backgroundColor: project.bgColor }">
          <Image :src="`images/projects/${project.imageName}`" class-name="h-full rounded-t-md"
            wrapper-class="w-full flex justify-center rounded-md" :alt="`${project.name} logo`" />
        </div>
        <span class="text-xl p-4 pb-0 w-full inline-block m-0">
          {{ project.name }}
        </span>
        <span class="p-4 pt-0 m-0 text-gray-400">
          {{ project.dateRange }}
        </span>
      </div>
      <p class="text-base p-4">
        {{ project.description }}
      </p>
    </div>
  </NuxtLink>
</template>
<script setup lang="ts">
import type { Project } from '~/types/project';
import { useMouseInElement } from '@vueuse/core';
defineProps<{
  project: Project;
  fixedHeight: boolean;
}>()
const card = ref(null);
const { elementX, elementY, isOutside } = useMouseInElement(card)
const cardStyle = computed(() => {
  return isOutside.value ? { backgroundImage: 'none' } : {
    backgroundImage: `radial-gradient(circle at ${elementX.value}px ${elementY.value}px,
        #475569,
        #0f172a)`
  }
})
</script>