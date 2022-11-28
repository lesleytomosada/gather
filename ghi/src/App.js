import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import GatheringDetail from './GatheringDetail';
import GatheringForm from './GatheringForm';
import GatheringList from './GatheringList';
import PreferenceForm from './PreferenceForm';
import MainPage from './MainPage';
import './App.css';

function App() {
  // const [launch_info, setLaunchInfo] = useState([]);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   async function getData() {
  //     let url = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/launch-details`;
  //     console.log('fastapi url: ', url);
  //     let response = await fetch(url);
  //     console.log("------- hello? -------");
  //     let data = await response.json();

  //     if (response.ok) {
  //       console.log("got launch data!");
  //       setLaunchInfo(data.launch_details);
  //     } else {
  //       console.log("drat! something happened");
  //       setError(data.message);
  //     }
  //   }
  //   getData();
  // }, [])


  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="login" element={<LoginForm/>} />
          <Route path="signup" element={<SignupForm/>} />
          <Route path="gathering/">
            <Route path="new" element={<GatheringForm/>} />
            <Route path="list" element={<GatheringList />} />
          <Route path="gathering/<int:pk>" element={<GatheringDetail/>} />
            <Route path="/preference" element={<PreferenceForm/>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
