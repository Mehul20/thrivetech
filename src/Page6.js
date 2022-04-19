import './App.css';
import Button from '@material-ui/core/Button';
import {useState} from "react";


function Page6() {

  const [isChecked, setIsChecked] = useState(new Array(6).fill(false))
  
  const handleOnChange = (position) => {
    isChecked.fill(false);
    const updatedCheckState = isChecked.map((item, index) => 
        
        index === position ? !item : item
  );
  setIsChecked(updatedCheckState);
  }


  return (
    <div className="App">
      <header className="App-header">
        {/* <AlarmOnIcon style={{ fontSize: 150, color:'black' }}/> */}
        <p className="Textstyle">
         What are your goals for the day?
         <br /> 
         <input 
         type="radio" 
         id="meditate" 
         name="goals" 
         value="meditate"
         checked = {isChecked[0]}
         onChange = {() => handleOnChange(0)}
         >
           
          </input>
         <label for="meditate"> Meditate</label><br></br>



         <input 
         type="radio" 
         id="homework" 
         name="goals" 
         value="homework"
         checked = {isChecked[1]}
         onChange = {() => handleOnChange(1)}
         >
           
           
           </input>
         <label for="homework"> Homework</label><br></br>


         <input type="radio" 
         id="relaxation" 
         name="goals" 
         value="relaxation"
         checked = {isChecked[2]}
         onChange = {() => handleOnChange(2)}
         >
          </input>
         <label for="relaxation"> Relaxation</label><br></br>




         <input type="radio" id="studying" name="goals" value="studying"
         checked = {isChecked[3]}
         onChange = {() => handleOnChange(3)}
         
         ></input>
         <label for="studying"> Studying</label><br></br>




         <input type="radio" id="hobbies" name="goals" value="hobbies"
         checked = {isChecked[4]}
         onChange = {() => handleOnChange(4)}
         ></input>
         <label for="hobbies"> Hobbies</label><br></br>
         <input type="radio" id="exercise" name="goals" value="exercise"
         checked = {isChecked[5]}
         onChange = {() => handleOnChange(5)}
         
         ></input>
         <label for="exercise"> Exercise</label><br></br>
        </p>

     
<div>
      
      {
      
      isChecked[0] ? (
       <Button color="primary" variant="contained" id="goals" href='#meditation'> NEXT</Button>
      ) : isChecked[1] ? (
        <Button color="primary" variant="contained" id="goals" href='#homeworkpage'> NEXT</Button>
      ) : isChecked[2] ? (
        <Button color="primary" variant="contained" id="goals" href='#relaxationpage'> NEXT</Button>
      ) : isChecked[3] ? (
        <Button color="primary" variant="contained" id="goals" href='#studyingpage'> NEXT</Button>
      ) : isChecked[4] ? (
        <Button color="primary" variant="contained" id="goals" href='#hobbiespage'> NEXT</Button>
      ): isChecked[5] ? (
        <Button color="primary" variant="contained" id="goals" href='#exercisepage'> NEXT</Button>
      ) :
      (
        <Button color="primary" variant="contained" id="goals"> NEXT </Button>
      )
     
      }
      
</div>
      </header>
      
    </div>
  );
}

export default Page6;