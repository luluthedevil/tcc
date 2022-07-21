import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../components/context';

export function DrawerContent(props) {

    const paperTheme = useTheme();

    const { signOut, toogleTheme } = React.useContext(AuthContext);

    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                            <Avatar.Image
                                source={{
                                    uri:'https://images2.minutemediacdn.com/image/upload/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/87226-gettyimages-1247734973-fb624124040b7676d4da16f7b3666048.jpg'
                                }}
                                size={60}
                            />
                            <View style={{marginLeft:15}}>
                                <Title style={styles.title}>Luciana Ferreira</Title>
                                <Caption style={styles.caption}>@luluthedevil</Caption>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>281</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>113</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                    name="home-outline"
                                    color={color}
                                    size={25}
                                />
                            )}
                            label="Home"
                            onPress={
                                () => {props.navigation.navigate('Home')}
                            }
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon2 
                                    name="search-outline"
                                    color={color}
                                    size={25}
                                />
                            )}
                            label="Search"
                            onPress={
                                () => {props.navigation.navigate('Search')}
                            }
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                    name="book-outline"
                                    color={color}
                                    size={25}
                                />
                            )}
                            label="Bookshelf"
                            onPress={
                                () => {props.navigation.navigate('Bookshelf')}
                            }
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                    name="account-outline"
                                    color={color}
                                    size={25}
                                />
                            )}
                            label="Profile"
                            onPress={
                                () => {props.navigation.navigate('Profile')}
                            }
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon2
                                    name="settings-outline"
                                    color={color}
                                    size={25}
                                />
                            )}
                            label="Settings"
                            onPress={
                                () => {props.navigation.navigate('Settings')}
                            }
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {toogleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark} />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                            name="exit-to-app"
                            color={color}
                            size={25}
                        />
                    )}
                    label="Sign out"
                    onPress={() => {signOut()}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 18,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
});