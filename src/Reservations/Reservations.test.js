import React from 'react';
import { shallow } from 'enzyme'
import Reservations from './Reservations';

describe('Reservations', () => {
  let wrapper
  // const mockFn = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Reservations reservations= {
      [
        {
          id: 18907224, 
          name: 'Christie', 
          date: '8/8', 
          time: '7:00', 
          number: 3 
        }
      ]
    }
    />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

 })