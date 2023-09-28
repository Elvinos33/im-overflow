import {edenTreaty} from "@elysiajs/eden";

//Fetch API
const app = edenTreaty<App>('http://localhost:8000')
export const {data: postsFetch, postError} = await app.getPosts.get()
export const {data: tags, tagError} = await app.getTags.get()
