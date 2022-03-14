import './App.css';
import RunCircleIcon from '@mui/icons-material/RunCircle';

function exercise() {
  return (
    <div className="App">
      <header className="App-header">
        <RunCircleIcon style={{ fontSize: 150, color:'black' }}/>
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