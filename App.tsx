import React from 'react'
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack'
import IndexScreen from "./src/screens/IndexScreen";
import Routes from "./src/constants/routes";
import {Provider} from './src/context/BlogProvider';
import ShowScreen from "./src/screens/ShowScreen";


const navigator = createStackNavigator({
  [Routes.Index]: IndexScreen,
  [Routes.Show]: ShowScreen,
}, {
  initialRouteName: Routes.Index,
  defaultNavigationOptions: {
    title: 'Blog'
  }
})

const App = createAppContainer(navigator)

export default () => {
  return (
    <Provider>
      <App/>
    </Provider>
  )
}