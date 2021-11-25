import './App.css';
import MainPage from './pages/mainPage/MainPage'
import WowPage from './pages/wowPage/WowPage'
import TeamPage from './pages/teamPage/TeamPage'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/header/Header';
import FirstTeam from './pages/teamPage/firstTeam/FirstTeam';
import OrganizationChart from './pages/teamPage/organizationChart/OrganizationChart';
import NavbarTeamPage from './components/teamPage/NavbarTeamPage';

function App() {
  return (
    <div className="App">
          
      
     
      <Router>
        <Header/>
       <Routes>
           <Route exact path="/" element={<MainPage/>}/>
           <Route exact path="/team" element={<TeamPage/>}/>
           <Route exact path="/wow" element={ <WowPage/>}/>
           <Route exact path="/orgChart" element={<OrganizationChart/>}/>
           <Route exact path="/team1" element={<FirstTeam/>}/>
       </Routes>
    </Router>
   

    </div>
  );
}

export default App;
