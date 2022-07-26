import React from 'react';

function Login() {
    return (
        <div className="login entry">
            <h2 className='entry__name'>Вход</h2>
            <form className='entry__form'>
                <div className='entry__container'>
                    <input id='login-email' type='email' name='user-email' className='entry__input' placeholder='Email' required />
                    <input id='login-password' type='password' name='user-password' className='entry__input' placeholder='Пароль' required />
                </div>
                <button type='submit' className='entry__button'>Войти</button>
            </form>
        </div>
    )
}

export default Login;