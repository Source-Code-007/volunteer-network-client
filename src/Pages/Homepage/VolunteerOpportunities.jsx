import { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

const VolunteerOpportunities = () => {
    const [volunteerOpportunities, setVolunteerOpportunities] = useState([])
    const [searchInp, setSearchInp] = useState('')
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    // initial data load from mongodb database
    useEffect(() => {
        fetch(`http://localhost:2500/volunteer-opportunities?search=${search}`)
            .then(res => res.json())
            .then(opportunities => {
                setVolunteerOpportunities(opportunities)
                setLoading(false)
            })
    }, [search])

    // handle search func
    const handleSearchFunc = (e) => {
        e.preventDefault()
        setLoading(true)
        setSearch(searchInp)
    }

    return (
        <div className="py-14">
            <div className="my-container">

                <div className="space-y-4 py-8 text-center max-w-3xl mx-auto">
                    <h2 className="font-bold text-4xl uppercase">I grow by helping people in need.</h2>
                    <form onSubmit={handleSearchFunc} className="form-control">
                        <div className="input-group justify-center">
                            <input type="text" onChange={(e) => setSearchInp(e.target.value)} placeholder="Search…" className="w-4/6" />
                            <button type="submit" className="btn btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </form>
                </div>

                {
                    loading ? <div className="h-[50vh] flex justify-center items-center"><BallTriangle
                        height={100}
                        width={100}
                        radius={5}
                        color="#4fa94d"
                        ariaLabel="ball-triangle-loading"
                        wrapperClass={{}}
                        wrapperStyle=""
                        visible={true}
                    /></div> : volunteerOpportunities.length ?
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
                            {
                                volunteerOpportunities.map(opportunities => {
                                    const { _id, name, image, colorCode } = opportunities
                                    return <div onClick={() => navigate(`register-volunteer/${_id}`)} key={_id} className="h-72 bg-orange-500 rounded-lg bg-cover bg-center relative" style={{ backgroundImage: `url(${image})` }}>
                                        <div className={`absolute bottom-0 left-0 right-0 rounded-b-lg py-5 text-center font-bold text-xl text-white`} style={{ background: `${colorCode}` }}>{name}</div></div>
                                })
                            }
                        </div> : <div className="h-[70vh] flex justify-center items-center font-bold text-3xl"><h2>No data found!</h2></div>
                }

            </div>
        </div>
    );
};

export default VolunteerOpportunities;