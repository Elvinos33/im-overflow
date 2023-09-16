export const usePostsStore = defineStore('posts', {
    state: () => {
        return {
            posts: [],
        }
    },
    actions: {
        rest() {
            this.posts = []
        },
        addItem(item: any) {
            this.posts.push(item);
        }
    },
    getters: {
        getPostsWithTag: (state) => {
            return (tagId: number) => state.posts.filter((post) => post.tags === tagId)
        }
    }
})