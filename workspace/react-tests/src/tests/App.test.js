import { render, screen } from '@testing-library/react';
import App from '../App';

import { mount} from 'enzyme'; 

describe('testing my first app', () => {

  let wrapper ; 
  beforeEach(() => {
    wrapper = mount(<App />);
  })

  test("To check the string on the page First Test React App", () => {
    expect(wrapper.find("h2").text()).toContain("First Test React App"); 
  })

  test("To check the string on the page First Test React App with render", () => {
   
    // same thing can be done with render 
    const h2Element = render(<App />).getByText("First Test React App"); 
    expect(h2Element).toBeInTheDocument(); 
  })

  test("To render a increment button in the app component", () => {
    expect(wrapper.find("#incr-btn").text()).toBe("Increment");
  })

  test("To render a decrement  button in the app component", () => {
    expect(wrapper.find("#decr-btn").text()).toBe("Decrement");
  })

  test("To check initial value of count", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0");
  })

  test("To increment the value of counter and validate", () => {
    wrapper.find("#incr-btn").simulate('click');
    expect(wrapper.find("#counter-value").text()).toBe("1");
  })


  test("to decrement the value of counter at initial loading ", ()=> {
    wrapper.find("#decr-btn").simulate('click'); 
    expect(wrapper.find("#counter-value").text()).toBe("-1"); 
  })



  describe('to increment and decrement the value of counter', () => {
      test("to increment and decrement the value of count " , () => {

        // get initial value 
        expect(wrapper.find("#counter-value").text()).toBe("0");
        // increment & validate 
        wrapper.find("#incr-btn").simulate('click');
        expect(wrapper.find("#counter-value").text()).toBe("1");
        // decrement & validate 
        wrapper.find("#decr-btn").simulate('click'); 
        wrapper.find("#decr-btn").simulate('click'); 
        expect(wrapper.find("#counter-value").text()).toBe("-1"); 
      })
  })
  




})


