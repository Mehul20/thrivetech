import './App.css';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

function homework() {
  return (
    <div className="App">
      <header className="App-header">
        <LibraryBooksIcon style={{ fontSize: 150, color:'black' }}/>
        <p className="Textstyle">
          HOMEWORK
          <br /> 

          2. Take a 20 minute walk on Tech Green.
        </p>
      </header>
      
    </div>
  );
}

export default homework;