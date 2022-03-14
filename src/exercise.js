import './App.css';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';

function exercise() {
  return (
    <div className="App">
      <header className="App-header">
        <SelfImprovementIcon style={{ fontSize: 150, color:'black' }}/>
        <p className="Textstyle">
         Exercise
          <br /> 

          2. Take a 20 minute walk on Tech Green.
        </p>
      </header>
      
    </div>
  );
}

export default exercise;