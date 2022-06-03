import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import DetailsButton from "./detailsButton"
import data from "../assets/data/buildingdata"

const SingleBuilding = (props) => {
    return (
        <View style = {styles.singleBuilding}>
            <Image source={(() => {
            if (props.selectedItem === 1) return require("../assets/images/1.jpg")
            else if (props.selectedItem ===2 ) return require("../assets/images/2.jpg")
            else if (props.selectedItem == 3) return require("../assets/images/3.jpg")
            else if (props.selectedItem === 4) return require("../assets/images/4.jpg")
            })()}  style={styles.images}/>
            
            <View style={styles.star}>
            <FontAwesome name='star' size={25} style={{ margin: 10, color: "#ECF3FF", flexDirection:"row"}} />
            <Text style={styles.starLabel}>
            {(() => {
            if (props.selectedItem === 1) return "4.5"
            else if (props.selectedItem ===2 ) return "3.5"
            else if (props.selectedItem == 3) return "4.0"
            else if (props.selectedItem === 4) return "2.5"
            })()}
            </Text>
            </View>

            <Text style={styles.hours} >
            {(() => {
            if (props.selectedItem === 1) return "영업시간:   10:00 - 21:00"
            else if (props.selectedItem ===2 ) return "영업시간:   10:00 - 22:00"
            else if (props.selectedItem == 3) return "영업시간:   10:00 - 21:00"
            else if (props.selectedItem === 4) return "영업시간:   10:00 - 23:59"
            })()}
            </Text>
            
            <View style={styles.addressView}>
                <Text style={styles.address} >
                {(() => {
                if (props.selectedItem === 1) return "주소:   서울특별시 강동구 양재대로 128길 14 (길동) 서울, 05302"
                else if (props.selectedItem ===2 ) return "주소:   서울특별시 강동구 양재대로 1길"
                else if (props.selectedItem == 3) return "주소:   서울특별시 강동구 양재대로 128길 14 (길동) 서울, 05302"
                else if (props.selectedItem === 4) return "주소:   서울특별시 강동구 양재대로 128길 14 (길동) 서울, 05302"
                })()}
                </Text>
            </View>
            <DetailsButton style={styles.detailsButton} onpress={(() => {
            if (props.selectedItem === 1) return () => props.navigation.navigate('스타벅스 코엑스몰')
            else if (props.selectedItem ===2 ) return () =>  props.navigation.navigate('위치스커피')
            else if (props.selectedItem == 3) return  ()=> props.navigation.navigate('투썸플레이스 코엑스몰푸드월드점')
            else if (props.selectedItem === 4) return () => props.navigation.navigate('스템커피 코엑스점')
            })()}/>
        </View>
    );
}

const styles = StyleSheet.create({
    images: {
        position: 'absolute',
        height: 130,
        width: 130,
        top: 30,
        left: 13,
        borderRadius: 15
      }, 
      star: {
        flex: 1,
        width: 60,
        height: 50,
        position: 'absolute',
        flowDirection: "row",
        left: 73, 
        top: 125,
      },
      starLabel: {
        flexDirection:"row", 
        fontSize: 17, 
        marginLeft: 20, 
        top: 10, 
        right: 0, 
        position: 'absolute', 
        color: "#ECF3FF" 
      }, 
      hours: {
        fontSize: 17,  
        top: 80, 
        left: 170, 
        position: 'absolute', 
        color: "grey" 
      },
      address: {
        fontSize: 15,  
        color: "grey",
        flex: 1, 
        flexWrap: 'wrap'
      }, 
      singleBuilding: {
        height: 180, width: 420, alignSelf: "center"
      },
      addressView: {
        top: 110, 
        left: 170, 
        position: 'absolute',
        width: 220,
        height: 100
      }, 
      detailsButton: {
        width: 93,
        height: 38,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: '#F2F2F2',
        position: "absolute",
        right: 20,
        top: 30

      } 
})

export default SingleBuilding;