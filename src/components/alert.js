import React from 'react'

const Alert =(props) =>{
    const classCss = `alert ${props.typeAlert}`
    return (
        <div className={classCss} role="alert">
            {props.children}
        </div>
    )
}

export default Alert;