<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
body {
  @apply bg-gray-800 text-white;
  font-family: 'Montserrat', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-in-out;
}

.page-enter-from,
.page-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}

@media screen and (min-width: 1024px) {

  .page-enter-from,
  .page-leave-to {
    transform: translateX(-100px);
    opacity: 0;
  }
}
</style>