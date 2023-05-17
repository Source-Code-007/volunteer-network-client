import { FaTrash } from 'react-icons/fa';

const VolunteersList = () => {
    return (
        <div>
            <h2 className='py-6 bg-slate-50'> Volunteer register list </h2>
            <div className='p-10'>
                <div className="overflow-x-auto bg-slate-50">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Registration Date</th>
                                <th>Volunteer responsibility</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                                <td className='text-red-500'> <FaTrash></FaTrash> </td>
                            </tr>
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                                <td className='text-red-500'> <FaTrash></FaTrash> </td>
                            </tr>
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                                <td className='text-red-500'> <FaTrash></FaTrash> </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default VolunteersList;