import React from 'react';
import UserCreate from './UserCreate';
import {LibraryStore} from '../contexts/LibraryContext';
import ColorContext from '../contexts/ColorContext';
import LibrarySelector from './LibrarySelector';

class App extends React.Component {

  render() {
    return (
      <div className="ui container">
        <LibraryStore>
          <LibrarySelector/>
          <ColorContext.Provider value='red'>
            <UserCreate/>
          </ColorContext.Provider>
        </LibraryStore>
      </div>
    );
  }
}

export default App;