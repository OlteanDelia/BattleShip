import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useAuth } from '../../hooks/authContext';
import { getUserDetails } from '../../api'; 
import COLORS from '../../constants/colors';
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import Button from '../../components/Button';

const Title = styled.Text`
  color: ${COLORS.white};
  font-size: 50px;
  font-weight: 800;
  margin-bottom: 30px;
`;

const UserDetailsScreen = () => {
  const auth = useAuth();
  const [userDetails, setUserDetails] = useState<any>(null);
  const navigation = useNavigation<any>();

  const logout = () => {
    navigation.navigate("Welcome");
  };

  const goToLobby = () => {
    navigation.navigate("Lobby");
  };

  useEffect(() => {
    const getUserDetailsData = async () => {
      try {
        const data = await getUserDetails();
        setUserDetails(data);
      } catch (error) {
        console.error('Error getting user details:', error);
      }
    };

    getUserDetailsData();
  }, [auth.token]);

  return (
    <LinearGradient style={styles.container} colors={[COLORS.secondary, COLORS.primary]}>
      <View style={styles.contentContainer}>
        <Image
          source={require("../../../assets/user.png")} 
          style={styles.image}
        />
        <Title>User Details</Title>
        <View>
          {userDetails && (
            <>
              <Text style={styles.detail}>Your ID: <Text style={styles.value}>{userDetails.user.id}</Text></Text>
              <Text style={styles.detail}>Your Email: <Text style={styles.value}>{userDetails.user.email}</Text></Text>
              <Text style={styles.detail}>Games you played: <Text style={styles.value}>{userDetails.gamesPlayed}</Text></Text>
              <Text style={styles.detail}>Games you lost: <Text style={styles.value}>{userDetails.gamesLost}</Text></Text>
              <Text style={styles.detail}>Games you won: <Text style={styles.value}>{userDetails.gamesWon}</Text></Text>
              <Text style={styles.detail}>Currently: <Text style={styles.value}>{userDetails.currentlyGamesPlaying}</Text></Text>

            </>
          )}
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Lobby"
          onPress={goToLobby}
          style={{ width: '100%', backgroundColor: COLORS.white }}
        />
        <Button
          title="Logout"
          onPress={logout}
          style={{ width: '100%', backgroundColor: COLORS.white, marginTop: 10 }}
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
  detail: {
    fontSize: 16,
    color: COLORS.white,
    marginBottom: 10,
  },
  value: {
    fontSize: 13,
    color: COLORS.white,
  },
  image: {
    width: 300, 
    height: 300, 
    marginBottom: 20,
  },
});

export default UserDetailsScreen;
