import React from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';

const CardTab = ({ navigation, title = "", icon = "" }) => {
    const { colors } = useTheme();

    return (
        <TouchableOpacity style={styles.card(colors.border)} onPress={() => {
            navigation.navigate(title)
        }}>
            <Icon name={icon} size={20} color={colors.primary} />
            <View style={{ flex: 1, alignItems: "flex-end", justifyContent: "flex-end" }}>
                <Text style={{ color: colors.primary }}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default CardTab;