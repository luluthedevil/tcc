import React from 'react';
import { Text, View, Image, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InputField from '../components/InputField';
import CustomButtom from '../components/CustomButtom';

export default function LoginScreen({navigation}) {
  const [loaded] = useFonts ({
    RobotoMedium: require('../../assets/fonts/Roboto/Roboto-Medium.ttf'),
  });

  if(!loaded) {
      return null;
  }

  return (
    <SafeAreaView style={{
        flex:1, justifyContent: 'center'
    }}>
      <View style={{
        paddingHorizontal:25
      }}>
        <View style={{alignItems: 'center'}}>
          <Image style={{width: 400, height: 300, marginBottom: 20}} source={require('../../assets/read6.jpg')} />
        </View>
          <Text style={{
            fontFamily: 'RobotoMedium', fontSize: 28,
            fontWeight: '500', color: '#333',  marginBottom: 20
          }}>Login</Text>

            <InputField label={'Email'} icon={<MaterialIcons name='alternate-email' size={25} 
              color='#666' style={{marginRight:5}}
            />} keyboardType='email-addres' />

            <InputField label={'Senha'} icon={<Ionicons name='ios-lock-closed-outline' size={25} 
              color='#666' style={{marginRight:5}}
            />}inputType='password' fieldButtonLabel={'Esqueceu?'} 
              fieldButtonFunction={() => {}}
            />

          <CustomButtom label={'Entrar'} onPres={() => {}} />

          <Text style={{
            textAlign:'center', color:'#666', marginBottom: 20,
            fontSize: 20
          }}>Ou então, entre com...</Text>

          <View style={{ 
            flexDirection: 'row', justifyContent:'space-around',
            marginBottom:20
          }}>
          <TouchableOpacity onPress={() => {}} style={{
              borderColor:'#ddd', borderWidth:2, borderRadius: 10,
              paddingHorizontal:20, paddingVertical:10
            }}>
              <Image source={require('../../assets/google.jpg')} style={{
                width: 40, height: 40
              }} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}} style={{
              borderColor:'#ddd', borderWidth:2, borderRadius: 10,
              paddingHorizontal:20, paddingVertical:10
            }}>
              <Image source={require('../../assets/twitter_logo.png')} style={{
                width: 40, height: 40
              }} />
            </TouchableOpacity>
          </View>
          <View style={{
            flexDirection:'row', justifyContent:'center',
            marginBottom:20
          }}>
          <Text>Novo por aqui? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={{
            color:'#0aada8', fontWeight:'700'
          }}> Registre-se</Text>
          </TouchableOpacity>
          </View>
      </View>
    </SafeAreaView>
  );
}
