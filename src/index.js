import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page35 from './Page35'
import Page5 from './Page5'
import Page6 from './Page6'
import Meditation from './meditation'
import Homework from './homework'
import Relaxation from './relaxation';
import Studying from './studying'
import Hobbies from './hobbies'
import Exercise from './exercise'
import Resources from './resources'
import reportWebVitals from './reportWebVitals';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Ending from './ending';


ReactDOM.render(
  <React.StrictMode>

<AppBar position="static" >
  <Toolbar variant="dense" >
    <Typography variant="h6" color="inherit" component="div">
      Thrive Tech
    </Typography>
  </Toolbar>
</AppBar>

    <Page1 />
    <Divider />
    <Page2 />
    <Divider />
    <Page3 />
    <Divider />
    <Page35 />
    <Divider />
    
    <div id ="page5">
    <Page5 />
    </div>

    <Divider />

    <div id ="checkinpage">
    <Page6 />
    </div>

    <Divider />

    <div id="meditation">
    <Meditation /> 
    </div>

    <Divider />
  
    <div id="homeworkpage">
      
    <Homework />
    </div>

    <Divider />
  
    <div id="relaxationpage">
      
    <Relaxation />
    </div>

    <Divider />
  
    <div id="studyingpage">
      
    <Studying />

    </div>

    <Divider />
  
  <div id="hobbiespage">
    
  <Hobbies />

  </div>

  <Divider />
  
  <div id="exercisepage">
    
  <Exercise />

  </div>

  <Divider />

  <div id="resourcespage">
    <Resources /> 
    </div>

    <Divider />

    <Ending />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
