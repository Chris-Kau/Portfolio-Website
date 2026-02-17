<script setup>
const props = defineProps(["project"]);
import ProjectTooltipBtn from "./ProjectTooltipBtn.vue";
</script>

<template>
<v-container
  v-if="project.name"
  class="d-flex flex-row pa-0 ma-0 projectBox"
  fluid
>
    <!-- LEFT SIDE (40%) -->
    <div
      class="d-flex flex-column left"
      style="
        border-right: 1px solid var(--color-primary);
      "
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
            class="pt-1 pl-1 pb-0 text-white"
            style="flex: 0 0 auto; background-color: var(--color-secondary)"
          >
            <v-container class="d-flex flex-row align-center pa-0">
              <v-card-text class="mono text-h5 pt-0 pb-0 ma-0">
                {{ project.name }}
              </v-card-text>

              <div class="project-social-icons pa-0">
                <ProjectTooltipBtn
                  v-for="(item, i) in project.links"
                  :key="i"
                  :text="item.name"
                  location="bottom"
                  :icon="item.icon"
                  :link="item.link"
                  size="30"
                />
              </div>
            </v-container>
          </v-card-item>

          <!-- Extra Detail -->
          <v-card-item
            v-if="project.extra !== ''"
            class="d-flex flex-row align-center pb-2 pt-0 text-white"
            style="flex: 0 0 auto; background-color: var(--color-secondary)"
          >
            <template v-slot:subtitle>
              <v-icon class="hn" size="20">{{ project.extraicon }}</v-icon>
              <span class="sans pl-2" style="font-size:18px">{{ project.extra }}</span>
            </template>
          </v-card-item>

          <v-divider />

          <!-- Description -->
          <div class="thin-scroll pt-1" style="flex: 1; min-height: 0; overflow-y: auto">
            <v-card-text class="sans pt-0 pb-1" style="font-size:18px">
              {{ project.description }}
            </v-card-text>
          </div>
        </div>

        <v-divider />

        <!-- Skills -->
        <v-container
          class="thin-scroll d-flex flex-row ga-2"
          style="
            flex: 0 0 55px;
            height: 55px;
            align-items: center;
            overflow-x: auto;
            overflow-y: hidden;
            flex-wrap: nowrap;
          "
        >
          <v-chip
            v-for="skill in project.skills"
            :key="skill"
            class="sans skill-chip opacity-90"
            style="flex-shrink: 0; font-size:18px"
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
  </v-container>

  <!-- EMPTY STATE -->
  <v-container
  v-else
    class="d-flex flex-row pa-0 ma-0 projectBox"
    fluid
  >
    <v-container
      class="d-flex flex-column justify-center align-center text-center"
      style="width: 100%; height: 100%; flex: 1"
    >
      <span class="sans text-h3" style="color: var(--color-primary)">
        Please Select a Project
      </span>
      <v-icon class="hn" size="50" style="padding-top: 50px; color: var(--color-text)">
        hn-arrow-circle-down-solid
      </v-icon>
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

  display: flex;
}

.vid {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}
.left {
  width: 30%;
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
  min-height: 360px; /* optional safety for small widths */
  border: 1px solid var(--color-primary);
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
}
</style>
