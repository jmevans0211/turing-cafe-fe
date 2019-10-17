import React from 'react';
import { shallow } from 'enzyme'
import Form from './Form';


describe('Form', () => {
  let wrapper
  const mockAddReservation = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Form addReservation={mockAddReservation} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update name when handleChange is being called', () => {
    // Setup
    const mockEvent = { 
      target: { 
        name: 'name', 
        value: 'Travis'
      }
    };
    const expected = 'Travis';
  
    // Expectation
    expect(wrapper.state('name')).toEqual('');

  
    // Execution
    wrapper.instance().handleChange(mockEvent);
  
    // Expectation
    expect(wrapper.state('name')).toEqual(expected);
  });
});



// describe('Form', () => {
// });