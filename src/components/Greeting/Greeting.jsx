import React from 'react'


const Greeting = ({name}) => {
  return (
    <div>
        <blockquote>
            Hello, {name}!
        </blockquote>
    </div>
  )
}

export default Greeting