import React, {Component} from 'react'
import MyListViewCell from './MyListViewCell'
import '../Css/listview.less'
import data from '../Static/listViewData.json'
import store from '../Reducer/store'
import * as ItemsActions from '../Reducer/Action'
import {Link} from 'react-router-dom'

class MyListView extends Component{
    listViewClick(id,e){
      store.dispatch(ItemsActions.getCookeryIdRequest(id));
      this.props.history.push("/details");
    };
    render(){
        return (
            <div className="listview">
                <div className="header">
                    <span>春季推荐</span>
                    <Link to="/searchlist"><img src={require("../image/more.png")} alt="Category"/></Link>
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