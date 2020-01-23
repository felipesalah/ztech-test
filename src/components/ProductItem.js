import './ProductItem.css'
import React from 'react';

const ProductItem = props => {
    return (
        <div className="card">
            <h4 className="title left">{props.product.title}</h4>
            <p className="left">$ {props.product.productVariants[0].price}</p>
            <div className="actions">
                <button className="btn" type="button" style={{marginRight: '10px'}}>
                    <span style={{fontSize: '20px'}}>+</span>
                </button>
                <button className="btn red" type="button">
                    <span style={{fontSize: '20px',padding: '13px 26px'}}>-</span>
                </button>
            </div>
        </div>
    );
};

export default ProductItem;