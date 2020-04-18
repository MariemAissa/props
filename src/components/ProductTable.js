import React from 'react'
import PropTypes from 'prop-types';


const ProductTable =(brand)=>{
    console.log(brand.products)
    return(
        <>
        {
        brand.map(item=>{
            return(
                <p category={brand.category} price={brand.price} name={brand.name}></p>
             
            );
        })
    }
        

        </>
    );
}

ProductTable.propTypes={
    category:PropTypes.string,
    price:PropTypes.number,
    name:PropTypes.string
}

export default ProductTable;