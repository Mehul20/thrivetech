import './App.css';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import React from 'react';

function Page4() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <AlarmOnIcon style={{ fontSize: 150, color:'black' }}/> */}
          <p className="Textstyle">
           FORM
           <br /> 
           <form>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
            </form>
            
          </p>
        </header>
        
      </div>
    );
  }
export default Page4;