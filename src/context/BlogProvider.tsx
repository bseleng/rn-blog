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
  blogPosts: []
};

const addTestData = (dispatch: React.Dispatch<Action>) => {
  return async () => {
    const testPayload =  {
        author: 'Ivan',
        content: 'A simple guy.',
      }
    const {data} = await jsonServer.post('/blogPosts', testPayload)
  }
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
  return async(payload: blogPost) => {
    const {data} = await jsonServer.post('/blogPosts', payload)

    // dispatch(
    //   {
    //     type: ActionTypes.ADD_POST,
    //     payload
    //   }
    // )
  }
}

const editBlogPost = (dispatch: React.Dispatch<Action>) => {
  return async (payload:blogPost) => {

    dispatch(
      {
        type: ActionTypes.EDIT_POST,
        payload
      }
    )
  }
}

const getBlogPosts = (dispatch: React.Dispatch<Action>) => {
  return async() => {
    const {data} = await jsonServer.get('/blogPosts')

    dispatch({
      type: ActionTypes.GET_BLOG_POSTS,
      payload: data
    })
  }
}

export const {Context, Provider} = createDataContext(reducer, {addTestData, deleteBlogPost, addBlogPost, editBlogPost, getBlogPosts}, initialState)