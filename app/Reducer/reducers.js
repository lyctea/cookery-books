import objectAssign from 'object-assign'
//初始化listView数据
import initcookeryBookState from '../Static/category_search_juhe.json'
import InitcookeryIdSearchState from '../Static/initCookeryIdSearchState.json'

//所有的初始state 第一次获取数据后，通过本地存储的方式读取
export const cookeryBookState = (preState = initcookeryBookState,action) => {
    switch (action.type){
        case "RECEIVEMENU": {
            return action.item;
        }
        default:
            return preState
    }
}

//initState 通过本地存储获取到
export const cookeryIdSearchState = (preState=InitcookeryIdSearchState,action) => {
    switch (action.type){
        case "REVEIVEIDINFO":{
            return action.item;
        }
        default:
            return preState
    }
}
