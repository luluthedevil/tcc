import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import { useFonts } from 'expo-font';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CustomDrawer = (props) => {
    const [loaded] = useFonts ({
        RobotoMedium: require('../../assets/fonts/Roboto/Roboto-Medium.ttf'),
        RobotoRegular: require('../../assets/fonts/Roboto/Roboto-Regular.ttf'),
    });

    if(!loaded) {
        return null;
    }
  return (
    <View style={{
        flex:1
    }}>
        <DrawerContentScrollView {...props}
            contentContainerStyle={{backgroundColor:'#00B2EE'}}
        >
            <ImageBackground
                source={require('../../assets/bookshelfBG.jpg')}
                style={{padding:20,}}
                blurRadius={10}
            >
                <Image source={require('../../assets/cat.png')} 
                    style={{
                        height:90, width:90, 
                        borderRadius: 45, margin:20
                    }}
                />
                <Text style={{
                    color:'#fff', fontSize:25, 
                    fontFamily:'RobotoMedium',marginBottom: 5
                }}>
                    Luciana Ferreira
                </Text>
                <View style={{flexDirection:'row'}}>
                    <Text style={{
                        color:'#fff',  
                        fontFamily:'RobotoRegular',
                        marginRight:5
                    }}>
                        280 XP
                    </Text>
                    <FontAwesome5 name='coins' size={14} color='#fff' />
                </View>
            </ImageBackground>
            <View style={{
                flex:1, backgroundColor:'#fff',
                paddingTop:10
            }}>
                <DrawerItemList {...props} />
            </View>
        </DrawerContentScrollView>
        <View style={{
            padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'
        }}>
            <TouchableOpacity onPress={() => {}} style={{
                paddingVertical:15
            }}>
                <View style={{
                    flexDirection:'row', alignItems:'center'
                }}>
                    <Ionicons name='share-social-outline' size={25} />
                    <Text style={{
                        fontSize: 16, fontFamily: 'RobotoMedium',
                        marginLeft: 5
                    }}>
                        Compartilhe com um amigo
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={{
                paddingVertical:15
            }}>
                <View style={{
                    flexDirection:'row', alignItems:'center'
                }}>
                    <Ionicons name='exit-outline' size={25} />
                    <Text style={{
                        fontSize: 16, fontFamily: 'RobotoMedium',
                        marginLeft: 5
                    }}>
                        Log out
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  );
}

export default CustomDrawer;