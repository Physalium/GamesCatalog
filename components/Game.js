import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ListItem, Image } from 'react-native-elements'

export default function Game({ i, game }) {
  return (
    <ListItem key={i} bottomDivider>
      <View style={{ flex: 1, flexDirection: "row", marginBottom: 10 }}>
        <TouchableOpacity >
          <ListItem.Content style={{ flexDirection: 'row' }}>
            <ListItem.Title style={styles.nameText}>{game.name}</ListItem.Title>
            <View style={styles.ratingeView}>
              {/* <Image source={require('../images/rating.png')} style={styles.ratingImage} /> */}
              <Text style={styles.ratingText}>Rating: {game.rating}/5</Text>
            </View>
            <View style={styles.dateView}>
              <Text style={styles.dateText}>Release date: {game.released}</Text>

            </View>
          </ListItem.Content>
        </TouchableOpacity>
      </View>
    </ListItem>
  );
}
const styles = StyleSheet.create({
  ratingView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingLeft: 10,
    paddingTop: 5
  },
  dateView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  nameText: {
    paddingLeft: 3,
    fontSize: 20,
    color: 'black'
  },
  ratingText: {
    paddingLeft: 10,
    textAlign: 'right',
    color: 'black'
  },
  dateText: {
    paddingLeft: 5,
    color: 'black'
  }
})