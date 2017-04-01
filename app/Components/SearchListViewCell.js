import React, {Component} from 'react'
import '../Css/searchlistviewcell.less'

class SearchListViewCell extends Component{
    render() {
        const {albums,title,ingredients,author} = this.props;
        return (
            <div className="searchcellcontent">
                <div className="pic">
                    <img className="imgLoad" src={albums} width="400" height="400" style={{display:"block"}}/>
                </div>
                <div className="detail">
                    <h4><em>{title}</em><span className="cream">精</span></h4>
                    <p className="subcontent">{ingredients}</p>
                    <p className="author">{author}</p>

                    <div className="clearfix">
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchListViewCell
