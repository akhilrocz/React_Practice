import React from 'react'
import DisplayImage from './DisplayImage'

 const imageLink =
 'https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381_1280.jpg'
 const caption = 'Spring Flowers';
 
const Parent = () => {
  return (
    <div>
        <DisplayImage imageLink={imageLink} caption={caption}/>
    </div>
  )
}

export default Parent