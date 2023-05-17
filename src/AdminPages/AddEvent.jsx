import './DashboardCss.css'
const AddEvent = () => {
    return (
        <div>
             <h2 className='py-6 bg-slate-50 font-bold text-xl'> Add event </h2>
            <form action="" className="p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 bg-slate-100 p-10">
                    <div>
                        <label htmlFor="event-title">Event Title</label>
                        <input type="text" name="event-title" id="event-title" />
                    </div>
                    <div>
                        <label htmlFor="event-date">Event Date</label>
                        <input type="date" name="event-date" id="event-date" />
                    </div>
                    <div>
                        <label htmlFor="event-description">Event Description</label>
                        <textarea name="event-description" id="event-description" className='h-36'></textarea>
                    </div>
                    <div>
                        <label htmlFor="event-upload">Upload</label>
                        <input type="url" name="event-upload" id="event-upload" />
                    </div>
                </div>
                <div className='text-right'><button type='submit' className='btn btn-info my-4'>Submit</button></div>
            </form>
        </div>
    );
};

export default AddEvent;