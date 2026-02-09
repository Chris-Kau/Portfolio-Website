<script setup>
    defineProps(["company","date","role","description"])
</script>

<template>
    <v-card
        class="mx-auto"
        width="400"
        color="secondary"
        append-icon="mdi-open-in-new"
    >
        <template v-slot:subtitle>
            {{ role  }} • {{date}}
        </template>
        <template v-slot:title>
              <span class="font-weight-black">{{company}}</span>
        </template>
        <v-card-text class="sans bg-(--color-primary) text-(--color-paragraph-text) pt-4 h-full">
            {{description}}
        </v-card-text>
    </v-card>
</template>