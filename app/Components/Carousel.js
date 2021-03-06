import React, {Component} from 'react'
import Carousel from 'antd/lib/carousel'
import 'antd/lib/carousel/style/index.less'
import { Link } from 'react-router-dom'


export default class MyCarousel extends Component{
    render(){
        const data = [
            {
                img: require("../image/banner1.jpg"),
                link: 'category'
            },
            {
                img: require("../image/banner2 .jpg"),
                link: 'lessonDetail'
            },
            {
                img: require("../image/banner3.jpg"),
                link: 'lessonDetail'
            },
            {
                img: require("../image/banner4.jpg"),
                link: 'lessonDetail'
            },
            {
                img: require("../image/banner5.jpg"),
                link: 'lessonDetail'
            },
            {
                img: require("../image/banner6.jpg"),
                link: 'lessonDetail'
            }
        ];
        return (
            <Carousel autoplay dots infinite selectedIndex={1} className="xxx" style={{ backgroundColor: 'blue', margin: 10 }}>
                {data.map((d, i) => {
                    return <Link to="" key={i}><img style={{ verticalAlign: 'top',margin: "0 auto",width: "100%"}} src={d.img}/></Link>;
                })}
            </Carousel>
        )
    }
}
