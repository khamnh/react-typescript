import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Header } from '../app/components/Header';

let child: ShallowWrapper<undefined, undefined>;
beforeEach(() =>
  child = shallow(<Header />)
);
// checking that all is fine and component has been rendered
it('should render without error', () => {
  expect(child.length).toBe(1);
});
