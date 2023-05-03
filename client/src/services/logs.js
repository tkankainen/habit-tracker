import axios from 'axios'

const url = 'http://localhost:3001/api/logs'

const logService = {
    getAll: () => {
      const request = axios.get(url)
      return request.then(response => response.data)
    },
    create: async newObject => {
      const response = await axios.post(url, newObject)
      return response.data
    }
}
  
export default logService

