import * as React from 'react';
import * as style from './style.css';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps, Route, Switch } from 'react-router';
import { TodoActions } from 'app/actions';
import { RootState } from 'app/reducers';
import { TodoModel } from 'app/models';
import { omit } from 'app/utils';
import Contract from 'app/containers/Contracts';
import Library from 'app/containers/Library';
import Client from 'app/containers/Clients';
import Inbox from 'app/containers/Inbox';
import Account from 'app/containers/Account';
// import { Header, TodoList, Footer, SideBar } from 'app/components';
import { Header, SideBar, Footer } from 'app/components';

const FILTER_VALUES = (Object.keys(TodoModel.Filter) as (keyof typeof TodoModel.Filter)[]).map(
  (key) => TodoModel.Filter[key]
);

// const FILTER_FUNCTIONS: Record<TodoModel.Filter, (todo: TodoModel) => boolean> = {
//   [TodoModel.Filter.SHOW_ALL]: () => true,
//   [TodoModel.Filter.SHOW_ACTIVE]: (todo) => !todo.completed,
//   [TodoModel.Filter.SHOW_COMPLETED]: (todo) => todo.completed
// };

export namespace App {
  export interface Props extends RouteComponentProps<void> {
    todos: RootState.TodoState;
    actions: TodoActions;
    filter: TodoModel.Filter;
  }
}

@connect(
  (state: RootState): Pick<App.Props, 'todos' | 'filter'> => {
    const hash = state.router.location && state.router.location.hash.replace('#', '');
    const filter = FILTER_VALUES.find((value) => value === hash) || TodoModel.Filter.SHOW_ALL;
    return { todos: state.todos, filter };
  },
  (dispatch: Dispatch): Pick<App.Props, 'actions'> => ({
    actions: bindActionCreators(omit(TodoActions, 'Type'), dispatch)
  })
)
export class App extends React.Component<App.Props> {
  render() {

    return (
      <div className={style.normal}>
        <Header />
        <SideBar />
        <div className={style.content}>
          <Switch>
            <Route path='/contracts' component={Contract} />
            <Route path='/clients' component={Client} />
            <Route path='/library' component={Library} />
            <Route path='/inbox' component={Inbox} />
            <Route path='/account' component={Account} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}
