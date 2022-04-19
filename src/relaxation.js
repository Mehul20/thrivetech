import './App.css';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import CircleIcon from '@mui/icons-material/Circle';
import Button from '@material-ui/core/Button';

function relaxation() {
  return (
    <div className="App">
      <header className="App-header">
        <SelfImprovementIcon style={{ fontSize: 150, color:'white' }}/>
        <p className="heading">
          RELAXATION
        </p>
        <p className="Textstyle" >
        <CircleIcon style={{ fontSize: 10}}/> Take a 20 minute walk on Tech Green.
        </p>
        <p className="Textstyle" >
        <CircleIcon style={{ fontSize: 10}}/> Lay on a soft surface, such as your bed, a carpet, or a yoga mat. Tense up one part of your body at a time, and then slowly release your muscles.
        </p>
        <p className="Textstyle" >
        <CircleIcon style={{ fontSize: 10}}/> Getting things off your mind by writing them down may help you relax. When you feel stressed, take a few minutes to write down some short notes about how you’re feeling or how your day is going.
        </p>
        <p className="Textstyle" >
        <CircleIcon style={{ fontSize: 10}}/> When you’re feeling stressed, take a step outside and go for a short walk, or simply sit in nature.
        </p>
        <Button color="primary" variant="contained" href="#page5">
        BACK
      </Button>
      </header>
      
    </div>
  );
}

export default relaxation;