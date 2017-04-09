import React, {Component} from 'react'
import MyListViewCell from './MyListViewCell'
import '../Css/listview.less'
import data from '../Static/listViewData.json'
import store from '../Reducer/store'
import * as ItemsActions from '../Reducer/Action'

class MyListView extends Component{
    listViewClick(id,e){
      console.log("click");
      console.log(id);
      store.dispatch(ItemsActions.getCookeryIdRequest(id));
      this.props.history.push("/details");
    };
    render(){
        return (
            <div className="listview">
                <div className="header">
                    <span>春季推荐</span>
                    <a href="#"><img src={require("../image/more.png")} alt="Category"/></a>
                </div>
                {data.result.data.map((d,index) =>
                    <MyListViewCell albums={d.albums}
                                    key={index}
                                    title={d.title}
                                    imtro={d.imtro}
                                    id={d.id}
                                    history={this.props.history}
                                    listViewClick={this.listViewClick}/>
                )}
            </div>
        )
    }
}

export default MyListView