import React from 'react';
import { StyleSheet } from "react-native";
import { useTheme } from '@react-navigation/native';

const styles = StyleSheet.create({
    card: (backgroundColor) => { 
        return {
        height: 80,
        width: 100,
        backgroundColor,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        padding: 10,
        marginRight: 10,
        justifyContent: "space-between"
    }},
});

export default styles;