import { FaTrash } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const VolunteersList = () => {
    const loadedVolunteers = useLoaderData()

    return (
        <div>
            <h2 className='py-6 bg-slate-50 font-bold text-xl'> Volunteer register list </h2>
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
                            {
                                loadedVolunteers.map(volunteer => {
                                    const { _id, name, date, email, responsibility } = volunteer
                                    return <tr key={_id}>
                                        <th>{_id}</th>
                                        <td>{name}</td>
                                        <td>{email}</td>
                                        <td>{date}</td>
                                        <td>{responsibility}</td>
                                        <td className='text-red-500'> <FaTrash></FaTrash> </td>
                                    </tr>
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default VolunteersList;