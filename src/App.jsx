import React from 'react';
import MainRoute from './Routes/MainRoute';
import Footer from './Components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App = () => {
  return (
    <div className=''>
      <ToastContainer position="top-center" autoClose={3000} />
      <MainRoute/>
      <Footer/>
    </div>
  );
};

export default App;