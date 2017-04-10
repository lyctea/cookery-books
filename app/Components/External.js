import React, {Component} from 'react'
import NavbarButton from './NavbarButton'
import { connect } from 'react-redux'

class External extends Component{
    changeFrameHeight(){
        var ifm= this.refs.myiframe;
        ifm.height=document.documentElement.clientHeight;
        ifm.width=document.documentElement.clientWidth;
    }
    render() {
        let url = this.props.url;
        return (
            <div>
                <iframe  ref="myiframe"  onLoad={this.changeFrameHeight.bind(this)} src={url} style={{frameborder:"0",marginBottom:"1rem"}} ></iframe>
                <NavbarButton/>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    let  url  = state.externalUrlStete;
    return url;
}

export default connect(mapStateToProps,null)(External)




