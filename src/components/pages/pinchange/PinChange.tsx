import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './pinchange.css';
import Toast from '../../toast/Toast.tsx'
const PinChange = () => {
    const [currentPin, setCurrentPin] = useState('');
    const [newPin, setNewPin] = useState('');
    const navigate = useNavigate();

    const handleChangePin = () => {
        const storedPin = localStorage.getItem('userPin')
            ? Number(localStorage.getItem('userPin'))
            : 1234;

        if (!newPin) {
            toast.error('Please enter a new PIN.');
            return;
        }

        if (Number(currentPin) === storedPin) {
            localStorage.setItem('userPin', newPin);
            toast.success('PIN changed successfully!');
            setCurrentPin('');
            setNewPin('');
        } else {
            toast.error('PIN is incorrect.');
            setCurrentPin('');
            setNewPin('');
        }
    };

    return (
        <>
            <div className="pinchange">
                <h2>Change PIN</h2>

                <div className="pinchange-field">
                    <label className="pinchange-currentpinlabel">Current PIN</label>
                    <input
                        type="password"
                        maxLength={4}
                        value={currentPin}
                        onChange={(e) => setCurrentPin(e.target.value)}
                        placeholder="Enter Current Pin"
                    />
                </div>

                <div className="pinchange-field">
                    <label className="pinchange-newpinlabel">New PIN</label>
                    <input
                        type="password"
                        maxLength={4}
                        value={newPin}
                        onChange={(e) => setNewPin(e.target.value)}
                        placeholder="Enter New Pin"
                    />
                </div>

                <button className="pinchange-button" onClick={handleChangePin}>
                    Change PIN
                </button>

                <button
                    className="pinchange-backbutton"
                    onClick={() => navigate(-1)}
                >
                    Back
                </button>
            </div>
            <Toast />

        </>
    );
};

export default PinChange;
