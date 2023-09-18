<script setup lang="ts">
import {edenTreaty} from "@elysiajs/eden";
import {usePostsStore} from "~/store/posts";

const app = edenTreaty<App>('http://localhost:8000')
const postsState = usePostsStore()

const {data: postsFetch, postError} = await app.getPosts.get()
const {data: tags, tagError} = await app.getTags.get()

postsState.posts = postsFetch

const filteredPosts = computed(() => {
  if (postsState.tags.length > 0) {
    return postsState.getPostsWithTag(postsState.tags);
  } else {
    return postsState.posts
  }
});

</script>

<template>
  <div class="flex gap-2 justify-center">
    <tagsList :tags='tags'/>
    <div class="flex flex-col">
      <ul v-if="filteredPosts.length > 0">
        <li v-for="(post, index) in filteredPosts">
          <PostShort :post='post' :tags='tags'/>
        </li>
      </ul>
      <p class="w-[700px] h-full flex items-center justify-center " v-else>Ingen poster funnet.</p>
    </div>
  </div>
</template>

<style scoped>

</style>