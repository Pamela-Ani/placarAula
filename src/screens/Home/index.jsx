import {Text, View} from "react-native"
import { Card } from "../../components/Card"
import { Header } from "../../components/Header"

import { styles } from "./styles"
export function Home (){

    const navigation = useNavigation()

    function handleNavigationDetails(){

        navigation.navigate('details')

    }

    return(
        <View>
            <Text style={styles.title}>JOGOS</Text>
            <Header rodada='29ª Rodaada'></Header>
            <View>
                <Card
                onPrees={handleNavigationDetails}
                stadium="Arena Grêmio"
                date= "25/10 - Ontem - 21:30h"
                teamHome="Grêmio"
                scoreHome="3"
                teamVisited="Flamengo"
                scoreVisited="2"/>

                <Card stadium="Arena Grêmio"
                date= "25/10 - Ontem - 21:30h"
                teamHome="Grêmio"
                scoreHome="3"
                teamVisited="Flamengo"
                scoreVisited="2"/>

                <Card stadium="Arena Grêmio"
                date= "25/10 - Ontem - 21:30h"
                teamHome="Grêmio"
                scoreHome="3"
                teamVisited="Flamengo"
                scoreVisited="2"/>
            </View>
        </View>
    )
}
export default Home