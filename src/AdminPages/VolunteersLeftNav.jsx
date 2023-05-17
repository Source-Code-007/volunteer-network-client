import { FaPeopleArrows, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'

const VolunteersLeftNav = () => {
    return (
            <div  className="p-5 space-y-5">
                <Link className="/"><img src={logo} alt="" className="w-48 h-auto"/></Link>
                <Link to={'/admin/volunteers-list'} className="flex gap-3 items-center"> <FaPeopleArrows></FaPeopleArrows> Volunteer register list</Link>
                <Link to={'/admin/add-event'} className="flex gap-2 items-center"> <FaPlus></FaPlus> Add event</Link>
            </div>
    );
};

export default VolunteersLeftNav;