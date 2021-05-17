import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ListItem, Image, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Game({ i, game, selectGame, deleteGame, flipState }) {
  return (
    <ListItem key={i} bottomDivider containerStyle={styles.containerStyle}>
      <View style={styles.containerStyle}>
        <ImageBackground source={{ uri: game.background }} style={styles.image} >
          <ListItem.Content style={styles.contentStyle}>
            <ListItem.Title numberOfLines={1} ellipsizeMode={'middle'} style={styles.nameText}>{game.name}</ListItem.Title>
            <View style={styles.detailsView}>
              <Text style={styles.dateText}>Release date: {game.released}</Text>
              <Text style={styles.ratingText}>Rating: {game.rating}/5</Text>
            </View>
            <ListItem.Subtitle style={styles.subtitleText}>{game.finished === undefined ? "" : game.finished ? "Finished" : "Not Finished"}</ListItem.Subtitle>
            {flipState != null ?
              <Icon
                name={game.finished ? "check-square" : "square"}
                size={22}
                color="white"
                style={styles.flipButtonStyle}
                onPress={() => flipState && flipState(game)}
              />
              : null}
            <ListItem.Subtitle numberOfLines={2} ellipsizeMode={'tail'} style={styles.tagText}>{game.tags.map(x => x + " ")}</ListItem.Subtitle>
          </ListItem.Content>
        </ImageBackground>
        {selectGame != null ?
          <Button
            onPress={() => selectGame && selectGame(game)}
            title="Add to library"
            type="outline"
            buttonStyle={styles.addButtonStyle}
          /> : null}
        {deleteGame != null ? <Button
          onPress={() => deleteGame && deleteGame(game)}
          title="Delete"
          type="outline"
          icon={
            <Icon
              name="trash"
              size={20}
              color="black"
            />}
          color="gray"
          buttonStyle={styles.addButtonStyle}
        /> : null}

      </View>
    </ListItem >
  );
}
const styles = StyleSheet.create({
  contentStyle:
  {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    height: 130
  },
  addButtonStyle: {
    width: 200,
    marginTop: 10,
    alignContent: 'center',
    backgroundColor: 'white',
    borderRadius: 5
  },
  flipButtonStyle: {
    width: 70,
    alignContent: 'flex-start',
    backgroundColor: 'transparent',
    borderRadius: 5,
    marginRight: 300,
    marginTop: 133
  },
  containerStyle: {
    backgroundColor: 'whitesmoke',
    marginBottom: 0,
    borderRadius: 5,
    alignItems: 'center'
  },
  detailsView: {
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 210,
    marginTop: 5,
    alignSelf: 'flex-end'
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  nameText: {
    paddingLeft: 0,
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 5,
    paddingLeft: 5,
    paddingRight: 5,
    position: 'absolute',
    left: 5,
    top: 5,
    maxWidth: 200,
    fontSize: 17,
  },
  ratingText: {
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 5,
  },
  subtitleText: {
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 5,
    position: 'absolute',
    left: 26,
    bottom: 0
  },
  tagText: {
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 5,
    position: 'absolute',
    right: 5,
    fontSize: 10,
    maxWidth: 150,
    height: 30,
    justifyContent: 'center',
    bottom: 0
  },
  dateText: {
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 5,
  }
})