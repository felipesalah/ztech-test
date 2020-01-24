import React from 'react';
import App from '../src/components/App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchBar from '../src/components/SearchBar';

Enzyme.configure({ adapter: new Adapter() })

describe('App component', () => {

  it('renders SearchBar component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<SearchBar />)).toBe(true);
  })
});