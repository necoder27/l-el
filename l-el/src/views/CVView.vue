<template>
  <div class="flex flex-wrap p-8">
    <PersonalInformation />
    <Education />
    <WorkExperience />
    <Languages />
  </div>
</template>

<script setup lang="ts">
  import Education from "@/components/CVPage/Education.vue";
  import Languages from "@/components/CVPage/Languages.vue";
  import WorkExperience from "@/components/CVPage/WorkExperience.vue";
  import PersonalInformation from "@/components/CVPage/PersonalInformation.vue";
</script>

<style scoped>

</style>
