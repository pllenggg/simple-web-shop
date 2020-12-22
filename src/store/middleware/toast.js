// log every action that dispatch
const toast = ({ dispatch, getState }) => next => action => {
  if (action.type === 'error') { console.log('Toastify', action.payload.message) } else next(action)
}

export default toast
