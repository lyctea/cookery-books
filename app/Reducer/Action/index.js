import fetchJSONP from 'fetch-jsonp'

//已经成功接收到数据，dispatch给组件
function reveiveMenuInfo(json) {
    return {
        type: RECEIVEMENU,
        item: json
    }
}

//获取菜谱请求，参数是菜谱名
export default function getMenuRequest(menu){
    return dispatch => {
        let url = 'http://apis.juhe.cn/cook/query.php?menu=马铃薯&dtype=&pn=&rn=&albums=&key=b4ae59bec17c24bedd0777b26c94ae72';
        return fetchJSONP(url,{
            timeout: 20000,
            jsonpCallback: "callback"
        })
            .then(response=>response.json())
            .then(json => {
                //成功获取数据，dispatch出去
                dispatch(reveiveMenuInfo(json));
                console.log(json);
            }).catch(e => {
                console.log(e)
            })
    }
}