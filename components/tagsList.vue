<script setup lang="ts">
import {usePostsStore} from "~/store/posts";

defineProps<{
  tags: { "id": number, "title": string },
}>()

const postState = usePostsStore()


</script>

<template>
  <div class="sticky top-[100px] h-[175px] flex flex-col rounded-md border-neutral-400 dark:border-neutral-500">
    <ul class="mb-2 px-2" v-for="(tag, index) in tags">
      <button
          @click="postState.addTag(tag.title)"
          v-bind:class="`min-w-[150px] rounded-md border border-neutral-400 dark:border-neutral-500 p-2 transition hover:brightness-90 ${postState.tags.includes(tag.title) ? 'bg-blue-500' : 'hover:bg-blue-300'} dark:hover:brightness-110`">
        {{ tag.title }}
      </button>
    </ul>

  </div>
</template>

