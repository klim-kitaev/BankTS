import { createStore, applyMiddleware } from 'redux'
import bankReducer from './bankReducer';

const bankStore = createStore(
    bankReducer
);

export default bankStore;