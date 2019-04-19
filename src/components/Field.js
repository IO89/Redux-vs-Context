import React from 'react';
import LibraryContext from '../contexts/LibraryContext';

class Field extends React.Component {
  static contextType = LibraryContext;

  render() {
    const text = this.context.library === 'redux'? 'Yaaay Redux':'Ok, Context';
    return(
      <div className="ui field">
        <label>{text}</label>
        <input/>
      </div>

    );
  }
}

export default Field;