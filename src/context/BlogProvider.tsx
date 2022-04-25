import React from "react";
import ActionTypes from "./ActionTypes";
import State, {blogPost} from "../types/State";
import Action from "../types/Action";
import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const reducer = (state: State, {type, payload}: Action) => {
  switch (type) {
    case ActionTypes.ADD_POST:
      return {...state, blogPosts: [{...payload, id: Math.floor(Math.random() * 999999)}, ...state.blogPosts]}
    case ActionTypes.REMOVE_POST:
      return {...state, blogPosts: state.blogPosts.filter(blogPost => blogPost.id !== payload.id)}
    case ActionTypes.EDIT_POST:
      const draftBlogPosts = state.blogPosts.map(blogPost => blogPost.id === payload.id ? {...payload} : blogPost)
      return {...state.blogPosts, blogPosts: draftBlogPosts}
    case ActionTypes.GET_BLOG_POSTS:
      return {...state, blogPosts: payload}
    default:
      return state
  }
}

const initialState = {
  blogPosts: [
    {
      author: 'William Shatner',
      content: 'Failed SAT. Lost scholarship. Invented rocket.',
      id: 1
    },
    {
      author: 'Eileen Gunn',
      content: 'Computer, did we bring batteries? Computer?',
      id: 2
    },
    {
      author: 'David Brin',
      content: 'Vacuum collision. Orbits diverge. Farewell, love.',
      id: 3
    },
    {
      author: 'Joss Whedon',
      content: 'Gown removed carelessly. Head, less so.',
      id: 4
    },
    {
      author: 'Stan Lee',
      content: 'Automobile warranty expires. So does engine.',
      id: 5
    },
    {
      author: 'Alan Moore',
      content: 'Machine. Unexpectedly, I’d invented a time',
      id: 6
    },
    {
      author: 'Margaret Atwood',
      content: 'Longed for him. Got him. Shit.',
      id: 7
    },
    {
      author: 'Rudy Rucker',
      content: 'His penis snapped off; he’s pregnant!',
      id: 8
    },
    {
      author: 'Gregory Maguire',
      content: 'From torched skyscrapers, men grew wings.',
      id: 9
    },
    {
      author: 'Charles Stross',
      content: 'Internet “wakes up?” Ridicu- \nno carrier.',
      id: 10
    },
    {
      author: 'Frank Miller',
      content: 'With bloody hands, I say good-bye.',
      id: 11
    },
    {
      author: 'Steven Meretzky',
      content: 'Wasted day. Wasted life. Dessert, please.',
      id: 12
    },
    {
      author: 'Ronald D. Moore',
      content: '“Cellar?” “Gate to, uh … hell, actually.”',
      id: 13
    },
    {
      author: 'Vernor Vinge',
      content: 'Epitaph: Foolish humans, never escaped Earth.',
      id: 14
    },
    {
      author: 'Bruce Sterling',
      content: 'It cost too much, staying human.',
      id: 15
    },
    {
      author: 'James Patrick Kelly',
      content: 'We kissed. She melted. Mop please!',
      id: 16
    },
  ]
};

const addTestData = (dispatch: React.Dispatch<Action>) => {
  return () => dispatch(
    {
      type: ActionTypes.ADD_POST,
      payload: {
        author: 'Ivan',
        content: 'A simple guy.',
        id: 0
      }
    }
  )
}

const deleteBlogPost = (dispatch: React.Dispatch<Action>) => {
  return (id: number) => dispatch(
    {
      type: ActionTypes.REMOVE_POST,
      payload: {id}
    }
  )
}

const addBlogPost = (dispatch: React.Dispatch<Action>) => {
  return (payload: blogPost) => dispatch(
    {
      type: ActionTypes.ADD_POST,
      payload
    }
  )
}

const editBlogPost = (dispatch: React.Dispatch<Action>) => {
  return(payload:blogPost) => dispatch(
    {
      type: ActionTypes.EDIT_POST,
      payload
    }
  )
}

const getBlogPosts = (dispatch: React.Dispatch<Action>) => {
  return async() => {
    const response = await jsonServer.get('/blogPosts')

    dispatch({
      type: ActionTypes.GET_BLOG_POSTS,
      payload: response.data
    })
  }
}

export const {Context, Provider} = createDataContext(reducer, {addTestData, deleteBlogPost, addBlogPost, editBlogPost, getBlogPosts}, initialState)