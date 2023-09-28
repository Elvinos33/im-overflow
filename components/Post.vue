<script setup lang="ts">
const props = defineProps<{
  post: { "id": number, "title": string, "content": string, "upvotes": number, "comments": number, tags: string[] }
  tags: { "id": number, "title": string },

}>()
</script>

<template>
  <div class="flex border w-[800px] min-h-[125px] rounded-md border-neutral-400 dark:border-neutral-500 mb-5">
    <div class="flex flex-col bg-neutral-300 dark:bg-neutral-800 brightness-90 max-w-[10%] rounded-l-md justify-between">
      <div class="flex gap-2 p-2 items-center justify-center">
        <p>{{ post.upvotes }}</p>
        <div class="flex flex-col items-center">
          <button class="bg-neutral-300 dark:bg-neutral-800 rounded-md transition hover:brightness-110 ">
            <Icon class="text-blue-400 " name="material-symbols:keyboard-arrow-up-rounded"/>
          </button>
          <button class="bg-neutral-300 dark:bg-neutral-800 rounded-md transition hover:brightness-110 ">
            <Icon name="material-symbols:keyboard-arrow-down-rounded"/>
          </button>
        </div>
      </div>
      <div>
        <div class="flex gap-2 p-2 items-center transition">
          <span>{{ post.comments }}</span>
          <Icon name="mdi:comment"/>
        </div>
      </div>
    </div>
    <div
        class="text-start w-full flex flex-col items-start p-3 h-full transition">
      <span class="font-bold text-[20px]">{{ post.title }}</span>
      <ul class="flex gap-2 my-1">
        <li v-for="(tag, index) in post.tags">
          <span class="py-1 px-2 text-slate-200 text-[12px] mb-2 bg-blue-600 rounded-full">{{ tag }}</span>
        </li>
      </ul>
      <span class="text-[15px]">{{ post.content }}</span>
    </div>
  </div>
</template>

<style scoped>

</style>