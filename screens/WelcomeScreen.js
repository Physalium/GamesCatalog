import { Image, StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
export default function WelcomeScreen({ navigation }) {
  return (
    <LinearGradient

      colors={['gray', 'darkslategrey', 'darkslategrey', 'gray']}
      locations={[0.01, 0.15, 0.85, 1]}
      style={styles.background}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}>

      <View style={styles.titleContainer}>
        <Image
          source={require('../assets/icon.png')}
          style={{ width: 100, height: 100 }}
        />
        <Text style={styles.title}>Games Catalog</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <Text style={styles.inlineText}>Don't have an account?</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')} >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 250,
    borderRadius: 15,
    backgroundColor: 'snow',
    padding: 7,
    margin: '2%'
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center'
  },
  inlineText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: '15%',
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  titleContainer: {
    position: 'absolute',
    top: 135,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
});