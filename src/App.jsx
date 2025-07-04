import React from 'react';
import './App.scss';


import Header from './header/header.jsx';
import Introduction from './introduction-sentence/introduction.jsx';
import ProjectsCard from './project in progress/projects-card.jsx';
import Home from './pages/Home.jsx';
import Footer from './footer/footer.jsx';


const App = () => {
  return (
    <div className="app">
      <Header />
      <Introduction />
      <Home />
      <Footer />
    </div>
  );
};

export default App;