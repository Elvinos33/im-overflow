<script setup lang="ts">
import {edenTreaty} from "@elysiajs/eden";
import {usePostsStore} from "~/store/posts";

const app = edenTreaty<App>('http://localhost:8000')
const postsState = usePostsStore()

const {data: posts, postError} = await app.getPosts.get()
const {data: tags, tagError} = await app.getTags.get()

console.log(posts)
postsState.addItem(posts)
console.log(postsState.posts)

</script>

<template>
  <main class="">
    <div class="w-full flex flex-col items-center justify-center gap-20 h-max overflow-scroll">
      <div class="flex gap-4 w-full justify-center">
        <tagsList :tags='tags'/>
        <div class="flex flex-col">
          <ul>
            <li v-for="(post, index) in posts">
              <PostShort :post='post' :tags='tags'/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>
