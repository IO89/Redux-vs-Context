import React from 'react';

const Context = React.createContext('finnish');

export class LibraryStore extends React.Component {
  state = {library: 'redux'};

  onLibraryChange = (library) => {
    this.setState({library});
  };

  render() {
    return (
      <Context.Provider value={{...this.state, onLibraryChange:this.onLibraryChange}}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;