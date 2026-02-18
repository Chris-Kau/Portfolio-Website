<script setup lang="ts">
import Navbar from "@/assets/Navbar.vue";
import { ref, onMounted } from "vue";
import { useDisplay } from "vuetify";
import Projects from "@/assets/data/Projects.json";
import ExperienceCard from "@/assets/ExperienceCard.vue";
import WorkExperienceData from "@/assets/data/WorkExperiences.json";
import CurrentTechStack from "@/assets/data/CurrentTechStack.json";
import ProjectCard from "@/assets/ProjectCard.vue";
import ProjectViewBox from "@/assets/ProjectViewBox.vue";
import TooltipBtn from "@/assets/TooltipBtn.vue";
import ProjectViewBoxMobile from "@/assets/ProjectViewBoxMobile.vue";
import SkillCard from "@/assets/SkillCard.vue";
const { mdAndUp } = useDisplay();
const currentProjectView = ref({});
const setProjectView = (project) => {
  currentProjectView.value = project;
};
const snackbar = ref(false);
const snackbarTimeout = ref(1500);
const swapEmailIcon = ref(false);
const copyEmail = async () => {
  await navigator.clipboard.writeText("chriskau04@gmail.com");
  if (swapEmailIcon.value === false) {
    swapEmailIcon.value = true;
    snackbar.value = true;
    setTimeout(() => {
      swapEmailIcon.value = false;
    }, 1000);
  }
};
const showAbout = ref(false);
const showTechStack = ref(false);
const showExperience = ref(false);
const showProjects = ref(false);
const showShells = ref(false);

