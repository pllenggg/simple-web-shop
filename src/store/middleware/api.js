// import axios from 'axios'
import * as apiActions from '../api'

const api = ({ dispatch }) => next => async action => {
  console.log('why there is noaction', action)
  if (action.type !== apiActions.apiCallBegan.type) return next(action)

  next(action)

  // make api call
  const { url, onSuccess, onError } = action.payload
  try {
    console.log('url: ', url)
    // const response = await axios.get(url)
    const response = {
      data: [
        {
          id: '27214172',
          number: 'XN730T',
          category: '1320',
          supplier: '5840',
          name: 'Krups CitiZ&Milk XN730T Titanium',
          price: '5929',
          shippingDay: '9',
          stock: '153',
          minQty: '3',
          maxQty: '0'
        },
        {
          id: '27214190',
          number: 'EN550W',
          category: '1320',
          supplier: '5840',
          name: "De'Longhi Lattissima Touch EN550W Touch Glam White",
          price: '6360',
          shippingDay: '7',
          stock: '23',
          minQty: '10',
          maxQty: '0'
        }
      ]
    }
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
