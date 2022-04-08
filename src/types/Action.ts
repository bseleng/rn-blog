import ActionTypes from "../context/ActionTypes";
import {blogPost} from "./State";

type Action =
  | {type: ActionTypes.ADD_POST, payload: blogPost}

export  default  Action