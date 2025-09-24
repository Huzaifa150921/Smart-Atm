
import { ToastContainer } from 'react-toastify';
const Toast = () => {
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
                draggable
            />
        </>
    )
}

export default Toast