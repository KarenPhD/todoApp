import React from 'react'

const TextError = (props) => {
    return (
        <div className="alert alert-danger" role="alert">
            {props.children}
        </div>
    )
}

export default TextError
