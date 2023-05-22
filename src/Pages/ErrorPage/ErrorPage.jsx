import { useNavigate } from 'react-router-dom';
import errorBg from '../../assets/images/ErrorPageBG.jpg';

const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <div className='h-screen bg-cover bg-center relative' style={{backgroundImage: `url(${errorBg})`}}>
            <button className="btn btn-info absolute right-5 bottom-5" onClick={()=> navigate('/')}>Back to homepage</button>
        </div>
    );
};

export default ErrorPage;