import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, Image,Button,TouchableOpacity, Dimensions } from 'react-native';
import MainScreen from './src/screens/MainScreen';
import React,{useState,useContext} from 'react';
import OrderHandler from './src/screens/OrderHandler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';




const Tab = createMaterialTopTabNavigator();

const Stack = createNativeStackNavigator();

export default function App( {navigation} ) {


const orderData = [
  {

  }
]

  return (

    <NavigationContainer>
      
           <Stack.Navigator
           
           initialRouteName='פתרונות בגובה'
           initialLayout={ 
            {
             width: Dimensions.get('window').width,
             height:Dimensions.get('window').height,
            }
          }
          screenOptions={{
            
            tabBarLabelStyle:{fontSize:20},
            tabBarStyle:styles.tabNavigtor,
            tabBarActiveTintColor:'#f8f4f4',
            tabBarInactiveTintColor:'#90828b',
            tabBarIndicatorStyle:{backgroundColor:'#7d7183'},
            
          }}
          style={styles.navigator}
           >
            <Stack.Screen
            
            initialParams={
              {
                orderData:orderData,
              }
            }
            name='פתרונות בגובה' 
             component={MainScreen} 
             style={styles.container}  
             options={{ 
              headerTitleAlign:'center',
              title:'ספריית כלים',

            }} 

             />

            <Stack.Screen
            name='OrderHandler'
            component={OrderHandler}
            options={{
              title:'מסך הזמנה',
              headerTitleAlign:'center',
            }}
            />
           </Stack.Navigator>
           </NavigationContainer>
      );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#86bbd8',
    alignItems: 'center',
    flexDirection:'column',
    height:'20%',
    maxHeight:10,
    justifyContent: 'center',
  },
  headBarImage:{
      marginLeft:'5%',
      resizeMode:'contain',
      height:'100%',
      width:'300px',
      borderWidth:1,      
  },
  navigator:{
    maxHeight:10,
    fontSize:100,
    
  },
  tabNavigtor:{ //make it shine whne i hover over it
    backgroundColor:'#c9c7c5',

  },
});
