import { NavLink } from 'react-router-dom'
import './Nav.css'

const Nav = () =>{

    return (  
        <div className="nav">
            <ul className='nav__menu'>
                <li className='nav__menu-item'><NavLink to="/profile">Профиль</NavLink></li>
                <li className='nav__menu-item'><NavLink to="/dialogs">Сообщения</NavLink></li>
                <li className='nav__menu-item'><NavLink to="/friends">Друзья</NavLink></li>
                
            </ul>
        </div>
    )
}
export default Nav