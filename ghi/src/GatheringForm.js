import { useState, useEffect } from "react";
import { State, City } from "country-state-city";
// import { useNavigate } from "react-router-dom";

const GatheringForm = () => {
    const [name, setName] = useState("");
    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState("");
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState("");
    const [date, setDate] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [invalid, setInvalid] = useState(false);

    // let navigate = useNavigate();

    useEffect(() => {
        function getStates() {
            const countryCode = "US";
            const states = State.getStatesOfCountry(countryCode);
            setStates(states);
        }
        getStates();
    }, []);

    const handleStateSelect = async (event) => {
        const countryCode = "US";
        const stateCode = event.target.value;
        setSelectedState(stateCode);
        const cities = City.getCitiesOfState(countryCode, stateCode);
        const filteredCities = cities.filter(city => !city.name.includes('County'))
        setCities(filteredCities);
        setSelectedCity("");
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            name,
            date,
            location: `${selectedCity}, ${selectedState}`,
        };
        data.date = new Date(date).toISOString();

        const gatheringUrl = `${process.env.REACT_APP_GATHERINGS}/gathering`;
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };

        const response = await fetch(gatheringUrl, fetchConfig);
        if (response.ok) {
            const newGathering = await response.json();
            setName("");
            setSelectedState("");
            setSelectedCity("");
            setDate("");
            setSubmitted(true);
            setInvalid("");
            // navigate(`/${newGathering.id}/`);
        } else {
            setInvalid(true);
        }
    };

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>New Gathering</h1>
                    <form
                        id="create-new-gathering-form"
                        onSubmit={handleSubmit}
                    >
                        <div className="form-floating mb-3">
                            <input
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Name"
                                required
                                type="text"
                                name="name"
                                id="name"
                                className="form-control"
                                value={name}
                            />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <select
                                onChange={handleStateSelect}
                                placeholder="State"
                                required
                                name="state"
                                id="state"
                                className="form-select"
                                value={selectedState}
                            >
                                <option value="">Select a State</option>
                                {states.map((state) => {
                                    return (
                                        <option
                                            key={state.isoCode}
                                            value={state.isoCode}
                                        >
                                            {state.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="form-floating mb-3">
                            <select
                                onChange={(e) =>
                                    setSelectedCity(e.target.value)
                                }
                                placeholder="City"
                                required
                                name="city"
                                id="city"
                                className="form-select"
                                value={selectedCity}
                            >
                                <option value="">Select a City</option>
                                {cities.map((city) => {
                                    return (
                                        <option
                                            key={city.name}
                                            value={city.name}
                                        >
                                            {city.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                onChange={(e) => setDate(e.target.value)}
                                placeholder="Date"
                                required
                                type="dateTime-local"
                                name="date"
                                id="date"
                                className="form-control"
                                value={date}
                            />
                            <label htmlFor="date">Date</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                    {invalid && (
                        <div
                            className="alert alert-danger mb-0 p-4 mt-4"
                            id="success-message"
                        >
                            You have an invalid location. Try again.
                        </div>
                    )}
                    {!invalid && submitted && (
                        <div
                            className="alert alert-success mb-0 p-4 mt-4"
                            id="success-message"
                        >
                            Gather round!
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default GatheringForm;
