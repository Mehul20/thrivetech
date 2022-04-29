import './App.css';
import RunCircleIcon from '@mui/icons-material/RunCircle';
import CircleIcon from '@mui/icons-material/Circle';
import Button from '@material-ui/core/Button';

function exercise() {
  return (
    <div className="App">
      <header className="App-header">
        <RunCircleIcon style={{ fontSize: 150, color:'white' }}/>
        <p className="heading">
         Exercise
        </p>
        <p className="Textstyle" >
        <CircleIcon style={{ fontSize: 10}}/>Find a workout buddy! Finding a workout partner can help keep you on track and motivate you to get out the door.
        </p>
        <p className="Textstyle" >
        <CircleIcon style={{ fontSize: 10}}/>Sign up for a class at the CRC: You may find that having the structure of a class helps you learn a new activity and keeps you on track.
        < a href="https://www.crc.gatech.edu/">Sign up!</a> </p>
        <p className="Textstyle" >
        <CircleIcon style={{ fontSize: 10}}/>Include some off-days into your workout schedule to ensure you do not burn yourself out. 

        </p>
        <p className="Textstyle" >
        <CircleIcon style={{ fontSize: 10}}/>Piece your workout together. You don’t need to get all your exercise at one time. Ten minutes morning, noon, and night can give much of the same benefit as 30 minutes all at once.
        </p>
        <Button color="primary" variant="contained" href="#page5">
        BACK
      </Button>
      </header>
      
    </div>
  );
}

export default exercise;