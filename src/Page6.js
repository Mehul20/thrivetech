import './App.css';
// import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import Button from '@material-ui/core/Button';
import {useState} from "react";


function Page6() {

  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <AlarmOnIcon style={{ fontSize: 150, color:'black' }}/> */}
        <p className="Textstyle">
         What are your goals for the day?
         <br /> 
         <input 
         type="checkbox" 
         id="meditate" 
         name="meditate" 
         value="meditate"
         checked = {isChecked}
         onChange = {handleOnChange}
         >
           
          </input>
         <label for="meditate"> Meditate</label><br></br>
         <input type="checkbox" id="homework" name="homework" value="homework"></input>
         <label for="homework"> Homework</label><br></br>
         <input type="checkbox" id="relaxation" name="relaxation" value="relaxation"></input>
         <label for="relaxation"> Relaxation</label><br></br>
         <input type="checkbox" id="studying" name="studying" value="studying"></input>
         <label for="studying"> Studying</label><br></br>
         <input type="checkbox" id="hobbies" name="hobbies" value="hobbies"></input>
         <label for="hobbies"> Hobbies</label><br></br>
         <input type="checkbox" id="exercise" name="exercise" value="exercise"></input>
         <label for="exercise"> Exercise</label><br></br>
        </p>

     
<div>
      {isChecked ? (
       <Button color="primary" variant="contained" id="goals" href='#meditation'> NEXT</Button>
      ) : (
        <Button color="primary" variant="contained" id="goals"> NEXT </Button>
      )}
</div>
      </header>
      
    </div>
  );
}

export default Page6;