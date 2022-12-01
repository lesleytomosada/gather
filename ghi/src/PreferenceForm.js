import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { cuisines } from "./Cuisines";

const PreferenceForm = () => {
    const [selectedCuisine, setSelectedCuisine] = useState("");
    const [selectedPrice, setSelectedPrice] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [invalid, setInvalid] = useState(false);
    // useParams is an object with all of your parameters. Gathering_id is just one parameter within the useParams object
    const { gathering_id } = useParams();

    // let navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            selectedCuisine,
            selectedPrice,
        };
        data.cuisine = data.selectedCuisine;
        data.price = data.selectedPrice;
        delete data.selectedCuisine;
        delete data.selectedPrice;

        const preferenceUrl = `${process.env.REACT_APP_GATHERINGS}/gathering/${gathering_id}/preference`;
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };

        const response = await fetch(preferenceUrl, fetchConfig);
        if (response.ok) {
            const newPreference = await response.json();
            setSelectedCuisine("");
            setSelectedPrice("");
            setSubmitted(true);
            setInvalid("");
            // navigate(`/gathering/${gathering_id}/`);
        } else {
            setInvalid(true);
        }
    };

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Add Your Preferences</h1>
                    <form id="add-preferences-form" onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <select
                                onChange={(e) =>
                                    setSelectedCuisine(e.target.value)
                                }
                                required
                                placeholder="Cuisine"
                                name="cuisine"
                                id="cuisine"
                                className="form-select"
                                value={selectedCuisine}
                            >
                                <option value="">Select a Cuisine</option>
                                {cuisines.map((cuisine) => {
                                    return (
                                        <option
                                            key={cuisine.alias}
                                            value={cuisine.alias}
                                        >
                                            {cuisine.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="form-floating mb-3">
                            <select
                                onChange={(e) =>
                                    setSelectedPrice(e.target.value)
                                }
                                placeholder="Price"
                                required
                                name="price"
                                id="price"
                                className="form-select"
                                value={selectedPrice}
                            >
                                <option>Select a Price</option>
                                <option value="1">$</option>
                                <option value="2">$$</option>
                                <option value="3">$$$</option>
                                <option value="4">$$$$</option>
                            </select>
                        </div>
                        <button className="btn btn-primary">Submit</button>
                    </form>
                    {invalid && (
                        <div
                            className="alert alert-danger mb-0 p-4 mt-4"
                            id="success-message"
                        >
                            We need your input! Please complete the required
                            fields.
                        </div>
                    )}
                    {!invalid && submitted && (
                        <div
                            className="alert alert-success mb-0 p-4 mt-4"
                            id="success-message"
                        >
                            Thank you! See you at the gathering!
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default PreferenceForm;
