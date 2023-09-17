<script setup lang="ts">
import {edenTreaty} from "@elysiajs/eden";
import {usePostsStore} from "~/store/posts";

const app = edenTreaty<App>('http://localhost:8000')
const postsState = usePostsStore()

const {data: postsFetch, postError} = await app.getPosts.get()
const {data: tags, tagError} = await app.getTags.get()

postsState.posts = postsFetch
const reactivePosts = computed(() => {
  return filteredPosts.value.map((post: any) => {
    return post;
  });
});

const filteredPosts = computed(() => {
  if (postsState.tags.length > 0) {
    return postsState.getPostsWithTag(postsState.tags);
  } else {
    return postsState.posts
  }
});


</script>

<template>

  <main class="">
    <div class="flex flex-col items-center justify-center">
      <div class="flex gap-2 justify-center">
        <tagsList :tags='tags'/>
        <div class="flex flex-col">
          <ul>
            <li v-for="(post, index) in reactivePosts">
              <PostShort :post='post' :tags='tags'/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>
