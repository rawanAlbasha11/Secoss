import { createStore } from 'redux';
import rootReducer from './reducers'; // Make sure this path is correct

const store = createStore(rootReducer);

export default store;