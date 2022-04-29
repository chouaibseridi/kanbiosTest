import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/');
    }

    return (
        <div className="logout">
            <span>{localStorage.getItem('email')}</span>
            <button onClick={logout}>Log out</button>
        </div>
    )
}

export default Logout;