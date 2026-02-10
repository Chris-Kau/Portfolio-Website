<script setup>
defineProps(["project"])
</script>

<template>
 <v-card width="300" max-width="300" max-height="300" height="300" hover color="secondary" class="project-card">
  <div class="flex text-4xl card-darken justify-center items-center mono font-weight-black">Learn More</div>
  <v-img
    :src="`./${project.image}`"
    height="300"
    width="300"
    class="mono align-end text-white project-img"
  >
    <div class="img-gradient">
      <v-card-title class="pa-0">
        {{ project.name }}
      </v-card-title>
    </div>
  </v-img>

  <v-card-item class="pa-0">
  </v-card-item>
</v-card>
</template>

<style scoped>
.project-card {
  position: relative;
  overflow: hidden;
}

.card-darken {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
  z-index: 1;
}

.project-card:hover .card-darken {
  opacity: 1;
}

.img-gradient {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  padding: 12px;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0)
  );
}

.skill-chip :deep(.v-chip__content) {
  color: var(--color-supportingaccent);
}
</style>
