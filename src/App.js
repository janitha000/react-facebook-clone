import React from 'react';
import './App.css';

import Header from './components/header/Header'
import SideBar from './components/sidebar/Sidebar'
import Feed from './components/feed/Feed'
import Widget from './components/widgets/Widget'
import Login from './components/login/Login'
import { useStateValue } from './StateProvider';

const App = () => {
  const [{ user }, dispath] = useStateValue();
  return (

    <div className="App">
      {!user ? (<Login />) : (
        <>
          <Header />
          <div className="app__body">
            <SideBar />
            <Feed />
            <Widget />
          </div>
        </>
      )}

    </div>
  );
}

export default App;
