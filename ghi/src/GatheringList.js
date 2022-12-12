import { useState, useEffect } from "react";
import { useAuthContext } from "./auth";
import { NavLink } from "react-router-dom";
import star from "./stars";
import { reverseCuisines } from "./ReverseCuisines";

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
      <div className="px-4 py-5 my-1 text-center">
        <h1 className="display-5">Upcoming Gatherings</h1>
        <table className="table my-4">
          <thead>
            <tr>
              <th className="lead">Gathering Name</th>
              <th className="lead">Gathering Location</th>
              <th className="lead">Gathering Date</th>
              <th className="lead">Recommendation Name</th>
              <th className="lead">Recommendation Address</th>
              <th className="lead">Recommendation Cuisine</th>
              <th className="lead">Recommendation Rating</th>
            </tr>
          </thead>
          <tbody>
            {gatheringList
              ?.filter((gathering) => new Date(gathering.date) - new Date() > 0)
              .map((gathering) => {
                return (
                  <tr className="table-row" key={gathering.id}>
                    <td>
                      <a href={gathering.id}>{gathering.name}</a>
                    </td>
                    <td>{gathering.location}</td>
                    <td>
                      {new Date(gathering.date + "Z").toLocaleDateString()}
                      &nbsp;
                      {new Date(gathering.date + "Z").toLocaleTimeString()}
                    </td>
                    <td>
                      <a href={gathering.recommendation?.url}>
                        {gathering.recommendation?.restaurant_name}
                      </a>
                    </td>
                    <td>{gathering.recommendation?.address}</td>
                    <td>
                      {reverseCuisines[gathering.recommendation?.cuisine]}
                    </td>
                    {gathering.recommendation ? (
                      <td>
                        <img
                          src={star[gathering.recommendation?.rating]}
                          alt="rating"
                        ></img>
                      </td>
                    ) : (
                      <td></td>
                    )}
                  </tr>
                );
              })}
          </tbody>
        </table>
        <h1 className="mt-3 display-5">Gatherings History</h1>
        <table className="table">
          <thead>
            <tr>
              <th className="lead">Gathering Name</th>
              <th className="lead">Gathering Location</th>
              <th className="lead">Gathering Date</th>
              <th className="lead">Recommendation Name</th>
              <th className="lead">Recommendation Address</th>
              <th className="lead">Recommendation Cuisine</th>
              <th className="lead">Recommendation Rating</th>
            </tr>
          </thead>
          <tbody>
            {gatheringList
              ?.filter((gathering) => new Date(gathering.date) - new Date() < 0)
              .map((gathering) => {
                return (
                  <tr className="table-row" key={gathering.id}>
                    <td>
                      <a href={gathering.id}>{gathering.name}</a>
                    </td>
                    <td>{gathering.location}</td>
                    <td>
                      {new Date(gathering.date + "Z").toLocaleDateString()}
                      &nbsp;
                      {new Date(gathering.date + "Z").toLocaleTimeString()}
                    </td>
                    <td>
                      <a href={gathering.recommendation?.url}>
                        {gathering.recommendation?.restaurant_name}
                      </a>
                    </td>
                    <td>{gathering.recommendation?.address}</td>
                    <td>
                      {reverseCuisines[gathering.recommendation?.cuisine]}
                    </td>
                    {gathering.recommendation ? (
                      <td>
                        <img
                          src={star[gathering.recommendation?.rating]}
                          alt="rating"
                        ></img>
                      </td>
                    ) : (
                      <td></td>
                    )}
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
        <div className="my-5 text-center">
          <h1 className="mb-3 display-5">No Gatherings Yet!</h1>
          <NavLink className="btn btn-primary" to="/gathering/new">
            Create a Gathering
          </NavLink>
        </div>
      </>
    );
  }
};
export default GatheringList;
