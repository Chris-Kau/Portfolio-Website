<script setup>
const props = defineProps(["project"]);
import ProjectTooltipBtn from "./ProjectTooltipBtn.vue";
const scrollTo = (id) => {
  const container = document.querySelector('.scroll-container')
  if (!container) return

  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<template>
  <v-container v-if="project.name" class="d-flex flex-column pa-0 ma-0 projectBox" fluid>
    <!-- RIGHT SIDE -->
    <div class="right">
      <video
        :key="project.demoFile"
        :src="`./${project.demoFile}`"
        autoplay
        loop
        muted
        controls
        playsinline
        preload="metadata"
        class="vid"
      />
    </div>
    <!-- TOP SIDE (40%) -->
    <div
      class="d-flex flex-column left"
      style="border-right: 1px solid var(--color-primary)"
    >
      <v-card
        class="d-flex flex-column"
        style="
          flex: 1;
          width: 100%;
          min-height: 0;
          background-color: transparent;
          color: var(--color-paragraph-text);
          border-radius: 0;
        "
      >
        <!-- TOP + DESCRIPTION AREA -->
        <div class="d-flex flex-column pb-0" style="flex: 1; min-height: 0">
          <!-- Title row -->
          <v-card-item
            class="pt-0 pl-1 pb-0 text-white"
            style="flex: 0 0 auto; background-color: var(--color-secondary)"
          >
            <v-container class="d-flex flex-row align-center pa-0" style="border:none">
              <v-card-text class="mono text-h6 pt-0 pb-0 ma-0">
                {{ project.name }}
              </v-card-text>

              <div class="project-social-icons d-flex flex-row ga-2 pa-0" style="border: none">
                <ProjectTooltipBtn
                  v-for="(item, i) in project.links"
                  :key="i"
                  :text="item.name"
                  location="bottom"
                  :icon="item.icon"
                  :link="item.link"
                />
              </div>
            </v-container>
          </v-card-item>

          <!-- Extra Detail -->
          <v-card-item
            v-if="project.extra !== ''"
            class="d-flex flex-row align-center pb-2 pt-1 text-white"
            style="flex: 0 0 auto; background-color: var(--color-secondary)"
          >
            <template v-slot:subtitle>
              <v-icon class="hn" size="20">{{ project.extraicon }}</v-icon>
              <span class="sans pl-2" style="font-size: 12px">{{ project.extra }}</span>
            </template>
          </v-card-item>


          <!-- Description -->
          <div class="thin-scroll pt-1" style="flex: 1; min-height: 0; overflow-y: auto">
            <v-card-text class="sans pt-0 pb-1" style="font-size: 12px">
              {{ project.description }}
            </v-card-text>
          </div>
        </div>

        <v-divider />

        <!-- Skills -->
        <v-container
          class="thin-scroll d-flex flex-row ga-2"
          style="
            flex: 0 0 40px;
            height: 40px;
            align-items: center;
            overflow-x: auto;
            overflow-y: hidden;
            flex-wrap: nowrap;
          "
        >
          <v-chip
            v-for="skill in project.skills"
            :key="skill"
            class="sans skill-chip opacity-90 pl-1 pr-1 pt-0 pb-0"
            style="flex-shrink: 0; font-size: 12px"
            color="ck-accent"
            text-color="ck-supportingaccent"
            variant="flat"
            label
          >
            {{ skill }}
          </v-chip>
        </v-container>
      </v-card>
    </div>
  </v-container>

  <!-- EMPTY STATE -->
  <v-container v-else class="d-flex flex-column align-center justify-center pa-0 ma-0 projectBox" fluid>
      <v-container
        class="d-flex flex-column justify-center align-center text-center"
      >
        <span class="sans text-h3" style="color: var(--color-primary)">
          Please Select a Project
        </span>
     <div class="pt-5">
      <v-btn size="50" class="bg-transparent " flat>
        <v-icon @click="scrollTo('project-selection')" class="hn" size="50" style="color: var(--color-text)">
          hn-arrow-circle-down-solid
        </v-icon>
      </v-btn>
      </div>
      </v-container>
  </v-container>
</template>

<style scoped>
.skill-chip :deep(.v-chip__content) {
  color: var(--color-supportingaccent);
}
.thin-scroll {
  scrollbar-width: thin;
}
.thin-scroll::-webkit-scrollbar {
  height: 4px;
}
.right {
  flex: 1;
  min-width: 0;
  height: auto;
  aspect-ratio: 16 / 9;
  width: 100%;
  display: flex;
}

.vid {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}
.left {
  width: 100%;
  flex: 0 0 40%;
  min-width: 0;
  min-height: 0;
  align-self: stretch;
}
.projectBox {
  width: 100%;
  height: auto;
  align-items: stretch;
  overflow: hidden;
  min-height: 360px;
  border: 1px solid var(--color-primary);
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
}
</style>
