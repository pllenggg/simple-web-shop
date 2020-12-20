import axios from 'axios'

export const fetchData = async (endpoint) => {
  const result = await axios.get(endpoint)
  return result.data
}
