import './App.css';
import Button from '@material-ui/core/Button';
  

function Page5() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={image} className="App-logo" alt="logo" /> */}
        <p className="heading2">
          HELLO
        </p>
        <div className = "Buttons">
        <Button color="primary" variant="contained" href="#checkinpage">
        CHECK IN
      </Button>

      <Button color="primary" variant="contained" href="#resourcespage">
        RESOURCES
      </Button>
      </div>
      </header>
     
      

      
      
    </div>




  );
}

export default Page5;