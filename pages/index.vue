<script setup lang="ts">
import {edenTreaty} from "@elysiajs/eden";

const app = edenTreaty<App>('http://localhost:8000')

const {data: posts, error} = await app.getPosts.get()


</script>

<template>
  <main class="">
    <div class="w-full flex flex-col items-center justify-center gap-20 h-max overflow-scroll">
      <div class="flex gap-4 gap-4 w-full justify-center">
        <div class="flex flex-col">
          <ul>
            <li v-for="(post, index) in posts">
              <PostShort :title='post.title' :desc='post.content' :upvotes='post.upvotes'
                         :comments='post.comments'/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>
