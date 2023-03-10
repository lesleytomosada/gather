import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import GatheringDetail from "./GatheringDetail";
import GatheringForm from "./GatheringForm";
import GatheringList from "./GatheringList";
import PreferenceForm from "./PreferenceForm";
import MainPage from "./MainPage";
import "./App.css";
import "./theme.css";
import { AuthProvider, useToken } from "./auth";
import CB from "./assets/CB.png";
import ST from "./assets/ST.png";

const domain = /https:\/\/[^/]+/;
const basename = process.env.PUBLIC_URL.replace(domain, "");

function GetToken() {
  useToken();
  return null;
}

function App() {
  return (
    <BrowserRouter basename={basename}>
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
        <div className="mt-5 footer">
          <div className="mt-3 container"></div>
          <img src={CB} alt="" height="10%" width="10%" />
          Seabeast 2022
          <img src={ST} alt="" height="10%" width="10%" />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
