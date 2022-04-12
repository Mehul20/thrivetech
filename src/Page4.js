import './App.css';
import React from 'react';

function Page4() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <AlarmOnIcon style={{ fontSize: 150, color:'black' }}/> */}
          <p className="heading">
           Let's Begin!
           </p>
           <p className="Textstyle"> What's your name? </p>
           <form name ="nameform">
            
                
                <input type="text" name="name" />
            
            <input type="button" value="Submit" onClick="#page5" />
            </form>
            
          
        </header>
        
      </div>
    );
  }
export default Page4;