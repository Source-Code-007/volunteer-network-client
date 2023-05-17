const RegisterVolunteer = () => {
    return (
        <div className='py-12'>
            <div className='border rounded py-5 px-10 w-4/6 lg:w-3/6 xl:w-2/6 mx-auto'>
                <h2 className="font-bold text-xl my-4">Register as a volunteer</h2>
                <form action="" className="space-y-4">
                    <input type="text" name="name" placeholder='Enter full name' />
                    <input type="text" name="username" placeholder='Username or email' />
                    <input type="text" name="date" placeholder='Date' />
                    <input type="text" name="description" placeholder='Description' />
                    <button className='btn btn-info w-full'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterVolunteer;