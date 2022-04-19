import './App.css';
import FitbitIcon from '@mui/icons-material/Fitbit';
import CircleIcon from '@mui/icons-material/Circle';
import Button from '@material-ui/core/Button';

function hobbies() {
  return (
    <div className="App">
      <header className="App-header">
        <FitbitIcon style={{ fontSize: 150, color:'white' }}/>
        <p className="heading">
        Hobbies
        </p>
        <p className="Textstyle" >
        <CircleIcon style={{ fontSize: 10}}/>Break it down into small steps. Trying something new can be overwhelming so you might find it helpful to break it down into a few essential steps. Write out the steps and concentrate on one thing at a time.

        </p> 
        <p className="Textstyle" >
        <CircleIcon style={{ fontSize: 10}}/>Find an accountability partner or group. Try finding someone else who wants to do what you are doing. Alternatively, you may want an accountability partner that you meet with regularly. Knowing you will have to talk about your progress and take responsibility is motivating.

        </p>
        <p className="Textstyle" >
        <CircleIcon style={{ fontSize: 10}}/>Enjoy it! Make sure you enjoy what you are doing most of the time at least and reconnect with why it matters

        </p>
        <Button color="primary" variant="contained" href="#page5">
        BACK
      </Button>
      </header>
      
    </div>
  );
}

export default hobbies;