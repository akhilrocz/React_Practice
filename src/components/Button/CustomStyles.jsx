import React from 'react'
import Button from './Button'

 const backgroundColor = 'lightgreen'
 const color = 'darkgreen'
 const borderRadius = '5px'
 const padding = '10px'
 
const CustomStyles = () => {
  return (
    <div>
    <Button backgroundColor={backgroundColor} color={color} borderRadius={borderRadius} padding={padding}/>
    </div>
  )
}

export default CustomStyles