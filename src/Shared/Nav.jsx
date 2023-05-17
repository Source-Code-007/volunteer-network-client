import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
import { FaArrowRight } from "react-icons/fa";

const Nav = () => {
        const menu = <>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/volunteer'}>Volunteer</Link></li>
        </>
    return (

        <div className="navbar bg-teal-400 py-0 pr-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
                      {menu}
                    </ul>
                </div>
                <Link to={'/'}><img className="w-24 h-auto" src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center px-12 hidden lg:flex font-semibold">
                <ul className="menu menu-horizontal px-1">
                    {menu}
                </ul>
            </div>
            <div className="navbar-end h-[64px] relative">
                <div className="h-full w-16 bg-teal-700 absolute -left-10 top-0 skew-x-12"></div>
                <Link className="bg-teal-700 h-full w-full text-yellow-500  font-bold flex gap-2 items-center pl-10">Make Donation <FaArrowRight></FaArrowRight> </Link>
            </div>
        </div>
    );
};

export default Nav;