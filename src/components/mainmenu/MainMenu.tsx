import './mainmenu.css'
import { IoCashOutline } from "react-icons/io5";
import { MdOutlinePassword } from "react-icons/md";
import { MdAccountBalanceWallet } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import MainMenuCard from './MainMenuCard/MainMenuCard.tsx'

const MainMenu = () => {
    return (
        <div className="mainmenu">
            <h3 className='mainmenu-heading'>Please Select a transaction to proceed</h3>
            <div className="mainmenu-list">
                <div className='mainmenu-leftlist'>
                    <MainMenuCard icon={IoCashOutline} content="Cash Withdrawal" path="/cash-with-drawl" />
                    <MainMenuCard icon={MdOutlinePassword} content="Pin Change" path="/pin-change" />
                </div>
                <div className='mainmenu-rightlist'>
                    <MainMenuCard icon={MdAccountBalanceWallet} content="Balance Inquiry" path="/balance-inquiry" />
                    <MainMenuCard icon={CgNotes} content="Mini Statement" path="/statement" />
                </div>
            </div>
        </div>
    )
}

export default MainMenu
