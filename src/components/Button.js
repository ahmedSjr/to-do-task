import PropTypes from 'prop-types'


import React from 'react';




const Button = ({color, text, onClick}) => {
 
    return (
    
        <div>
            <button style={{ backgroundColor: color }} className="btn"
            onClick={onClick}>
            {text}</button>
            
        </div>
    )
}
Button.defaultProps = {
    color: '#0054D2'
}
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
