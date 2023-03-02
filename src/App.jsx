import React from 'react';
import { useRoutes } from 'react-router-dom'
import './App.css';
import Header from './component/Header';
import Footer from './component/layout/Footer/Footer'
import routes from './routes';


function App() {

  let router = useRoutes(routes)
  return (
    <div className="Container">

      <Header />
      {router}
      <Footer />
      
    </div>
  );
}
export default App;
