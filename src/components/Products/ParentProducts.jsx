import React from 'react'
import Products from './Products'


 const products = [
 { name: 'Perk', quantity: 10, sales: 7,price:30 },
 { name: 'Pepsi', quantity: 10, sales: 20,price:40 },
 { name: 'Coke', quantity: 18, sales: 50,price:40 },
 { name: 'Maggi', quantity: 41, sales: 22,price:30 },
 { name: '5Star', quantity: 7, sales: 9,price:40 },
 ]

const ParentProducts = () => {
  return (
    <div>
        <Products products={products}/>
    </div>
  )
}

export default ParentProducts