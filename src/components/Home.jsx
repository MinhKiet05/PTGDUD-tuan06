import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const products = [
    { id: 1, name: 'Iphone' },
    { id: 2, name: 'Samsung' },
    { id: 3, name: 'Laptop' },
  ]

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            <Link to={`/products/${p.id}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}