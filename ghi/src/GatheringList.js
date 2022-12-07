import { useState, useEffect } from "react";
import { useAuthContext } from "./auth";

const GatheringList = () => {
    const [gatheringList, setGatheringList] = useState([]);
    const { token } = useAuthContext();

    useEffect(() => {
        async function fetchGatheringList() {
            const url = `${process.env.REACT_APP_GATHERINGS}/gathering/`;
            const response = await fetch(url, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.ok) {
                const data = await response.json();
                setGatheringList(data.gatherings);
            }
        }
        if (token) {
            fetchGatheringList();
        }
    }, [token]);
    if (gatheringList.length > 0) {
        return (
            <div>
                <h1>Upcoming Gatherings</h1>

                <table className="table table-striped mt-4 table-hover">
                    <thead>
                        <tr>
                            <th>Gathering Name</th>
                            <th>Gathering Location</th>
                            <th>Gathering Date</th>
                            <th>Restaurant Name</th>
                            <th>Restaurant Address</th>
                            <th>Restaurant Cuisine</th>
                            <th>Restaurant Rating</th>
                            <th>Restaurant Yelp Site</th>
                        </tr>
                    </thead>
                    <tbody>
                        {gatheringList
                            ?.filter(
                                (gathering) =>
                                    new Date(gathering.date) - new Date() > 0
                            )
                            .map((gathering) => {
                                return (
                                    <tr
                                        className="table-row"
                                        key={gathering.id}
                                    >
                                        <td>
                                            <a href={gathering.id}>
                                                {gathering.name}
                                            </a>
                                        </td>
                                        <td>{gathering.location}</td>
                                        <td>
                                            {new Date(
                                                gathering.date + "Z"
                                            ).toLocaleDateString()}
                                            &nbsp;
                                            {new Date(
                                                gathering.date + "Z"
                                            ).toLocaleTimeString()}
                                        </td>
                                        <td>
                                            {
                                                gathering.recommendation
                                                    ?.restaurant_name
                                            }
                                        </td>
                                        <td>
                                            {gathering.recommendation?.address}
                                        </td>
                                        <td>
                                            {gathering.recommendation?.cuisine}
                                        </td>
                                        <td>
                                            {gathering.recommendation?.rating}
                                        </td>
                                        <td>
                                            <a
                                                href={
                                                    gathering.recommendation
                                                        ?.url
                                                }
                                            >
                                                {gathering.recommendation?.url}
                                            </a>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
                <h1>Gatherings History</h1>
                <table className="table table-striped mt-4 table-hover">
                    <thead>
                        <tr>
                            <th>Gathering Name</th>
                            <th>Gathering Location</th>
                            <th>Gathering Date</th>
                            <th>Restaurant Name</th>
                            <th>Restaurant Address</th>
                            <th>Restaurant Cuisine</th>
                            <th>Restaurant Rating</th>
                            <th>Restaurant Yelp Site</th>
                        </tr>
                    </thead>
                    <tbody>
                        {gatheringList
                            ?.filter(
                                (gathering) =>
                                    new Date(gathering.date) - new Date() < 0
                            )
                            .map((gathering) => {
                                return (
                                    <tr
                                        className="table-row"
                                        key={gathering.id}
                                    >
                                        <td>
                                            <a href={gathering.id}>
                                                {gathering.name}
                                            </a>
                                        </td>
                                        <td>{gathering.location}</td>
                                        <td>
                                            {new Date(
                                                gathering.date
                                            ).toLocaleDateString()}
                                            &nbsp;
                                            {new Date(
                                                gathering.date
                                            ).toLocaleTimeString()}
                                        </td>
                                        <td>
                                            {
                                                gathering.recommendation
                                                    ?.restaurant_name
                                            }
                                        </td>
                                        <td>
                                            {gathering.recommendation?.address}
                                        </td>
                                        <td>
                                            {gathering.recommendation?.cuisine}
                                        </td>
                                        <td>
                                            {gathering.recommendation?.rating}
                                        </td>
                                        <td>
                                            <a
                                                href={
                                                    gathering.recommendation
                                                        ?.url
                                                }
                                            >
                                                {gathering.recommendation?.url}
                                            </a>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        );
    } else {
        return (
            <>
                <h1>No Gatherings Yet!</h1>
                <a href="/gathering/new">
                    <button> Create a Gathering</button>
                </a>
            </>
        );
    }
};
export default GatheringList;
