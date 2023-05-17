import { Link, Outlet } from 'react-router-dom';
import logo from '../assets/logo.png';

const LayoutThree = () => {
    return (
        <div>
            <Link to={'/'} className='py-6 border'><img className='w-44 h-auto mx-auto' src={logo} alt="" /></Link>
            <Outlet></Outlet>
        </div>
    );
};

export default LayoutThree;