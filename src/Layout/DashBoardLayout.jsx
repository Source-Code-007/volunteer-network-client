import { Outlet } from "react-router-dom";
import VolunteersLeftNav from "../AdminPages/VolunteersLeftNav";

const DashBoardLayout = () => {
    return (
        <div className="grid grid-cols-12 min-h-screen">
            <div className="col-span-2 bg-slate-50"><VolunteersLeftNav></VolunteersLeftNav></div>
            <div className="col-span-10"><Outlet></Outlet></div>
        </div>
    );
};

export default DashBoardLayout;