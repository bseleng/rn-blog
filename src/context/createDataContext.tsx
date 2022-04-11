import React, {Dispatch, ReactNode, useReducer} from "react"
import Action from "../types/Action"
import State from "../types/State"

type TReducer = (state: State, action: Action) => State;
type TActions = Record<string, (dispatch: Dispatch<Action>) => any>

interface ProviderProps {
  children: ReactNode;
}

export default (reducer:TReducer, actions:TActions, initialState:State) => {
  const Context = React.createContext<[State, TActions]>([initialState, {}])

  const Provider = ({children}: ProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const boundActions:TActions = {}
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch)
    }
    return (
      <Context.Provider value={[state, boundActions]}>
        {children}
      </Context.Provider>
    )
  }

  return {Context, Provider}
}