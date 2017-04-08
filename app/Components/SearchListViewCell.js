import React, {Component} from 'react'
import '../Css/searchlistviewcell.less'

class SearchListViewCell extends Component{

    render() {
        const {albums,title,ingredients,author,id} = this.props;
        return (
            <div className="searchlistviewcell" onClick={this.props.listClick.bind(this,id)}>
                <div className="pic">
                    <img src={albums} alt="albums"/>
                </div>
                <div className="detail">
                    <h4><em>{title}</em><span>精</span></h4>
                    <p className="subcontent">{ingredients}</p>
                    <p className="author">{author}</p>
                    <div className="clearfix"></div>
                </div>
            </div>
        )
    }
}

export default SearchListViewCell
