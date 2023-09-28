<script setup lang="ts">
import {usePostsStore} from "~/store/posts";
import {tags, postsFetch} from "~/backend/data";

const postsState = usePostsStore()
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
