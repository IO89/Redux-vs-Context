import React from 'react';
import LibraryContext from '../contexts/LibraryContext';

class LibrarySelector extends React.Component {
  static contextType = LibraryContext;

  render() {
    return (
      <div>
        Select Redux or Context:
        <i className="magic icon" onClick={() => this.context.onLibraryChange('redux')}/>
        <i className="star icon" onClick={() => this.context.onLibraryChange('context')}/>
      </div>
    );
  }
}

export default LibrarySelector;