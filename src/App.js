import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDoubleRight, faGlobe, faMobileAlt, faMapMarkerAlt, faCheckCircle, faTimesCircle, faFileDownload } from '@fortawesome/free-solid-svg-icons'
import { Hero } from './Hero.js';

library.add(faAngleDoubleRight, faGlobe, faMobileAlt, faMapMarkerAlt, faCheckCircle, faTimesCircle, faFileDownload);

function App() {
  return (
    <div className="App">
      <Hero />
    </div>
  );
}

export default App;
