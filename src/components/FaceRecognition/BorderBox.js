import React from 'react'
import './FaceRecognition.css';


const BorderBox = ({top, right, bottom, left}) => {
    return (
        <div 
            className = 'bounding-box' 
            style = {{top, right, bottom, left}}
        >
        </div>
    )
}

export default BorderBox
