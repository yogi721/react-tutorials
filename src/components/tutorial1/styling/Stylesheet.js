import React from 'react'
import './myStyle.css'

function Stylesheet(props) {
    let styleClassName = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className={` ${styleClassName} textonic`} >StyleSheet</h1>
        </div>
    )
}

export default Stylesheet
