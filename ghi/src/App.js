import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './Nav';
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import GatheringDetail from "./GatheringDetail";
import GatheringForm from "./GatheringForm";
import GatheringList from "./GatheringList";
import PreferenceForm from "./PreferenceForm";
import MainPage from './MainPage';
import "./App.css";
import { AuthProvider, useToken } from "./auth";

function GetToken() {
  useToken();
  return null;
}

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <GetToken />
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="signup" element={<SignupForm />} />
            <Route path="gathering/">
              <Route path="new" element={<GatheringForm />} />
              <Route path="list" element={<GatheringList />} />
              <Route path=":gathering_id">
                <Route path="" element={<GatheringDetail />} />
                <Route path="preference" element={<PreferenceForm />} />
              </Route>
            </Route>
          </Routes>
        </div>
    </AuthProvider>
  </BrowserRouter>
  );
}

export default App;
