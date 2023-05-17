import { NavLink } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const UseNavLink = ({to, children}) => {
    return (
        <NavLink to={to} className={({isActive})=> `flex gap-3 items-center ${isActive? 'text-blue-500' : 'text-black'}`}>{children}</NavLink>
    );
};

export default UseNavLink;