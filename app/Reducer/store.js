import { createStore,combineReducers,applyMiddleware,compose } from 'redux'
import * as reducers from '../Reducer/reducers'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

let createStoreWithMiddleware = null

if (process.env.NODE_ENV === 'production'){
    createStoreWithMiddleware = compose(applyMiddleware(
        thunkMiddleware
    ))(createStore)
}else {
    createStoreWithMiddleware = compose(applyMiddleware(
        thunkMiddleware,
        createLogger
    ),window.devToolsExtension?window.devToolsExtension():f=>f)(createStore)
}
/*
* compose
* (arguments): 需要合成的多个函数。每个函数都接收一个函数作为参数，然后返回一个函数。
* (return ): 从右到左把接收到的函数合成后的最终函数。
* */

var store = createStoreWithMiddleware(
    combineReducers(reducers),
);

export default store;