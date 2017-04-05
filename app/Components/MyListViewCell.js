import React, {Component} from 'react'
import '../Css/listviewcell.less'

class MyListViewCell extends Component{

    render() {
        const {imgshow, title, des } = this.props;
        return (
            <div className="listviewcell">
                <div className="left">
                    <img src={imgshow} alt=""/>
                </div>
                <div className="right">
                    <span>{title}</span>
                    <span>{des}</span>
                </div>
                <div className="clearfix"></div>
            </div>
        )
    }
}
export default MyListViewCell

