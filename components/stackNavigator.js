import * as React from 'react';
import HomeScreen from '../screens/Home';
import DetailsScreen1 from "../screens/DetailsPage1";
import DetailsScreen2 from "../screens/DetailsPage2";
import DetailsScreen3 from "../screens/DetailsPage3";
import DetailsScreen4 from "../screens/DetailsPage4";

import SingleBuilding  from './singleBuilding';
import {createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator();
const detailsName1 = "스타벅스 코엑스몰" 
const detailsName2 = "위치스커피"
const detailsName3 = "투썸플레이스 코엑스몰푸드월드점"
const detailsName4 = "스템커피 코엑스점"


const singleName = "singlePage"
const homeName = "dom"

export default function StackNavigatorScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={homeName} component={HomeScreen} options={() => ({ headerShown: false})} />
            <Stack.Screen name={singleName} component={SingleBuilding}/>
            <Stack.Screen name={detailsName1} component={DetailsScreen1} options = { () => ({ headerTitleAlign: "center"}) } />
            <Stack.Screen name={detailsName2} component={DetailsScreen2} options = { () => ({ headerTitleAlign: "center"}) } />
            <Stack.Screen name={detailsName3} component={DetailsScreen3} options = { () => ({ headerTitleAlign: "center"}) } />
            <Stack.Screen name={detailsName4} component={DetailsScreen4} options = { () => ({ headerTitleAlign: "center"}) } />
        </Stack.Navigator>
    )}




