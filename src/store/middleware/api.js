import axios from 'axios'
import * as apiActions from '../api'

const api = ({ dispatch }) => next => async action => {
  if (action.type !== apiActions.apiCallBegan.type) return next(action)

  next(action)

  // make api call
  const { url, onSuccess, onError } = action.payload
  try {
    console.log('url: ', url)
    const response = await axios.get(url)
    // general case
    dispatch(apiActions.apiCallSuccess(response.data))

    // specific case ( dont really understand this special case )
    if (onSuccess) dispatch({ type: onSuccess, payload: response.data })
  } catch (error) {
    dispatch(apiActions.apiCallFailed(error.message))

    // specific case
    if (onError) dispatch({ type: onError, payload: error.message })
  }
}

export default api
