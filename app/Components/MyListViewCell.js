import React, {Component} from 'react'
import '../Css/listview.less'

class MyListViewCell extends Component{

    render() {
        const {imgshow, title, des } = this.props;
        return (
            <div className="list">
                <div className="list-left">
                    <img src={imgshow} alt=""/>
                </div>
                <div className="list-right">
                    <span className="list-title">{title}</span>
                    <span className="list-des">{des}</span>
                </div>
            </div>
        )
    }
}
export default MyListViewCell

