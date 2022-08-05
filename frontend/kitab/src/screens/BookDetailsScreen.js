import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { windowWidth } from '../utils/Dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

export default function BookDetailsScreen({navigation, route}) {

    const [heartShape, setHeartShape] = useState(false);

    const toggleHeart = () => {
        return setHeartShape(!heartShape);
    };

    return (
        <LinearGradient
        colors={['#7F7FD5', '#86A8E7', '#91EAE4']}
        >
            <View style={{
                flexDirection:'column',
                height: '100%'
            }}>
                <View style={{
                    margin: 20, flexDirection:'row'
                    }}>
                    <Image source={route.params?.photo} style={{
                        width: 130, height: 200
                    }} />
                    <View style={{
                        width:windowWidth-150
                        }}>
                        <Text
                            style={{
                                marginLeft: 15, fontSize: 25
                            }}
                        >Título: {route.params?.title}</Text>
                        <Text
                            style={{
                                marginLeft: 15, fontSize: 20
                            }}
                        >Autor(a): {route.params?.author}</Text>
                        <Text
                            style={{
                                marginLeft: 15, fontSize: 20
                            }}
                        >Lido: {route.params?.isRead == 'Yes' ? 'Sim :)' : 'Não :('}</Text>
                        <Text style={{
                                marginLeft: 15, fontSize: 18
                            }}>
                                Ano de publicação: 2222</Text>
                        <View style={{
                            flexDirection:'row', margin: 8
                        }}>
                            <AntDesign name="star" size={25} color="yellow" style={{marginRight: 5,  paddingLeft: 5}} />
                            <AntDesign name="star" size={25} color="yellow" style={{marginRight: 5}} />
                            <AntDesign name="star" size={25} color="yellow" style={{marginRight: 5}} />
                            <AntDesign name="star" size={25} color="yellow" style={{marginRight: 5}} />
                            <AntDesign name="star" size={25} color="yellow" style={{marginRight: 5}} />
                        </View>
                    </View>
                </View>
                    <View style={{
                        margin: 10
                    }}>
                        <Text style={{
                            fontSize: 20, fontWeight:'bold'
                        }}> Sinopse: </Text>
                        <Text  style={{
                            fontSize: 18, marginHorizontal: 5, 
                            textAlign: 'justify'
                        }}>Lorem ipsum sollicitudin massa at nam neque aliquam enim nec sem, ut suspendisse congue sem himenaeos eget taciti per. inceptos nibh aliquam ad nisi duis erat feugiat fusce, himenaeos arcu mattis sapien morbi sodales donec, ullamcorper donec ut scelerisque tempor enim taciti. velit purus porta pellentesque lacinia, aenean non habitasse. </Text>
                    </View>
                    <View style={{
                        bottom: 25,
                        position: 'absolute',
                        marginLeft: 140,
                    }}>
                        <TouchableOpacity onPress={() => {toggleHeart()}} style={{
                            width: 180, borderRadius: 15,
                            backgroundColor: '#FF1493',
                            flexDirection:'row', alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Text style={{
                                color: '#eee', height: 30, 
                                marginVertical: 20, fontSize: 25
                            }}>Favoritos</Text>
                            <Ionicons name={heartShape ? 'heart-outline' : 'heart'} color='#eee' size={25}
                                />
                        </TouchableOpacity>
                    </View>
            </View>
        </LinearGradient>
    );
}