import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// import { Provider } from "react-redux";
import Books from './components/Books';
import Categories from './components/Categories';
// import store from "./redux/configureStore";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
