import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
//import LinearGradient from 'react-native-linear-gradient';
import {LinearGradient} from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import { useTheme } from 'react-native-paper';

//import { AuthContext } from '../components/context';

//import Users from '../model/users';


export default function SignUpScreen({ navigation }) {
  const [data, setData] = React.useState({
    email: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true, 
    confirm_secureTextEntry: true, 
  });

  const textInputChange = (val) => {
    setData({
      ...data,
      password:val,
    });
  }

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry, 
    })
  }
  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry, 
    })
  }

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password:val,
      check_textInputChange: true
    });
  }

  const handleConfirmPasswordChange = (val) => {
    setData({
      ...data,
      confirm_password:val,
      check_textInputChange: true
    });
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#48D1CC" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register now!</Text>
      </View>
      <Animatable.View
      animation="fadeInUpBig"
        style={styles.footer}
      >
        <Text style={styles.text_footer}>
          Email
        </Text>
        <View style={styles.action}>
          <FontAwesome
            name="user-o"
            color="#05375a"
            size={22}
          />
          <TextInput
            placeholder="Your email"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
          />
          {data.check_textInputChange ? 
            <Animatable.View
              animation="bounceIn"
            >
              <Feather
                name="check-circle"
                color="blue"
                size={24}
              />
            </Animatable.View>
          : null }
        </View>
        <Text style={[styles.text_footer, {marginTop: 35}]}>
          Password
        </Text>
        <View style={styles.action}>
          <Feather
            name="lock"
            color="#05375a"
            size={22}
          />
          <TextInput
            placeholder="Your password"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity
            onPress={() => updateSecureTextEntry()}
          >
            {data.secureTextEntry ?
              <Feather
                name="eye-off"
                color="gray"
                size={24}
              />
              :
              <Feather
                name="eye"
                color="gray"
                size={24}
              />
            }
          </TouchableOpacity>
        </View>
        <Text style={[styles.text_footer, {marginTop: 35}]}>
        Confirm Password
        </Text>
        <View style={styles.action}>
          <Feather
            name="lock"
            color="#05375a"
            size={22}
          />
          <TextInput
            placeholder="Confirm password"
            secureTextEntry={data.confirm_secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => handleConfirmPasswordChange(val)}
          />
          <TouchableOpacity
            onPress={() => updateConfirmSecureTextEntry()}
          >
            {data.confirm_secureTextEntry ?
              <Feather
                name="eye-off"
                color="gray"
                size={24}
              />
              :
              <Feather
                name="eye"
                color="gray"
                size={24}
              />
            }
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
            <LinearGradient
              colors={['#48D1CC', '#08d4c4']}
              style={styles.signIn}
            >
              <Text style={[styles.textSign, {
                color: '#fff'
              }]}>
                Sign Up
              </Text>
            </LinearGradient>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignInScreen')}
              style={[styles.signIn, {
                borderColor: '#48D1CC',
                borderWidth: 1,
                marginTop: 15
              }]}
            >
              <Text style={[styles.textSign,{
                color: '#48D1CC'
              }]}>
                Sign In
              </Text>
            </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#48D1CC'
  },
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
  },
  footer: {
      flex: 3,
      backgroundColor: '#eee',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
  text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30
  },
  text_footer: {
      color: '#05375a',
      fontSize: 18
  },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 12,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      fontSize: 20,
      paddingLeft: 12,
      color: '#05375a',
  },
  errorMsg: {
      color: '#FF0000',
      fontSize: 14,
  },
  button: {
      alignItems: 'center',
      marginTop: 50
  },
  signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
  },
  textSign: {
      fontSize: 22,
      fontWeight: 'bold'
  }
});