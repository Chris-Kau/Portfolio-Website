<template>
  <v-card
    class="mono pa-2 d-flex flex-row align-center bg-transparent"
    style="
      max-height: 30px;
      max-width: fit-content;
      border: 1px solid var(--color-primary);
      box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
    "
    flat
  >
    <img :src="`./${skill.image}`" style="width: 25px; height: auto; padding: 2px" />
    <span style="padding-left: 3px; font-size: 20px">{{ skill.name }}</span>
  </v-card>
</template>

<script setup>
defineProps(["skill"]);
</script>
