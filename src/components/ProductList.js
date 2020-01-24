import './ProductList.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchProducts } from '../actions';
import ProductItem from './ProductItem';

const ProductList = props => {
    const renderList = props.products.map(product => {
        return (
            <div key={product.id}>
                <ProductItem product={product} />
            </div>
        );
    });

    useEffect(() => {
        if (_.isEmpty(props.products)) {
            props.fetchProducts(props.pocId.pocId);
        }
    }, [props.products, props.pocId]);

    return (
        <div className="list-container">
            {renderList}
        </div>
    );
}

const mapStateToProps = state => {
    return { 
        products: state.products,
        pocId: state.pocId
    };
}

export default connect(mapStateToProps, { fetchProducts })(ProductList);