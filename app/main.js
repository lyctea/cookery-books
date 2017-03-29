//应用的唯一入口
import React from 'react'
import {render} from 'react-dom'
import HomePage from './Containers/HomePage'

import './main.css' //导入css文件

render(<HomePage/>,document.getElementById('root'))