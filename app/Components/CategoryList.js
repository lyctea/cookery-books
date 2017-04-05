import React, {Component} from 'react'
import '../Css/categorylist.less'
import { StorageGetter,StorageSetter} from '../Static/tool'	//浏览器本地存储


var dataResult = [];
var currentList = StorageGetter("currentList");

class CategoryList extends Component{
    //构造函数
    constructor(props){
        super(props);
        this.state = {
            selectId: '',
            currentList: currentList
        }
    };

    //左侧分类button点击事件
    changeCategory(id,e){
        //回到页面顶部，需要添加缓冲动画
        window.scrollTo(0,0)
        this.setState({
            selectId: id
        });
        dataResult.map((item,index)=>{
            if (item.parentId == this.state.selectId){
                this.setState({
                    currentList: item.list
                });
                //做一个本地存储，保存历史选择项目
                StorageSetter("currentList",item.list)
            }
        })
    };

    //选择详细分类之后，请求更新数据,并且页面跳转
    changelist(){
        console.log("请求更新数据...")
    };

    render() {
        const {result} = this.props;
        dataResult = result;
        return (
            <div className="categorycontent">
                <div ref="selectButton" className="catelist-left">
                    {dataResult.map((item,index)=>{
                       return <button ref="listbutton" key={index} onClick={this.changeCategory.bind(this,item.parentId)}>{item.name}</button>
                    })}
                </div>
                <div className="catelist-right">
                    {this.state.currentList.map((item,index)=>{
                        return <button key={index} onClick={this.changelist.bind(this,item.id)}>{item.name}</button>
                    })}
                </div>
            </div>
        )
    }
}


export default CategoryList