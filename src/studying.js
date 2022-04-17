import './App.css';
import SchoolIcon from '@mui/icons-material/School';
import CircleIcon from '@mui/icons-material/Circle';

function meditation() {
  return (
    <div className="App">
      <header className="App-header">
        <SchoolIcon style={{ fontSize: 150, color:'white' }}/>
        <p className="heading">
          Studying
        </p>
        <p className="Textstyle" >
        <CircleIcon style={{ fontSize: 10}}/>Create your own study guide and outline the important/ more difficult material that you need to focus on in each course
        </p>
        <p className="Textstyle" >
        <CircleIcon style={{ fontSize: 10}}/>Identify students in the course with similar studying habits and form a study group where you attend the session with having questions prepared

        </p>
        <p className="Textstyle" >
        <CircleIcon style={{ fontSize: 10}}/>Study for the style of the exam. If it is multiple choice then study definitions and concepts. If it is an essay exam then focus on your understanding of all the concepts presented

        </p>
      </header>
      
    </div>
  );
}

export default meditation;