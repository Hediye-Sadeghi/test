import React from 'react';
import './App.css';
import Card from './component/Card';
import Header from './component/Header';
import Courses from './component/Courses';
import SortCard from './component/SortCard';
import Team from './component/Team';
import StudentOpinion from './component/StudentOpinion'
import Footer from './component/layout/Footer/Footer'
import Opinion from './component/Opinion';



function App() {
  return (
    <div className="Container">
      <Header />
      <Card />
      <Courses />
      <SortCard />
      <Team />
      <StudentOpinion />
      <Opinion />
      <Footer />
    </div>
  );
}
export default App;
