import  React,{useState,useEffect} from 'react';
import { Text, View,TouchableOpacity,StyleSheet,FlatList,Image } from 'react-native';
import  {SearchBar} from 'react-native-elements';

import products from "../Test.json";

export default function ReportScreen({navigation,route}) {
    const [searchText, setSearchText] = useState('');

    const data = products
    const filteredData = searchText ? data.filter(x =>
      x.Ingredient.toLowerCase().includes(searchText.toLowerCase())
      ): data
  return (
      <View style={{width:'100%',height:'100%',backgroundColor:'#fff',padding:20,alignItems:'center'}}>
         <SearchBar
        placeholder="Food name"
        onChangeText={(value)=>{setSearchText(value)}}
        value={searchText}
        containerStyle={{backgroundColor:'#fff',width:'100%',padding:0,marginBottom:10,borderRadius:10}}
        inputContainerStyle={{backgroundColor:'#f7f7f7'}}
        inputStyle={{color:'#30384d',fontSize:12.8,fontFamily:'Montserrat-Regular'}}
        placeholderTextColor='#7e8a9a'
        
      />
      <View style={{backgroundColor:'#f7f7f7',width:'100%',height:'100%',padding:15}} >

      <Text style={{color:'#30384d',fontWeight:'bold',fontSize:19.6,marginBottom:10}}>Foods</Text>   

       <FlatList
                
                data={filteredData}
                numColumns={2}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                renderItem={({ item }) => (

                    <View style={styles.btnbg}>
                 <TouchableOpacity style={styles.button}
                      >
                                     <Image  
                                     style={{width:'100%',height:'100%',borderRadius:5}}
                                    source={{uri:item.imageUrl}}
                                          />
                                     
              
                    </TouchableOpacity>
                     
                       <Text style={{fontSize:16,color:'#30384d',fontWeight:'700',fontFamily:'Montserrat-Regular'}}>{item.Ingredient}</Text>
                       <Text numberOfLines={2} style={{fontSize:11.2,color:'#7e8a9a',fontWeight:'500',fontFamily:'Montserrat-Regular'}}>{item["Short text"]}</Text>

                </View>
                )}
                keyExtractor={(item, Ingredient) => Ingredient.toString()}/>
        
        </View>
      </View>
  );
}
const styles = StyleSheet.create({
 
  button: {
    justifyContent:'center',alignItems:'center',
    width:'100%',height:'100%'
    
  },
  btnbg:{
       width:'48%',height:200,marginBottom:60
  },
  subfont:{color:'#30384d',fontWeight:'700',textAlign:'center'},

})