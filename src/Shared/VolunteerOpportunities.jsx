import { useEffect, useState } from "react";

const VolunteerOpportunities = () => {
    const [volunteerOpportunities, setVolunteerOpportunities] = useState()
    useEffect(() => {
        fetch(`http://localhost:2500/volunteer-opportunities`)
            .then(res => res.json())
            .then(opportunities => setVolunteerOpportunities(opportunities))
    }, [])
    return (
        <div>

            <div className="my-container">
                <div className="space-y-3 py-8 text-center max-w-xl mx-auto">
                    <h2 className="font-bold text-4xl">I grow by helping people in need.</h2>
                    <div className="form-control">
                        <div className="input-group justify-center">
                            <input type="text" placeholder="Search…" className="input input-bordered w-5/6" />
                            <button className="btn btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>


                <div className="grid grid-cols-3 gap-4">

                    {
                        volunteerOpportunities && volunteerOpportunities.map(opportunities => {
                            const { _id, name, image, colorCode } = opportunities
                            console.log(colorCode);
                            return <div key={_id} className="h-72 bg-orange-500 rounded-lg bg-cover bg-center relative" style={{ backgroundImage: `url(${image})` }}>
                                <div className={`absolute bottom-2 left-0 right-0 w-full py-5 text-center font-bold text-xl text-white`} style={{background: `${colorCode}`}}>{name}</div></div>
                        })
                    }
                </div>
            </div>

        </div>
    );
};

export default VolunteerOpportunities;