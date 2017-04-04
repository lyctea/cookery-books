//连接中间件 用于生成项目的唯一store
import { createStore, applyMiddleware } from 'redux'
import * as reducers from '../Reducer/reducers';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

const loggerMiddleware = createLogger()

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
)(createStore)

export default function configureStore(initiaState) {
    return createStoreWithMiddleware(reducers,initiaState)
}