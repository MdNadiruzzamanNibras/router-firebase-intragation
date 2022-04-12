
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Header from './Component/Header/Header';
import Registration from './Component/Registration/Registration';
import Products from './Component/Products/Products';
import Orders from './Component/Orders/Orders';
import RequiredAuth from './Component/RequiredAuth/RequiredAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<RequiredAuth>
          <Products></Products>
        </RequiredAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/orders' element={<RequiredAuth>
          <Orders></Orders>
        </RequiredAuth>}></Route>
        <Route path='/Registration' element={<Registration></Registration>}></Route>
      </Routes>
    </div>
  );
}

export default App;
