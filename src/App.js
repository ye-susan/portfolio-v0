import React from 'react';
import './App.scss';
import NavBar from './components/nav/nav.component';
import SectionContainer from './components/section-container/sectioncontainer.component';

class App extends React.Component {
  constructor (props) {
    super(props) 
    
  } 
  render(){
    return (
      <div className="portfolio">
        <NavBar/>
        <SectionContainer />
      </div>
    );
  }   
};

export default App;
