import React, { useEffect,useState } from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';


export default function Splash({ navigation }) {

    useEffect(() => {
        setTimeout(async () => {
     
            return navigation.replace('Product Screen');
        }, 2000);
    
    }, []);

    return (
        <View style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}} >
            <Text style={{fontSize:22,color:'#000'}}>Test app</Text>
              
        </View>
       
    )
}

const styles = StyleSheet.create({
  
    logo: {
        width:'100%',
        height:'100%',
        resizeMode:'contain',
   
    },
    text: {
        fontSize: 20,
        color: '#000',
    },
})