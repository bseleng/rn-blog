export type blogPost = {
  author: string
  content: string
  id: number
}

type State = {
  blogPosts: blogPost[]
}

export default State