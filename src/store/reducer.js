import { combineReducers } from 'redux'
import entitiesReducers from './entities'

export default combineReducers({
  entities: entitiesReducers
})

// in the future we can add many more reducers here as a top level.
