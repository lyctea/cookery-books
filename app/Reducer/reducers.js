import objectAssign from 'object-assign'
//初始化listView数据
import initcookeryBookState from '../Static/category_search_juhe.json'


export const cookeryBookState = (preState = initcookeryBookState,action) => {
    switch (action.type){
        case "RECEIVEMENU": {
            return action.item;
        }
        default:
            return preState
    }
}

