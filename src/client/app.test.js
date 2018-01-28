import App from './app';
import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.find('div').text()).toBe('Welcome to React Boilerplate App')
    expect(wrapper).toMatchSnapshot()
  })
})