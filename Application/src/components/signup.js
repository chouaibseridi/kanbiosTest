import {useState } from 'react';
import axios from 'axios';

const SignUp = () => {
    const[email, setEmail] = useState(null);
    const[password, setPassword] = useState(null);
    const[user, setUser] = useState(null);
    const[error, setError] = useState(null);

    const SendRequest = () => {
        if (!email || !password){
            setError("Please fill the inputs !");
            return;
        }
        const options = {
            url: 'http://localhost:5000/signup', 
            method: 'POST',
            data: {
                email:email,
                password: password
            }
        }
        axios
            .request(options)
            .then((res) => { 
                setUser(res.data)
            });
    }

    return ( 
        <div>
            {!user &&
            <div className="login-container">
                <h1>Sign Up</h1>
                <h4>Email</h4>
                <input type="text" placeholder="Ex: test@test.com" onChange={event => setEmail(event.target.value)}/>
                <h4>Password</h4>
                <input type="text" placeholder="Ex: ********" onChange={event => setPassword( event.target.value)}/>
                <button onClick={SendRequest}>Sign up</button>
                {error && <span id='error-msg'>{error}</span>}

            </div>
            }
             {user &&
            <div className="login-container">
                <h1>Sign Up</h1>
                <p id="success-msg">User successfully created !</p>
                <br/>
                <p>Login using the following email and the password you've chosen.</p>
                <br/>
                <h4>Email : {user.email}</h4>
            </div>
            }
        </div>
    )
}

export default SignUp;