import React, {useRef, useMemo, useState} from 'react';
import { View, StyleSheet, Text} from 'react-native';
import MapView, { Marker } from "react-native-maps";
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import SearchBox from "../components/searchbox"
import BackButton from '../components/backbutton';
import SingleBuilding from "../components/singleBuilding"
import CloseButton from "../components/closeButton"
import ExtendButton from "../components/extendButton"



export default function HomeScreen(props) {
  const [mapRegion, setmapRegion] = useState({
    latitude: 37.51301474169193,
    longitude: 127.0590256713309,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  const [item, setItem] = useState(1);
  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ['25%', '95%'], []);

  const array = [1, 2, 3, 4]

return (
  
  <BottomSheetModalProvider>
    <View style={{flex: 1}}>

      <MapView
        style={{ alignSelf: 'stretch', height: '100%' }}
        region={mapRegion}
      >
        <Marker
          coordinate={{
          latitude: 37.5095714212126,
          longitude: 127.05754911527038,
          }}
          image = {require("../assets/images/map_marker.png")}
          onPress={() =>  {bottomSheetModalRef.current?.present(); setItem(1)} }
        />
        <Marker
          coordinate={{
          latitude: 37.51389207002637,
          longitude: 127.05829141661525,
          }}
          image = {require("../assets/images/map_marker.png")}
          onPress={() =>  {bottomSheetModalRef.current?.present(); setItem(2)} }
        />
        <Marker
          coordinate={{
          latitude: 37.515542492085714,
          longitude: 127.05728625878692,
          }}
          image = {require("../assets/images/map_marker.png")}
          onPress={() =>  {bottomSheetModalRef.current?.present(); setItem(3)} }
        />
        <Marker
          coordinate={{
          latitude: 37.51047809510764,
          longitude: 127.05996779724956,
          }}
          image = {require("../assets/images/map_marker.png")}
          onPress={() =>  {bottomSheetModalRef.current?.present(); setItem(4)} }
        />
      </MapView>

      <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
        >
        <SingleBuilding navigation={props.navigation} selectedItem={item}/>

        <SingleBuilding navigation={props.navigation} selectedItem={(() => {
          return array.filter(function(value, index, arr){ return value != item;})[0]
        })()}/>
        
        <SingleBuilding navigation={props.navigation} selectedItem={(() => {
          return array.filter(function(value, index, arr){ return value != item;})[1]
        })()}/>

        <SingleBuilding navigation={props.navigation} selectedItem={(() => {
          return array.filter(function(value, index, arr){ return value != item;})[2]
        })()}/>

        <ExtendButton style = {styles.extendButtonMini} onpress={() => {bottomSheetModalRef.current?.expand()}}/>
        <CloseButton style={styles.closeButtonMini} onpress={() => {bottomSheetModalRef.current?.forceClose()}}/>
      </BottomSheetModal>

      <BackButton/>
      <SearchBox/>
    </View>
</BottomSheetModalProvider>

);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bottomSheet: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  extendButtonMini: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#fff',
    position: "absolute",
    right: 40,
    top: -20
  }, 
  closeButtonMini: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#fff',
    position: "absolute",
    right: 10,
    top: -20

  }
});


