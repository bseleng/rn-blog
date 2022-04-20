import State from "../types/State";

export   /*TODO check usecallback */
const getBlog = (state:State, blogPostId:number) => state.blogPosts.find(blogPost => blogPost.id === blogPostId)