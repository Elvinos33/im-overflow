<script setup lang="ts">
defineProps<{
  tags: { "id": number, "title": string },
}>()

</script>

<template>
  <div class="flex flex-col border w-[175px] max-h-[300px] rounded-md border-neutral-400 dark:border-neutral-500">
    <ul class="py-1 px-2" v-for="(tag, index) in tags">
      <button>
        {{ tag.title }}
      </button>
    </ul>

  </div>
</template>

<style scoped>

</style>