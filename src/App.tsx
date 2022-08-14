import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { MainNavbar } from './components/NavBar/Navbar';
import { GridContainer } from './components/GridContainer/GridContainer';
// import '../node_modules/augmented-ui/augmented-ui.min';

function App() {
  return (
      <>
   
      <MainNavbar/>

      <div className="grid-bg ba-grid anim">
        <div className="inner">
          <GridContainer/>
        </div>
      </div>
      
      </>
   )
}

export default App;
