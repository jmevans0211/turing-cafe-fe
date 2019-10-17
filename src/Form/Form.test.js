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
    const mockEvent = { 
      target: { 
        name: 'name', 
        value: 'Travis'
      }
    };
    const expected = 'Travis';
  
    expect(wrapper.state('name')).toEqual('');

    wrapper.instance().handleChange(mockEvent);
  
    expect(wrapper.state('name')).toEqual(expected);
  });

  it('should update date when handleChange is being called', () => {
    const mockEvent = { 
      target: { 
        name: 'date', 
        value: '10/31'
      }
    };
    const expected = '10/31';
  
    expect(wrapper.state('date')).toEqual('');

    wrapper.instance().handleChange(mockEvent);
  
    expect(wrapper.state('date')).toEqual(expected);
  });

  it('should update date when handleChange is being called', () => {
    const mockEvent = { 
      target: { 
        name: 'time', 
        value: '3:30'
      }
    };
    const expected = '3:30';
  
    expect(wrapper.state('time')).toEqual('');

    wrapper.instance().handleChange(mockEvent);
  
    expect(wrapper.state('time')).toEqual(expected);
  });

});



