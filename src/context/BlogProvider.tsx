import React, {useReducer} from "react";
import ActionTypes from "./ActionTypes";
import State from "../types/State";
import Action from "../types/Action";

interface IProps {
  children: React.ReactNode;
}


const reducer = (state: State, {type, payload}: Action) => {
  switch (type) {
    case ActionTypes.ADD_POST:
      return {...state, blogPosts: [payload, ...state.blogPosts ]}
    default:
      return state
  }
}

const initialState = {
  blogPosts: [
    {
      author: 'William Shatner',
      content: 'Failed SAT. Lost scholarship. Invented rocket.',
    },
    {
      author: 'Eileen Gunn',
      content: 'Computer, did we bring batteries? Computer?',
    },
    {
      author: 'David Brin',
      content: 'Vacuum collision. Orbits diverge. Farewell, love.',
    },
    {
      author: 'Joss Whedon',
      content: 'Gown removed carelessly. Head, less so.',
    },
    {
      author: 'Stan Lee',
      content: 'Automobile warranty expires. So does engine.',
    },
    {
      author: 'Alan Moore',
      content: 'Machine. Unexpectedly, I’d invented a time',
    },
    {
      author: 'Margaret Atwood',
      content: 'Longed for him. Got him. Shit.',
    },
    {
      author: 'Rudy Rucker',
      content: 'His penis snapped off; he’s pregnant!',
    },
    {
      author: 'Gregory Maguire',
      content: 'From torched skyscrapers, men grew wings.',
    },
    {
      author: 'Charles Stross',
      content: 'Internet “wakes up?” Ridicu- \nno carrier.',
    },
    {
      author: 'Frank Miller',
      content: 'With bloody hands, I say good-bye.',
    },
    {
      author: 'Steven Meretzky',
      content: 'Wasted day. Wasted life. Dessert, please.',
    },
    {
      author: 'Ronald D. Moore',
      content: '“Cellar?” “Gate to, uh … hell, actually.”',
    },
    {
      author: 'Vernor Vinge',
      content: 'Epitaph: Foolish humans, never escaped Earth.',
    },
    {
      author: 'Bruce Sterling',
      content: 'It cost too much, staying human.',
    },
    {
      author: 'James Patrick Kelly',
      content: 'We kissed. She melted. Mop please!',
    },
  ]
};

const BlogContext = React.createContext<[State, React.Dispatch<Action>]>([
  { blogPosts: [] },
  () => {},
])


export const BlogProvider = ({children}: IProps) => {
const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <BlogContext.Provider value={[state, dispatch]}>
      {children}
    </BlogContext.Provider>
  )
}

export default BlogContext