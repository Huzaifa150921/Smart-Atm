import './mainmenucard.css'
import type { IconType } from 'react-icons';
import { useNavigate } from 'react-router-dom';

type MainMenuCardProps = {
    icon: IconType;
    content: string;
    path: string;
}

const MainMenuCard = ({ icon: Icon, content, path }: MainMenuCardProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(path);
    }

    return (
        <div className='mainmenucard' onClick={handleClick}>
            <Icon className='mainmenucard-icon' />
            <h5 className='mainmenucard-content'>{content}</h5>
        </div>
    )
}

export default MainMenuCard
