import { useState, useEffect } from "react";

function GatheringColumn(props) {
  return (
    <div className="col">
      {props.list.map(data => {
        const gathering = data.gatherings;
        return (
          <div key={gathering.id} className="card mb-3 shadow">
            <div className="card-body">
              <h5 className="card-title">{gathering.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {gathering.location}
              </h6>
              <p className="card-text">
                {gathering.date}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const GatheringList = () => {
    const [gatheringList, setGatheringList] = useState([]);

    useEffect(() => {
        async function fetchGatheringList(){
            const url = "http://localhost:8000/gathering"
            const response = await fetch(url);
            if (response.ok){
                const data = await response.json();
                setGatheringList(data.gatherings);
            }
        }
        fetchGatheringList();
    }, []);

return(
    <div>
        <h1>Upcoming Gatherings</h1>
            <table className = "table table-striped mt-4 table-hover">
                <thead>
                    <tr>
                        <th>Gathering Name</th>
                        <th>Gathering Location</th>
                        <th>Gathering Date</th>
                        <th>Restaurant Name</th>
                        <th>Restaurant Address</th>
                        <th>Restaurant Cuisine</th>
                        <th>Restaurant Rating</th>
                        <th>Restaurant Website</th>
                    </tr>
                </thead>
                <tbody>
                    {gatheringList?.filter(gathering => new Date(gathering.date) - new Date() > 0).map((gathering) => {
                        return (
                            <tr className="table-row" key={gathering.id}>
                                <td>{gathering.name}</td>
                                <td>{gathering.location}</td>
                                <td>{new Date(gathering.date+"Z").toLocaleDateString()}&nbsp;
                                    {new Date(gathering.date+"Z").toLocaleTimeString()}</td>
                                <td>{gathering.recommendation.restaurant_name}</td>
                                <td>{gathering.recommendation.address}</td>
                                <td>{gathering.recommendation.cuisine}</td>
                                <td>{gathering.recommendation.rating}</td>
                                <td>{gathering.recommendation.url}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        <h1>Gatherings History</h1>
                    <table className = "table table-striped mt-4 table-hover">
                <thead>
                    <tr>
                        <th>Gathering Name</th>
                        <th>Gathering Location</th>
                        <th>Gathering Date</th>
                        <th>Restaurant Name</th>
                        <th>Restaurant Address</th>
                        <th>Restaurant Cuisine</th>
                        <th>Restaurant Rating</th>
                        <th>Restaurant Website</th>
                    </tr>
                </thead>
                <tbody>
                    {gatheringList?.filter(gathering => new Date(gathering.date) - new Date() < 0).map((gathering) => {
                        return (
                            <tr className="table-row" key={gathering.id}>
                                <td>{gathering.name}</td>
                                <td>{gathering.location}</td>
                                <td>{new Date(gathering.date).toLocaleDateString()}&nbsp;
                                    {new Date(gathering.date).toLocaleTimeString()}</td>
                                <td>{gathering.recommendation.restaurant_name}</td>
                                <td>{gathering.recommendation.address}</td>
                                <td>{gathering.recommendation.cuisine}</td>
                                <td>{gathering.recommendation.rating}</td>
                                <td>{gathering.recommendation.url}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
    </div>
)
}

export default GatheringList