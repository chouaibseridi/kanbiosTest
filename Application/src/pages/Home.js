import Logo from "../components/logo";
import Login from "../components/login";
import SignUp from "../components/signup";
import Logout from "../components/logout";
import { useNavigate } from 'react-router-dom';

function Home () {
    const navigate = useNavigate();
    const redirect = () => {
        navigate('/employees');
    }
    if (!localStorage.getItem('isLoggedIn')) {
        return(
            <div className="home-page">
                <Logo />
                <div className="home-forms">
                    <Login />
                    <SignUp />
                </div>
            </div>
        )
    } else {
        return(
            <div className="home-page">
                <Logo />
                <Logout />
                <div className="loggedin-msg">
                    <p>You are already logged in ! </p>
                    <button onClick={redirect}>Discover employees list</button>
                </div>
            </div>
        )
    }
}

export default Home;