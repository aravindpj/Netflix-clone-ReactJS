import './App.css';
import Banner from './component/Banner/Banner';
import Navbar from './component/Navbar/Navbar';
import Rowpost from './component/Rowpost/Rowpost';
import { trending ,action, originals, ComedyMovies, HorrorMovies, Documentaries} from './Constants/constants';

function App() {
  return (
    <div className="App">
      <Navbar/>      
      <Banner trending={trending}/>
      <Rowpost title='Netflix Originals' geners={originals}/>  
      <Rowpost title='Action' geners= {action} isSmall/>  
      <Rowpost title='Comedy' geners= {ComedyMovies} isSmall/>  
      {/* <Rowpost title='Horror' geners= {HorrorMovies} isSmall/>   */}
      <Rowpost title='Documentaries' geners= {Documentaries} isSmall/>  
      
    </div>
  );
}

export default App;
