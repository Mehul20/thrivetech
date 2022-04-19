import './App.css';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import CircleIcon from '@mui/icons-material/Circle';
import Button from '@material-ui/core/Button';

function meditation() {
  return (
    <div className="App">
      <header className="App-header">
        <SelfImprovementIcon style={{ fontSize: 150, color:'white' }}/>
        <p className="heading">
          MEDITATION
        </p>
        
        
        <p className="Textstyle" >
        <CircleIcon style={{ fontSize: 10}}/> Listen to the Mindful Minute podcast on Spotify and meditate along the way.


          <br /> 
          <CircleIcon style={{ fontSize: 10}}/>  Identify 10 minutes in your schedule 3 times a week to find a quiet spot to focus on your breathing and posture.

          <br />
          <CircleIcon style={{ fontSize: 10}}/>  Attend a yoga class at the CRC. Both sunrise yoga and afternoon yoga options are available.
        </p>
        <Button color="primary" variant="contained" href="#page5">
        BACK
      </Button>
      </header>
      
    </div>
  );
}

export default meditation;