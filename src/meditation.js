import './App.css';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';

function meditation() {
  return (
    <div className="App">
      <header className="App-header">
        <SelfImprovementIcon style={{ fontSize: 150, color:'white' }}/>
        <p className="heading">
          MEDITATION
        </p>
        
        
        <p className="Textstyle" >
        1) Listen to the Mindful Minute podcast.


          <br /> 
          2) Identify 10 minutes in your schedule 3 times a week to find a quiet spot to focus on your breathing and posture.

          <br />
          3) Attend a yoga class at the CRC.
        </p>
      </header>
      
    </div>
  );
}

export default meditation;