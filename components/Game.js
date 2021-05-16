import React from 'react';
import {
  View,
} from 'react-native';

export default function Game({ i, game }) {
  return (
    <ListItem key={i} bottomDivider>
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
        <TouchableOpacity >
          <Image source={{
            uri: l.urlToImage
          }}
            style={{ width: 100, height: 100 }} />

          <ListItem.Content>
            <ListItem.Title>{game.title}</ListItem.Title>
            <ListItem.Subtitle>{game.description}</ListItem.Subtitle>
          </ListItem.Content>
        </TouchableOpacity>
      </View>
    </ListItem>
  );
}
