import './App.css';
import GetOne from './pages/GetOne';
import GetAll from "./pages/GetAll";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header';
import {useState} from 'react';
import CreateOne from './pages/CreateOne';



function App() {
  /* const [empty, setEmpty] = useState([]) */

/*   const addProduct = (newProduct) => {
    const found = empty.find(empty => empty.id === newProduct.id)
    if (found === undefined) {
      setEmpty([
        ...empty, //en i taget
        newProduct
      ]);
    } else {
      found.qty += newProduct.qty
    }
} */



  return (
    <div className="App">

 <BrowserRouter>
    <Header />
        <Routes>
          <Route path="/" element={<GetOne />} />
          <Route path="GetAll" element={<GetAll />} />
          <Route path="CreateOne" element={<CreateOne />} />
        </Routes>
</BrowserRouter>
      
      
    </div>
  );
}

export default App;