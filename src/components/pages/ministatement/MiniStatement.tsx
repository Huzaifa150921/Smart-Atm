import { useBalance } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import "./ministatement.css";

const MiniStatement = () => {
    const { transactions } = useBalance();
    const navigate = useNavigate();

    return (
        <div className="ministatement">
            <h2 className="ministatement-heading">  Statement</h2>

            <div className="ministatement-list">
                {transactions.length === 0 ? (
                    <p className="ministatement-empty">No transactions yet.</p>
                ) : (
                    transactions.map((txn) => (
                        <div key={txn.id} className="ministatement-card">
                            <div className="ministatement-row">
                                <span className="ministatement-date">{txn.date}</span>
                                <span
                                    className={`ministatement-amount ${txn.amount < 0 ? "negative" : "positive"
                                        }`}
                                >
                                    {txn.amount < 0
                                        ? `- Rs ${Math.abs(txn.amount)}`
                                        : `+ Rs ${txn.amount}`}
                                </span>
                            </div>
                            <p className="ministatement-description">{txn.description}</p>
                        </div>
                    ))
                )}
            </div>

            <button
                className="ministatement-backbutton"
                onClick={() => navigate(-1)}
            >
                Back
            </button>
        </div>
    );
};

export default MiniStatement;
