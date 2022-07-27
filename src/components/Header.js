import React from 'react';
import headerLogo from '../images/logo.svg';
import { Link, Route, Switch } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <img src={headerLogo} alt="логотип, место" className="header__logo" />
            <Route path='/signup'>
              <Link to='/signin' className='header__link'>Войти</Link>
            </Route>
            <Route path='/signin'>
              <Link to='/signup' className='header__link'>Регистрация</Link>
            </Route>
        </header>
    )
}

export default Header;