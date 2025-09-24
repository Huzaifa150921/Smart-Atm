import { useState, type Dispatch, type SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Toast from '../toast/Toast.tsx'
import 'react-toastify/dist/ReactToastify.css';
import './login.css';

type LoginProps = {
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
};

const Login = ({ setIsAuthenticated }: LoginProps) => {
    const [pin, setPin] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const defaultPin = "1234";
        if (!localStorage.getItem("userPin")) {
            localStorage.setItem("userPin", defaultPin);
        }
        const currentPin = localStorage.getItem("userPin");

        if (pin === currentPin) {
            setIsAuthenticated(true);
            toast.success("Login successful!");
            navigate("/main-menu");
        } else {
            toast.error("Invalid PIN");
        }
    };

    return (
        <>
            <div className="login">
                <h2 className="login-welcome">Welcome!</h2>
                <h3 className="login-heading">Enter Your 4-Digit PIN</h3>
                <input
                    className="login-input"
                    type="password"
                    maxLength={4}
                    value={pin}
                    placeholder="Enter your PIN"
                    onChange={(e) => setPin(e.target.value)}
                />
                <button className="login-button" onClick={handleLogin}>
                    Enter
                </button>


            </div>
            <Toast />
        </>
    );
};

export default Login;