onMounted(() => {
  setTimeout(() => (showAbout.value = true), 200);
  setTimeout(() => (showTechStack.value = true), 400);

  setTimeout(() => (showExperience.value = true), 600);
  setTimeout(() => (showProjects.value = true), 800);
  setTimeout(() => (showShells.value = true), 1000);
});
</script>
<template>
  <v-app class="pa-0 pb-0 mb-0" style="letter-spacing:0.5px">
    <Navbar />
    <v-snackbar
      v-model="snackbar"
      :timeout="snackbarTimeout"
      location="top"
      color="secondary"
      variant="flat"
      content-class="d-flex justify-center text-center"
    >
      <span class="sans" style="color: white; font-size: 20px">
        Copied to Clipboard
      </span>
      <template v-slot:actions>
        <v-icon color="green" size="30">mdi-check-bold</v-icon>
      </template>
    </v-snackbar>
    <div class="scroll-container pt-0 pb-0">
      <v-row no-gutters class="d-flex">
        <v-col cols="2" class="side-column d-none d-md-flex">
          <v-expand-transition>
            <div v-if="showShells" class="scalchop-wrapper">
              <img
                v-for="n in 6"
                :key="n"
                src="./assets/images/pixel_scalchop_thicker.png"
                class="scalchop"
                alt="pixel scalchop"
              />
            </div>
          </v-expand-transition>
        </v-col>

        <v-col cols="12" md="8">
          <v-main style="padding-bottom: 0px; margin: 0 auto">
            <!-- 
          About me Section 
          -->
            <section id="about">
              <v-slide-x-transition appear>
                <v-container
                  v-if="showAbout"
                  class="d-flex pr-0 align-center justify-center pb-10 w-100 w-md-70 fade"
                >
                  <div class="sans flex-1" style="max-width: 500px">
                      <p
                        class="sans ml-1"
                        style="
                          color: var(--color-text);
                          background-color: var(--color-accent);
                          width: fit-content;
                          font-size: 18px;
                        "
                      >
                        Software Engineer | Based in California
                      </p>
                      <p class="mono" style="font-size: 36px">
                        <span style="color: var(--color-secondary)">Hello, I'm </span>
                        <span style="color: var(--color-text)">Chris Kau</span>
                      </p>
                      <p
                        class="sans"
                        style="color: var(--color-secondary); font-size: 20px"
                      >
                        I'm a student at
                        <a class="ahref" href="https://www.csulb.edu/" target="_blank"
                          >CSULB</a
                        >
                        and a
                        <span
                          style="
                            color: var(--color-text);
                            background-color: var(--color-accent);
                          "
                        >
                          Full-Stack SWE</span
                        >
                        @
                        <a class="ahref" href="https://g2ss.com/" target="_blank"
                          >G2 Software Systems</a
                        >. Being able to create software that has an impact on users is
                        what keeps me going!
                      </p>
                    <v-container
                      class="social-icons d-flex flex-row ga-md-7 ga-sm-3 ps-1"
                    >
                      <v-tooltip
                        class="sans pa-0"
                        location="bottom"
                        text="Resume"
                        content-class="custom-tooltip"
                        :transition="false"
                        close-delay="0"
                      >
                        <template v-slot:activator="{ props }">
                          <v-btn
                            v-bind="props"
                            height="50"
                            class="resume-btn text-white"
                            variant="tonal"
                            href="./PortfolioResume.pdf"
                            target="_blank"
                          >
                            View Resume
                            <v-icon size="20" class="ms-2 hn text-white">
                              hn-writing
                            </v-icon>
                          </v-btn>
                        </template>
                      </v-tooltip>

                      <TooltipBtn
                        text="Github"
                        location="bottom"
                        link="https://github.com/Chris-Kau"
                        icon="hn-github"
                        size="50"
                      />
                      <TooltipBtn
                        text="LinkedIn"
                        location="bottom"
                        link="https://www.linkedin.com/in/chris-kau/"
                        icon="hn-linkedin"
                        size="50"
                      />
                      <span @click="copyEmail">
                        <TooltipBtn
                          text="chriskau04@gmail.com"
                          location="bottom"
                          link=""
                          :icon="
                            !swapEmailIcon ? 'hn-envelope-solid' : 'hn-clipboard-solid'
                          "
                          size="50"
                        />
                      </span>
                    </v-container>
                  </div>
                  <div
                    v-if="mdAndUp"
                    class="d-flex pl-10 flex-shrink-0"
                    style="width: fit-content"
                  >
                    <img
                      src="./assets/images/oshawott logo.png"
                      alt="oshawott logo"
                      style="width: 250px; height: auto"
                    />
                  </div>
                </v-container>
              </v-slide-x-transition>
              <!-- Current Tech Stack -->
               <v-slide-x-reverse-transition appear>
                <v-container v-if="showTechStack" class="pa-0 pb-5">
                <span
                  class="mono d-flex align-center ga-3"
                  style="color: var(--color-secondary); font-size: 48px"
                >
                  <v-icon class="hn" size="25">hn-programming</v-icon>
                  Current Tech Stack
                </span>
                <v-divider thickness="3" opacity="100" style="color: var(--color-secondary)"></v-divider>
                <v-container
                  class="thin-scroll d-flex flex-wrap flex-row ga-4 pa-0 pt-5"
                  style="width: 100%"
                >
                  <SkillCard
                    v-for="(item, i) in CurrentTechStack"
                    :skill="item"
                    style="flex-shrink: 0"
                  />
                </v-container>
              </v-container>
              </v-slide-x-reverse-transition>

            </section>

            <!-- 
          Experience Section 
          -->
            <section id="experience">
              <v-slide-x-transition appear class="experience-slide">
                <v-container
                  class="pa-0 pb-10 fade"
                  max-width="100%"
                  v-if="showExperience"
                >
                  <p
                    class="mono text-left"
                    style="color: var(--color-secondary); font-size: 48px"
                  >
                    <span class="d-flex align-center ga-3">
                      <v-icon class="hn" size="25">hn-business</v-icon>
                      Work Experience
                    </span>
                    <v-divider thickness="3" opacity="100"></v-divider>
                  </p>
                  <v-container
                    class="d-flex flex-row align-center justify-center pa-0 pt-5"
                    style="max-width: 100%; width: 100%"
                  >
                    <div
                      class="justify-center d-flex flex-row"
                      style="
                        max-width: 100%;
                        width: 100%;
                        flex: 0 0 auto;
                        overflow-x: auto;
                        overflow-y: hidden;
                      "
                    >
                      <v-timeline
                        align="start"
                        side="start"
                        direction="horizontal"
                        line-color="ck-supportingaccent"
                      >
                        <v-timeline-item
                          v-for="(item, i) in WorkExperienceData"
                          :key="i"
                          icon="mdi-briefcase-outline"
                          icon-color="ck-supportingaccent"
                          fill-dot
                          dot-color="ck-accent"
                        >
                          <ExperienceCard
                            target="_blank"
                            :company="item.company"
                            :role="item.role"
                            :date="item.date"
                            :description="item.description"
                            :skills="item.skills"
                            :link="item.link"
                          />
                        </v-timeline-item>
                      </v-timeline>
                    </div>
                  </v-container>
                </v-container>
              </v-slide-x-transition>
            </section>
            <!-- 
          Projects Section 
          -->
            <section id="projects">
              <v-slide-x-reverse-transition appear class="projects-slide">
                <v-container
                  v-if="showProjects"
                  class="pa-0 fade"
                  max-width="100%"
                  style="margin-bottom: 100px"
                >
                  <p
                    class="mono text-left"
                    style="color: var(--color-secondary); font-size: 48px"
                  >
                    <span class="d-flex align-center ga-3">
                      <v-icon class="hn" size="25">hn-sparkles-solid</v-icon>
                      Projects
                    </span>
                    <v-divider thickness="3" opacity="100"></v-divider>
                  </p>
                  <v-container class="d-flex flex-column ga-8" max-width="100%">
                    <v-container
                      v-if="mdAndUp"
                      class="d-flex justify-center"
                      style="max-width: 90%"
                    >
                      <ProjectViewBox
                        :project="currentProjectView || {}"
                      ></ProjectViewBox>
                    </v-container>
                    <v-container v-else>
                      <ProjectViewBoxMobile
                        :project="currentProjectView || {}"
                      ></ProjectViewBoxMobile>
                    </v-container>
                    <section id="project-selection">
                      <v-container
                        class="thin-scroll d-flex flex-row align-center ga-5"
                        style="
                          overflow-y: auto;
                          overflow-x: auto;
                          max-height: 500px;
                          max-width: 100%;
                          width: fit-content;
                          border: 1px solid var(--color-primary);
                          background-color: transparent;
                          box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
                        "
                      >
                        <ProjectCard
                          v-for="(item, i) in Projects"
                          :key="i"
                          :project="item"
                          @click="setProjectView(item)"
                          style="flex-shrink: 0"
                        />
                      </v-container>
                    </section>
                  </v-container>
                </v-container>
              </v-slide-x-reverse-transition>
            </section>
          </v-main>
        </v-col>

        <v-col cols="2" class="side-column d-none d-md-flex">
          <v-expand-transition>
            <div v-if="showShells" class="scalchop-wrapper">
              <img
                v-for="n in 6"
                :key="n"
                src="./assets/images/pixel_scalchop_thicker.png"
                class="scalchop"
                alt="pixel scalchop"
              />
            </div>
          </v-expand-transition>
        </v-col>
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
  height: calc(100vh - 60px);
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
a.ahref {
  all: unset;
  cursor: pointer;
  text-decoration-line: underline;
  text-decoration-style: dashed;
  transition: color 0.2s, background-color 0.2s;
}

a.ahref:hover {
  background-color: var(--color-secondary);
  color: var(--color-background);
  text-decoration-line: none;
}

.thin-scroll {
  scrollbar-width: thin;
}
.thin-scroll::-webkit-scrollbar {
  height: 4px;
}
:deep(.custom-tooltip) {
  font-size: 18px !important;
  letter-spacing: 1px !important;
  border-radius: 0 !important;
}
.custom-square-dot {
  width: 14px;
  height: 14px;
  background: var(--color-accent);
}
.side-column {
  display: flex;
  justify-content: center;
}

.scalchop-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* 1 per row, evenly spaced */
  height: 100%;
}

.scalchop {
  width: 150px; /* adjust size */
  height: auto;
  image-rendering: pixelated;
}
.w-md-70 {
  width: 70%;
}
@media (max-width: 959px) {
  /* < md */
  .w-md-70 {
    width: 100%;
  }
}

:deep(.about-slide-enter-active) {
  transition-delay: 400ms;
}
:deep(.about-slide-leave-active) {
  transition-delay: 0ms;
}
</style>
