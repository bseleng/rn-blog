import {createAppContainer} from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack'
import IndexScreen from "./src/screens/IndexScreen";
import Routes from "./src/constants/routes";


const navigator =createStackNavigator({
  [Routes.Index]: IndexScreen,
}, {
  initialRouteName: Routes.Index,
  defaultNavigationOptions: {
    title: 'Blog'
  }
})

export default createAppContainer(navigator)