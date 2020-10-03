import React from 'react'
import './Product.css'
import home from './home.png'
import sales from './line-chart.png'

function Product({data}) {
    return (
        <div>
            <div className = "sidebar">
                <img className="product_image" src={data.image} width ="200" height="200"></img>              
            <h2 className="title">{data.title}</h2>
            <h4 className="subtitle">{data.subtitle}</h4>
            </div>
        <div className ="tag_block">
        {data.tags && data.tags.map((tag) => (<div className="tags">{tag}</div> ))}
        </div>
        <div className="overview">
            <img width="25px" height="25px" src={home} alt="home" className="overview_image"></img>
           <p className="overview_text"> OVERVIEW </p> 
        </div>
        <div className="sales">
            <img width="25px" height="25px" src={sales} alt="sales" className="sales_image"></img>
           <p className="sales_text"> SALES </p> 
        </div>
        </div>
    )
}

export default Product
