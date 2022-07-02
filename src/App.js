import logo from './logo.svg';
import './Main.css';
import Anasayfa from './Components/Anasayfa.jsx';
import Aksiyon from './Components/Aksiyon.jsx';
import Animasyon from './Components/Animasyon.jsx';
import BilimKurgu from './Components/BilimKurgu.jsx';
import Dram from './Components/Dram.jsx';
import Gerilim from './Components/Gerilim.jsx';
import Komedi from './Components/Komedi.jsx';
import Korku from './Components/Korku.jsx';
import Romantik from './Components/Romantik.jsx';
import {Link,Switch,Route,useParams} from 'react-router-dom'

function App() {
  function myFunction() {
    var x = document.getElementById("toggle-menu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  return (
    <div className="App">
     <header>
       <ul>
          <li><Link to="/">Anasayfa</Link></li>
          <li><Link to="aksiyon">Aksiyon</Link></li>
          <li><Link to="animasyon">Animasyon</Link></li>
          <li><Link to="bilim-kurgu">Bilim Kurgu</Link></li>
          <li><Link to="dram">Dram</Link></li>
          <li><Link to="gerilim">Gerilim</Link></li>
          <li><Link to="komedi">Komedi</Link></li>
          <li><Link to="korku">Korku</Link></li>
          <li><Link to="romantik">Romantik</Link></li>
       </ul>
       
       <a href="javascript:void(0);" class="icon" onClick={myFunction}>
          <i class="fa fa-bars"></i>
        </a>
        <div id='toggle-menu'>
        <ul>
          <li><Link to="/">Anasayfa</Link></li>
          <li><Link to="aksiyon">Aksiyon</Link></li>
          <li><Link to="animasyon">Animasyon</Link></li>
          <li><Link to="bilim-kurgu">Bilim Kurgu</Link></li>
          <li><Link to="dram">Dram</Link></li>
          <li><Link to="gerilim">Gerilim</Link></li>
          <li><Link to="komedi">Komedi</Link></li>
          <li><Link to="korku">Korku</Link></li>
          <li><Link to="romantik">Romantik</Link></li>
       </ul>
        </div>
     </header>

     <Switch>
        <Route path='/' exact><Anasayfa/></Route>
        <Route path='/aksiyon'><Aksiyon/></Route>
        <Route path='/animasyon'><Animasyon/></Route>
        <Route path='/bilim-kurgu'><BilimKurgu/></Route>
        <Route path='/dram'><Dram/></Route>
        <Route path='/gerilim'><Gerilim/></Route>
        <Route path='/komedi'><Komedi/></Route>
        <Route path='/korku'><Korku/></Route>
        <Route path='/romantik'><Romantik/></Route>
      </Switch>
    </div>
  );
}

export default App;
