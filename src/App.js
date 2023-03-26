
import './App.css';
import Cosmetics from './Components/Cosmetics/Cosmetics';
import Shoes from './Components/Shoes/Shoes';
import ShopeCenter from './Components/ShopeCenter/ShopeCenter';

function App() {
  return (
    <div className="App">
      <div className='mt-10 mb-3 font-bold text-2xl shadow-lg py-5 text-cyan-700 bg-pink-400 mx-10 rounded-md'>
          <h1 className='headline'>Welcome to Practice Storage Shop</h1>
      </div>
      <Shoes/>
      <Cosmetics></Cosmetics>
      <ShopeCenter/>
    </div>
  );
}

export default App;
