import image from './front.png'
import './App.css';
import Button from '@material-ui/core/Button';
import Page2 from "./Page2";
  

function Page1() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={image} className="App-logo" alt="logo" />
        <p className="heading2">
          Thrive Tech
        </p>
        <Button color="primary" variant="contained" href="#page5">
        Let's Begin
      </Button>
     
      </header>
     
      

      
      
    </div>




  );
}

export default Page1;
