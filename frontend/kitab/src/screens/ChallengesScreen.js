import React from 'react';
import { View, Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient';

export default function ChallengesScreen() {
  return (
    <LinearGradient
        colors={['#7F7FD5', '#86A8E7', '#91EAE4']}
        style={{width: '100%', height: '100%'}}
        >
      <View style={{
          flex:1, paddingLeft:10
      }}>
        <Text
          style={{
            fontSize: 40, paddingTop: 25, paddingBottom: 10
          }}
        >Desafios</Text>
        <View>
          <View style={{
            padding: 8, borderRadius: 15, marginRight: 10,
            borderBottomColor: '#222', borderBottomWidth: 2
          }}>
          <Text
            style={{
              fontSize: 30, color:'#222'
            }}
          >Leitura de livros</Text>
            <View style={{
              flexDirection:'row', alignItems: 'center',
              borderColor: '#FFFF00', borderWidth: 2, padding: 8,
              width: 250, height: 80, margin: 5, borderRadius: 15,
              backgroundColor: '#C6E2FF',
            }}>
              <Feather name='award' color='#FFFF00' size={50}/>
              <Text
                style={{
                  fontSize: 20
                }}
              >Ler 100 livros</Text>
              <AntDesign name="minussquareo" size={35} color='#FF0000' style={{marginRight: 5,  paddingLeft: 5}} />
            </View>
            <View style={{
              flexDirection:'row', alignItems: 'center',
              borderColor: '#BEBEBE', borderWidth: 2, padding: 8,
              width: 250, height: 80, margin: 5, borderRadius: 15,
              backgroundColor: '#C6E2FF'
            }}>
              <Feather name='award' color='#BEBEBE' size={50}/>
              <Text
                style={{
                  fontSize: 20
                }}
              >Ler 50 livros</Text>
              <AntDesign name="minussquareo" size={35} color='#FF0000' style={{marginRight: 5,  paddingLeft: 5}} />
            </View>
            <View style={{
              flexDirection:'row', alignItems: 'center',
              borderColor: '#D2691E', borderWidth: 2, padding: 8,
              width: 250, height: 80, margin: 5, borderRadius: 15,
              backgroundColor: '#C6E2FF'
            }}>
              <Feather name='award' color='#D2691E' size={50}/>
              <Text
                style={{
                  fontSize: 20
                }}
              >Ler 25 livros</Text>
              <AntDesign name="checksquareo" size={35} color='#00FF00' style={{marginRight: 5,  paddingLeft: 5}} />
            </View>
          </View>
        </View>
        <View>
          <View style={{
            padding: 8, borderRadius: 15, marginRight: 10,
            borderBottomColor: '#222', borderBottomWidth: 2
          }}>
          <Text
            style={{
              fontSize: 30, color:'#222'
            }}
          >Livros nas férias</Text>
            <View style={{
              flexDirection:'row', alignItems: 'center',
              borderColor: '#FFFF00', borderWidth: 2, padding: 8,
              width: 250, height: 80, margin: 5, borderRadius: 15,
              backgroundColor: '#C6E2FF',
            }}>
              <Feather name='award' color='#FFFF00' size={50}/>
              <Text
                style={{
                  fontSize: 20
                }}
              >Ler 20 livros</Text>
              <AntDesign name="minussquareo" size={35} color='#FF0000' style={{marginRight: 5,  paddingLeft: 5}} />
            </View>
            <View style={{
              flexDirection:'row', alignItems: 'center',
              borderColor: '#BEBEBE', borderWidth: 2, padding: 8,
              width: 250, height: 80, margin: 5, borderRadius: 15,
              backgroundColor: '#C6E2FF'
            }}>
              <Feather name='award' color='#BEBEBE' size={50}/>
              <Text
                style={{
                  fontSize: 20
                }}
              >Ler 10 livros</Text>
              <AntDesign name="checksquareo" size={35} color='#00FF00' style={{marginRight: 5,  paddingLeft: 5}} />
            </View>
            <View style={{
              flexDirection:'row', alignItems: 'center',
              borderColor: '#D2691E', borderWidth: 2, padding: 8,
              width: 250, height: 80, margin: 5, borderRadius: 15,
              backgroundColor: '#C6E2FF'
            }}>
              <Feather name='award' color='#D2691E' size={50}/>
              <Text
                style={{
                  fontSize: 20
                }}
              >Ler 5 livros</Text>
              <AntDesign name="checksquareo" size={35} color='#00FF00' style={{marginRight: 5,  paddingLeft: 5}} />
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}