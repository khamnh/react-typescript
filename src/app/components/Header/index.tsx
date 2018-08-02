import * as React from 'react';
import { TodoActions } from 'app/actions/todos';
import * as style from './style.css';

export namespace Header {
  export interface Props {
    addTodo: typeof TodoActions.addTodo;
  }
}

export class Header extends React.Component {
  render() {
    return (
      <header>
        <div className={style.header}>header</div>
      </header>
    );
  }
}
