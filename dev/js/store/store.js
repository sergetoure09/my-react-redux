import allReducers from '../reducers/combiner.js'
import {createStore} from 'redux'


const Store=createStore(allReducers)

export default Store