import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function DetailsScreen({}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#fff"}}>
            <Image source={require("../assets/images/2.jpg")} style = {styles.image}/>
            <Text style={{ position: "absolute", top: 260, fontSize: 20 }}>위치스커피</Text>
            <Text style={{ fontSize: 15,  color: "grey", position: "absolute", top: 320, left: 130  }}> 커피 샵 </Text>
            <Text style={{ fontSize: 15,  color: "grey", position: "absolute", top: 320, left: 220  }}>별점 3.5</Text>

            <Text style={{ fontSize: 15,  color: "#727272", position: "absolute", top: 400, left: 40  }}> 주소 </Text>
            <View style={styles.address_view}>
                <Text style={{ fontSize: 15,  color: "#727272", flex: 1, 
        flexWrap: 'wrap'}}>서울특별시 강동구 양재대로 1길 </Text>
            </View>
            
            <Text style={{ fontSize: 15,  color: "#727272", position: "absolute", top: 470, left: 40  }}> 영업시간 </Text>
            <Text style={{ fontSize: 15,  color: "#727272", position: "absolute", top: 470, left: 150  }}> 10:00 - 22:00 </Text>
            
        </View>
    )}

const styles = StyleSheet.create({
    image: {
        height: 230,
        position: "absolute",
        top: 0
    },
    address_view: {
        position: "absolute", 
        top: 400, 
        left: 150,
        width: 220,
        height: 100
    }
})