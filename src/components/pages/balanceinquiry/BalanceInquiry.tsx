import './balanceinquiry.css'
import { useBalance } from '../../context/Context.tsx'
import { useNavigate } from 'react-router-dom'
const BalanceInquiry = () => {
    const { balance } = useBalance();
    const navigate = useNavigate()


    return (

        <>
            <div className='balanceinquiry'>
                <p className='balanceinquiry-body'>Your current balance is:</p>
                <h3 className='balanceinquiry-currentbalance'>₹ {balance}</h3>
                <button className='balanceinquiry-menubutton' onClick={() => navigate(-1)}>Back</button>
            </div>
        </>
    )

}

export default BalanceInquiry