import ActionTypes from "../context/ActionTypes";
import {blogPost} from "./State";

type Action =
  | {type: ActionTypes.ADD_POST, payload: blogPost}
  | {type: ActionTypes.REMOVE_POST, payload: {id: number}}
  | {type: ActionTypes.EDIT_POST, payload: blogPost}
  | {type: ActionTypes.GET_BLOG_POSTS, payload: blogPost[]}

export  default  Action