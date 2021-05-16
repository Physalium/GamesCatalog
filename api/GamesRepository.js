import request from './request'

function GetGamesByName(name) {
    return request({
        method: 'get',
        url: `games?search=${name}&`,
    }).then((response) => {
        console.info(response)
        return response
    })
}

export default GamesRepository = { GetGamesByName }