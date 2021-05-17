import request from './request'

function GetGamesByName(name) {
    return request({
        method: 'get',
        url: `games?search=${name}&page_size=10&`,
    }).then((response) => {
        const results = [...response.results];
        const games = results.map(item => ({
            name: item.name, released: item.released, rating: item.rating,
            tags: [item.tags.filter(tag => tag.language === "eng").map(tag => tag.name)]
        }))
        console.log(games)
        return games
    })
}

export default GamesRepository = { GetGamesByName }