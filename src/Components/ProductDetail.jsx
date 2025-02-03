import React from 'react'
import { useLocation } from 'react-router-dom'

const ProductDetail = () => {
    const {state}=useLocation()
    const {product}= state || {}
    
  return (
    <div>
      
    </div>
  )
}

export default ProductDetail
