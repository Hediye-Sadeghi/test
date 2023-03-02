import React from 'react';
import { useRoutes } from 'react-router-dom'
import './App.css';
<<<<<<< HEAD
import Header from './component/Header';
=======
import Card from './component/Card';
// import Header from './component/Header';
import Courses from './component/Courses';
import SortCard from './component/SortCard';
import Team from './component/Team';
import StudentOpinion from './component/StudentOpinion'
>>>>>>> 83f52f0529d2246f064c06434fee351571acf4be
import Footer from './component/layout/Footer/Footer'
import routes from './routes';


function App() {

  let router = useRoutes(routes)
  return (
    <div className="Container">

<<<<<<< HEAD
      <Header />
=======
      {/* <Header /> */}
>>>>>>> 83f52f0529d2246f064c06434fee351571acf4be
      {router}
      <Footer />
      
    </div>
  );
}
export default App;
