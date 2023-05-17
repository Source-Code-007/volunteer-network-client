import { FaPeopleArrows, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
import UseNavLink from "../CustomHook/UseNavLink";

const VolunteersLeftNav = () => {
    return (
        <div className="p-5 space-y-5">
            <Link className="/"><img src={logo} alt="" className="w-48 h-auto" /></Link>
            <UseNavLink to={'/dashboard/volunteers-list'}><FaPeopleArrows></FaPeopleArrows> Volunteer register list</UseNavLink>
            <UseNavLink to={'/dashboard/add-event'}><FaPlus></FaPlus> Add event</UseNavLink>
        </div>
    );
};

export default VolunteersLeftNav;