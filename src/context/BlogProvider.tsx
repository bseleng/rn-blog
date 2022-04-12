import React from "react";
import ActionTypes from "./ActionTypes";
import State from "../types/State";
import Action from "../types/Action";
import createDataContext from "./createDataContext";

const reducer = (state: State, {type, payload}: Action) => {
  switch (type) {
    case ActionTypes.ADD_POST:
      const beforeId = state.blogPosts[0].id - 1
      const afterId = state.blogPosts[state.blogPosts.length - 1].id + 1
      return {...state, blogPosts: [{...payload, id: beforeId}, ...state.blogPosts]}
    case ActionTypes.REMOVE_POST:
      return {...state, blogPosts: state.blogPosts.filter(blogPost => blogPost.id !== payload.id)}
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

const deleteBlogPost = (dispatch: React.Dispatch<Action>, id: number) => {
  return () => dispatch(
    {
      type: ActionTypes.REMOVE_POST,
      payload: {id}
    }
  )
}

export const {Context, Provider} = createDataContext(reducer, {addTestData, deleteBlogPost}, initialState)