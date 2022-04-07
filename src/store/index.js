import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'


// Создание Store 
const Store = createStore(reducer, applyMiddleware(thunk))
export default Store;