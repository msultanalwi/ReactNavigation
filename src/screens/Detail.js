import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

function DetailScreen({navigation, route}) {

  const {nama, hobi} = route.params

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
        <Text> Nama {nama}</Text>
        <Text>Hobi {hobi}</Text>
        
      <TouchableOpacity style={{backgroundColor: "#282c34", padding: 20, borderRadius: 5 }} onPress={() => navigation.navigate ('Profile')}>
        <Text style={{color: "#FFFFFF"}}>Pergi ke Profile</Text>
      </TouchableOpacity>
      <View style={{marginTop: 5}}>
      <TouchableOpacity style={{backgroundColor: "#282c34", padding: 20, borderRadius: 5, alignItems: "center" }} onPress={() => navigation.pop()}>
        <Text style={{color: "#FFFFFF"}}>Kembali</Text>
      </TouchableOpacity>
      </View>
      </View>
    );
  }

  export default DetailScreen