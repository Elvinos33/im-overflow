<script setup lang="ts">
const props = defineProps<{
  title: string,
  desc: string,
  upvotes: number,
  comments: number,
}>()

</script>

<template>
  <div class="flex border w-[700px] min-h-[125px] rounded-md border-neutral-400 dark:border-neutral-500 mb-5">
    <div class="flex flex-col bg-neutral-300 dark:bg-neutral-800 brightness-90 max-w-[10%] rounded-l-md justify-start">
      <div class="flex gap-2 p-2 items-center justify-center">
        <p>{{ upvotes }}</p>
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
        <div class="flex gap-2 p-2 items-center">
          <p>{{ comments }}</p>
          <div class="flex flex-col items-center justify-center">
            <button class="bg-neutral-300 dark:bg-neutral-800 rounded-md transition hover:brightness-110">
              <Icon name="mdi:comment"/>
            </button>
          </div>
        </div>
      </div>
    </div>
    <button class="w-full flex flex-col items-start p-3 h-full brightness-90 transition hover:brightness-100">
      <span class="font-bold text-[20px] mb-2">{{ title }}</span>
      <span class="py-1 px-2 text-slate-200 text-[12px] mb-2 bg-blue-600 rounded-full">JavaScript</span>
      <span class="text-start text-[15px] line-clamp-4">{{ desc }}</span>
    </button>
  </div>
</template>