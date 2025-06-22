import React from 'react'

const Stationary = ({header,items}) => {
  return (
    <>
    <div>
        <h2 style={{fontWeight:'bold'}}>Header: {header}</h2>
        <br/>
        <h2>List of Items</h2>

       {items.map((item)=>(
        <p>{item}</p>
       ))}
    </div>
    </>
  )
}

export default Stationary