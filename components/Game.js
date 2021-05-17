import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ListItem, Image } from 'react-native-elements'

export default function Game({ i, game }) {
  return (
    <ListItem key={i} bottomDivider>
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
        <TouchableOpacity >

          <ListItem.Content>
            <ListItem.Title>{game.name}</ListItem.Title>
            <ListItem.Subtitle>{game.rating}</ListItem.Subtitle>
          </ListItem.Content>
        </TouchableOpacity>
      </View>
    </ListItem>
  );
}
