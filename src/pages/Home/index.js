import React, { useRef, useEffect, useState } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Text, Animated, ScrollView, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import CardTab from '../../components/cardTab';

const HomeScreen = ({ navigation }) => {
    const { colors } = useTheme();
    const [speed, setSpeed] = useState(30);
    const [aux, setAux] = useState(false);
    const [stop, setStop] = useState(false);
    const [anim, setAmin] = useState(0);

    useEffect(() => {
        start();
    }, [anim]);

    const start = async () => {
        
        if(stop) return;

        await delay(speed);
        
        if (anim > 85) {
            setAux(true);
        }
        if( anim < -50){
            setStop(true);
        }
        if(anim > 20){
            setSpeed(5);
        }else{
            setSpeed(50);
        }
        
        if(!aux){
            setAmin(+(anim + 1));
        }else{
            setAmin(+(anim - 1));
        }
        
    };

    const delay = ms => new Promise(res => setTimeout(res, ms));

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <LinearGradient style={{ width: 230, height: 175, position: "absolute", borderRadius: 5 }} start={{ x: (anim/50), y: 0 }} end={{ x: 1, y: (anim/50) }} colors={[ colors.background, '#ADFF2F', '#008200', colors.background]}></LinearGradient>
                    <View style={{width: 225, height: 170, backgroundColor: colors.background, borderRadius: 5, position: "absolute"}}></View>
                    <TouchableOpacity style={{ width: 225, height: 170, backgroundColor: colors.background, borderRadius: 5, justifyContent: "center", alignItems: "center"}} onPress={() => navigation.navigate("Details")}>
                        <Icon name={"currency-usd"} size={40} color={colors.primary} />
                        <Text style={{color: colors.primary, fontWeight: "bold"}}>Atualizar financas</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            <ScrollView horizontal={true} style={{ maxHeight: 100, padding: 10, paddingLeft: 20 }}>
                <CardTab navigation={navigation} title="Details" icon="alpha-r-circle-outline" />
                <CardTab navigation={navigation} title="Details" icon="alpha-r-circle-outline" />
                <CardTab navigation={navigation} title="Details" icon="alpha-r-circle-outline" />
                <CardTab navigation={navigation} title="Details" icon="alpha-r-circle-outline" />
                <View style={{ width: 80, height: 10 }}></View>
            </ScrollView>
        </View>
    );
};

export default HomeScreen;

