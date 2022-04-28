import React from "react";
import ActionTypes from "./ActionTypes";
import State, {blogPost} from "../types/State";
import Action from "../types/Action";
import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const reducer = (state: State, {type, payload}: Action) => {
  switch (type) {
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
  blogPosts: []
};

const addTestData = () => {
  return async () => {
    const testPayload = {
      author: 'Ivan',
      content: 'A simple guy.',
    }
    const {status} = await jsonServer.post('/blogPosts', testPayload)
    return status
  }
}

const deleteBlogPost = (dispatch: React.Dispatch<Action>) => {
  return async (id: number) => {
    const {status} = await jsonServer.delete('/blogPosts/' + id)
    dispatch(
      {
        type: ActionTypes.REMOVE_POST,
        payload: {id}
      }
    )
    return status
  }
}

const addBlogPost = () => {
  return async (payload: blogPost) => {
    const {status} = await jsonServer.post('/blogPosts', payload)
    return status
  }
}

const editBlogPost = (dispatch: React.Dispatch<Action>) => {
  return async (payload: blogPost) => {
    const {status} = await jsonServer.put('/blogPosts/' + payload.id, payload)
    dispatch(
      {
        type: ActionTypes.EDIT_POST,
        payload
      }
    )
    return status
  }
}

const getBlogPosts = (dispatch: React.Dispatch<Action>) => {
  return async () => {
    const {data} = await jsonServer.get('/blogPosts')

    dispatch({
      type: ActionTypes.GET_BLOG_POSTS,
      payload: data
    })
  }
}

export const {Context, Provider} = createDataContext(reducer, {
  addTestData,
  deleteBlogPost,
  addBlogPost,
  editBlogPost,
  getBlogPosts
}, initialState)