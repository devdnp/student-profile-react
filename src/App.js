import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Logo from './components/Logo/Logo';
import Title from './components/Title/Title';
import Rank from './components/Rank/Rank';
import School from './components/School/School';
import Career from './components/Career/Career';
import Schedule from './components/Schedule/Schedule';
import ProfilePic from './components/ProfilePic/ProfilePic';
import Personal from './components/Personal/Personal';
import Score from './components/Score/Score';
import Paw from './components/Paw/Paw';
import Contact from './components/Contact/Contact';

function App() {
  return (

    <div className='container'>
      <div className='row'>
        <div className='col-lg-4'> <Logo/> </div>
        <div className='col-lg-4'> <Title/> </div>
        <div className='col-lg-4'> <Rank/> </div>
      </div>

      <div className='row'>

          <div className='col-lg-8'>
            <div>                                           {/*  style={{border:"2px solid black"}}*/}
              <div className="box"> <School/> </div>
              <div className="box"> <Career/> </div>
              <div className="box"> <Schedule/> </div>
            </div>
          </div>

          <div className='col-lg-4'>
            <div>                                           {/*  style={{border:"2px solid black"}}*/}
              <div className="box"> <ProfilePic/> </div>
              <div className="box"> <Personal/> </div>
              <div className="box"> <Score/> </div>
              <div className="box"> <Paw/> </div>
              <div className="box"> <Contact/> </div>
            </div>
          </div>

      </div>
    </div>
  );
}

export default App;
