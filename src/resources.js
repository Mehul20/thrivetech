import './index.css';
import './App.css';
import Book from '@mui/icons-material/Book';
import CircleIcon from '@mui/icons-material/Circle';

function resources() {
  return (
    <div className="App">
      <header className="App-header">
        <Book style={{ fontSize: 150, color:'white' }}/>
        <h1 className="heading">
            RESOURCES
        </h1>
        <h2 className="heading2"> 
            Mental Health
        </h2>
        <p className="Textstyle">
        <CircleIcon style={{ fontSize: 10}}/>
            Thrive@GT: Wellness portal of mental health and well-being resources provided in partnership through the University System of Georgia's Mental Health Initiative.
        </p>
        <p className="Textstyle">
        <CircleIcon style={{ fontSize: 10}}/>
            VOICE: VOICE provides support to victim-survivors of sexual violence and those supporting survivors as well as educates the campus community about healthy relationships and sexual violence.
        </p>
        <p className="Textstyle">
        <CircleIcon style={{ fontSize: 10}}/>
            GT Counseling: The Counseling Center offers a full range of counseling and psychological services to help facilitate lifelong personal development, promote mental health, and prevent or reduce stress
        </p>
        <h2 className="heading2">
            Meditation
        </h2>
        <p className="Textstyle">
        <CircleIcon style={{ fontSize: 10}}/>
           Kadampa Meditation Center Georgia: a Buddhist meditation center dedicated to the attainment of world peace by offering everyone the opportunity to develop lasting mental peace through meditation and study programs.
        </p>
        <p className="Textstyle">
        <CircleIcon style={{ fontSize: 10}}/>
            Atlanta Soto Zen Center: ASZC supports its members by providing a Sangha, or group to sit with. Zazen, or sitting meditation, is available mornings and evenings every day of the week. Experienced teachers are available to respond to any questions that arise.
        </p>
        <p className="Textstyle">
        <CircleIcon style={{ fontSize: 10}}/>
            Websites: Mindful.org, Headspace.com, Calm.com
        </p>
        <h2 className="heading2">
            Exercise
        </h2>
        <p className="Textstyle">
        <CircleIcon style={{ fontSize: 10}}/>
           Campus Recreation Center: From a state-of-the-art fitness center, world-class aquatics facility,  the CRC offers fitness programs, competitive sports, aquatic programs, outdoor recreation, and more.
        </p>
        <h2 className="heading2">
            Academic Assistance
        </h2>
        <p className="Textstyle">
        <CircleIcon style={{ fontSize: 10}}/>1-to-1 Tutoring: 1-to-1 Tutoring is a free, appointment-based tutoring program offered to all Georgia Tech undergraduate students.
        <a href="https://tutoring.gatech.edu/tutoring/" >Visit the Website</a>
        </p>
        <p className="Textstyle">
        <CircleIcon style={{ fontSize: 10}}/>PLUS: PLUS sessions are group study sessions that facilitate learning in a relaxed, collaborative environment. 
        </p>
        <p className="Textstyle">
        <CircleIcon style={{ fontSize: 10}}/>Drop-In Tutoring: Drop-In Tutoring is offered for immediate help from course TAs and our tutors – no appointment necessary! 
        </p>
        <p className="Textstyle">
        <CircleIcon style={{ fontSize: 10}}/>
          Learning Assitant Program: Learning Assistants facilitate student learning and small group discussion inside the classroom.
        </p>
      </header>
      
    </div>
  );
}

export default resources;