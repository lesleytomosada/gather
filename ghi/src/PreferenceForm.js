import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { cuisines } from "./Cuisines";
// import { useAuthContext } from "wherever your code is";

const PreferenceForm = () => {
    const [selectedCuisine, setSelectedCuisine] = useState("");
    const [selectedPrice, setSelectedPrice] = useState("");
    const { gathering_id } = useParams();
    // const { token } = useAuthContext();

    let navigate = useNavigate();

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
            // headers: { Authorization: `Bearer ${token}` },
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };

        const response = await fetch(preferenceUrl, fetchConfig);
        if (response.ok) {
            setSelectedCuisine("");
            setSelectedPrice("");
            navigate(`../`);
        }
    };

    return (
        <div className="px-4 py-5 my-1 mt-5 text-center">
            <h1 className="display-5">Let's Decide Where to Eat!</h1>
            <p>Please suggest your preferred cuisine and price point</p>
            <div className="offset-2 col-8">
                <div className="shadow p-4 mt-4">
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
                                <option value="">Select a Price</option>
                                <option value="1">$</option>
                                <option value="2">$$</option>
                                <option value="3">$$$</option>
                                <option value="4">$$$$</option>
                            </select>
                        </div>
                        <button className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default PreferenceForm;
