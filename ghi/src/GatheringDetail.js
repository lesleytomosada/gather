import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const GatheringDetail = () => {
  const [gathering, setGathering] = useState({});
  const gathering_id = useParams();
  console.log('gathering_id :', gathering_id)
  const navigate = useNavigate();
  const navToPreference = async () => {

    navigate('/gathering/' + gathering_id['gathering_id'] + '/preference')

  };



  useEffect(() => {
    const fetchGathering = async () => {
      const url = 'http://localhost:8000/gathering/' + gathering_id['gathering_id'];
      const response = await fetch(url);


      if (response.ok) {
        let data = await response.json();
        console.log('data :', data)
        setGathering(data)
      }
    }
    fetchGathering();
  }, []);


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


    </>
  );
};

export default GatheringDetail;
