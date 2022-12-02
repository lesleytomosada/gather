import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


const GatheringDetail = () => {
  const [gathering, setGathering] = useState({});
  const gathering_id = useParams();

  const navigate = useNavigate();
  const navToPreference = async () => {
    navigate(`/gathering/${gathering_id['id']}/preference`)
  };

    const getRecommendation = async () => {
      const recommendUrl = `http://localhost:8000/gathering/${gathering_id['id']}/recommend`;
      const fetchConfig = {
        method: 'post'
      }
      const recommendResponse = await fetch(recommendUrl, fetchConfig);

      if (recommendResponse.ok) {
        let recommendation = await recommendResponse.json();
        window.location.reload(false);
        console.log(recommendation)
      }
    }

  useEffect(() => {
    const fetchGathering = async () => {
      const url = `http://localhost:8000/gathering/${gathering_id['id']}`;
      const response = await fetch(url);

      if (response.ok) {
        let data = await response.json();
        setGathering(data)
      }
    }
    fetchGathering();
  }, [gathering_id]);


  return (
    <>
      <h1 className="display-4 fw-bold text-center">Your Gathering</h1>
        <h2>{gathering.name}</h2>
        {new Date(gathering.date).toLocaleDateString()}&nbsp;
        {new Date(gathering.date + 'Z').toLocaleTimeString()}
        <h3>{gathering.location}</h3>
        <h3>{gathering.recommendation?.restaurant_name}</h3>
        <h3>{gathering.recommendation?.address}</h3>
        <img style={{width: "50%", height: "50%"}}src={gathering.recommendation?.image_url} alt='recommended restaurant' />
        <p>
          <button onClick={navToPreference}>Add a preference</button>
        </p>
        <p>
          <button onClick={getRecommendation}>Get Recommendation</button>
        </p>
    </>
  );
};

export default GatheringDetail;
