import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Nav from './Nav';
// import LoginForm from './LoginForm';
// import SignupForm from './SignupForm';
import GatheringDetail from './GatheringDetail';
// import GatheringForm from './GatheringForm';
// import GatheringList from './GatheringList';
// import PreferenceForm from './PreferenceForm';
// import MainPage from './MainPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <div className="container">
        <Routes>
          {/* <Route path="/" element={<MainPage />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="signup" element={<SignupForm />} /> */}
          <Route path="gathering/">
            {/* <Route path="new" element={<GatheringForm />} />
            <Route path="list" element={<GatheringList />} /> */}
            <Route path=":id">
              <Route path="" element={<GatheringDetail />} />
              {/* <Route path="preference" element={<PreferenceForm />} /> */}
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
