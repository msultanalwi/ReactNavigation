import * as React from 'react';
import { View, Text, TouchableOpacity, StatusBar, ScrollView } from 'react-native';


function HomeScreen({navigation}) {

    return (
      
      <View style={{ flex: 1, backgroundColor: "#21252b" }}>
      <ScrollView>
      <View style={{backgroundColor: "#21252b",paddingBottom: 20,
        paddingTop: 10}}>
      <StatusBar backgroundColor={"#21252b"} barStyle={"light-content"} />
        <Text style={{
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 10
        }}>
          Home
        </Text>
      </View>
      <View style={{flex: 1, }}>
      <Text style={{color: "#FFFFFF"}}> Hello Screen </Text>
      </View>
      </ScrollView>
      <View style={{flexDirection: "row", }}>
      <TouchableOpacity
      style={{
        flex:1,
        backgroundColor: "#282c34", 
        padding: 20,
        borderRadius: 5,
        marginHorizontal: 10,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center"
         }} onPress={() => navigation.navigate ('Detail', { 
        nama: 'Muhammad Sultan Alwi',
        hobi: "play" })}>
        <Text style={{color: "#FFFFFF"}}>Detail</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={{
        flex: 1,
        backgroundColor: "#282c34", 
        padding: 20,
        borderRadius: 5,
        marginHorizontal: 10,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center"
         }} onPress={() => navigation.navigate ('Profile')}>
        <Text style={{color: "#FFFFFF"}}>Profile</Text>
      </TouchableOpacity>
      </View>
      </View>
    );
  }

  export default HomeScreen