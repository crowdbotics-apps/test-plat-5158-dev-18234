import { createStackNavigator } from "react-navigation-stack"
import Blank from "./screens/index"
export default BlankNavigator = createStackNavigator(
  { Blank: { screen: Blank } },
  { initialRouteName: "Blank" }
)
