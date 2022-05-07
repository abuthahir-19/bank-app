import {React, Fragment, useState} from 'react'
import logo from '../../images/logo.svg';
import Button from '../Button/Button';
import closeIcon from '../../images/icon-close.svg';
import Hamburg from '../../images/icon-hamburger.svg';
import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState (false);

    const handleClick = () => {
        setClick (!click);
    }

    return (
        <Fragment>
            <div className="nav-container">
                <div className="logo">
                    <img src={ logo } alt="Logo img" id="logo"/>
                </div>
                <nav>
                    <ul className='nav-links'>
                        <li>Home</li>
                        <li>About </li>
                        <li>Contact </li>
                        <li>Blog </li>
                        <li>Careers </li>
                    </ul>
                </nav>
                <Button text="Request Invite" />
                <div className="nav-icon">
                    <img src={click ? closeIcon : Hamburg} alt="Hamburg" className={click ? 'show-nav' : 'hide-nav' } onClick={handleClick}/>
                </div>
            </div>
        </Fragment>
    );
}

export default Navbar;