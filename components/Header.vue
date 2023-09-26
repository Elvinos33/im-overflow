<script setup lang="ts">

</script>

<template>
  <header
      class="w-full flex sticky bg-neutral-300 dark:bg-neutral-800 z-10 top-0 justify-evenly items-center p-2 border-b border-neutral-400 dark:border-neutral-700 mb-10">
    <div class="flex">
      <NuxtLink to="/" class="font-extrabold text-[25pxrem]">IM-Overflow</NuxtLink>
    </div>
    <div class="flex w-max">
      <FormKit
          className="p-2 w-[400px] focus:outline-none focus:border-blue-400 rounded-md bg-transparent border border-neutral-400 dark:border-neutral-700"
          type="text"
          name="search"
          id="search"
          placeholder="Søk..."
      />
    </div>
    <div class="flex gap-4">
      <button class="transition hover:border-b-[3px]">Log Inn</button>
      <div class="border-[1px] light:bg-black rounded-md"></div>
      <button class="transition hover:border-b-[3px]">Registrer</button>
    </div>
  </header>
</template>
