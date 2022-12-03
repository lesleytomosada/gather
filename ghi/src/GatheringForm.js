import { useState, useEffect } from "react";
import { State, City } from "country-state-city";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./auth";

const GatheringForm = () => {
    const [name, setName] = useState("");
    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState("");
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState("");
    const [date, setDate] = useState("");
    const { token } = useAuthContext();

    let navigate = useNavigate();

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
        const filteredCities = cities.filter(
            (city) => !city.name.includes("County")
        );
        setCities(filteredCities);
        setSelectedCity("");
    };

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
                Authorization: `Bearer ${token}`,
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
            navigate(`../${newGathering.id}/`);
        }
    };

    return (
        <div className="px-4 py-5 my-1 mt-5 text-center">
            <h1 className="display-5">Create a New Gathering</h1>
            <p>
                Please provide the name, location (select state and city), date
                and time of your gathering
            </p>
            <div className="offset-2 col-8">
                <div className="shadow p-4 mt-4">
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
                </div>
            </div>
        </div>
    );
};
export default GatheringForm;
