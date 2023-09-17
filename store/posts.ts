export const usePostsStore = defineStore('posts', {
    state: () => {
        return {
            posts: [],
            tags: []
        }
    },
    actions: {
        rest() {
            this.posts = []
        },
        addPost(item: any) {
            this.posts.push(item);
        },
        addTag(item: any) {
            if (!this.tags.includes(item)) {
                this.tags.push(item);

            } else {
                this.tags = this.tags.filter(function (letter) {
                    return letter !== item;
                })
            }
            console.log(toRaw(this.posts))
        },
    },
    getters: {
        getPostsWithTag: (state) => {
            return (tagIds: number[]) => {
                return state.posts.filter((post) => {
                    return tagIds.some((tagId) => post.tags.includes(tagId));
                });
            };
        }
    }
})
