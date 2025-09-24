import { useState } from "react";
import { useBalance } from "../../context/Context";
import "./cashwithdrawl.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Toast from '../../toast/Toast.tsx'


const CashWithDrawl = () => {
    const { balance, setBalance, addTransaction } = useBalance();
    const [showDialog, setShowDialog] = useState<boolean>(false);
    const [amount, setAmount] = useState<number>(0);
    const navigate = useNavigate();

    const handleWithdraw = () => {
        if (amount <= 0) {
            toast.error("Enter a valid amount!");
            return;
        }
        if (amount > balance) {
            toast.error("Insufficient balance!");
            return;
        }
        setShowDialog(true);
    };

    const handleAccept = () => {
        setBalance(balance - amount);
        addTransaction({
            id: Date.now(),
            date: new Date().toISOString().split("T")[0],
            description: "ATM Withdrawal",
            amount: -amount,
        });
        toast.success(`₹${amount} withdrawn successfully!`);
        setAmount(0);
        setShowDialog(false);
    }

    const handleReject = () => {
        setShowDialog(false);
    }

    return (
        <>
            {showDialog && <div className={`cashwithdrawl-dialog ${showDialog ? "active" : ""}`}>
                <h3 className="cashwithdrawldialog-heading">Are you sure?</h3>
                <div className="cashwithdrawldialogbutton-flex">
                    <button onClick={handleAccept} className="cashwithdrawldialog-button  confirm">Yes</button>
                    <button onClick={handleReject} className="cashwithdrawldialog-button reject">No</button>
                </div>
            </div>}
            <div className={`cashwithdrawl ${showDialog ? "active" : "  "}`}>
                <h2 className="cashwithdrawl-heading">Enter Amount</h2>
                <input
                    type="number"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="cashwithdrawl-input"
                    onFocus={(e) => e.target.select()}
                />

                <button className="cashwithdrawl-withdrawbutton" onClick={handleWithdraw}>
                    Withdraw
                </button>
                <button className="cashwithdrawl-menubutton" onClick={() => navigate(-1)}>
                    Back
                </button>

            </div>

            <Toast />
        </>
    );
};

export default CashWithDrawl;
