import React from 'react'
import PropTypes from 'prop-types';


const ProductTable =(products)=>{
    console.log(products)
    return(
        <React.Fragment>
        <table>
        {
        products.map(item=>{
            return(
                
                    <tr>
                        <td>{item.category}</td>
                        <td>{item.price}</td>
                        <td>{item.name}</td>
                    </tr>
               
            );
        })
    }
     </table>
        </React.Fragment>
    );
}

ProductTable.propTypes={
    category:PropTypes.string,
    price:PropTypes.number,
    name:PropTypes.string
}

export default ProductTable;
