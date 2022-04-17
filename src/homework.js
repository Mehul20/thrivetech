import './App.css';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import CircleIcon from '@mui/icons-material/Circle';

function homework() {
  return (
    <div className="App">
      <header className="App-header">
        <LibraryBooksIcon style={{ fontSize: 150, color:'white' }}/>
        <p className="heading">
          HOMEWORK
          </p>
        <p className="Textstyle" style={{textAlign:''}}> 
          <CircleIcon style={{ fontSize: 10}}/> Make a homework schedule every Sunday that tells you which day and what time you have to work on a particular homework assignment.
        </p>
        <p className="Textstyle" style={{textAlign:''}}> 
          <CircleIcon style={{ fontSize: 10}}/> Try a new location on campus to complete your homework (roof of the CULC, Tech Green, Coda building, the Garage)
        </p>
        <p className="Textstyle" style={{textAlign:''}}> 
          <CircleIcon style={{ fontSize: 10}}/> Set a timer every 30 mins to allow yourself a break for 5 mins so that you do not tire easily
        </p>
      </header>
      
    </div>
  );
}

export default homework;