import axios from 'axios'

const url = 'http://localhost:3001/api/logs'

const getAll = () => {
    const request = axios.get(url)
    return request.then(response => response.data)
}

const create = async newObject => {
    const response = await axios.post(url, newObject)
    return response.data
}

export default { getAll, create }

