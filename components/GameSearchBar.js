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
            placeholderTextColor='#fff'
            onChangeText={(text) => setKeyword(text)}
            value={keyword}
            round
            showLoading

            searchIcon={{ color: "#fff" }}
            clearIcon={{ color: "#fff" }}
            containerStyle={{
                backgroundColor: "darkslategrey",
                borderBottomColor: 'transparent',
                borderTopColor: 'transparent'
            }
            }
            inputContainerStyle={{
                backgroundColor: "gray"
            }}
            inputStyle={{ color: '#fff' }}
            onSubmitEditing={getGames}

        />
    )
}