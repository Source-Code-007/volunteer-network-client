import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegVol = () => {
    const [date, setDate] = useState('')
    const loadedVolOpportunitties = useLoaderData()
    const { name } = loadedVolOpportunitties
    // register volunteer function
    const handleRegVolFunc = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const description = form.description.value
        const newVolunteer = { name, email, date, description }
        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newVolunteer)
        }
        fetch(`http://localhost:2500/add-volunteer`, option)
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Registration successful!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            })
            .catch(e => console.log(e.message))


    }

    return (
        <div className='py-12'>
            <div className='border rounded py-5 px-10 w-4/6 lg:w-3/6 xl:w-2/6 mx-auto'>
                <h2 className="font-bold text-xl my-4">Register as a volunteer</h2>
                <form onSubmit={handleRegVolFunc} className="space-y-4">
                    <div>
                        <label htmlFor="name">name</label>
                        <input type="text" id="name" name="name" placeholder='Enter full name' />
                    </div>
                    <div>
                        <label htmlFor="email">email</label>
                        <input type="email" id="email" name="email" placeholder='email' />
                    </div>
                    <div>
                        <label htmlFor="category">category</label>
                        <input type="text" id="category" className="bg-slate-300" disabled name="category" defaultValue={name} />
                    </div>
                    <div>
                        <label htmlFor="date">date</label>
                        <DatePicker selected={date} id="date" onChange={(date) => setDate(date)} showIcon placeholderText="date" />
                    </div>
                    {/* <select className="select select-success w-full max-w-xs">
                        <option disabled selected>Pick your favorite anime</option>
                        <option value='Child Support'>Child Support</option>
                        <option value='Refuge Shelter'>Refuge Shelter</option>
                        <option value='Food Charity'>Food Charity</option>
                        <option value='Host a Clothing Swap'>Host a Clothing Swap</option>
                        <option value='Host a River Clean-up'>Host a River Clean-up</option>
                        <option value='Clean Water for Children'>Clean Water for Children</option>
                        <option value='Good Education'>Good Education</option>
                        <option value='New Books for Children'>New Books for Children</option>
                        <option value='Host a Study Group'>Host a Study Group</option>
                        <option value='Build Birdhouses for Your Neighbors'>Build Birdhouses for Your Neighbors</option>
                        <option value='Organize Books at the Library'>Organize Books at the Library</option>
                        <option value='Give a Seminar on Driving Safety'>Give a Seminar on Driving Safety</option>
                        <option value='Give Free Music Lessons'>Give Free Music Lessons</option>
                        <option value='Teach People How to Register to Vote'>Teach People How to Register to Vote</option>
                        <option value='Clean up Your Local Park'>Clean up Your Local Park</option>
                        <option value='Give IT Help to Local Adults'>Give IT Help to Local Adults</option>
                        <option value='Foster a Shelter Animal'>Foster a Shelter Animal</option>
                        <option value='Babysit During PTA Meetings'>Babysit During PTA Meetings</option>
                        <option value='Collect Stuffed Animals'>Collect Stuffed Animals</option>
                        <option value='Collect School Supplies'>Collect School Supplies</option>
                    </select> */}
                    <div>
                        <label htmlFor="description">description</label>
                        <textarea name="description" id="description" placeholder="About me" className="h-40"></textarea>
                    </div>
                    <button className='btn btn-info w-full'>Submit</button>
                </form>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <ToastContainer />
        </div>
    );
};

export default RegVol;