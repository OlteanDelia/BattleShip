import {useIsFocused, useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks/authContext";
import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { listGames, createGame, loadGame } from "../../api";
import { LinearGradient } from 'expo-linear-gradient';
import GameListItem from "../../components/GameListItem";
import COLORS from '../../constants/colors';
import styled from "styled-components/native";
import Button from '../../components/Button';

const Title = styled.Text`
  color: ${COLORS.white};
  font-size: 50px;
  font-weight: 800;
  margin-bottom: 30px;
`;


const GameList = styled.ScrollView``


const LobbyScreen = () => {
    const auth = useAuth();
    const navigation = useNavigation<any>();
    const [games, setGames] = useState<any[]>([]);
    useEffect(() => {
        listGames(auth.token).then(setGames);
    }, []);
    

    const handleAddGame = async () => {
        await createGame(auth.token);
        await listGames(auth.token).then(setGames);
    }

    const goToUserDetails = () => {
        navigation.navigate("UserDetails")
    }

    return (
        <LinearGradient style={styles.container} colors={[COLORS.secondary, COLORS.primary]}>
      <View style={styles.contentContainer}>
        <Title>Lobby</Title>

        <View style={styles.buttonContainer}>
        <Button
          title="Create a Game"
          onPress={handleAddGame}
          style={{ width: '100%', backgroundColor: COLORS.white }}
          
        />
        <Button
          title="User Details"
          onPress={goToUserDetails}
          style={{ width: '100%', backgroundColor: COLORS.white, marginTop: 10 }}
        />
      </View>
            </View>

        </LinearGradient>
    )
}

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
});

export default LobbyScreen