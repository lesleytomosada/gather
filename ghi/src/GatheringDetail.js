import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuthContext } from "./auth";


const GatheringDetail = () => {
  const [gathering, setGathering] = useState({});
  const [recommendation, setRecommendation] = useState(null);
  const [error, setError] = useState(false);
  const { gathering_id } = useParams();
  const { token } = useAuthContext();

  const navigate = useNavigate();
  const navToPreference = async () => {
    navigate(`/gathering/${gathering_id}/preference`);
  };

  const getRecommendation = async () => {
    const recommendUrl = `${process.env.REACT_APP_GATHERINGS}/gathering/${gathering_id}/recommend`;
    const fetchConfig = {
      method: "post",
      headers: { Authorization: `Bearer ${token}` },
    };
    const recommendResponse = await fetch(recommendUrl, fetchConfig);

    if (recommendResponse.ok) {
      let recommendation = await recommendResponse.json();
      setRecommendation(recommendation);
    }
  };

  useEffect(() => {
    const fetchGathering = async () => {
      const url = `${process.env.REACT_APP_GATHERINGS}/gathering/${gathering_id}`;
      const response = await fetch(url, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        let data = await response.json();
        setGathering(data);
        setRecommendation(data.recommendation);
      } else {
        setError(true);
      }
    };
    if (token) {
      fetchGathering();
    }
  }, [gathering_id, token]);

  return (
    <>
      {error ? (
        <>
          <div className="my-5 container text-center">
            <h1 className="mt-5 my-5 mb-5 display-6 text-center">
              Hold please! FOMO is real, but that's nacho your gathering!
            </h1>
            <img
              classname="d-block w-100 center"
              height="500px"
              width="auto"
              src="/GatheringFriends.jpg"
              alt=""
            />
          </div>
        </>
      ) : (
        <>
          <div className="px-4 py-5 my-1 text-center">
            <h1 className="display-4 text-center mb-0">{gathering.name}</h1>
            <p className="text-center lead">
              on {new Date(gathering.date + "Z").toLocaleDateString()}&nbsp;
              {new Date(gathering.date + "Z").toLocaleTimeString()}
            </p>
            <p className="lead">Location: {gathering.location}</p>
            {recommendation ? (
              <>
                <p className="display-6">Let's Eat!</p>
                <p className="display-6">
                  <a href={gathering.recommendation?.url}>
                    {recommendation?.restaurant_name}
                  </a>
                </p>
                <p className="lead">{recommendation?.address}</p>

                <img
                  style={{ width: "50%", height: "50%" }}
                  src={recommendation?.image_url}
                  alt="recommended restaurant"
                />
                <p className="pb-5 mt-4 mb-5">
                  <button
                    className="btn btn-primary"
                    onClick={getRecommendation}
                  >
                    Suggest Something Else!
                  </button>
                </p>
              </>
            ) : (
              <>
                <p className="display-6">Let's Decide Where to Eat!</p>
                <p>
                  <button className="btn btn-primary" onClick={navToPreference}>
                    Add a preference
                  </button>
                </p>
                <p>
                  {gathering.preferences ? (
                    <button
                      className="btn btn-primary"
                      onClick={getRecommendation}
                    >
                      Get Recommendation
                    </button>
                  ) : null}
                </p>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default GatheringDetail;
