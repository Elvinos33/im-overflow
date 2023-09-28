<script setup lang="ts">
import {usePostsStore} from "~/store/posts";
import {postsFetch, tags} from "~/backend/data";

const route = useRoute()

const postsState = usePostsStore()
postsState.tags = []
postsState.posts = postsFetch
const post = computed(() => {
  return postsState.getPostsWithId(Number(route.params.id))
});
</script>

<template>
  <main class="flex flex-col items-center justify-center">
    <Post :post="post" :tags="tags"/>
  </main>
</template>
