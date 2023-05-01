import axios from 'axios'

const getAll = () => {
  const request = axios.get('http://localhost:3001/api/habits')
  return request.then(response => response.data)
}

export default { getAll }