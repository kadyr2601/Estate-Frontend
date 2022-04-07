import {combineReducers} from 'redux'
import EstateReducer from './Estate'
import ElectronicReducer from "./Electronic";

// Создание Глобального Reducer для Store
const Reducers = combineReducers({
    EstateReducer,
    ElectronicReducer,

})
export default Reducers;
