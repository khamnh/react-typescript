import * as React from 'react';
import './style.scss';

export namespace Header {
  export interface Props {

  }
}

export class Header extends React.Component {
  render() {
    return (
      <header>
        <div className='header'>header</div>
      </header>
    );
  }
}
