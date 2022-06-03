import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";


export default function SearchBox() {
    return (
        <View style={styles.searchBox}>
        <TextInput 
            placeholder="여기를 검색하다"
            placeholderTextColor="#000"
            style={{flex:1, padding:0, color: '#7E8389'}}
        />
        </View>
    )
}

const styles = StyleSheet.create({ 
    searchBox: {
        flex: 1,
        position:'absolute', 
        flexDirection:"row",
        backgroundColor: '#fff',
        width: 290,
        height: 54,
        borderRadius: 10,
        padding: 10,
        right: 25,
        top: 50,
      },
})