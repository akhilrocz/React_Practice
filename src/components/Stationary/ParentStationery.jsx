import React from 'react'
import Stationary from './Stationary'
const items = ['pen', 'pencil', 'ruler', 'eraser']
const header="Stationery Items"
const ParentStationery = () => {
  return (
    <div>
        <Stationary header={header} items={items} />
    </div>
  )
}

export default ParentStationery