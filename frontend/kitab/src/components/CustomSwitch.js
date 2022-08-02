import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useFonts } from 'expo-font';

export default function CustomSwitch({
    selectionMode,
    option1,
    option2,
    onSelectSwitch
}) {

    const [getSelectionMode, setSelectionMode] = useState(selectionMode);

    const updateSwitchData = (value) => {
        setSelectionMode(value);
        onSelectSwitch(value);
    };

    const [loaded] = useFonts ({
        RobotoMedium: require('../../assets/fonts/Roboto/Roboto-Medium.ttf'),
    });

    if(!loaded) {
        return null;
    }

    return (
        <View
            style={{
                height:50, width:'100%',
                backgroundColor:'#e4e4e4',
                borderRadius: 10, borderColor: '#1E90FF',
                flexDirection: 'row', justifyContent: 'center'
            }}
        >
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => updateSwitchData(1)}
                style={{
                    flex:1, borderRadius: 10,
                    justifyContent:'center', alignItems:'center',
                    backgroundColor: getSelectionMode == 1 ? '#1E90FF' : '#e4e4e4'
                }}
            >
                <Text
                    style={{
                        fontSize: 16, fontFamily:'RobotoMedium',
                        color: getSelectionMode == 1 ? '#fff' : '#1E90FF'
                    }}
                >
                    {option1}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => updateSwitchData(2)}
                style={{
                    flex:1, borderRadius: 10,
                    justifyContent:'center', alignItems:'center',
                    backgroundColor: getSelectionMode == 2 ? '#1E90FF' : '#e4e4e4'
                }}
            >
                <Text
                    style={{
                        fontSize: 16, fontFamily:'RobotoMedium',
                        color:  getSelectionMode == 2 ? '#fff' : '#1E90FF'
                    }}
                >
                    {option2}
                </Text>
            </TouchableOpacity>
        </View>
    );
}
