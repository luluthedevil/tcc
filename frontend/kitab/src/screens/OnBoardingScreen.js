import React from 'react';
import { Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useFonts } from 'expo-font';

export default function OnBoardingScreen({navigation}) {
    const [loaded] = useFonts ({
        RobotoMediumItalic: require('../../assets/fonts/Roboto/Roboto-MediumItalic.ttf'),
        RobotoBold: require('../../assets/fonts/Roboto/Roboto-Bold.ttf'),
      });
    
      if(!loaded) {
        return null;
      }
    return (
        <SafeAreaView 
            style={{
                flex:1, justifyContent:'center', 
                alignItems:'center', backgroundColor:'#fff'
            }}
        >
            <View style={{marginTop:40}}>
                <Text style={{fontSize:40, fontWeight:'bold', color:'#20315f', fontFamily:'RobotoBold'}}>Kitab</Text>
            </View>
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Image style={{width: 330, height: 300, marginBottom: 30}} source={require('../../assets/read3.jpg')} />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{backgroundColor:'#1E90FF', padding: 20, marginBottom:50, width: '90%', borderRadius: 8, flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize:20, color: '#fff', fontFamily:'RobotoMediumItalic'}}>
                Vamos lá?
                </Text>
                <MaterialIcons name='arrow-forward-ios' size={25} color='#fff' />
            </TouchableOpacity>
        </SafeAreaView>
    );
}
