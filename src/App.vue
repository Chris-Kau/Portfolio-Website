<script setup lang="ts">
import Navbar from "./assets/Navbar.vue";
import { ref } from "vue";
import Projects from "@/assets/data/Projects.json";
import ExperienceCard from "./assets/ExperienceCard.vue";
import WorkExperienceData from "@/assets/data/WorkExperiences.json";
import ProjectCard from "./assets/ProjectCard.vue";
import ProjectViewBox from "./assets/ProjectViewBox.vue";
import TooltipBtn from "./assets/TooltipBtn.vue";
const currentProjectView = ref({});
const setProjectView = (project) => {
  currentProjectView.value = project;
};
</script>
<template>
  <v-app class="pa-0">
    <Navbar />
    <div class="scroll-container pt-0 pb-0">
      <v-row no-gutters class="d-flex">
        <v-col cols="2"> </v-col>

        <v-col cols="8" style="overflow: hidden">
          <v-main style="padding: 0 24px; margin: 0 auto">
            <section id="about">
              <v-container class="d-flex align-center pb-16">
                <div class="sans flex-1" style="max-width: 600px">
                  <div>
                    <p
                      class="sans text-subtitle-2 ml-1"
                      style="
                        color: var(--color-text);
                        background-color: var(--color-accent);
                        width: fit-content;
                      "
                    >
                      Software Engineer
                    </p>
                    <p class="sans text-h4 font-weight-semibold">
                      <span style="color: var(--color-secondary)">Hello, I'm </span>
                      <span
                        style="
                          color: var(--color-text);
                          background-color: var(--color-accent);
                        "
                        >Chris Kau</span
                      >
                    </p>
                    <p
                      class="sans pt-2 text-subtitle-2 max-w-130"
                      style="color: var(--color-secondary)"
                    >
                      I'm a student at California State University of Long Beach and I
                      enjoy building projects that are genuinely useful to people. This
                      includes quality-of-life game mods that improve the player
                      experience, and practical web applications that are impactful to
                      other people!
                    </p>
                  </div>
                  <v-container class="social-icons d-flex flex-row ga-md-7 ps-1">
                    <v-tooltip class="pa-0" location="bottom" text="Resume">
                      <template v-slot:activator="{ props }">
                        <v-btn
                          v-bind="props"
                          height="50"
                          class="resume-btn text-white"
                          variant="tonal"
                        >
                          View Resume
                          <v-icon size="20" class="ms-2 text-white">
                            mdi-file-document
                          </v-icon>
                        </v-btn>
                      </template>
                    </v-tooltip>

                    <TooltipBtn
                      text="Github"
                      location="bottom"
                      link="https://github.com/Chris-Kau"
                      icon="mdi-github"
                      size="50"
                    />
                    <TooltipBtn
                      text="LinkedIn"
                      location="bottom"
                      link="https://www.linkedin.com/in/chris-kau/"
                      icon="mdi-linkedin"
                      size="50"
                    />
                    <TooltipBtn
                      text="chriskau04@gmail.com"
                      location="bottom"
                      link="mailto:chriskau04@gmail.com?subject=Portfolio%20Contact"
                      icon="mdi-email"
                      size="50"
                    />
                  </v-container>
                </div>
                <div class="image-wrapper">
                  <img
                    src="./assets/images/oshawott shadow.png"
                    class="shadow-overlay mt-7 ml-6"
                    alt=""
                    aria-hidden="true"
                    style="width: 100%"
                  />
                  <img
                    src="./assets/images/about oshawott.png"
                    class="main-img"
                    alt="Oshawott illustration"
                    style="width: 100%"
                  />
                </div>
              </v-container>
            </section>
            <v-divider />

            <section id="experience">
              <v-container class="">
                <p
                  class="mono text-h4 font-weight-bold text-(--color-text) mb-10 text-center"
                >
                  Work Experience
                </p>
                <v-container class="d-flex flex-row align-center justify-center">
                  <div class="flex-1 justify-center">
                    <div class="d-flex justify-center align-center mb-4">
                      <v-badge
                        location="center"
                        class="present-badge"
                        text-color="ck-accent"
                        color="ck-supportingaccent"
                        content="present"
                        height="35"
                        width="100"
                      >
                      </v-badge>
                    </div>
                    <v-timeline align="start" line-color="ck-supportingaccent">
                      <v-timeline-item
                        v-for="(item, i) in WorkExperienceData"
                        :key="i"
                        icon="mdi-briefcase-outline"
                        icon-color="ck-supportingaccent"
                        fill-dot
                        dot-color="ck-accent"
                      >
                        <ExperienceCard
                          :href="item.link"
                          target="_blank"
                          :company="item.company"
                          :role="item.role"
                          :date="item.date"
                          :description="item.description"
                          :skills="item.skills"
                        />
                      </v-timeline-item>
                    </v-timeline>
                  </div>
                </v-container>
              </v-container>
            </section>

            <v-divider />

            <section id="projects">
              <v-container class="" max-width="95%">
                <p
                  class="mono text-h4 font-weight-bold text-(--color-text) mt-0 pt-0 text-center"
                >
                  Projects
                </p>
                <v-container class="d-flex flex-row" max-width="100%">
                  <v-container
                    class="pa-0 d-flex"
                    width="500"
                    height="500"
                    style="max-width: 500px; max-height: 500px"
                  >
                    <ProjectViewBox :project="currentProjectView || {}"></ProjectViewBox>
                  </v-container>
                  <v-container
                    class="d-flex flex-column ga-5 pt-0 pb-0 pr-5"
                    style="overflow-y: auto; max-height: 500px; width: fit-content"
                  >
                    <ProjectCard
                      v-for="(item, i) in Projects"
                      :key="i"
                      :project="item"
                      @click="setProjectView(item)"
                      style="flex-shrink: 0"
                    />
                  </v-container>
                </v-container>
              </v-container>
            </section>

            <v-divider />

            <section id="skills">
              <v-container class="py-16">
                <img src="./assets/images/about oshawott.png" />
              </v-container>
            </section>

            <v-divider />

            <section id="contact">
              <v-container class="py-16">
                <img src="./assets/images/about oshawott.png" />
              </v-container>
            </section>
          </v-main>
        </v-col>

        <v-col cols="2"> </v-col>
      </v-row>
    </div>
  </v-app>
</template>

<style scoped>
section {
  scroll-margin-top: 0px;
}
.resume-btn {
  background: var(--color-secondary);
  transition: color 0.2s;
}

.resume-btn:hover {
  transform: scale(1.1);
}

.image-wrapper {
  position: relative;
  width: fit-content;
}

.main-img {
  display: block;
  position: relative;
  z-index: 2;
}

.shadow-overlay {
  position: absolute;
  opacity: 0.5;
  z-index: 1;
}

.present-badge :deep(.v-badge__badge) {
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-family: "Roboto Mono", monospace;
}

.scroll-container {
  height: calc(100vh - 85px);
  margin-top: 60px;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;
  scrollbar-color: var(--color-supportingaccent) transparent;
}

.scroll-container::-webkit-scrollbar {
  width: 10px;
}
.scroll-container::-webkit-scrollbar-track {
  background: transparent;
}
.scroll-container::-webkit-scrollbar-thumb {
  background-color: var(--color-accent);
  border-radius: 8px;
}
</style>
