import {combineReducers,createStore} from "redux";
import {userReducer,eventsReducer} from "../reducers"

export const combined = combineReducers({
    userReducer,eventsReducer
})

export const store = createStore(combined, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// const sagaMiddleware = createSagaMiddleware();
// // const Store = createStore(Reducers ,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// const Store = createStore(Reducers,
//     compose(applyMiddleware(sagaMiddleware, logger),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
// sagaMiddleware.run(rootSaga);
//
// export default Store