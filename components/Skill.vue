<template>
   <div class="flex gap-2 items-center">
      <Icon :name="iconName" class="w-6 h-6" />
      <span>{{ name }}</span>
    </div>
</template>
<script setup lang="ts">
defineProps<{
  iconName: string,
  name: string
}>()
</script>