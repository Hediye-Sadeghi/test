import React from 'react';
import './App.css';
import Card from './component/Card';
import Head from './component/Head';
import MainCard from './component/MainCard';
import SortCard from './component/SortCard';
import Team from './component/Team';
import StudentOpinion from './component/StudentOpinion'
import Footer from './component/Footer/Footer'
import Opinion from './component/Opinion';



function App() {
  return (
    <div className="Container">
      <Head />
      <Card />
      <MainCard />
      <SortCard />
      <Team />
      <StudentOpinion />
      <Opinion />
      <Footer />
    </div>
  );
}
export default App;
