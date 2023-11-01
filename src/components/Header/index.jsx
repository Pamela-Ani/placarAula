import {  Text, View } from "react-native";
import { styles } from "./styles";

export function Header (props){
    return(
        <View style={styles.boxRodada}>
            <Text style={styles.textRodada}>{props.rodada}</Text>

        </View>
    )
}