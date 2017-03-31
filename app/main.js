//应用的唯一入口
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import Route from './Router/route'
import store from './Reducer/store'

import './Css/main.css' //导入全局样式文件

render(
    <Provider store={store}>
        <Route/>
    </Provider>,
    document.getElementById('root')
)