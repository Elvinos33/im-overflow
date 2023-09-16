<script setup lang="ts">
defineProps<{
  tags: { "id": number, "title": string },
}>()

</script>

<template>
  <div class="flex flex-col w-[175px] max-h-[300px] rounded-md border-neutral-400 dark:border-neutral-500">
    <ul class="py-1 px-2" v-for="(tag, index) in tags">
      <button
          class="min-w-[150px] rounded-md border border-neutral-400 dark:border-neutral-500 p-2 hover:brightness-90 dark:hover:brightness-110 ">
        {{ tag.title }}
      </button>
    </ul>

  </div>
</template>