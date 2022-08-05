import React,{useState, useEffect} from 'react';

// pages
import FirstTask from './pages/first-task/first-task'
import SecondTask from './pages/second-task/second-task'

// Components
import TabPanel from './components/tab-panel'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

// Material UI
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import './App.css';
import RepoListPage from './pages/second-task/repo-list-page';

function App() {

  const [userName, setUserName] = useState('')

  useEffect(() => {
    setUserName(localStorage.getItem("userName"))
  }, []);

  return (
    <Router>
      <div style={{padding :'0 64px'}}>
        <ul style={{display:'flex'}}>
          <li style={{marginRight:32}}>
            <Link to="/">First Task</Link>
          </li>
          <li style={{marginRight:32}}>
            <Link to="/second">Second Task</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/second" element={<SecondTask userName={userName} setUserName={setUserName}/>} />
          <Route path={`/repos/${userName}`} element={<RepoListPage />}/>
          <Route path="/" element={<FirstTask/>} />
        </Routes>
      </div>
    </Router>
      
  );
}

export default App;
