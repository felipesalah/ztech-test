import './ProductList.css';
import React from 'react';
import ProductItem from './ProductItem';

const ProductList = () => {
    return (
        <div className="list-container">
            <ProductItem />
        </div>
    );
}

export default ProductList;