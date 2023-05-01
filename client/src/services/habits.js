import axios from 'axios'

const url = 'http://localhost:3001/api/habits'

const getAll = () => {
    const request = axios.get(url)
    return request.then(response => response.data)
}

const create = async newObject => {
    const response = await axios.post(url, newObject)
    return response.data
}

const update = (id, newObject) => {
    const request = axios.put(`${url}/${id}`, newObject)
    return request.then(response => response.data)
}

const remove = (id) => {
    const request = axios.delete(`${url}/${id}`)
    return request.then(response => response.data)
}

export default { getAll, create, update, remove }

