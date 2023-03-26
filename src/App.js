
import './App.css';
import Cosmetics from './Components/Cosmetics/Cosmetics';
import Shoes from './Components/Shoes/Shoes';
import ShopeCenter from './Components/ShopeCenter/ShopeCenter';

function App() {
  return (
    <div className="App">
      <ShopeCenter/>
     <Shoes/>
     <Cosmetics></Cosmetics>
    </div>
  );
}

export default App;
