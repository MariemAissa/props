import React from 'react'
import PropTypes from 'prop-types';


const ProductTable =(produtcs)=>{
    console.log(produtcs)
    return(
        <>
        <p>{produtcs.category}</p>
        <p>{produtcs.price}</p>
        <p>{produtcs.name}</p>

        </>
    );
}

ProductTable.PropTypes={
    category:PropTypes.string,
    price:PropTypes.number,
    name:PropTypes.string
}

export default ProductTable;