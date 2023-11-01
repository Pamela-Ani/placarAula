import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { tokenToString } from "typescript";
import AppRoutes from "./app.routes";


function Routes(){

    const {Screen, Navigation} = createNativeStackNavigator();
    return(
        <NavigationContainer>
            { token > 0 ?
            <AuthRoutes/>
                :
            <AppRoutes/>
}
        </NavigationContainer>
    )
}
export default Routes;