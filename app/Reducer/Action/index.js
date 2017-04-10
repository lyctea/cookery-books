//使用jsonp跨域
import fetchJSONP from 'fetch-jsonp'

//已经成功接收到菜谱列表，dispatch给组件
function reveiveMenulist(json) {
    return {
        type: "RECEIVEMENU",
        item: json
    }
}
//获取菜谱列表请求，参数是菜谱名
export function getMenuRequest(menu){
    return dispatch => {
        let url = `http://apis.juhe.cn/cook/query.php?menu=${menu}&dtype=&pn=&rn=&albums=&key=b4ae59bec17c24bedd0777b26c94ae72`;
        return fetchJSONP(url,{
            timeout: 20000,
            jsonpCallback: "callback"
        })
            .then(response=>response.json())
            .then(json => {
                //成功获取数据，dispatch出去
                dispatch(reveiveMenulist(json));
            }).catch(e => {
                console.log(e)
            })
    }
}

//成功通过id请求到数据，dispatch给组件
function reveiveIdInfo(json) {
    return {
        type: "REVEIVEIDINFO",
        item: json
    }
}
//通过菜谱ID请求数据，参数名ID
export function getCookeryIdRequest(id) {
    return dispatch => {
        let url = `http://apis.juhe.cn/cook/queryid?id=${id}&dtype=&key=b4ae59bec17c24bedd0777b26c94ae72`;
        return fetchJSONP(url,{
            timeout: 20000,
            jsonpCallback: "callback"
        })
            .then(response=>response.json())
            .then(json => {
                //成功获取数据，dispatch出去
                dispatch(reveiveIdInfo(json));
            }).catch(e => {
                console.log(e)
            })
    }
}

//成功接收分类ID请求数据
function reveiveCategoryInfo(json){
    return {
        type: "REVEIVECATEGORY",
        item: json
    }
}

//通过分类ID请求数据，参数是分类ID
export function getCategoryIdRequest(id) {
    return dispatch => {
        let url = `http://apis.juhe.cn/cook/index?cid=${id}&dtype=&pn=&rn=&format=&key=b4ae59bec17c24bedd0777b26c94ae72`;
        return fetchJSONP(url,{
            timeout: 20000,
            jsonpCallback: "callback"
        })
            .then(response=>response.json())
            .then(json => {
                //成功获取数据，dispatch出去
                dispatch(reveiveMenulist(json));
            }).catch(e => {
                console.log(e)
            })
    }
}

export function addLocalList(food) {
    return {
        type: "ADD_LOCALLIST",
        item: food
    }
}

export function cancelLocalList(food) {
    return {
        type: "CANCEL_LOCALLIST",
        item: food
    }
}

export function externalUrl(url) {
    return {
        type: "ExternalUrl",
        item: {url: url}
    }
}