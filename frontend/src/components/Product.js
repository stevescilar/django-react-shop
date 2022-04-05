import React from 'react'
import { Card } from 'react-bootstrap'

function Product( { product } ) { 
  return (
    //   my=marging on y p=padding rounded is look
    <Card className="my-3 p-3 rounded">
        <a href={`/product/${product._id}`}>
            <Card.Img src={product.image} />
        </a>
        <Card.Body>
            <a href={`/product/${product._id}`}>
                <Card.Title as="div">
                    <strong>
                        {product.name}
                    </strong>
                </Card.Title>
            </a>
            <Card.Text as="div">
                <div className='my-3'>
                    {product.rating} from {product.numReviews} Reviews
                </div>

            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Product