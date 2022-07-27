import React from 'react';
import { useHistory } from 'react-router-dom';

function Login({onLogin}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const history = useHistory();

    const resetForm = () => {
      setEmail('');
      setPassword('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    
        onLogin({ email, password })
          .then(
            () => {
              history.push('/');
            })
          .then(() => resetForm())
          .catch(
            (err) => console.log(err)
          );
      }
    

    return (
        <div className="login entry">
            <h2 className='entry__name'>Вход</h2>
            <form className='entry__form' onSubmit={handleSubmit}>
                <div className='entry__container'>
                    <input id='login-email' type='email' name='user-email' className='entry__input' placeholder='Email' required 
                    value={email} onChange={({ target }) => setEmail(target.value)}/>
                    <input id='login-password' type='password' name='user-password' className='entry__input' placeholder='Пароль' required 
                    value={password} onChange={({ target }) => setPassword(target.value)} />
                </div>
                <button type='submit' className='entry__button'>Войти</button>
            </form>
        </div>
    )
}

export default Login;