<script setup lang="ts">

</script>

<template>
  <main>
    <div class="w-full flex flex-col items-center justify-center gap-20 h-max">
      <p class="text-center text-[3rem] font-bold p-5">Velkommen</p>
      <div class="flex gap-4 gap-4">
        <div class="bg-zinc-100 dark:bg-zinc-800 w-[20rem] h-[25rem] rounded-md flex flex-col justify-between items-center group hover:brightness-90 dark:hover:brightness-105">
          <p class="text-center w-full p-5 font-bold text-[22px] opacity-75 group-hover:opacity-90">Har du et spørsmål?</p>
          <button class="p-3 mb-3 rounded-md bg-zinc-200 dark:bg-zinc-600 hover:brightness-125 dark:hover:brightness-125">Still Spørsmål</button>
        </div>
        <div class="bg-zinc-100 dark:bg-zinc-800 w-[20rem] h-[25rem] rounded-md flex flex-col justify-between items-center transition group hover:brightness-90 dark:hover:brightness-105">
          <p class="text-center w-full p-5 font-bold text-[22px] group-hover:opacity-90 opacity-75 ">Ser du etter en post?</p>
          <button class="p-3 mb-3 rounded-md bg-zinc-200 dark:bg-zinc-600 hover:brightness-125 dark:hover:brightness-125">Se tilgjengelige poster</button>
        </div>
      </div>
    </div>
  </main>
</template>
