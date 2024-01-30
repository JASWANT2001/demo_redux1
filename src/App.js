import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Products from './Products';

function App() {
  return (
    <div className="container">
      <div className='row'>
        <Products></Products>
      </div>
    </div>
  );
}

export default App;
