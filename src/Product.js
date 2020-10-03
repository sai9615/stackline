import React from 'react'
import './Product.css'
import home from './home.png'
import sales from './line-chart.png'

function Product() {
    return (
        <div>
            <div className = "sidebar">
                <img className="product_image" src="https://images-na.ssl-images-amazon.com/images/I/51h-a5IaHeL.jpg" width ="200" height="200"></img>              
            <h2 className="title">title</h2>
            <h4 className="subtitle">subtitle produscy sdasdadb sadasdbsda sds dasdsa</h4>
        </div>
        <div className ="tag_block">
           <div className="tags">brands</div>  
           <div className="tags">brands</div>  
           <div className="tags">brands</div>  
           <div className="tags">brands</div>  
           <div className="tags">brands</div>  
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
