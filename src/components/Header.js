import PropsType from 'prop-types'
import { useLocation } from 'react-router-dom';
import Button from './Button'


import React  from 'react';



const Header = ({ title, onAdd, showAdd }) => {
    
    const location = useLocation()
    return (
        <header className="header">
            <h1>{title}</h1>
           {location.pathname === '/' && (<Button color={showAdd ? 'red' : '#0096FF'}
            text={showAdd ? 'CLose' : 'Add'}
            onClick= {onAdd}/>)}
        </header>
    )
}


//CSS in JSX
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }
Header.defaultProps = {
    title: 'To-Do Task'
}

Header.Prototype = {
    title: PropsType.string.isRequired,
}
export default Header
