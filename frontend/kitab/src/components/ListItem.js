import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { windowWidth } from '../utils/Dimensions';

export default function ListItem({photo, author, title, isRead}) {

    const [loaded] = useFonts ({
        RobotoMedium: require('../../assets/fonts/Roboto/Roboto-Medium.ttf'),
    });

    if(!loaded) {
        return null;
    }
  return (
    <View 
        style={{
            flexDirection:'row', justifyContent:'space-between', 
            alignItems:'center', marginBottom: 20
        }}
    >
        <View
            style={{
                flexDirection:'row', alignItems:'center',
                flex:1
            }}
        >
            <Image source={photo}
                style={{
                    width:75, height:120, borderRadius: 10,
                    marginRight:10
                }}
            />
            <View
                style={{width:windowWidth-250, marginVertical:8, 
                    justifyContent:'center'
                }}
            >
                <Text
                    style={{
                        color:'#333', fontFamily:'RobotoMedium',
                        fontSize: 18
                    }}
                >
                    {author}
                </Text>
                <Text
                numberOfLines={1}
                    style={{
                        color:'#333', fontFamily:'RobotoMedium',
                        fontSize: 18, textTransform:'uppercase'
                    }}
                >
                    {title}
                </Text>
                {isRead == 'Yes' && <Text
                    style={{
                        color:'#333', fontFamily:'RobotoMedium',
                        fontSize: 16
                    }}
                >{"Você ja leu este livro, parabéns :)"}</Text>}
                {isRead == 'No' && <Text
                    style={{
                        color:'#333', fontFamily:'RobotoMedium',
                        fontSize: 16
                    }}
                >{"Você ainda não leu este livro"}</Text>}
            </View>
        </View>
        <TouchableOpacity
            style={{
                backgroundColor:'#1E90FF', padding:10,
                width:100, borderRadius:10
            }}
        >
            <Text
                style={{
                    color:'#fff', textAlign:'center',
                    fontFamily:'RobotoMedium', fontSize:16
                }}
            >
                Ver mais
            </Text>
        </TouchableOpacity>
    </View>
  );
}
