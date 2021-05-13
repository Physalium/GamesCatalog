import request from './request'

function GetGamesByName(name) {
    return request({
        method: 'get',
        url: `games?search=${name}&`,
    })
}

export default GamesRepository = { GetGamesByName }