import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react'
import{shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import fetchMock from 'fetch-mock'
import UserUI from "../../../client/src/components/Users/userUI";
import Registration from "./components/registration";

//jest snapshot
describe('APP component',()=>{
  it('matches the snapshot of app component',()=>{
    const tree =renderer.create(<App/>).toJSON

    //expect
    expect(tree).toMatchSnapshot()
  })
})
const url="dsdsd"
const dummyUser={
  name:"sdsdd"
}


// API FETCH TEST
/*
descripe('GET VALUE FROM USER ID'),()=>{
  it('shows the name of the user after fetched ',async ()=>{
     fetchMock.getOnce(url,{
       status:200,
       body:dummyUser
     })
    const wrapper = shallow(<UserUI id={1}/>)
    await nextTick()
    expect(wrapper.find('p').first).toEqual(dummyUser.name)

  })
})
*/

//CHECK INITIAL VALUE OF THE FORM
describe(' CHECK INTIAL VALUES OF FORM',()=>{
  it('has initial value as empty VALUE',()=>{
    const wrapper =<Registration/>
    const name=wrapper.find('input').first
    expect(name.props().value).toEqual('')
    const email=wrapper.find('input').second
    expect(email.props().value).toEqual('')

  })
})


//CHECK ONCHANGE VALUE
const simulateChangeOnInput =(wrapper1,inputSelector,newValue)=>{
  const input =wrapper1.find(inputSelector)
  input.simulate('change',{
    target:{
      value:newValue
    }
  })
  return wrapper1.find(inputSelector)

}
describe('CHECK VALUE ON ONCHANGE IN REGISTRATION FORM',()=>{
  it("check the updated value onchange",()=>{
    const wrapper1 = shallow(<Registration/>)
    let nameInput=wrapper1.find('input').first
    const updatedNameInput =simulateChangeOnInput(wrapper1,'input#name','suman')
    expect(updatedNameInput.props().value).toEqual("suman")
  })

})