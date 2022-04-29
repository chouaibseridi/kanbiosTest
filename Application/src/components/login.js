import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const[email, setEmail] = useState(null);
    const[password, setPassword] = useState(null);
    const[error, setError] = useState(null);
    const navigate = useNavigate();

    const SendRequest = () => {
        if (!email || !password){
           setError("Please fill the inputs !");
           return;
        }
        const options = {
            url: 'http://localhost:5000/login', 
            method: 'POST',
            data: {
                email:email,
                password: password
            }
        }
        axios
            .request(options)
            .then((res) => { 
                if (res.data.token) {
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('email', res.data.user.email);
                    localStorage.setItem('isLoggedIn', true);
                    navigate('/employees');
                }
            })
            .catch(() => {
                setError("Wrong credentials !");
            });
    }
  
    return ( 
        <div className="login-container">
            <h1>Login</h1>
            <h4>Email</h4>
            <input type="text" placeholder="Ex: test@test.com" onChange={event => setEmail(event.target.value) } required/>
            <h4>Password</h4>
            <input type="text" placeholder="Ex: ********" onChange={event => setPassword( event.target.value)} required/>
            <button onClick={SendRequest}>Login</button>
            {error && <span id='error-msg'>{error}</span>}
        </div>
    )
}

export default Login;