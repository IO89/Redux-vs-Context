import React from 'react';
import LibraryContext from '../contexts/LibraryContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  renderSubmit(library) {
    return library === 'redux' ? 'Yayy Redux' : 'Ok,Context';
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LibraryContext.Consumer>
          {({library}) => this.renderSubmit(library)}
        </LibraryContext.Consumer>
      </button>
    )
  }

  render() {
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;


