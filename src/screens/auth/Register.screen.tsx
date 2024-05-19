import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Register from '../../components/Register';
import { useAuth } from '../../hooks/authContext';
import COLORS from '../../constants/colors';
import Button from '../../components/Button';

const RegisterScreen = () => {
    const auth = useAuth()
    const navigation = useNavigation<any>()

    const handleRegister = async (email: string, password: string) => {
        try {
            await auth.register(email, password);          
            navigation.navigate("Login");
        } catch (error) {
            console.error('Registration failed. Please try again.', error);
        }
    };
    
    return (
        <LinearGradient style={styles.container} colors={[COLORS.secondary, COLORS.primary]}>
            <View style={styles.contentContainer}>
                <Register onSubmit={handleRegister}  />  
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Back"
                    onPress={() => navigation.navigate("Welcome")}
                    style={{ width: '100%', backgroundColor: COLORS.white }}
                />
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 50, 
        left: 0,
        right: 0,
        paddingHorizontal: 20,
    },
    errorText: {
        color: COLORS.red,
        marginBottom: 20,
        fontSize: 16,
    },
});

export default RegisterScreen;
