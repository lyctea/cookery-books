import React, {Component} from 'react'
import SearchListViewCell from '../Components/SearchListViewCell'
import NavbarButton from '../Components/NavbarButton'
import { StorageGetter,StorageSetter} from '../Static/tool'
import * as ItemsActions from '../Reducer/Action'
import store from '../Reducer/store'

class MyCollect extends Component{
    listClick(id,e){
        e.preventDefault();
        //拿到子组件的id dispatch action
        store.dispatch(ItemsActions.getCookeryIdRequest(id));
        //需要注意的是history需要一级级的传递
        this.props.history.push("/details");
    };
    render() {
        var localList = StorageGetter("locallist");
        const style = {
            paddingBottom: "1rem"
        }
        return (
            <div style={style}>
                {localList.map((item,index)=>
                    <SearchListViewCell key={index}
                                        albums={item.albums}
                                        title={item.title}
                                        ingredients={item.ingredients}
                                        target={item.tags}
                                        listClick={this.listClick}
                                        id={item.id}
                                        history={this.props.history}/>
                )}
                <NavbarButton/>
            </div>
        )
    }
}

export default MyCollect


