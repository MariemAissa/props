import React from 'react'
import PropTypes from 'prop-types';


const ProductTable =(props)=>{
    console.log(props)
    return(
        <div >
      <table>
    
        <tbody>
          {props.products.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
}

ProductTable.propTypes={
    category:PropTypes.oneOf(["Electronics","Clothes"]),
    price:PropTypes.number,
    name:PropTypes.string
}

export default ProductTable;