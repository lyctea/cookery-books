import React, {Component} from 'react'
import '../Css/listviewcell.less'

class MyListViewCell extends Component{

    render() {
        const {albums, title, imtro,id } = this.props;
        return (
            <div className="listviewcell" onClick={this.props.listViewClick.bind(this,id)}>
                <div className="left">
                    <img src={albums} alt=""/>
                </div>
                <div className="right">
                    <span>{title}</span>
                    <p>{imtro}</p>
                </div>
                <div className="clearfix"></div>
            </div>
        )
    }
}
export default MyListViewCell

