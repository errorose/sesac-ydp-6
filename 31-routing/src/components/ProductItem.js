import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductItem({ product }) {
    console.log('product >>>>> ', product);
    // {userid, id, title, body}

    return (
        <>
            <Link to={`/products/${product.id}`}>
                <ul>
                    <li>상품명 : {product.title}</li>
                    <li>상세설명 : {product.body}</li>
                </ul>
            </Link>
            <hr />
        </>
    );
}