import React from 'react';
import { shallow } from 'enzyme'
import Card from './Card';

describe('Card', () => {
  let wrapper
  // const mockFn = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Card
      id = "1"
      name = "Jeannie"
      date = "6/30"
      time = "7:30"
      number = "3"
    />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

 })