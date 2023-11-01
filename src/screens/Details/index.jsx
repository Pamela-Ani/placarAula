import { useNavigation, useRoute } from "@react-navigation/native"
import { Text } from "react-native"

function Details(){

    const route = useRoute()
    const navigation = useNavigation()
    const {id, home, visited}= route.params
    const param = route.params
    const [comment, setComment] = useState("")

    handleBack = () =>{
        navigation.goBack()
    }
    
    handleTeam = () =>{
        navigation.navigate('team', {team, comment})
    }
    
    return(
        <View>
            <Text>{param.id}</Text>
            <Text onPress={() => handleTeam(home)}>{home}</Text>
            <Text>x</Text>
            <Text onPress={() => handleTeam(visited)}>{visited}</Text>
            <Text onPress={() => setComment(comment)}>{comment}</Text>
        
        <Button title="Voltar" onPress={handleBack}/>

        </View>
    )
}

export default Details