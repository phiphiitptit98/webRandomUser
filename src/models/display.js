import user from './user'
import {combineReducers} from 'redux'
import select from './select'
export default combineReducers({
    user,
    select
})