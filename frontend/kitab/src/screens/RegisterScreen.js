import React from 'react';
import { Text, View, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InputField from '../components/InputField';
import CustomButtom from '../components/CustomButtom';

export default function RegisterScreen({navigation}) {
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
      <ScrollView showsVerticalScrollIndicator={false} style={{
        paddingHorizontal:25
      }}>
        <View style={{alignItems: 'center'}}>
          <Image style={{width: 400, height: 300, marginBottom: 20, marginTop: 40}} source={require('../../assets/read5.jpg')} />
        </View>
          <Text style={{
            fontFamily: 'RobotoMedium', fontSize: 28,
            fontWeight: '500', color: '#333',  marginBottom: 20
          }}>Regristre-se</Text>

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
          <Text style={{
            textAlign:'center', color:'#666', marginBottom: 20,
            fontSize: 20
          }}>Ou então, registre-se...</Text>

            <InputField label={'Nome completo'} icon={<Ionicons name='person-outline' size={25} 
              color='#666' style={{marginRight:5}}
            />} />

            <InputField label={'Email'} icon={<MaterialIcons name='alternate-email' size={25} 
              color='#666' style={{marginRight:5}}
            />} keyboardType='email-addres' />

            <InputField label={'Senha'} icon={<Ionicons name='ios-lock-closed-outline' size={25} 
              color='#666' style={{marginRight:5}}
            />}inputType='password' />

            <InputField label={'Confirmar senha'} icon={<Ionicons name='ios-lock-closed-outline' size={25} 
              color='#666' style={{marginRight:5}}
            />}inputType='password' />

            <InputField label={'Data de nascimento'} icon={<Ionicons name='ios-lock-closed-outline' size={25} 
              color='#666' style={{marginRight:5}}
            />}  />

            <CustomButtom label={'Registre-se'} onPres={() => {}} />

          <View style={{
            flexDirection:'row', justifyContent:'center',
            marginBottom:20
          }}>
          <Text>Já possui cadastro? </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{
            color:'#0aada8', fontWeight:'700'
          }}> Login</Text>
          </TouchableOpacity>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}
