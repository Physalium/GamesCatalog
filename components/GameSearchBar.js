import React, { useState } from 'react'
import { SearchBar } from 'react-native-elements'

export default function GameSearchBar({ setGames }) {
    const [keyword, setKeyword] = useState("");

    const getGames = () => {
        GamesRepository.GetGamesByName(keyword)
            .then(games => setGames(games));
    };

    return (

        <SearchBar
            placeholder="Type here..."
            placeholderTextColor='black'
            onChangeText={(text) => setKeyword(text)}
            value={keyword}
            round
            showLoading

            searchIcon={{ color: "black" }}
            clearIcon={{ color: "black" }}
            containerStyle={{
                backgroundColor: "gray",
                borderBottomColor: 'transparent',
                borderTopColor: 'transparent',
                borderRadius: 5
            }
            }
            inputContainerStyle={{
                backgroundColor: "white"
            }}
            inputStyle={{ color: 'black' }}
            onSubmitEditing={getGames}

        />
    )
}