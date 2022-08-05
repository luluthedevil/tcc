import { Text, View, SafeAreaView, ScrollView, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import Feather from 'react-native-vector-icons/Feather';
import Carousel from 'react-native-snap-carousel';
import { sliderData, geekBooks, readBooks } from '../model/data';
import BannerSlider from '../components/BannerSlider';
import { windowWidth } from '../utils/Dimensions';
import CustomSwitch from '../components/CustomSwitch';
import React, { useState } from 'react';
import ListItem from '../components/ListItem';

export default function HomeScreen({navigation}) {
    const [booksTab, setBooksTab] = useState(1);

    const [loaded] = useFonts ({
        RobotoMedium: require('../../assets/fonts/Roboto/Roboto-Medium.ttf'),
    });

    if(!loaded) {
        return null;
    }

    const renderBanner = ({item, index}) => {
        return <BannerSlider data={item} />;
    };

    const onSelectSwitch = value => {
        setBooksTab(value);
    };

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
            <ScrollView style={{padding: 25, marginTop:10}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, alignItems:'center'}}
                >
                    <Text style={{fontSize: 20, fontFamily: 'RobotoMedium'}}>
                        Olá Luciana
                    </Text>
                    <TouchableOpacity onPress={() => {navigation.openDrawer()}}>
                        <ImageBackground source={require('../../assets/cat.png')} style={{width: 55, height: 55}} imageStyle={{borderRadius:40}} />
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', borderColor:'#C6C6C6', borderWidth: 1, borderRadius:8,
            paddingHorizontal: 12, paddingVertical: 10}}>
                    <Feather name="search" size={25} color="#C6C6C6" style={{marginRight: 5}} />
                    <TextInput placeholder='Pesquisar...' />
                </View>
                <View style={{marginVertical:15, flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 20, fontFamily: 'RobotoMedium'}}>Coleções de Livros</Text>
                    <TouchableOpacity onPress={() => {}}>
                        <Text style={{color:'#0aada8'}}>Ver mais</Text>
                    </TouchableOpacity>
                </View>
                <Carousel
                    data={sliderData}
                    renderItem={renderBanner}
                    sliderWidth={windowWidth - 40}
                    itemWidth={300}
                    loop={true}
                /> 
                <View style={{marginVertical:20}}>
                    <CustomSwitch 
                        selectionMode={1} 
                        option1="Livros lidos" 
                        option2="Livros recomendados" 
                        onSelectSwitch={onSelectSwitch}
                    />
                </View>
                {booksTab == 1 && readBooks.map(item => (
                    <ListItem key={item.id} photo={item.poster}
                        title={item.title} author={item.author}
                        isRead={item.isRead}
                        onPress={() => navigation.navigate('BookDetails', {id: item.id, title: item.title, photo: item.poster, author: item.author, isRead: item.isRead})}
                    />
                ))}
                {booksTab == 2 && geekBooks.map(item => (
                    <ListItem key={item.id} photo={item.poster}
                        title={item.title} author={item.author}
                        isRead={item.isRead} 
                        onPress={() => navigation.navigate('BookDetails', {id: item.id, title: item.title, photo: item.poster, author: item.author, isRead: item.isRead})}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}
