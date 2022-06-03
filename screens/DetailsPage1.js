import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function DetailsScreen({}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#fff"}}>
            <Image source={require("../assets/images/1.jpg")} style = {styles.image}/>
            <Text style={{ position: "absolute", top: 260, fontSize: 20 }}> 스타벅스 코엑스몰 </Text>
            <Text style={{ fontSize: 15,  color: "grey", position: "absolute", top: 320, left: 130  }}> 커피 샵 </Text>
            <Text style={{ fontSize: 15,  color: "grey", position: "absolute", top: 320, left: 220  }}>별점 4.5</Text>

            <Text style={{ fontSize: 15,  color: "#727272", position: "absolute", top: 400, left: 40  }}> 주소 </Text>
            <View style={styles.address_view}>
                <Text style={{ fontSize: 15,  color: "#727272", flex: 1, 
        flexWrap: 'wrap'}}>서울특별시 강동구 양재대로 128길 14 (길동) 서울, 05302 </Text>
            </View>
            
            <Text style={{ fontSize: 15,  color: "#727272", position: "absolute", top: 470, left: 40  }}> 영업시간 </Text>
            <Text style={{ fontSize: 15,  color: "#727272", position: "absolute", top: 470, left: 150  }}> 10:00 - 21:00 </Text>
            
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