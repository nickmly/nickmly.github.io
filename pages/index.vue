<template>
  <div class="flex flex-col gap-6">
    <h3 class="text-2xl">About Me</h3>
    <div class="about">
      <p class="mb-2">I am a full-stack web developer currently developing Rivalry.com using Nuxt 3.
        I graduated with honors from Game Programming at Humber College in April 2017.</p>
      <p class="mb-2">Creating excellent user experiences in the cloud is what I do. Let me create your next website.
      </p>

      <p class="mb-2">
        My passions include web development, video games, and fitness. For the past 6 years I have been developing
        and
        designing websites in both AWS and Azure using Node.js, React, Vue.js, Angular, ASP.NET, and PHP.
      </p>
    </div>
    <h3 class="text-2xl">Skills</h3>
    <div class="flex flex-col gap-2">
      <Skill name="JavaScript" icon-name="teenyicons:javascript-outline" />
      <Skill name="TypeScript" icon-name="teenyicons:typescript-outline" />
      <Skill name="HTML" icon-name="akar-icons:html-fill" />
      <Skill name="CSS" icon-name="akar-icons:css-fill" />
      <Skill name="Sass" icon-name="akar-icons:sass-fill" />
      <div class="border-b-[1px] border-white w-80" />
      <Skill name="Jest" icon-name="devicon-plain:jest" />
      <Skill name="Cypress" icon-name="simple-icons:cypress" />
      <div class="border-b-[1px] border-white w-80" />
      <Skill name="PHP" icon-name="fa6-brands:php" />
      <Skill name="Node.JS" icon-name="fa-brands:node" />
      <div class="border-b-[1px] border-white w-80" />
      <Skill name="Vue" icon-name="teenyicons:vue-solid" />
      <Skill name="Nuxt" icon-name="teenyicons:nuxtjs-outline" />
      <Skill name="React" icon-name="teenyicons:react-outline" />
    </div>
  </div>
</template>
<script setup lang="ts">
useHead({
  title: "Nick Mallory | About"
})
</script>