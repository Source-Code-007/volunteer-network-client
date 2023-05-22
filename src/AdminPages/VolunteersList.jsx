import { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { Triangle } from 'react-loader-spinner'
import Swal from 'sweetalert2'

const VolunteersList = () => {
    const [volunteers, setVolunteers] = useState([])
    const [loading, setLoading] = useState(true)

    // initially load all volunteers
    useEffect(() => {
        fetch(`http://localhost:2500/volunteers`)
            .then(res => res.json())
            .then(data => {
                setVolunteers(data)
                setLoading(false)
            })
            .catch(e => console.log(e.message))
    }, [])

    // handle delete func
    const handleDeleteVolFunc = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:2500/volunteer-delete/${id}`, { method: 'DELETE' })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const restVol = volunteers.filter(volunteer=> volunteer._id !== id)
                            setVolunteers(restVol)
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    }).catch(e => console.log(e.message))
            }
        })

    }

    return (
        <div>
            <h2 className='py-6 bg-slate-50 font-bold text-xl'> Volunteer register list </h2>
            <div className='p-10'>
                {
                    loading ? <div className='min-h-[80vh] flex justify-center items-center'><Triangle
                        height="80"
                        width="80"
                        color="#4fa94d"
                        ariaLabel="triangle-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                    /></div> : !volunteers.length ? <div className='min-h-[80vh] flex justify-center items-center font-bold text-3xl'><h2>No volunteers yet!</h2></div> : <div className="overflow-x-auto bg-slate-50">
                        <table className="table w-full">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Counter</th>
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
                                    volunteers.map((volunteer, ind) => {
                                        const { _id, name, date, email, responsibility } = volunteer
                                        return <tr key={_id}>
                                            <th>{ind + 1}</th>
                                            <td>{name}</td>
                                            <td>{email}</td>
                                            <td>{date}</td>
                                            <td>{responsibility}</td>
                                            <td className='text-red-500'> <span onClick={() => handleDeleteVolFunc(_id)} className='btn btn-outline btn-error'><FaTrash></FaTrash></span> </td>
                                        </tr>
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                }
            </div>
        </div>
    );
};

export default VolunteersList;