import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Details from "../screens/Details";
import Team from "../../Team";

function AppRoutes(){

    const {Screen, Navigator} = createNativeStackNavigator();
    
    return(

        <Navigator initialRouteName="placar" screenOptions={{headerShown: false}}>         
            <Screen name="placar" component={Home}/>
            <Screen name="details" component={Details}></Screen>
            <Screen name="team" component={Team}></Screen>

        </Navigator>

    )
}

export default AppRoutes