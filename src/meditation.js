import './App.css';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';

function meditation() {
  return (
    <div className="App">
      <header className="App-header">
        <SelfImprovementIcon style={{ fontSize: 150, color:'black' }}/>
        <p className="Textstyle">
          1. Listen to the 'Mindful Minute' podcast on Spotify. 
          <br /> 

          2. Take a 20 minute walk on Tech Green.
        </p>
      </header>
      
    </div>
  );
}

export default meditation;