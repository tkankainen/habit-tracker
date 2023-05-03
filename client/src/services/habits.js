import axios from 'axios'

const url = 'http://localhost:3001/api/habits'

const habitService = {
    getAll: () => {
        const request = axios.get(url)
        return request.then(response => response.data)
    },
    create: async newObject => {
        const response = await axios.post(url, newObject)
        return response.data
    },
    update: (id, newObject) => {
        const request = axios.put(`${url}/${id}`, newObject)
        return request.then(response => response.data)
    },
    remove: (id) => {
        const request = axios.delete(`${url}/${id}`)
        return request.then(response => response.data)
    }
}

export default habitService

