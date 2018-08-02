import * as React from 'react';
import * as style from './style.css';
import { TodoModel } from 'app/models';

export const FILTER_TITLES = {
  [TodoModel.Filter.SHOW_ALL]: 'All',
  [TodoModel.Filter.SHOW_ACTIVE]: 'Active',
  [TodoModel.Filter.SHOW_COMPLETED]: 'Completed'
};

export namespace Footer {
  export interface Props {
    filter: TodoModel.Filter;
    activeCount?: number;
    completedCount?: number;
    onClickFilter: (filter: TodoModel.Filter) => any;
    onClickClearCompleted: () => any;
  }
}

export class Footer extends React.Component {
  render() {
    return (
      <footer className={style.normal}>
        <div>This project is licensed under the MIT license.</div>
      </footer>
    );
  }
}
