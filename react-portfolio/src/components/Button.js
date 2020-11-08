import React from 'react'

function Button(props) {

    const btnStyle = {
        backgroundColor: '#343a40',
        color: 'white',
        textDecoration: 'none',
        margin: '5px'
    }

    return (
        <>
            <button 
                className="btn" 
                style={btnStyle}>
                <a style={{textDecoration: 'none', color: 'white'}} href={props.url}>
                    {props.label}
                </a>
            </button>
        </>
    )   
}

export default Button