import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Product() {
  const { id } = useParams()
  const navigate = useNavigate()
  const products = {
    1: { name: 'Iphone', description: 'Điện thoại Iphone', price: '$699' },
    2: { name: 'Samsung', description: 'Điện thoại Samsung', price: '$599' },
    3: { name: 'Laptop', description: 'Laptop hiệu năng cao', price: '$999' },
  }

  const product = products[id]

  if (!product) {
    return <div><h2>Product not found</h2><p>ID: {id}</p></div>
  }
   function handleBuy() {
     navigate('/checkout');
  }
  return (
    <div>
      <h2>{product.name} (ID: {id})</h2>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <button onClick={handleBuy}>Mua hàng</button>
    </div>
  )
}