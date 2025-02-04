
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PublicationTypeLoad from 'components/PublicationTypeLoad';
import  PublicationLoad  from 'components/PublicationLoad';
import TopHeader from 'components/TopHeader';
import AddPublication from 'actions/AddPublicationButton';
//Vytvořit button, modal na přidání publikací, autory tam přidávat nebudeme, maximálně že bychom nějak využili ty komponenty co už máme
function App() {
  return (
    <div className="App">
      <TopHeader/>
      <AddPublication/>
      <PublicationTypeLoad/>
      <PublicationLoad/>
    </div>
  );
}

export default App;
