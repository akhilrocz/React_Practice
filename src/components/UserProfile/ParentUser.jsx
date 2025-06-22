import React from 'react'
import User from './User'

 const userData = {
  name: 'John',
  age: 25,
  email: 'john@example.com',
 }

const ParentUser = () => {
  return (
    <div>
        <User userData={userData}/>
    </div>
  )
}

export default ParentUser