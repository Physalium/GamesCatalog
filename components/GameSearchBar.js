import React, { useState } from 'react'
import { SearchBar } from 'react-native-elements'

export default function GameSearchBar() {
    const [keyword, setKeyword] = useState("");

    const logGames = () => {
        GamesRepository.GetGamesByName(keyword)
            .then((response) => {
                console.info(response)
            });
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
            onSubmitEditing={logGames}

        />
    )
}